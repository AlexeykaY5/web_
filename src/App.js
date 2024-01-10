import './styles/reset.css';
import './styles/index.css';
import React from 'react';

import HomePage from './pages/homePage';


function App() {
  return (
    <div className='wrapper'>
      <HomePage/>
      <Popup/>
    </div>
  );
}

export default App;
