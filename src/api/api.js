import axios from 'axios';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '94307d818fb5eba738a6d0748a8a46fd';

const searchWeather = async value => {
  if (!value) {
    return;
  }
  try {
    const { data } = await axios.get(
      `${BASE_URL}?q=${value}&lang=uk&appid=${API_KEY}`
    );
    return data;
  } catch (error) {
    return console.log(error.message);
  }
};

export default searchWeather;
