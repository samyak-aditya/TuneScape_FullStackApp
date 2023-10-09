import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/podcast_episodes/',
  params: {
    id: '0ofXAdFIQQRsCYj9754UFx',
    offset: '0',
    limit: '5'
  },
  headers: {
    'X-RapidAPI-Key': '09d25e7fcemsh171e05e287aec71p1fd9d4jsn1cae0ef0b5eb',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

async function fetchPodcastData() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data
    
  } catch (error) {
    console.error(error);
  }
}

export default fetchPodcastData;
