import { useEffect, useState } from "react";
import {useParams, useNavigate} from 'react-router-dom'
import './movie-info.css'

import api from '../../Services/api'

function Movie(){

    const {id} = useParams();
    const navigation = useNavigate();

    const[movie,setMovie] = useState({});
    const[loading,setLoading] = useState(true);

    useEffect(()=>{
        async function loadMovie(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key:"f030b2a2886a523f9e2a0c63ad4ace56"
                }
            })
            .then((response)=>{
                setMovie(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log("Filme nao encontrado");
                navigation("/",{replace: true});
                return;
            })
        }

        loadMovie();


        return()=>{
            console.log("Component desmontado");
        }
    },[navigation,id]);

    function saveMovie(){
        const myList = localStorage.getItem("@primeflix");

        let moviesSaved = JSON.parse(myList) || [];

        const hasMovies = moviesSaved.some((movieSaved)=> movieSaved.id === movie.id)

        if(hasMovies){
            alert("Esse filme ja está na lista");
            return;
        }

        moviesSaved.push(movie);
        localStorage.setItem("@primeflix", JSON.stringify(moviesSaved));
        alert("Filme salvo com sucesso");
    }

    if(loading){
        return(
            <div className="movie-info">
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }


    return(    
        <div className="movie-info">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}/>
            
            <h3>Sinopse</h3>
            <span>{movie.overview}</span>

            <strong>Avaliação: {movie.vote_average} / 10</strong>

            <div className="area-buttons">
                <button onClick={saveMovie}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title} trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Movie;