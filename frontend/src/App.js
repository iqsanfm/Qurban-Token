import React, { useState, useEffect } from 'react';
import getBlockchain from './ethereum.js';
import Store from './store.js';


function App() {
  const [paymentProcessor, setPaymentProcessor] = useState(undefined);
  const [Qbn, setQbn] = useState(undefined);
  
  useEffect(() => {
    const init = async () => {
      const { paymentProcessor, qbn } = await getBlockchain();
      setPaymentProcessor(paymentProcessor);
      setQbn(qbn);
    }
    init();

  }, []);

  if(typeof window.ethereum === 'undefined') {
    return (
      <div> clasName='container'>
        <div> className='col-sm-12'>
          <h1>Treansaksi Hewan Qurban</h1>
          <p> you need to install the metamask! </p>
        </div>
      </div>
    );
  }

  return (
    <div clasName='container'>
      <div className='col-sm-12'>
        <h1>Treansaksi Hewan Qurban</h1>
        <Store paymentProcessor={paymentProcessor} qbn={Qbn}/>
    </div>
  </div>
  );
}

export default App;
