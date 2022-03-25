import React, { useEffect, useState } from 'react';
import {APIService} from '../Services/api';
import { isEmpty } from 'lodash';

const Home= () => {
  let [responseData, setResponseData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    APIService.axiosCall('http://localhost:1111/collection?name=Person', {
      method: 'GET',
      successCallBack: (resp) => handleResponse(resp)
    })
  }

  const handleResponse = (response) => {
    setResponseData(response.data);
  }

  return (
    <div >Welcome Home!
      {
        !isEmpty(responseData) && responseData.map((data, i) =>  (
          <div key={i}>
            {data.firstName} {' '}{data.lastName}
          </div>))
      }
    </div>
  );
}

export default Home;