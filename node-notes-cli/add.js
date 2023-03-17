import { writeFile, readFile } from 'node:fs/promises';

const add = async () => {
  const json = JSON.parse(await readFile('data.json'));
  json.notes[json.nextId] = process.argv[3];
  json.nextId++;
  await writeFile('data.json', JSON.stringify(json, null, 2), (err) => {
    if (err) throw err;
  });
};
export default add;
