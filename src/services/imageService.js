export default class ImageService{

    baseUrl="http://localhost:8080/api/images/";

    getImages(cvId){
        return axios.get(this.baseUrl+"getbycv?cvId="+cvId);
    }

    addImage(image){
        let result=axios.post(this.baseUrl+"add",image);
        return result;
    }
}