import axios from 'axios';

const fetchAlbumData = async () => {
  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/albums/',
    params: {
      ids: '3IBcauSj5M2A6lTeffJzdv'
    },
    headers: {
      'X-RapidAPI-Key': 'c65a67def3mshc766b01ca33f075p16e14djsnd26fab923ee7',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    console.log("---|-------|------|-------|--------|--------|-----");
    return response.data; // Return the fetched data
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error for handling in the caller
  }
};

export default fetchAlbumData;
