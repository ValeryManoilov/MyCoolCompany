import styles from './styles/Header.module.scss';
import logo from '../assets/logo.png';
import Navigation from "../components/Navigation.jsx";
function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="logo"/>
                <h2 className={styles.logoTitle}>SGShop</h2>
            </div>
            <Navigation/>
        </header>
    );
}

export default Header;