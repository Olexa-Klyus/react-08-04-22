import {useEffect, useState} from "react";

import {commentsService} from "../../services";
import {Comment} from "../Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState(null);

    useEffect(() => {
        commentsService.getAllComments().then(value => value.slice(0,50)).then(value => setComments(value));
    },[]);

    return (
        <div>
            {
                comments && comments.map((comment) => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};
export {Comments};