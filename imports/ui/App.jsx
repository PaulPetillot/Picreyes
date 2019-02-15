import React from 'react';
import Layout from './Layout';
import { BrowserRouter as Router } from 'react-router-dom'
const App = () => (
  <div>
    <Router>
      <Layout/>
    </Router>
  </div>
);
export default App;
