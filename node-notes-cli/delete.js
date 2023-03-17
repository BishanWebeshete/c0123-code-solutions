import { writeFile, readFile } from 'node:fs/promises';

const remove = async () => {
  const json = JSON.parse(await readFile('./data.json'));
  delete json.notes[process.argv[3]];
  await writeFile('data.json', JSON.stringify(json, null, 2), (err) => {
    if (err) throw err;
  });
};
export default remove;
