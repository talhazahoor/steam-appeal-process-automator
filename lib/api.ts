import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.steam.com/',
});

export const getBanReason = async () => {
  const response = await api.get('ISteamUser/GetBanReason/v1/');
  return response.data;
};