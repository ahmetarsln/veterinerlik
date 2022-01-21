import * as actionTypes from "./actionTypes";
import axios from "../../libs/vpoapi";


export const login=(loginCred)=>async dispatch=>{
dispatch({type:actionTypes.LOGIN_REQUESTED});
 try{ 
      const response = await axios.post(`/auth/login`,loginCred);

      console.log(response);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
     // const decoded = jwt_decode(response.token);
      dispatch({type:actionTypes.LOGIN_SUCCESS,payload:response.data});
}
 catch(e)
 {
 dispatch({type:actionTypes.LOGIN_FAILED,payload: 'Invalid Login Credantials' });
} 
  }

  export const register=(registerUser)=>async dispatch=>{
    dispatch({type:actionTypes.REGISTER_REQUESTED});
    try{
      const response=await axios.post(`/auth/register`,registerUser);
      dispatch({type:actionTypes.REGISTER_SUCCESS,payload:response.data});
    }
    catch(e)
    {
      dispatch({type:actionTypes.REGISTER_FAILED,payload: 'Register Failed' });
    }
  }
  export const logout = ()=>dispatch=> {

    dispatch({type:actionTypes.LOGOUT_REQUESTED});
    try{
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      dispatch({type:actionTypes.LOGOUT_SUCCESS,payload: ''});
    }
    catch(e)
    {
      dispatch({type:actionTypes.LOGOUT_FAILED,payload: 'Logout Problem' });
    }

  };
