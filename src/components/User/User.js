import './User.css'

const User = ({user}) => {
    return (
        <div className={user.id % 2 ? 'red':'green'}>
            <span>{user.id}</span>
            <span>{user.name}</span>
            <span>{user.email}</span>
            <hr/>
        </div>
    );
};

export {User};
