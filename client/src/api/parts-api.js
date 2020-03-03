import apiConfig from '../config/api';


export const fetchRecentParts = async (count) =>{
    const response = await fetch(apiConfig.url+'parts?limit=3');
    const json = await response.json();
    //return json;
    //console.log(json);
    if(json.status === 200){

        return json.data;
    }else{
        return [];
    }


}









