import React from 'react';
import Web3Provider from './Web3Provider';
import Web3Connect from './Web3Connect';
import Web3App from './Web3App'

const App = () => {
  return (
    <div className="App">
		 <Web3Provider>
			 <Web3Connect>
				 <Web3App/>
			 </Web3Connect>
		 </Web3Provider>
    </div>
  );
}

export default App;
