import './App.css';
import {Comments,Users,Posts} from "./components";

function App() {
    return (
        <div>
            <div className={'users-posts'}>
                <Users/>
                <Posts/>
            </div>
            <Comments/>
        </div>
    );
}

export default App;
