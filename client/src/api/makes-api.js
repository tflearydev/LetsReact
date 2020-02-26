import apiConfig from '../config/api';


export const fetchMakesByCategoryId = async (category_id) =>{
    const response = await fetch(apiConfig.url+'makes/category_id/'+category_id);
    const json = await response.json();
    return json;
    if(json.status == 200){
        return json.data;
    }else{
        return [];
    }
}


