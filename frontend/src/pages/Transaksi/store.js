/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import './store.css';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';
import Sapi1 from "../../assets/Images/sapi1.png";
import Sapi2 from "../../assets/Images/sapi2.png";
import Logo from "../../assets/Images/logo.png";
import Card from "react-bootstrap/Card";

const API_URL = 'http://localhost:4000';

const ITEMS = [
    {
        id: 1,
        price: ethers.utils.parseEther('100')

    },

    {
        id: 2,
        price: ethers.utils.parseEther('200')

    },

    
];

function Store({ paymentProcessor, qbn }) {
    const buy = async item => {
        const response1 = await axios.get(`${API_URL}/api/getItemUrl/${item.id}`);
        console.log(response1);


        const tx1 = await qbn.approve(paymentProcessor.address, item.price );
        await tx1.wait();
        
        // const tx2 = await paymentProcessor.pay(item.price, response1.data.paymentId);
        // const receipt = await tx2.wait();
        

        console.log(response1.data.id);
        await new Promise(resolve => setTimeout(resolve, 5000));
        const response2 = await axios.get(`${API_URL}/api/getPaymentId/${response1.data.id}`);
        console.log(response2);
    };
    const navigate = useNavigate();
	const navigateToTransaksi = () =>{
		navigate('/transaksi')
	};
	const navigateToProfile = () =>{
		navigate('/profile')
	}
	const navigateHome = () =>{
		navigate('/')
	};
    return (
        <div clasName='container'>
            <nav className='nav'>
				<Link to="./" className='styles.sitetitle'>
      
        		<img src={Logo} height={50} width={50} />  
			
      			</Link>
				
				  <ul>
				<button className='white_transaksi' onClick={navigateToTransaksi}>
					Transaksi
				</button>
				<button className='white_home' onClick={navigateHome}>
					Home
				</button>
				<button className='white_profile' onClick={navigateToProfile}>
					Profile 
				</button>
			
				</ul>
			</nav>
        <div clasName='container1'>
            <div className='card1'>
         <Card className='cardcontainer' style={{width:'18rem'}}> 
         <Card.Img src={Sapi1} height={225} width={199} />
         <Card.Body>
         <Card.Title>Sapi Gendong</Card.Title>
            <Card.Text>
          Berat :100kg <br/>Usia  :10 bulan<br/>
             <b> 100 QBN </b>
             </Card.Text>
        <button type='button' className='btn1'onClick={() => buy(ITEMS[0])}>
        buy</button>
        </Card.Body>  
        </Card>
         </div>
            
         <div className='card2'>
         <Card className='cardcontainer' style={{width:'18rem'}}> 
         <Card.Img src={Sapi2} height={225} width={199} />
         <Card.Body>
         <Card.Title>Sapi Lucu</Card.Title>
            <Card.Text>
          Berat :200kg<br/>Usia  :11 bulan<br/>
             <b> 200 QBN </b>
             </Card.Text>
     <button type='button' className='btn2' onClick={() => buy(ITEMS[1])}> buy</button>
        </Card.Body>  
        </Card>
            </div>
        </div>
        </div>
    );

}

export default Store;