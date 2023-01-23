The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
  let count = {}
  string.split('').forEach(x => count[x] ? count[x]++ : count[x] = 1)
  return count
}
