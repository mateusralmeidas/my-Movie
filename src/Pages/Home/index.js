import { useEffect,useState } from "react";
import api from "../../Services/api";
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

            console.log(response.data);
        }

        loadMovies();
    },[])

    return(    
    <div>
        <h1>
            Bem vindo a Home
        </h1>
    </div>
    );
}

export default Home;