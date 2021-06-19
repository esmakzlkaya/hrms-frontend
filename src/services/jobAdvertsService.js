import axios from "axios";

export default class JobAdvertsService{

    getJobAdverts(){
        return axios.get("http://localhost:8080/api/jobadverts/getallactive")
    }

    getJobAdvertsByEmployerId(employerId){
        return axios.get("http://localhost:8080/api/jobadverts/getAllbyemployer?employerId="+employerId);
    }

    getJobAdvertsByDate(releaseDate,deadline){
        return axios.get("http://localhost:8080/api/jobadverts/getallbydate?releaseDate="+releaseDate+"&deadline="+deadline);
    }

    


}