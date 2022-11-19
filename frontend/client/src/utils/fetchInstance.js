import axios from 'axios'; 
import { BASE_URL } from './constants'; 

const fetchInstance = async () => {
    const res = await axios.get(`${BASE_URL}`, {
        headers: {
            'Content-Type': 'application/json',
            authorization: token ? token : '',
        }
    })
}

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

export default fetchInstance; 

