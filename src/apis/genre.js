import axios from 'axios';


export default axios.create({
    baseURL: 'http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1'
});