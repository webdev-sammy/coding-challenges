function points(games) {
  let z = []
  for( let i = 0; i < games.length; i++) {
    if(games[i][0] > games[i][2]) z.push(3)
    else if(games[i][0] < games[i][2]) z.push(0)
    else z.push(1)
  }
  return z.reduce( (a,b) => a + b, 0)
}

function points(games) {
  return games.map(pointCounter).reduce( (a,b) => a + b, 0)
}

function pointCounter(x) {
  if(x[0] > x[2]) return 3
  else if(x[0] < x[2]) return 0
  else return 1
}