import axios from "axios";


export default class EmployerService{

    baseUrl="http://localhost:8080/api/employers/"

    getEmployers(){
        return axios.get(this.baseUrl+"getall");
    }

    addEmployer(employer){
        let result=axios.post(this.baseUrl+"add",employer);
        return result;
    }
}