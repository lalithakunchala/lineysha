import { USER_REQUEST, USER_SUCCESS, USER_FAILURE} from './actionTypes';

const userRequest = () => {
    console.log("fetch post request action called");
    
    return {
      type: USER_REQUEST,
      
    };
  };
  
  const userSuccess = (res) => {
    console.log("fetch post success action called"+ res);
    return {
      type: USER_SUCCESS,
      payload : res
    };
  };
  
  const userFailure = error => {
    console.log("fetch post failure action called");
    return {
      type: USER_FAILURE,
      payload:error
    };
  };
  
  
  const fetchUsers= (n) => {
    console.log("fetch Data called", data);
    return dispatch => {
        dispatch(userRequest())
        return  axios.get(
            `https://reqres.in/api/users?page=${n}`
              ).then(res=>{
            console.log("response success", res.data);
            return dispatch(userSuccess(res.data));
          })
          .catch(error => userFailure(error))
    }
  }

export {fetchUsers} 
