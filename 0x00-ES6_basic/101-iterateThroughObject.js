export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const item of reportWithIterator) {
    result += `${item} | `;
  }

  // Remove the trailing ' | ' characters
  result = result.slice(0, -3);

  return result;
}
