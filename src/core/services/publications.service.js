import axios from './http-common';


class PublicationsService {
    postNewPublication(data){
        return axios.post(`/publications`,data);
    }
    getAllPublications(){
        return axios.get(`/publications/`);
    }
    getUserPublications(id){
        return axios.get(`/users/${id}/publications`);
    }
    getPublicationById(id){
        return axios.get(`/publications/${id}`);
    }
    putPublication(id,data){
        return axios.put(`/publications/${id}`,data);
    }
    DeletePublication(id)
    {
        return axios.delete(`/publications/${id}`);
    }   
}

export default new PublicationsService();
