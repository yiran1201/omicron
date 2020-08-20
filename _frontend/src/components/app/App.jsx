import './App.scss';
import React from 'react';
// import BuildWatchPage from '../build-watch/BuildWatch';
import ContractPage from '../contract/Contract';
// import SamplesPage from '../samples/Samples';
const App = () => {
  return (
    <div className='App'>
      {/*<BuildWatchPage />*/}
      <ContractPage></ContractPage>
      {/* <SamplesPage></SamplesPage> */}
    </div>
  );
};
export default App;
