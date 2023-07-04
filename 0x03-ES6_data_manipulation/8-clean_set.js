function cleanSet(set, startString) {
  const filteredValues = [...set].filter((value) => value.startsWith(startString));
  return filteredValues.join('-');
}

export default cleanSet;
