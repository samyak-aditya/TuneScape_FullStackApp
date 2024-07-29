import axios from 'axios';

const artistData = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/artists/',
  params: {
    ids: '2w9zwq3AktTeYYMuhMjju8,5xkqotsRPu6KQ4PiWjSGQf,40Hr91B6wn9pO83Gj0JMrP,3t8WiyalpvnB9AObcMufiE,0wnYgCeP013HkKoOyC5V32,7E3BRXV9ZbCt5lQTCXMTia,4zTPXx27j9bFvcnui3sRNI,2qgvmDsc4jrqbAbjq1HGM2'
  },
  headers: {
    'X-RapidAPI-Key': process.env.RAPIDAPI,
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
