export const generateRandomNumber = (max: number) => {
  const result  = Math.floor(Math.random() * Number(max)) + 1;
  return result;
};
