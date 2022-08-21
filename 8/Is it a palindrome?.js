function isPalindrome(x) {
  return x.split('').reverse('').join('').toLowerCase() === x.toLowerCase()
}

const isPalindrome = x =>  x.split('').reverse('').join('').toLowerCase() === x.toLowerCase()
