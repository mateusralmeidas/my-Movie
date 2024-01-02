import { useEffect,useState } from "react";
import api from "../../Services/api";
import {Link} from 'react-router-dom'
import './home.css'
//URL DA API: /movie/now_playing?api_key=f030b2a2886a523f9e2a0c63ad4ace56


function Home(){
    const [movies, setMovies] = useState([]);
    
    useEffect(()=>{

        async function loadMovies(){
            const response = await api.get("/movie/now_playing",{
                params:{
                    api_key:"f030b2a2886a523f9e2a0c63ad4ace56",
                    page:1
                }
            })

            // console.log(response.data.results.slice(0,10));
            setMovies(response.data.results.slice(0,10));
        }

        loadMovies();
    },[])

    return(    
    <div className="container">
        <div className="list-movies">
        {movies.map((movie)=>{
            return(
                <article key={movie.id}>
                    <strong>{movie.title}</strong>
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/>
                    <Link to={`/movie/${movie.id}`}>Acessar</Link>
                </article>
            );
        })}
        </div>
    </div>
    );
}

export default Home;