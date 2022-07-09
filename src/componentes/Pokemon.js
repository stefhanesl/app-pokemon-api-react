import React, { useContext } from 'react';
import FavoriteContext from '../contexts/favoritesContext';

const Pokemon = ({pokemon}) => {
    const {favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);

    const whiteHeart = '🤍';
    const redHeart = '❤️'
    const heart = favoritePokemons.includes(pokemon.name) ? redHeart : whiteHeart;
    
    const clicHeart = (e) => {
        e.preventDefault();
        updateFavoritePokemons(pokemon.name)
    }
    
    
    return(
        <div className='pokemon-card'>

            <div className='pokemon-img-container'>
                <img src={pokemon.sprites.front_default} 
                     alt='imagen pokemon'
                     className='pokemon-img'  
                />
            </div>

            <div className='card-body'>
                <div className='card-top'>
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div className='card-bottom'>
                    <div className='pokemon-type'>
                        {pokemon.types.map((type, id) => {
                            return(
                                <div key={id} className='pokemon-type-text'>
                                {type.type.name}
                                </div>
                            )
                        })}
                    </div>
                    <button className='pokemon-heart-btn ' onClick={clicHeart}>
                        <div className='pokemon-favorite'>{heart}</div>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Pokemon;