import React, {useState} from 'react';
import {FcSearch} from 'react-icons/fc'
const Searchbar = (props) => {
    const { onSearch } = props
    const [search, setSearch] = useState('');


    const onChange = (event) => {
        setSearch(event.target.value.toLowerCase())
        if (event.target.value.length === 0){
            onSearch(null)
        }
    }

    const onClic = async (event) => {
       onSearch(search)
    }
    const onkey = async (e) => {
        if (e.key === 'Enter'){
            onSearch(search)
        }
     }
    return (
        <div className='searchbar-container'>
            <div className='searchbar'>
                <input 
                    placeholder='Buscar pokemon... '
                    onChange={onChange}
                    onKeyDown={onkey}
                />
            </div>
            <div className='search-btn'>
                <button  className='searchbar-btn' onClick={onClic}><FcSearch size={40}/></button>
            </div>
        </div>
    );
}

export default Searchbar;
