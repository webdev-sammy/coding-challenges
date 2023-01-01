function getCount(str) {
  let arr =  str.match(/[aeiou]/gi)
  return arr ? arr.length : 0
}