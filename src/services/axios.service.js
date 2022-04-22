import axios from "axios";
import baseURL from "../constans/links";

const axiosService=axios.create({baseURL});

export {axiosService}