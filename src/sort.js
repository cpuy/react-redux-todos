export const sortByDate = (a, b) => new Date(b.date) - new Date(a.date);

export const sortByName = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};