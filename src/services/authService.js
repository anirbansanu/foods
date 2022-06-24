import http from "./httpService";

const auth = (data) => {
    const authData={
        email:data.email,
        password:data.password
    }
  return http.post('http://localhost:8070/user/auth',authData);
}
export default auth;