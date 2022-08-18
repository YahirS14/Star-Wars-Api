import logosw from '../assets/logosw.svg';
import {Outlet, Link, useLocation} from 'react-router-dom';

function Layout(){

    const location = useLocation()

    const urlActual = location.pathname

    return(
        <>
            <header>
                <div  className='contenido-header'>

                    <Link to="/">
                        <h1><img src={logosw}/></h1>
                    </Link>
                    <nav className='nav'>
                        <Link className={`${urlActual === '/' ? 'marcado' : ''}`} to="/">Personajes</Link>
                        <Link className={`${urlActual === '/cardsNaves' ? 'marcado' : ''}`} to="/cardsNaves">Naves</Link>
                        <Link className={`${urlActual === '/favoritos' ? 'marcado' : ''}`} to="/favoritos">Favoritos</Link>
                    </nav>
                </div>
            </header>

            <Outlet/>
        </>
    );
}

export default Layout;