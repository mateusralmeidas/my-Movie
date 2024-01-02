import { useEffect,useState } from 'react';
import {Link} from 'react-router-dom'
import './favorites.css'

function Favorites(){

    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        const myList = localStorage.getItem("@primeflix");
        setMovies(JSON.parse(myList) || [])
    },[])

    return(
        <div className='my-movies'>
            <h1>Meus Filmes</h1>

            <ul>
                {movies.map((movie)=>{
                    return(
                        <li key={movie.id}>
                            <span>{movie.title}</span>
                            <div>
                                <Link to={`/movie/${movie.id}`}>Ver detalhes</Link>
                                <button>
                                    Excluir
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Favorites;