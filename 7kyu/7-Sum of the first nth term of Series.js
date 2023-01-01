function SeriesSum(n)
{
  let x = 0
  for (let i = 0; i < n; i++) {
    x += 1 / (1 + 3 * i)
  }
  return x.toFixed(2)
}
