import './App.css';
import Navbar from './componentes/Navbar';
import Pokedex from './componentes/Pokedex';
import Searchbar from './componentes/Searchbar';
import {useState, useEffect } from 'react';
import { getPokemonData, getPokemons, searchPokemon } from './api'
import { FavoriteProvider } from './contexts/favoritesContext';

function App() {

  const [pokemones, setPokemones] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const poke_fav_key = 'Favorite_pokemon' 

  const fetchPokemons = async() => {
    try {
      setLoading(true)
      const data = await getPokemons(24, 24*page );
      const array_promesas = data.results.map( async(pokemon) => {
        return(
          await getPokemonData(pokemon.url)
        )
      })
      const resultado = await Promise.all(array_promesas)
      setPokemones(resultado)
      setLoading(false)
      setTotal(Math.ceil(data.count / 24))
      setNotFound(false);
    } catch (error) {
      
    }
  }

  const favorite_store = () => {
    const local = JSON.parse(window.localStorage.getItem(poke_fav_key)) || []
    setFavorites(local) 
  }

  useEffect(() => {
    favorite_store()
  }, );

  useEffect(() => {
    fetchPokemons()
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updated = [...favorites]
    const isFavorite = updated.indexOf(name);
    if(isFavorite >= 0){
      updated.splice(isFavorite, 1)
    }else{
      updated.push(name)
    }
    setFavorites(updated)
    window.localStorage.setItem(poke_fav_key, JSON.stringify(updated))
  }

  const onSearch = async (pokemon) => {
    if(!pokemon){
      return fetchPokemons();
    }
    setLoading(true)
    const result = await searchPokemon(pokemon);
    if(!result){
      setNotFound(true)
      setLoading(false)
      return;
    }else{
      setPokemones([result])
      setPage(0)
      setTotal(1)
    }
    setLoading(false)
  }

  return (
    <FavoriteProvider value={{
      favoritePokemons: favorites, 
      updateFavoritePokemons: updateFavoritePokemons}}>
      <div className='img-pokemon'>
        <div className='contenido'>
          <Navbar  /> 
          <div  className="App">
            <Searchbar  onSearch={onSearch}/>
            {notFound 
            ? <div className='not-found-text'>No se encontro el pokemon que buscabas😿</div>
            : (
              <Pokedex   
                loading={loading}
                pokemons={pokemones} 
                page={page}
                setPage={setPage}
                total={total}
                /> 
            )}
            

          </div>
        </div>
      </div>
    </FavoriteProvider>
  );
}


export default App;
