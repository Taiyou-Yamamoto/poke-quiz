import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAllPokemons = async (): Promise<any> => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

  await axios
    .get(url)
    .then(function (response) {
      // 処理が成功した場合
      return response.data;
    })
    .catch(function (error) {
      // エラー処理
      console.log(error);
    });
};
