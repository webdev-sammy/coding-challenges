Description:

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.



function removeChar(str){
  let array = str.split('')
  array.shift()
  array.pop()
  return array.join('')
};



function removeChar(str){
  return str.slice(1, -1) // you can use the slice methods on strings
};


