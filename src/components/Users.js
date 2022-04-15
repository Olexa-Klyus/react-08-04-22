import {useEffect, useState} from "react";
import User from "./User";

const Users = () => {
    const [users, setUsers] = useState([])


// useEffect виконується після того , як виконається його return
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, [])


    return (
        <div>
            {/*{users.map(value => <User key={value.id} id={value.id} name={value.name} username={value.username} email={value.email} />)}*/}
            {/*або*/}
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export default Users;