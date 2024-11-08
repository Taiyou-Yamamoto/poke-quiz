export const audioPlay = (se: string) => {
  const audio = new Audio(se);
  audio.play().catch((error) => console.log(error));
};
