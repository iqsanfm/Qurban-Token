/* eslint-disable jsx-a11y/alt-text */
import styles from "./styles.module.css";
import {useNavigate} from 'react-router-dom';
import "@fontsource/ubuntu-mono"
import Logo from "../../assets/Images/logo.png";
import {Link} from "react-router-dom";
const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
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
				<button className={styles.white_logout} onClick={handleLogout}>
					Logout
				</button>
				</ul>
			</nav>
			</div>
			<div className={styles.home}>
				<h1>QBN TOKEN</h1>
				<p>QBN adalah mata uang digital, token blockchain ethereum dengan standar ERC-20. Token QBN dibuat untuk merealisasikan bertransaksi menggunakan mata uang 
					digital berbasis blockchain atau memiliki smart-contract agar lebih aman dan efisien.</p>

			</div>
		</div>
	);
};

export default Main;