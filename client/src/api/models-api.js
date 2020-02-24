import apiConfig from '../config/api';


export const fetchCategories = async () =>{
    const response = await fetch(apiConfig.url+'categories');
    const json = await response.json();
    if(json.status == 200){
        return json.data;
    }else{
        return [];
    }


}


export const fetchManufacturersApi = async (categoryid) =>{
    const response = await fetch(apiConfig.url+'manufacturers' + '/' + categoryid);
    const json = await response.json();
    if(json.status == 200){
        return json.data;
    }else{
        return [];
    }

}

export const fetchModelsApi = async (categoryid, manufacturer_id) =>{
    const response = await fetch(apiConfig.url+'models?category_id=' + categoryid + '&manufacturer_id=' + manufacturer_id);
    const json = await response.json();
    if(json.status == 200){
        return json.data;
    }else{
        return [];
    }

}


export const fetchParts = async (data) => {
    let str = '';
    if(data.category_id){
        str += 'category_id='+data.category_id+'&';
    }

    if(data.manufacturer_id){
        str += 'manufacturer_id='+data.manufacturer_id+'&';    
    }

    if(data.model_id){
        str += 'model_id='+data.model_id+'&';    
    }

    const response = await fetch(apiConfig.url+'parts' + '?' + str);
    const json = await response.json();
    if(json.status == 200){
        return json.data;
    }else{
        return [];
    }
}


