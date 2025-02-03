import axios from 'axios';

const api = axios.create({
  baseURL: 'https://poke-quiz-9cb315e1daf1.herokuapp.com/api',
});

export const postScore = async (calculatedScore: number, quiz_id: number) => {
  try {
    const response = await api.post('/post', {
      calculatedScore: calculatedScore,
      quiz_id: quiz_id,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getScore = async () => {
  try {
    const response = await api.get('/get');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
