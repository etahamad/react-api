import axios from 'axios';

const BASE_URL = 'https://etahamad-new-plant-disease-detection.hf.space/run/predict';

export const sendRequest = async (requestData) => {
  try {
    const response = await axios.post(BASE_URL, requestData);
    return response.data;
  } catch (error) {
    console.error('Error:', error.message);
    throw new Error('An error occurred while sending the request');
  }
};
