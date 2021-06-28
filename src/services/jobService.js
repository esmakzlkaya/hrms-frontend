import axios from "axios";


export default class JobService{

    baseUrl="http://localhost:8080/api/jobs/";

    getJobs(){
        return axios.get(this.baseUrl+"getall");
    }

    addJob(job){
        let result=axios.post(this.baseUrl+"add",job);
        return result;
    }
}