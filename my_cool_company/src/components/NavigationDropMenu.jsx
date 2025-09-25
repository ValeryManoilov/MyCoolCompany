import styles from "./styles/NavigationDropMenu.module.scss"
import {useState} from "react";
import burgerMenu from "../assets/burgerMenu.svg";

function NavigationDropMenu()
{
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <div className={styles.dropMenuContainer}>
            <img src={burgerMenu} className={styles.burgerMenuImg} alt={"burger-menu"} onClick={() => setIsOpenMenu(!isOpenMenu)}/>
            {isOpenMenu ? (
                    <ul className={styles.dropMenuList}>
                        <li>
                            <a><p>О компании</p></a>
                        </li>
                        <li>
                            <a><p>Расписание</p></a>
                        </li>
                        <li>
                            <a><p>Контакты</p></a>
                        </li>
                    </ul>
                ) :
                <></>}
        </div>
    )
}

export default NavigationDropMenu;