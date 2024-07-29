import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/recommendations/',
  params: {
    limit: '10',
    seed_tracks: '0c6xIDDpzE81m2q797ordA',
    seed_artists: '4NHQUGzhtTLFvgF5SZesLK',
    seed_genres: 'pop'
  },
  headers: {
    'X-RapidAPI-Key': process.env.RAPIDAPI,
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

const fetchDiscoverData = async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data
  } catch (error) {
    console.error(error);
  }
};

export default fetchDiscoverData;