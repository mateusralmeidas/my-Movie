import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import Header from "./Components/Header";

function RouteApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movie/:id" element={<Movie/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RouteApp;