import axios from 'axios';

const artistData = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/artists/',
  params: {
    ids: '2w9zwq3AktTeYYMuhMjju8'
  },
  headers: {
    'X-RapidAPI-Key': 'c65a67def3mshc766b01ca33f075p16e14djsnd26fab923ee7',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

const fetchArtistData = async () => {
  try {
    const response = await axios(artistData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchArtistData;
