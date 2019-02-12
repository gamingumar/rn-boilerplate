import { create } from 'apisauce';
import {Config} from '../Config';

const ApiClient = create({
    baseURL: Config.API_URL,
    headers: {
        Accept: 'application/json',
        token: Config.TOKEN,
        'Content-Type': 'application/json'
    },
    timeout: 3000
})

const parseEvents = async (response) => {
    if (response.ok) {
        return new Promise.resolve(response.data.data);
    }

    return new Promise((resolve) => resolve(null))    
}

export const fetchEvents = async (page = 1, limit = 2) => {
    const data = await ApiClient.get(`consumer/getEvents?limit=${limit}&page=${page}`);

    return parseEvents(data);
}