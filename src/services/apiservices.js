import http from "./httpService";

const regapi=(data) =>{
    const userData={
        email:data.email,
        password:data.password,
        name:data.name,
        phone:data.phone
    }
  return http.post('http://localhost:8070/users',userData);

}
export default regapi;