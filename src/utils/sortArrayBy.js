function sortArrayBy(array, sortBy) {
  return array.sort((a, b) => a[sortBy] - b[sortBy]);
}

export default sortArrayBy;
