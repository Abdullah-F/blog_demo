import Axios from 'axios';

const instance = Axios.create({
    baseURL:'http://localhost:3000/'
});


export default instance;