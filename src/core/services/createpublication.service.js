import axios from "axios"
var baseURL=`https://arquibackend.azurewebsites.net/api/v1/`

class CreatepublicationServices {
    postNewPublication(data){
    return axios.post(`${baseURL}/publications`,data);
    }
    getAllPublications(){
        return axios.get(`${baseURL}/publications/`);
    }
    getPublicationById(id){
        return axios.get(`${baseURL}/publications/${id}`);
    }

    UpdatePublication(id,data){
        return axios.put(`${baseURL}/publications/${id}`,data);
    }
    DeletePublication(id)
    {
        return axios.delete(`${baseURL}/publications/${id}`);
    }
}

export default new CreatepublicationServices();
