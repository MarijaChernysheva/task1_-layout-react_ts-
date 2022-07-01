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
              <div className='firm__choice choice'>
                <input className='choice__title title' type='checkbox'/>Canon
              </div>
              <div className='firm__choice choice'>
                <input className='choice__title title' type='checkbox'/>Fujifilm
              </div>
              <div className='firm__choice choice'>
                <input className='choice__title title' type='checkbox'/>Nikon
              </div>
              <div className='firm__choice choice'>
                <input className='choice__title title' type='checkbox'/>Panasonic
              </div>
              <div className='firm__choice choice'>
                <input className='choice__title title' type='checkbox'/>Leica
              </div>
              <div className='firm__choice choice'>
                <input className='choice__title title' type='checkbox'/>Olympus
              </div>
              <div className='firm__choice choice'>
                <input className='choice__title title' type='checkbox'/>Pentax
              </div>
              <div className='firm__choice choice'>
                <input className='choice__title title' type='checkbox'/>Sigma
              </div>
              <div className='firm__choice choice'>
                <input className='choice__title title' type='checkbox'/>General Electrics
              </div>
              <div className='firm__choice choice'>
                <input className='choice__title title' type='checkbox'/>Zenit
              </div>
            </div>
          </div>
        </>
    )
}

export default Search;