import data from './read.js';
import add from './add.js';
import remove from './delete.js';
import update from './update.js';

try {
  if (process.argv[2] === 'read') {
    await data();
  } else if (process.argv[2] === 'add') {
    await add();
  } else if (process.argv[2] === 'delete') {
    await remove();
  } else if (process.argv[2] === 'update') {
    await update();
  } else {
    throw new Error('invalid operator');
  }
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
