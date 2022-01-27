

const initialState={
    commonValue1 : 5,
    commonValue2 : 7
}; 


const reducer = (state = initialState,action) => {

    if(action.type === 'SET_VALUE'){
        let newState = {...state};
        newState[action.key] = action.value;
        return newState;
    }

    return state;
} 

export default reducer;

