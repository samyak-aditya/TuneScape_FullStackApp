import axios from 'axios';

const fetchTrackData = async () => {
  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/tracks/',
    params: {
      ids: '4WNcduiCmDNfmTEz7JvmLv,4xFUf1FHVy696Q1JQZMTRj,3lec3CzDPAxsZokPph5w87,0XXkQk83TjaGoPndxWLHKr,5ykXsKJqx0GE0dsogxjylG,3sO3HX4EP1jS9rZW9OvHCN,7B6m8tHAYZsOKOKMU5SR2n'
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
