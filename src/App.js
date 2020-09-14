import React from 'react';

import Table from './table'
import Search from './Search'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Search />
      <Table countryData />
    </div>
  );
}

export default App;
