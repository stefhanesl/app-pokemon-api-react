import React from 'react';
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'

const Pagination = (props) => {
    const{page, totalPage, onLeftClic, onRightClic } = props;
    return(
        <div className='pagination'>
            <button onClick={onLeftClic} className='pagi-btn'>
                <div><IoIosArrowDropleftCircle size={35} /></div>
            </button>
            <div>{page} de {totalPage}</div>
            <button onClick={onRightClic} className='pagi-btn'>
                <div><IoIosArrowDroprightCircle size={35} /> </div>
            </button>
        </div>
    )
}


export default Pagination;