import axios from "axios";

const SERVER_URL = 'http://localhost:3001/photo';

export const getPeopleCard = async () => {
    const response = await axios.get(SERVER_URL);
    return response;
}
