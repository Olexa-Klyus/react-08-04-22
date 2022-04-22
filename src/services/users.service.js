import {axiosService} from "./axios.service";
import {urls} from "../constans";

const userService = {
    getAllUsers:()=>axiosService.get(urls.users)
}
export {userService}