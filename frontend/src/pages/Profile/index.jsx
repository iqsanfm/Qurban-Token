/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from "./styles.module.css";
import {Link, useNavigate} from "react-router-dom";
import Logo from "../../assets/Images/logo.png";
import Card from "react-bootstrap/Card";
// import axios from "axios";
// const API_URL = 'http://localhost:4000';

const Profile = () => {
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
     <div className={styles.container}>
      <div className={styles.main_container}>
      <nav className={styles.nav}>
				<Link to="./" className={styles.sitetitle}>
      
        		<img src={Logo} height={50} width={50} />  
			
      			</Link>
				
				  <ul>
				<button className={styles.white_transaksi} onClick={navigateToTransaksi}>
					Transaksi
				</button>
				<button className={styles.white_home} onClick={navigateHome}>
					Home
				</button>
				<button className={styles.white_profile} onClick={navigateToProfile}>
					Profile 
				</button>

				</ul>
			</nav>
			<div clasName={styles.containercard}>
			<Card className={styles.cardcontainer} style={{width:'40rem'}}>
			<Card.Title clasName={styles.Title}> Riwayat Transaksi</Card.Title>
			<Card.Text className={styles.Text}>
			_id : blbaaba <br/> itemID : blabaka <br/> url : Blwldwlda
			</Card.Text>
			</Card>
			</div>
      </div>
      </div>
    )
  }
  export default Profile;