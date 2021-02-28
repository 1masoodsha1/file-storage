import React from 'react';
import Layout from './components/Layout/Layout';
import FileStorage from './containers/FileStorage/FileStorage';

import './App.scss';


function App() {
  return (
    // Make use of sementic elements
    // 
    <Layout>
      <FileStorage />
    </Layout>
  );
}

export default App;

