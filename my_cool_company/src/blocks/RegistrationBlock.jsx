import styles from "./styles/RegistrationBlock.module.scss"
import {createContext, useState} from "react";
import RegistrationForm from "../components/RegistrationForm.jsx";

export const FormContext = createContext();

function RegistrationBlock() {
    const [isRegFormVisible, setIsRegFormVisible] = useState(false)

    return (
        <FormContext.Provider value={{isRegFormVisible, setIsRegFormVisible}}>
            <div className={styles.registrationContainer}>
                <h2 className={styles.registrationTitle}>В первый раз с нами?</h2>
                <button className={styles.registrationButton} onClick={() => setIsRegFormVisible(true)}>Зарегистрироваться</button>
            </div>
            <RegistrationForm />
        </FormContext.Provider>
    );
}
export default RegistrationBlock;