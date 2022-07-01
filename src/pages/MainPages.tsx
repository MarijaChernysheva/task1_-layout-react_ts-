import React from 'react';
import Card from '../components/Card/Card';
import Search from '../components/Search/Search';

import './MainPages.css'

function MainPage() {
  
  return (
    <div className='mainPage'>
        <Card/>
        <Card/>
        <Card/>
        <Search/>
     </div>
  );
}

export default MainPage;
