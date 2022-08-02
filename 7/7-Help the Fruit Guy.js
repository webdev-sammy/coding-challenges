function removeRotten(bagOfFruits){
return bagOfFruits ? bagOfFruits.map( x => x.replace('rotten','').toLowerCase() ) : []                
}

// writing bagOfFruits before ? is good enough, because it will be accepted
// as a boolean value
