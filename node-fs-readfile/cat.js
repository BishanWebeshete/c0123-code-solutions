import { readFile } from 'node:fs/promises';

const target = process.argv.slice(2);

const result = target.map((x) => readFile(x, { encoding: 'utf8' }));

Promise.all(result).then((contents) => console.log(contents.join('\n')))
  .catch((error) => console.log(error.message));
