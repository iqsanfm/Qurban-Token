import React from 'react';
import { ethers } from 'ethers';
import axios from 'axios';

const API_URL = 'http://localhost:4000';

const ITEMS = [
    {
        id: 1,
        price: ethers.utils.parseEther('100'),

    },

    {
        id: 2,
        price: ethers.utils.parseEther('200'),

    },

    
];

function Store({ paymentProcessor, qbn}) {
    const buy = async (item) => {
        const responsel = await axios.get(`${API_URL}/api/getPaymentId/${item.id}`);
        const tx1 = await qbn.approve(paymentProcessor.address, item.price );
        await tx1.wait();

        const tx2 = await paymentProcessor.pay(item.price, responsel.data.paymentId);
        await tx2.wait();

        await new Promise(resolve => setTimeout(resolve, 5000));

        const response2 = await axios.get(`${API_URL}/api/getItemUrl/${responsel.data.paymentId}`);
        console.log(response2);
    };
    return (
        <ul className='list-group'>
            <li clasName='list-group-item'>
                Buy Item1 - <span className='front-weint-bold'>100 QBN </span>
                <button 
                type='button'
                className='btn btn-primary float-right'
                onClick={() => buy(ITEMS[0])}
                >
                   buy
                </button>
            </li>
            
            
            <li clasName='list-group-item'>
                Buy Item2 - <span className='front-weint-bold'>200 QBN </span>
                <button 
                type='button'
                className='btn btn-primary float0-right'
                onClick={() => buy(ITEMS[1])}
                >
                    buy
                    </button>
            </li>
            </ul>


    );

}

export default Store;

