import http from "./httpService";
const host = 'http://localhost:8070/'
const reg = (data)=>{
  return http.post(`${host}user`,data);
}
function login(data){
  const d={
    email:data.email,
    password:data.password
  }
  return http.post(`${host}user/auth`,d);
}

function products(){
  
  return http.get(`${host}product/all`);
}
function addProduct(data){
  return http.post(`${host}product/`,data);
}
function delProduct(data)
{  
  return http.delete(`${host}product/delete/${data}`);
}
function productsByUser(id){
  return http.get(`${host}product/all/${id}`);
}
function product(id){
  return http.get(`${host}product/${id}`);
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
  products,
  productsByUser,
  product,
  addProduct,
  delProduct
}
export default user;