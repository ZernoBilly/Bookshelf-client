export const isInputValues = (obj: object) => {
  const isInputValues = Object.values(obj).some((value) => value === "");

  return !isInputValues;
};
