import axios from "axios";

const particionesAPI = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const getParticiones = async () => {
  // const res = await particionesAPI.get('/particion')
  var config = {
    method: 'get',
    url: 'http://localhost:8000/particion',
    headers: { 
      'Content-Type': 'application/json', 
      'Accept': 'application/json'
    }
  };
  
  axios(config)
  .then(function (response) {
    console.log((response.data));
    var dataResponse = JSON.stringify(response.data)
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
  return res.data;
};
