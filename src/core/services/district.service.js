import axios from "./http-common"

class districtService
{
    endpoint="api/v1/districts"
    datafilter
    getAllDistricts()
    {
        return axios.get(`/district`)
    }

    getByDistrict(data){

        if(data===undefined)
        {
            this.getAllDistricts()
        }else
        {
            return axios.get(`/${this.endpoint}?district=${data}`)
        }
    }
    getdistrictfilter() {
        return this.datafilter;
      }
      setdistrictfilter(data) {
        this.datafilter = data;
        //change
      }
}
export default new districtService()