import * as React from 'react';

import './Search.css'

interface IProps {

}

const Search: React.FC<IProps> = () => {
    return(
        <>
          <div className='search search'>
            <div className='search__buttonGroup buttonGroup'>
              <button className='buttonGroup__buttonResult buttonResult'>Показать результаты</button>
              <button className='buttonGroup__buttonFilter buttonFilter'>Очистить фильтры</button>
            </div>
            <div className='search__manufacturer manufacturer'>Производитель</div>
            <div className='search__firm firm'>
              <input className='firm__title title' type='checkbox'/>Canon
              <input className='firm__title title' type='checkbox'/>Fujifilm
              <input className='firm__title title' type='checkbox'/>Nikon
              <input className='firm__title title' type='checkbox'/>Panasonic
              <input className='firm__title title' type='checkbox'/>Leica
              <input className='firm__title title' type='checkbox'/>Olympus
              <input className='firm__title title' type='checkbox'/>Pentax
              <input className='firm__title title' type='checkbox'/>Sigma
              <input className='firm__title title' type='checkbox'/>General Electrics
              <input className='firm__title title' type='checkbox'/>Zenit
            </div>
          </div>
        </>
    )
}

export default Search;