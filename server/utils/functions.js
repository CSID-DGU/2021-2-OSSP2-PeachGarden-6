const { spawn } = require('child_process');

export const valueExtractor = ({data, key}) => {
  return data.map((item, index) => item[key]);
}