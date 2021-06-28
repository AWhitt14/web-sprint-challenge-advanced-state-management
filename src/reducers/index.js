
export const initialState = {
    smurfs: [],
    loading: false,
    errorMessage: ''
}

export const getSmirfs = 'GET_SMIRF'

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'FETCHING_SMURF':
           return {...state, loading: true};
        case 'FETCHING_SUCCESS':
            return {...state, loading: false, smurfs: action.payload}
        case 'FETCHING_FAIL':
            return {...state,loading: false,  errorMessage: 'failed to get smurfs'}
        case 'SET_ERROR':
            console.log('set s3')
            return {...state, errorMessage: action.payload}
        case 'ADD_SMURF':
            return {...state, loading: true}
        case 'POST_SUCCESS':
            return {...state, loading: false, smurfs: action.payload}
        case 'POST_FAIL':
            return {...state, loading: false, errorMessage: 'failed to add smurfs'}

        default:
            return state;
       
    }
}

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.