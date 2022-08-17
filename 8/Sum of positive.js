function positiveSum(arr) {
  return arr.filter(arr => arr > 0).reduce( (a,b) => a + b, 0)
}

function positiveSum(arr) {
  return arr.reduce( (a,b) => a + (b > 0 ? b : 0), 0)
}
