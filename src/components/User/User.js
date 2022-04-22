const User = ({user,setUser}) => {
    return (
        <div>
            <span>{user.id}</span>
            <span>{user.name}</span>
            <button onClick={()=>setUser(user)}>show info</button>
        </div>
    );
};

export {User};