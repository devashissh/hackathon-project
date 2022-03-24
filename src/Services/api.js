import axios from 'axios';

const axiosCall = async (url, config) => {
  const XhrRes = await axios(url, config)
      .then(function(response) {
        response.config.successCallBack(response);
        return  response;
      })
      .catch(function(error) {
        console.log(error);
      });
  return XhrRes;
}

export const APIService = {
  axiosCall
};