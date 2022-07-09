import React, { useContext } from 'react';
import FavoriteContext from '../contexts/favoritesContext';

const Navbar = () => {

    const { favoritePokemons } = useContext(FavoriteContext);

    return (
        <nav>
            <div className='navbar-image'>
                <img 
                src='img/pokemon-logo-vector.png'
                alt='logo' 
                className=''
                />
            </div>
            <div>
                <div className='heart-nav'>❤️{favoritePokemons.length}</div>
            </div>
        </nav>
    );
}

export default Navbar;

