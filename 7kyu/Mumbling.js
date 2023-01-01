function accum(s) {
  return s.split('').map( (n,i) => n.repeat(i+1)).map(n => n[0].toUpperCase() + n.slice(1).toLowerCase()).join('-')
} 
