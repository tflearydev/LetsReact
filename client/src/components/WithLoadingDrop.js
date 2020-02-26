import React from 'react';

const WithLoadingDrop = (WrappedComponent) => {


    return ({onChange, data, state, type, desc}) => {

      if(type === 'default'){
        if (state.isFetching == false && state.dataLoaded == true){
          return (<WrappedComponent data = {data} onChange = {onChange} />)
        }else{
          return (<p>Loading Data......</p>)
        }

      }else if(type === 'v2'){

        if(state.isFetching === false && state.dataLoaded === false){
            return (<WrappedComponent data = {[]}  />)
        }else if(state.isFetching === true){
            return (<p>Loading Data......</p>)  
        }else{
          return (<WrappedComponent data = {data} onChange = {onChange} />)
        }

       
      }
      

    }
    
    
}

export default WithLoadingDrop;