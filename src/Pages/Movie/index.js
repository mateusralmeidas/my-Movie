import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'

import api from '../../Services/api'

function Movie(){

    const {id} = useParams();
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
            })
        }

        loadMovie();


        return()=>{
            console.log("Component desmontado");
        }
    },[]);

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
        </div>
    );
}

export default Movie;