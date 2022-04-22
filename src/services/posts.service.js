import {constants} from "../constants";

const postsService={
    getAllPosts: ()=>fetch(constants.apiUrl+'posts').then(value => value.json())
}

export {postsService}