export const sortByDate = (a, b) => new Date(b.date) - new Date(a.date);

export const sortByName = (a, b) => {
  if (a.value < b.value) {
    return -1;
  }
  if (a.value > b.value) {
    return 1;
  }
  return 0;
};