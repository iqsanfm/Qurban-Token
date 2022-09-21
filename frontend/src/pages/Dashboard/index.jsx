/* eslint-disable jsx-a11y/alt-text */
import styles from "./styles.module.css";
import "@fontsource/ubuntu-mono";
import Navbar from "../../components/Navbar";
import {Link} from "react-router-dom";
import Logo from "../../assets/Images/logo.png";
const Dashboard = () => {

  return (
    
    <div className={styles.container}>
			<div className={styles.main_container}>
			<Navbar/>
			
			<div className={styles.dashboard}>
				<h1>hello welcome to QBN Store </h1>
        <div className={styles.login}>
        <p>did u have an account ? please <Link to='/login'>Login</Link> first</p>
        <div clasName={styles.qbn}>
         <p> 1 QBN
        <img src={Logo} className={styles.img}height={25} width={25} /> 
       = 0.012 ETH</p>
        <br/>
        <p> 1 QBN
        <img src={Logo} className={styles.img1}height={25} width={25} /> 
       = 0.018 BTC</p>
        <br/>
        </div>      
      </div>
      </div>
			</div>
		</div>
  
  );
};
  
export default Dashboard;
