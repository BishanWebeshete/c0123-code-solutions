import express from 'express';
import pg from 'pg';
const app = express();

app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
    select *
      from "grades"
    `;
    const result = await db.query(sql);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occured' });
  }
});

app.post('/api/grades', async (req, res) => {
  try {
    if (!req.body.name || !req.body.course || !req.body.score || req.body.score < 0 || req.body.score > 100) {
      res.status(400).json({ error: 'missing name, course, or score | score must be a positive integer between 0-100' });
      return;
    }
    const sql = `
    insert into "grades" ("name", "course", "score")
        values ($1, $2, $3)
      returning *
    `;
    const params = [req.body.name, req.body.course, req.body.score];
    const result = await db.query(sql, params);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occured' });
  }
});

app.put('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!req.body.name || !req.body.course || !req.body.score || gradeId < 0 || !Number.isInteger(gradeId)) {
      res.status(400).json({ error: 'missing name, course, or score | score must be a positive integer between 0-100 | must have valid gradeId' });
      return;
    }
    const sql = `
      update "grades"
        set "name" = $1,
          "course" = $2,
          "score" = $3
        where "gradeId" = $4
        returning *
    `;
    const params = [req.body.name, req.body.course, req.body.score, gradeId];
    const result = await db.query(sql, params);
    const updatedGrade = result.rows[0];
    if (!updatedGrade) {
      res.status(404).json({ error: 'updated grade not found' });
    } else {
      res.status(200).json(updatedGrade);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occured' });
  }
});

app.delete('/api/grades/:gradeId', async (req, res) => {
  const gradeId = Number(req.params.gradeId);
  try {
    if (!gradeId) {
      res.status(400).json({ error: 'invalid grade ID' });
    }
    const sql = `
    delete from "grades"
      where "gradeId" = $1
      returning *;
  `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const deletedGrade = result.rows[0];
    if (!deletedGrade) {
      res.status(404).json({ error: 'deleted grade not found' });
    } else {
      res.status(204).json(deletedGrade);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occured' });
  }
});

app.listen(8080, () => {
  console.log('server listening on 8080');
});
