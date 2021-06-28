export default class JobSeekerService{
    baseUrl="http://localhost:8080/api/jobseekers/";

    getJobSeekers(){
        return axios.get(this.baseUrl+"getall")
    }

    addJobSeeker(jobSeeker){
        let result=axios.post(this.baseUrl+"add",jobSeeker);
        return result;
    }
}