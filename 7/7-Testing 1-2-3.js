var number=function(array){
  return array.map( (n,i) => (i + 1) + ': ' + array[i])
}

var number=function(array){
  return array.map( (n,i) => `${i + 1}: ${array[i]}` )
}
