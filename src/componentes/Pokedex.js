import React from 'react';
import Pagination from './Pagination';
import Pokemon from './Pokemon';

const Pokedex = (props) => {
    const { pokemons, page, total, loading, setPage } = props

    const clicLeft = (event) => {
        const siguiente = Math.max(page-1, 0);
        setPage(siguiente)
      }
    
      const clicRight = (event) => {
        const sigueinte = Math.min(page+1, total)
        setPage(sigueinte)
      }

    return (
        <div>
            <div className='header'>
                <h1 className='titulo'>LISTA DE POKEMONS</h1>
                <Pagination 
                    page={page+1}
                    totalPage={total}
                    onLeftClic={clicLeft}
                    onRightClic={clicRight}
                />
            </div>
            { loading ? ( 
                <div>Cargando pokemones...</div> 
                ) : ( 
                <div className='pokedex-grid'>
                {pokemons.map((pokemon) => {
                        return(
                            <Pokemon pokemon={pokemon} key={pokemon.name}

                            />
                            )
                        })}
                    </div>
                )}
            
        </div>
)}
export default Pokedex;
