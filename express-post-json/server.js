import express from 'express';
const app = express();

let nextId = 1;

const grades = {

};

app.get('/api/grades', (req, res) => {
  res.json(Object.values(grades));
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  nextId++;
  res.status(201).send(grades);
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
