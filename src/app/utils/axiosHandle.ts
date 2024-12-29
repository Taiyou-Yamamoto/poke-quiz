import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});

export const postScore = async (calculatedScore: number, quiz_id: number) => {
  try {
    const response = await api.post('post', {
      calculatedScore: calculatedScore,
      quiz_id: quiz_id,
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.log(error);
  }
};

export const getScore = async () => {
  try {
    const response = await api.get('get');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
