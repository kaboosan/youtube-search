import axios from 'axios';

const KEY = 'AIzaSyBc8gpLYSdOk7zss7MY0KucH2Q5uWBB2l8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})