import apiConfig from '../config/api';


export const fetchRecentParts = async (count) =>{
    const response = await fetch(apiConfig.url+'parts');
    const json = await response.json();
    return json;
    console.log(json);
    if(json.status === 200){

        return json;
    }else{
        return [];
    }


}









