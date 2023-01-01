Your task is to sum the differences between consecutive pairs in the array in descending order.
Example

[2, 1, 10]  -->  9

In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
  let sum = 0
  let orderedArray = arr.sort((a,b) => a - b).reverse()
  for (let i = 0; i < orderedArray.length - 1; i++) {
    sum = sum + orderedArray[i] - orderedArray[i + 1]
  }
  return sum
}
