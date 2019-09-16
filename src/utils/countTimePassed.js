function countTimePassed(currentTime, startTime) {
  if (typeof currentTime !== 'number' && typeof startTime !== 'number') {
    return 0;
  }

  if (Boolean(currentTime) == false || Boolean(startTime) == false) {
    return 0;
  }

  if (Math.sign(currentTime) === -1 || Math.sign(startTime) === -1) {
    return 0;
  }

  if (currentTime < startTime) {
    return 0;
  }

  return Math.floor((currentTime - startTime) / 1000);
}

export default countTimePassed;
