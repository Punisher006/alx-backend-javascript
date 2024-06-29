// File: 0-constants.js

export function taskFirst() {
  const task = 'I prefer const when I can.';
  const ending = getLast();
  return `${task} ${ending}`;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  const ending = getLast();
  combination += ending;

  return combination;
}
