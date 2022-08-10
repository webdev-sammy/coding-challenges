
function reverseWords(str) {
  let z = []
  let array = str.split(' ')
  for( let i = 0; i < str.split(' ').length; i++) {
    z.push(array[i].split('').reverse().join(''))
  }
  return z.join(' ')
}

function reverseWords(str) {
   return str.split(' ').map( word => word.split('').reverse().join('') ).join(' ')
}
