import axios from './http-common';

class AddServices {
    
    postNewAd(data){
        return axios.post(`/Advertisements`,data);
    }
    getAllAds(){
        return axios.get(`/Advertisements`);
    }
    getAdById(id){

        return axios.get(`/Advertisements/${id}`);
    }
    getDiscountedAdds(){
        return axios.get(`/Advertisements/promoted=true`)
    }
    UpdateAd(id,data){
        return axios.put(`/Advertisements/${id}`,data);
    }
    DeleteAd(id)
    {
        return axios.delete(`/Advertisements/${id}`);
    }
    getAllByUserId(id){
        return axios.get(`/users/${id}/Advertisements`)
    }
}

export default new AddServices();
