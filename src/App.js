// import {Button} from "./components";
import {Routes, Route} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {AboutPage, HomePage, PostsPage, UsersPage} from "./pages";

function App() {
    // якщо в компоненті є ({children}) то якщо записати в App-ці

    // <div>
    // <Button>Click</Button>
    // </div>

    // то все що прописано в компоненті Button ({children})
    // попадає в тег Button
    //______________________________________________________

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'/home'} element = {<HomePage/>}/>
                <Route path={'/users'} element = {<UsersPage/>}/>
                <Route path={'/posts'} element = {<PostsPage/>}/>
                <Route path={'/about'} element = {<AboutPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
