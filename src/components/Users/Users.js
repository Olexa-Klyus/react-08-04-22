import {useEffect, useState} from "react";

import {userService} from "../../services/users.service";
import {User} from "../User/User";

const Users = ({setUser}) => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAllUsers().then(({data}) => setUsers(data));
    }, [])

    return (
        <div>
            {
                users ? users.map((user) => <User key={user.id}
                                                user={user}
                                                setUser={setUser}/>)
                    : "Loading..."

            }
        </div>
    );
};

export {Users};