import {axiosService} from "./axios.service";

import {urls} from "../constants";
// реалізовуємо CRUD операції - Create, Read, Update, Delete
const carService = {
    getAll: () => axiosService.get(urls.cars),                                  //отримати інфу
    getById: (id) => axiosService.get(`${urls.cars}/${id}`),                // тут id треба дати через слеш
    create: (car) => axiosService.post(urls.cars, car),                         //  записати інфу про car
    updateById:(id,newCar)=>axiosService.put(`${urls.cars}/${id}`,newCar),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)           // тут id треба дати через слеш
}

export {carService}