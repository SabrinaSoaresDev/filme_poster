import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';
import { toast } from 'react-toastify'; 

function Favoritos(){
    const [filmes, setFilmes ] = useState([]);

    useEffect(()=> {
        const minhaLista= localStorage.getItem("@primeFlix");
        setFilmes(JSON.parse(minhaLista) || [])
    },[])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((item) => {
            return(item.id !== id )
        })
        setFilmes(filtroFilmes);
        localStorage.setItem("@primeFlix", JSON.stringify(filtroFilmes))
        toast.success("FILME REMOVIDO COM SUCESSO!")
    }
    return(
        <div className="meus-filme" >
            <h1> Meus Filmes</h1>

            {filmes.length === 0 && <span>Você nao possui nenhum Filme Salvo  :) </span>}
            <ul>
                {filmes.map((item)=> {
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}> Ver Detalhes</Link>
                                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;