import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-team-c3d65.firebaseio.com/'
});

export default instance;
