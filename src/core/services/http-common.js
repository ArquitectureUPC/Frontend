import axios from "axios";

export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL ||'https://arquibackend.azurewebsites.net/api/v1',
    headers:{Authorization: localStorage.getItem('token'), "Content-type":"application/json"}
});