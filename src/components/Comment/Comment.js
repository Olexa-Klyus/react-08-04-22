const Comment = ({comment}) => {
    return (
        <div>
            <span>{comment.id}</span>
            <span>{comment.body}</span>
        </div>
    );
};

export {Comment};