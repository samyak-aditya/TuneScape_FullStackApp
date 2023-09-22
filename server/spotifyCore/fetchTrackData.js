import axios from 'axios';

const fetchTrackData = async () => {
  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/tracks/',
    params: {
      ids: '4WNcduiCmDNfmTEz7JvmLv'
    },
    headers: {
      'X-RapidAPI-Key': 'c65a67def3mshc766b01ca33f075p16e14djsnd26fab923ee7',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Call the fetchData function
export default fetchTrackData;
