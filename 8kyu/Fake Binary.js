// MY FIRST SOLUTION:

function fakeBin(x){
    let z = []
    let array = x.split('')
    for(let i = 0; i < array.length; i++) {
      array[i] < 5 ? z.push(0) : z.push(1)
    }
  return z.join('')
}

// MY SECOND SOLUTION:

function fakeBin(x){
  return x.split('').map( i => i < 5 ? 0 : 1).join('')
}
