export const valueExtractor = ({data, key}) => {
  return data.map((item, index) => item[key]);
}