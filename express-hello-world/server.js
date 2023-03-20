import express from 'express';
const app = express();

app.use((req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.method);
  res.send('hello world');
});

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 8080');
});
