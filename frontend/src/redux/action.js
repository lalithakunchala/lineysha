import axios from 'axios';
import { USER_REQUEST, USER_SUCCESS, USER_FAILURE, FINDID, POSTREQUEST,POSTSUCCESS,POSTFAILURE} from './actionTypes';

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
    console.log("fetch Data called", n);
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

const findId = (res)=>{
  return {
    type:FINDID,
    payload:res
  }
}

const postRequest = (res)=>{
  return{
    type:POSTREQUEST,
    payload : res
  }
}

const postSuccess = (res)=>{
  return{
    type:POSTSUCCESS,
    payload : res
  }
}

const postFailure = (res)=>{
  return{
    type:POSTFAILURE,
    payload : res
  }
}

const fetchDate = (n)=>{
  console.log("fetch Data called", n);
  return dispatch => {
      dispatch(postRequest())
      return  axios.post(
          `https://localhost:8000/booking`,
          {
            date:n
          }
            ).then(res=>{
          console.log("response success", res.data);
          return dispatch(postSuccess(res.data));
        })
        .catch(error => postFailure(error))
  }
}

export {fetchUsers, findId, fetchDate}