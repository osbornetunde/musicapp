import axios from 'axios';


export default axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1',
    params: {
        page: '1',
        page_size: '5',
        country: 'us',
    }
});