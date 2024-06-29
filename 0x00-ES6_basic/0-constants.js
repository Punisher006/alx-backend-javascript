export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

import { getLast } from './0-main.js';  // Assuming getLast() is imported from the correct module
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
