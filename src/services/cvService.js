export default class CvService{

    baseUrl="http://localhost:8080/api/cvs/";

    getCVs(jobSeekerId){
        return axios.get(this.baseUrl+"getbyjobseeker?jobSeekerId="+jobSeekerId);
    }

    addCv(cv){
        let result=axios.post(this.baseUrl+"add",cv);
        return result;
    }
}