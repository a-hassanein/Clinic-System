import axios from "axios";
let token=localStorage.getItem("access");
let crf=document.cookie.valueOf("csrftoken");

var myAxios=axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 700,
  headers: [{'Authorization': `bearer ${token}`}]
});
console.log("======>",token )

export default myAxios;