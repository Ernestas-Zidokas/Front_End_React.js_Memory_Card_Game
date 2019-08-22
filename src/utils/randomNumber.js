function randomNumber(endNr, startNr) {
  if (startNr) {
    return Math.floor(Math.random() * endNr) + startNr;
  }
  return Math.floor(Math.random() * endNr);
}

export default randomNumber;
