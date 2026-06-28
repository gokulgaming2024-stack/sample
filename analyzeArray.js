export function analyzeArray(array) {
  // Calculate average
  const sum = array.reduce((acc, num) => acc + num, 0);
  const average = sum / array.length;

  // Find min and max
  const min = Math.min(...array);
  const max = Math.max(...array);

  // Get length
  const length = array.length;

  return {
    average,
    min,
    max,
    length
  };
}
