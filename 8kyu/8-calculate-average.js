function find_average(array) {
  if(!array.length) {
    return 0
  }
  else return array.reduce((a, b) => a + b, 0) / array.length;
}