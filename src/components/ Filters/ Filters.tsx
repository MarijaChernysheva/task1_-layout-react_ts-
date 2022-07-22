import * as React from 'react';

import './Search.css';

const Search: React.FC = () => {
  return (
    <div className="search search">
      <div className="search__buttonGroup buttonGroup">
        <button className="buttonGroup__buttonResult buttonResult">Показать результаты</button>
        <button className="buttonGroup__buttonFilter buttonFilter">Очистить фильтры</button>
      </div>
      <div className="search__manufacturer manufacturer">Производитель</div>
      <div className="search__firm firm">
        <label>
          <input className="firm__title title" type="checkbox" color="green" /> Canon
        </label>
        <label>
          <input className="firm__title title" type="checkbox" /> Fujifilm
        </label>
        <label>
          <input className="firm__title title" type="checkbox" /> Nikon
        </label>
        <label>
          <input className="firm__title title" type="checkbox" /> Panasonic
        </label>
        <label>
          <input className="firm__title title" type="checkbox" /> Leica
        </label>
        <label>
          <input className="firm__title title" type="checkbox" /> Olympus
        </label>
        <label>
          <input className="firm__title title" type="checkbox" /> Pentax
        </label>
        <label>
          <input className="firm__title title" type="checkbox" /> Sigma
        </label>
        <label>
          <input className="firm__title title" type="checkbox" /> General Electric
        </label>
        <label>
          <input className="firm__title title" type="checkbox" /> Zenit
        </label>
      </div>
    </div>
  );
};

export default Search;
