const { default: axios } = require("axios");
const { graphPathList, urlSet } = require("../constants/urls");

export const valueExtractor = ({ data, key }) => {
  return data.map((item, index) => item[key]);
};

export const clearImages = async() => {
  for await (const filePath of graphPathList) {
    await axios
      .put(urlSet.deleteFile, {
        filePath: filePath,
      })
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
