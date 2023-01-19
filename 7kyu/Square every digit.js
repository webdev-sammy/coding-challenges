function squareDigits(num){
 let arr = Array.from(String(num))
 let z = []
 for (let i = 0; i < arr.length; i++) {
   z.push(arr[i] * arr[i]);
 }
   return parseFloat(z.join(''))
}
