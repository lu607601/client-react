export const findObject = (arr, key, val) => {
  let result = arr.filter(item => {
    return item[key] === val;
  });
  return result;
};
