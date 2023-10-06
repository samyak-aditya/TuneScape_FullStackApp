import axios from 'axios';

const artistData = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/artists/',
  params: {
    ids: '2w9zwq3AktTeYYMuhMjju8,5xkqotsRPu6KQ4PiWjSGQf,40Hr91B6wn9pO83Gj0JMrP,3t8WiyalpvnB9AObcMufiE'
  },
  headers: {
    'X-RapidAPI-Key': 'ff1059d208msh120eaa6f5814c97p1e55a2jsna7f8489ef3a4',
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
