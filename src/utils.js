export const findObject = (arr, key, val) => {
  let result = arr.filter(item => {
    return item[key] === val;
  });
  return result;
};
export const isMobile = /mobile/i.test(navigator.userAgent);
