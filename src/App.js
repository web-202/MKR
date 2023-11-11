import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import About from "./pages/about/About";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/about'} element={<About/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
