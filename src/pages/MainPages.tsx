import React from 'react';
import Card from '../components/Card/Card';
import Search from '../components/Search/Search';

import './MainPages.css'

const MainPage: React.FC = () => {
  
  return (
    <div className='mainPage'>
        <Card/>
        {/* <Card/>
        <Card/> */}
        <Search/>
     </div>
  );
}

export default MainPage;
