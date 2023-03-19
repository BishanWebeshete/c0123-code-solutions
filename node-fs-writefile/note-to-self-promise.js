import { writeFile } from 'node:fs/promises';

try {
  const data = (process.argv[2] + '\n');
  await writeFile('note.txt', data);
} catch (err) {
  console.error(err);
}
