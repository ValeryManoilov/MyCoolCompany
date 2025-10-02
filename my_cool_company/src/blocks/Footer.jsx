import vkLogo from "../assets/vkLogo.svg";
import tgLogo from "../assets/telegramLogo.svg";
import styles from "./styles/Footer.module.scss";

function Footer()
{
    return (
        <footer>
            <h2>Контанты</h2>
            <div className={styles.textContainer}>
                <p>Техподдержка: +7 995 608-1899</p>
                <p>Почта: manojlovv@inbox.ru</p>
                <div className={styles.socialMediaContainer}>
                    <p>Соцсети: </p>
                    <a>
                        <img src={vkLogo} alt="vkLogo" />
                    </a>
                    <a>
                        <img src={tgLogo} alt="tgLogo" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
