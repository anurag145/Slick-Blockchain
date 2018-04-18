import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://majorproject-808f7.firebaseio.com'
});



export default instance;