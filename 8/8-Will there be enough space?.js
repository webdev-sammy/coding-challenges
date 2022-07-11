function enough(cap, on, wait) {
  let remainingPassengers = on + wait - cap
  return remainingPassengers > 0 ? remainingPassengers : 0
}
