const MakesReducer = (state, action) => {
    switch (action.type) {
        case 'IS_FETCHING':
            return {
                ...state,
                isFetching: true
            };

        case 'UPDATE_SELECTED_ID':
            return {
                ...state,
                selected_id: action.payload
            };
        

        case 'LOAD_DATA':
            return {
                ...state,
                isFetching: false,
                dataLoaded: true,
                data: action.payload
            };
         
            
        default:
            return state;
    }
};

export default MakesReducer;