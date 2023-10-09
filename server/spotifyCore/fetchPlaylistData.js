import axios from 'axios';

// Function to fetch playlist data
const fetchPlaylistData = async () => {
  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/album_tracks/',
  params: {
    id: '3IBcauSj5M2A6lTeffJzdv',
    offset: '0',
    limit: '10'
  },
    headers: {
      'X-RapidAPI-Key': '09d25e7fcemsh171e05e287aec71p1fd9d4jsn1cae0ef0b5eb',
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