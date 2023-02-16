import axios from 'axios';
//BASE da URL: https://api.themoviedb.org/3/
// https://api.themoviedb.org/3/movie/now_playing?api_key=1c64a5b04fbec7a35fd20d8c9ea9eca5&language=pt-br

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;