import './style.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className='logo' to="/">Filme Poster</Link>
            <Link className='favoritos' to="/favoritos">Meus Filmes</Link>
        </header>
    )
}

export default Header;