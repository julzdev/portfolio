import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyles } from './globalStyles.style';

import Home from './pages';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Home />
    </Router>
  );
}

export default App;
