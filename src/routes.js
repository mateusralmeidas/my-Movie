import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import Header from "./Components/Header";
import Erro from "./Pages/Erro"
import Favorites from "./Pages/Favorites";


function RouteApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movie/:id" element={<Movie/>}/>
                <Route path="/favorites" element={<Favorites/>}/>

                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RouteApp;