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
    'X-RapidAPI-Key': 'ff1059d208msh120eaa6f5814c97p1e55a2jsna7f8489ef3a4',
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
