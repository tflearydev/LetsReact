import apiConfig from '../config/api';


export const fetchRecentParts = async (count) =>{
    const response = await fetch(apiConfig.url+'parts?order_by=DESC&limit='+count);
    const json = await response.json();
    
    if(json.status === 200){

        return json.data;
    }else{
        return [];
    }


}









