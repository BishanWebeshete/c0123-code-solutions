import { writeFile, readFile } from 'node:fs/promises';

const update = async () => {
  try {
    const json = JSON.parse(await readFile('data.json'));
    json.notes[process.argv[3]] = process.argv[4];
    await writeFile('data.json', JSON.stringify(json, null, 2));
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
export default update;
