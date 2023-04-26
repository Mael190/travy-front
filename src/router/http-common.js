import axios from "axios";
import authHeader from '../services/auth-header';

const getOrganisation = () =>  JSON.parse(localStorage.getItem('currentOrganisation')); 

export default axios.create({
  baseURL: process.env.VUE_APP_URL_TRAVY_BACK + getOrganisation() + "/",
  headers: {
    "Content-type": "application/json",
    "Authorization": authHeader.authHeader()
  }
});