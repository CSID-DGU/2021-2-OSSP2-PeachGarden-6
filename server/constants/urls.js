const apiUrl = '/api';

const API_URL_MAIN = `${apiUrl}`;
const API_URL_SEARCH = `${apiUrl}/search`;
const API_URL_RANK = `${apiUrl}/rank`;

const urlSet = {
  mainPage: `${API_URL_MAIN}`,
  leaderboard: `${API_URL_RANK}/leaderboard`,
  topThree: `${API_URL_RANK}/topThree`,
  waa: `${API_URL_RANK}/waa`,
  searchPlayer: `${API_URL_SEARCH}`,
}

module.exports = { urlSet };