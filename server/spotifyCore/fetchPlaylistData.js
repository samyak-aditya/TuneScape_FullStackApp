import axios from 'axios';

// Function to fetch playlist data
const fetchPlaylistData = async () => {
  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/album_tracks/',
  params: {
    id: '3IBcauSj5M2A6lTeffJzdv',
    offset: '0',
    limit: '300'
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