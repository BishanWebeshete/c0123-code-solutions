import { writeFile, readFile } from 'node:fs/promises';

const remove = async () => {
  try {
    const json = JSON.parse(await readFile('./data.json'));
    delete json.notes[process.argv[3]];
    await writeFile('data.json', JSON.stringify(json, null, 2));
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
export default remove;
