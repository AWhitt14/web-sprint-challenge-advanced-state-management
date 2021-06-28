import axios from 'axios';

export const getVillage = () => dispatch => {
    dispatch ({type: 'FETCHING_SMURF'});
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch ({type: 'FETCHING_SUCCESS', payload: res.data})
        })
        .catch(res => {
            dispatch ({type: 'FETCHING_FAIL'})
            console.log('api call error', res);
        });
}


export const addVillager = (newSmurf) => dispatch => {
    dispatch({type: 'ADD_SMURF'});
    axios.post('http://localhost:3333/smurfs',{...newSmurf, id: Date.now()})
    .then(res => {
        console.log(res.data)
        dispatch ({type: 'POST_SUCCESS', payload: res.data});
    })
    .catch(er => {
        dispatch ({type: 'POST_FAIL'})
        console.log('post error',er);
    });
}
export const setError = (error) => dispatch => {
    
    dispatch ({type: 'SET_ERROR', payload: error})
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.