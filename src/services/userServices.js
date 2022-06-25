import http from "./httpService";
const host = 'http://localhost:8070/'
const reg = (data)=>{
  return http.post(`${host}user`,data);
}
function login(data){
  const d={
    email:data.user_id,
    password:data.password
  }
  return http.post(`${host}user/auth`,d);
}

function foods(){
  
  return http.get(`${host}food/all`);
}
function addFood(data){
  return http.post(`${host}food/`,data);
}
function delFood(data)
{  
  return http.delete(`${host}food/delete/${data}`);
}
function foodsByUser(id){
  return http.get(`${host}food/all/${id}`);
}
function food(id){
  return http.get(`${host}food/${id}`);
}
const cats=()=>{
  return http.get(`${host}cat/all`);
}
const cat=(id)=>{
  return http.get(`${host}cat/${id}`);
}
const postAdd = (data)=>{
  const body={
    name:data.name,
    brand_name:data.brand_name,
    description:data.description,
    file:data.file,
    price:data.price,
    purchasing_date:data.purchasing_date,
    date:data.date,
    seller_id: data.seller_id,
    category_id: data.category_id
  }
return http.post(`${host}user`,body);
}

const user = {
  reg,
  login,
  cat,
  cats,
  postAdd,
  foods,
  addFood,
  delFood,
  foodsByUser,
  food
}
export default user;