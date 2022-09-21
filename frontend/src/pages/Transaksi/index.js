import React, { useState, useEffect } from 'react';
import Store from "./store.js";
import getBlockchain from "../ethereum.js";
import "./transaksi.css";


function Transaksi() {
  const [paymentProcessor, setPaymentProcessor] = useState(undefined);
  const [qbn, setQbn] = useState(undefined);
  
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
      <div clasName='container'>

          <h1>Transaksi Hewan Qurban</h1>
          <p> you need to install the metamask! </p>
        
      </div>
    );
  }

  return (

    <div className="container">
        <Store paymentProcessor={paymentProcessor} qbn={qbn}/>
    </div>

  );
}

export default Transaksi;