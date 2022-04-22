import './App.css';
import {Posts, UserInfo, Users} from "./components";
import {useState} from "react";

function App() {
    const [user,setUser]=useState(null);

    return (
        <div>
            <div>
                <Users setUser={setUser}/>
                {user && <UserInfo user={user}/>}
            </div>
            <Posts/>
        </div>
    );
}

export default App;
