import axios from "axios";

var baseURL=`https://arquibackend.azurewebsites.net/api/v1/`
class PetsService {
  datafilter;

  getPets(userId) {
    return axios.get(`${baseURL}/pets/userId=${userId}`);
  }
  getAllpets() {
    return axios.get(`${baseURL}/pets`);
  }
  deletePet(petId) {
    return axios.delete(`${baseURL}/pets/${petId}`);
  }
  postPet(data) {
    return axios.post(`${baseURL}/pets`, data);
  }
  putPet(id, data) {
    return axios.put(`${baseURL}/pets/${id}`, data);
  }

  filterPet(typeSearch, genderSearch, requireAtention) {
    if (genderSearch === undefined && requireAtention === undefined) {
      return axios.get(`${baseURL}/pets/type=${typeSearch}`);
    } else if (typeSearch === undefined && genderSearch === undefined) {
      return axios.get(`${baseURL}/pets/attention=${requireAtention}`);
    } else if (typeSearch === undefined && requireAtention === undefined) {
      return axios.get(`${baseURL}/pets/gender=${genderSearch}`);
    } else if (typeSearch === undefined) {
      return axios.get(`${baseURL}/pets/gender=${genderSearch}&attention=${requireAtention}`);
    } else if (genderSearch === undefined) {
      return axios.get(`${baseURL}/pets/type=${typeSearch}&attention=${requireAtention}`);
    } else if (requireAtention === undefined) {
      return axios.get(`${baseURL}/pets/type=${typeSearch}&gender=${genderSearch}`);
    } else {
      return axios.get(
          `${baseURL}/pets/type=${typeSearch}&gender=${genderSearch}&attention=${requireAtention}`
      );
    }
  }
  getdatafilter() {
    return this.datafilter;
  }
  setdatafilter(data) {
    this.datafilter = data;
    //change
  }
}

export default new PetsService();
