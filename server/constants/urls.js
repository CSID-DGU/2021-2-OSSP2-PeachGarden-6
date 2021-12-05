const apiUrl = '/api';

const API_URL_MAIN = `${apiUrl}`;
const API_URL_SEARCH = `${apiUrl}/search`;
const API_URL_RANK = `${apiUrl}/rank`;
const API_URL_STYLE = `${apiUrl}/style`;
const API_URL_TEAM = `${apiUrl}/team`;
const API_URL_COMPARE = `${apiUrl}/compare`;
const API_URL_PYTHON = `${apiUrl}/python`;

const urlSet = {
  mainPage: `${API_URL_MAIN}`,
  leaderboard: `${API_URL_RANK}/leaderboard`,
  topThree: `${API_URL_RANK}/topThree`,
  waa: `${API_URL_RANK}/waa`,
  searchPlayer: `${API_URL_SEARCH}`,
  style: `${API_URL_STYLE}`,
  team: `${API_URL_TEAM}`,
  color: `${API_URL_TEAM}/color`,
  compare: `${API_URL_COMPARE}`,
  scatter: `${API_URL_PYTHON}/scatter`,
}

module.exports = { urlSet };