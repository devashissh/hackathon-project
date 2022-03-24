import React, { useEffect, useState } from 'react';
import {APIService} from '../Services/api';

const Home= () => {
  let [responseData, setResponseData] = useState({});

  useEffect(() => {
    getData();
  });

  const getData = () => {
    APIService.axiosCall('https://run.mocky.io/v3/a3cbf73e-d76c-4c27-b5ba-9d31fc3fe3eb', {
      method: 'GET',
      successCallBack: (resp) => handleResponse(resp)
    })
  }

  const handleResponse = (data) => {
    setResponseData(data);
  }

  return (
    <div >Welcome Home!
      {responseData && <span>
        {responseData.statusText}  
      </span>}
    </div>
  );
}

export default Home;