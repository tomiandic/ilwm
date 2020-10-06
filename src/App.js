import React, {Suspense} from 'react';
import logo from './logo.svg';
import Layout from './components/Layout/Layout'


function App() {
  return (
    <Suspense fallback="loading">
    <div className="App">
      <Layout />
    </div>
    </Suspense>
  );
}

export default App;
