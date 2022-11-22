import axios from "./http-common"
import UsersService from "./users.service"
// const API_URL = 'https://localhost:5001/api/v1/adoptionsrequests';

class NotificationService {


    getAllUserAtNotifications(id) {
        //return http.get(`/adoptionRequests?userIdAt=${UsersService.currentUser}`);
        return axios.get(`/adoptionsrequests/userIdAt=${id}`);
    }

    postNotification(data) {
        //return http.get(`/adoptionRequests?userIdAt=${UsersService.currentUser}`);
        return axios.post(`/adoptionsrequests`, data);
    }

    getAllUserFromNotifications() {
        //return http.get(`/adoptionRequests?userIdFrom=${UsersService.currentUser}`);
        return axios.get(`/adoptionsrequests/userIdAt=${UsersService.currentUser}`);
    }
    deleteNotification(id) {
        //return http.delete(`//adoptionRequests${id}`);
        return axios.delete(`/adoptionsrequests/userIdAt=${id}`);
    }
    getUsersById(index) {
        //return http.get('/users/'+ index);
        return axios.get(`/adoptionsrequests/userIdFrom=` + index);
    }
    updateNotification(id, data) {
        return axios.put(`/adoptionsrequests/${id}`, data);

    }

}

export default new NotificationService();
