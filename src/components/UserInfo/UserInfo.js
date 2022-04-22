const UserInfo = ({user}) => {
    return (
        <div>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>user.username</div>
            <div>user.email</div>
            <div>user.phone</div>
            <div>user.website</div>

        </div>
    );
};

export {UserInfo};
