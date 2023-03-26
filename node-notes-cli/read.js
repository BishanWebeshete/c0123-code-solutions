import { readFile } from 'node:fs/promises';

const data = async () => {
  try {
    const json = JSON.parse(await readFile('./data.json'));
    for (const property in json.notes) {
      console.log(`${property}: ${json.notes[property]}`);
    }
  } catch (err) {
    console.error(err.message);
  }
};
export default data;
