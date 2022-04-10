export const User = ({user}) => {
    return (
        <div>
            <span>{user.id}</span>
            <span>{user.name}</span>
            <span>{user.email}</span>
        </div>
    );
};

export default User;