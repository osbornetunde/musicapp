import axios from 'axios';


export default axios.create({
    baseURL: 'http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1',
    params: {
        chart_name: 'top',
        page: '1',
        page_size: '10',
        country: 'us',
        f_has_lyrics: '1'
    }
});

