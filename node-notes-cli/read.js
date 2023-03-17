import { readFile } from 'node:fs/promises';

const data = async () => {
  const json = JSON.parse(await readFile('./data.json'));
  for (const property in json.notes) {
    console.log(`${property}: ${json.notes[property]}`);
  }
};
export default data;
