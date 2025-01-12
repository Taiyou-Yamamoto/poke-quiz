export const audioPlay = (se: string) => {
  const audio = new Audio(se);
  audio.volume = 0.2;
  audio.play().catch((error) => console.log(error));
};
