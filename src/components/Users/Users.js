import {useEffect, useState} from "react";

import {userService} from "../../services";
import {User} from "../User/User";

const Users = () => {
    const [users, setUsers]= useState([]);

    useEffect(()=>{
        // userService.getAll().then(value => value.data).then(value => setUsers(value))
        // скорочуємо
        userService.getAll().then(({data}) =>setUsers(data))
    },[])

    //або варіант з await
    // useEffect(()=>{
    //     const getUsers=async ()=>{
    //         const {data}= await userService.getAll();
    //         setUsers(data)
    //     }
    //     console.log(getUsers());
    //     userService.getAll().then(({data}) =>setUsers(data))
    // },[])

    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};