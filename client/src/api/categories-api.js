import apiConfig from '../config/api';


export const fetchCategories = async () =>{
    const response = await fetch(apiConfig.url+'categories');
    const json = await response.json();
    return json;
    console.log(json);
    if(json.status === 200){

        return json;
    }else{
        return [];
    }


}









