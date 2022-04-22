import {constants} from "../constants";

const commentsService = {
    getAllComments: ()=>fetch(constants.apiUrl + 'comments').then(value => value.json())
}
export {commentsService};
