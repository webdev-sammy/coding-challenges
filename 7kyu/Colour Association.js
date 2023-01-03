function colourAssociation(array){
  return array.map( ([key, value]) => ({[key]: value}) )
}

function colourAssociation(array){
  return array.map( x => ({[x[0]]: x[1]}) )
}
