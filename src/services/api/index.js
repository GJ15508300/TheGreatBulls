import axios from "axios";
import { API } from "../../constants";

export function login(data) {
  console.log(
    "Login API Url : ",
    API.baseUrls[API.currentEnv] + API.authUrls.Login
  );

  return axios.post(API.baseUrls[API.currentEnv] + API.authUrls.Login, data);
}

export function signUp(data) {
  return axios.post(
    API.baseUrls[API.currentEnv] + API.authUrls.authRegister,
    data
  );
}
