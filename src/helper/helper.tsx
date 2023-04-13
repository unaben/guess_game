export const generateRandomNumber = (max: number) => {
  const result = Math.floor(Math.random() * max) + 1;
  return result;
};
