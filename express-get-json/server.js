import express from 'express';
const app = express();

app.get('/api/grades', (req, res) => {
  res.json(Object.values(grades));
});

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 8080');
});
