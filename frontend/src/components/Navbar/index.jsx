/* eslint-disable jsx-a11y/alt-text */
import {useNavigate} from 'react-router-dom';
import "@fontsource/ubuntu-mono"
import {Link} from "react-router-dom";
import styles from "./styles.module.css";
import Logo from '../../assets/Images/logo.png';

const Navbar= () =>  {
    const navigate = useNavigate();
    const navigateToAbout = () =>{
      navigate('/about')
    };
    const navigateLogin = () =>{
      navigate('/login')
    };
    const navigateDashboard = () =>{
      navigate('/dashboard')
    };
    return (
      <div className={styles.container}>
        <div className={styles.main_container}>
        <nav className={styles.nav}>
          <Link to="./" className={styles.sitetitle}>
        
              <img src={Logo} height={50} width={50} />  
        
              </Link>
          
            <ul>
            <button className={styles.white_dashboard} onClick={navigateDashboard}>
            Dashboard
          </button>
            <button className={styles.white_transaksi} onClick={navigateToAbout}>
            About
          </button>
          <button className={styles.white_home} onClick={navigateLogin}>
            Login
          </button>
          </ul>
        </nav>
        </div>
      </div>
  );
}

export default Navbar;