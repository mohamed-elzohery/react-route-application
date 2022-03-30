import axios from "axios";

export const fetchAllusers = async () => {
    return axios.get('https://jsonplaceholder.typicode.com/users');
}


export const fetchUserByID = async (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
}