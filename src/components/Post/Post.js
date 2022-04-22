const Post = ({post}) => {
    return (
        <div>
            <span>{post.id}</span>
            <span>{post.title}</span>
            <hr/>
        </div>
    );
};

export {Post};