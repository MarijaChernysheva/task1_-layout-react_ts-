import React from 'react';

import ListProducts from './components/ListProducts/ListProducts';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <ListProducts />
    </div>
  );
};

export default App;
