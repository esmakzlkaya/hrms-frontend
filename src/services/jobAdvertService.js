import axios from "axios";

export default class JobAdvertsService{

    baseUrl="http://localhost:8080/api/jobadverts/";

    getJobAdverts(){
        return axios.get(this.baseUrl+"getallactive")
    }

    getJobAdvertsByEmployerId(employerId){
        return axios.get(this.baseUrl+"getAllbyemployer?employerId="+employerId);
    }

    getJobAdvertsByDate(releaseDate,deadline){
        return axios.get(this.baseUrl+"getallbydate?releaseDate="+releaseDate+"&deadline="+deadline);
    }

    addJobAdvert(jobAdvert){
        let result=axios.post(this.baseUrl+"add",jobAdvert);
        return result;
    }

    setPassiveJobAdvert(id){
        let result=axios.post(this.baseUrl+"setPassive",id);
        return result;
    }


}