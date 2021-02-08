import React, {Suspense} from 'react';
import logo from './logo.svg';
import Layout from './components/Layout/Layout'
import Loader from './components/UI/Loader/Loader'


function App() {
  return (
    <Suspense fallback={<Loader />}>
    <div className="App">
      <Layout />
    </div>
    </Suspense>
  );
}

export default App;
