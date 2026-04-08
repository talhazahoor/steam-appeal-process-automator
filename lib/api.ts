import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.steampowered.com',
});

export const submitAppeal = async (appealReason: string) => {
  console.log('Submitting appeal to Steam API:', appealReason);
  // TODO: Call Steam API to submit appeal
};