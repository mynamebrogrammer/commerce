import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/common/Header.js';
import About from './components/About.js';



function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Header />
      <About />
    </main>
  );
}

export default App;
