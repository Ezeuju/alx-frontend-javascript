// function cleanSet(set, startString) {
//   const filteredValues = [...set].filter((value) => value.startsWith(startString));
//   return filteredValues.join('-');
// }

// export default cleanSet;
export default function cleanSet(set, startString) {
  const list = [];

  if (
    typeof set !== 'object'
      || typeof startString !== 'string'
      || startString.length === 0
  ) {
    return '';
  }

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      list.push(item.slice(startString.length));
    }
  }

  return list.join('-');
}
