import axios from "axios";

const fetchGenreData = async () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/genre_view/',
      params: {
        id: '0JQ5DAqbMKFEC4WFtoNRpw',
        content_limit: '10',
        limit: '20'
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
  
  export default fetchGenreData