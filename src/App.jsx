import React from 'react';

import './App.scss';

import HTContainer from './lib/ht-kit/container/HTContainer';
import HTPagination from './lib/ht-kit/pagination/HTPagination';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HTContainer>
          <p style={{ fontSize: 30, color: 'green' }}>Hightao &apos s recrutement platform react-kits</p>
        </HTContainer>
        <HTPagination
          data={100}
        />

      </header>
    </div>
  );
}

export default App;
