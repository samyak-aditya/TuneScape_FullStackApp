import axios from 'axios';

// Function to fetch playlist data
const fetchPlaylistData = async () => {
  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/playlist/',
    params: {
      id: '37i9dQZF1DX4Wsb4d7NKfP'
    },
    headers: {
      'X-RapidAPI-Key': 'c65a67def3mshc766b01ca33f075p16e14djsnd26fab923ee7',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchPlaylistData;