PROBLEM:

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)

MY SOLUTION:

function solution(number){
  let z = []
  for (let i = 3; i < number; i = i + 3) {
    z.push(i)
  }
  let y = []
  for (let j = 5; j < number; j = j + 5) {
    y.push(j)
  }
  return [...new Set(z.concat(y))].reduce( (a,b) => a + b, 0)
}

MY SECOND SOLUTION:

function solution(number){
  let sum = 0
  
  for( let i = 0; i < number; i++) {
    if(i % 3 === 0 || i % 5 === 0) { sum += i}
  }
  
  return sum
}
