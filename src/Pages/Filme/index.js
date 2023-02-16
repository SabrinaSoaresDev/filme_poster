import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from '../../Services/api';
import './filme.css';


function Filme(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        async function loadFilme(){
           await api.get(`/movie/${id}`,{
               params:{
                   api_key:"1c64a5b04fbec7a35fd20d8c9ea9eca5",
                   language:"pt-BR",
               }
           })
           .then((response)=>{
               setFilme(response.data);
               setLoading(false)
           }) 
           .catch(()=> {
               console.log("FILME NAO ENCONTRADO")
                navigate("/", {replace: true })
                return;
            })
        }
        loadFilme();

        return() => {
            console.log("COMPONENTE FOI DESMONTADO")
        }
       },[navigate, id])

       function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeFlix");
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmesSalvos)=> filmesSalvos.id === filme.id )

        if(hasFilme){
            toast.warn("ESTE FILME JA ESTA NA LISTA!")
            return;
        }
        filmesSalvos.push(filme);
        localStorage.setItem("@primeFlix", JSON.stringify(filmesSalvos));
        toast.success("FILME SALVO COM SUCESSO!")
       }

       if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando detalhe...</h1>
            </div>
        )
       }
    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10 </strong>
            <div className="area-button">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="black" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Filme;