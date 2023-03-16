import * as fs from 'node:fs';

fs.readFile('./dijkstra.txt', (err, data) => {
  if (err) throw err;
  console.log(`${data}`);
});
