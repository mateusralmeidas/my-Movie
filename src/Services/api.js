import axios from 'axios';

//Base da URl: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=f030b2a2886a523f9e2a0c63ad4ace56

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;