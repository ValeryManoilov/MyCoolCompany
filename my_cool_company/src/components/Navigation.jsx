import styles from "./styles/Navigation.module.scss";
import NavigationDropMenu from "./NavigationDropMenu.jsx";

function Navigation()
{
    return (
        <>
            <nav>
                <a>О компании</a>
                <a>Расписание</a>
                <a>Контакты</a>
            </nav>
            <NavigationDropMenu/>
        </>
    );
}

export default Navigation;