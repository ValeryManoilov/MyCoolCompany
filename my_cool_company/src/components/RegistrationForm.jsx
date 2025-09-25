import {useFormik} from "formik";
import * as Yup from "yup";
import styles from "./styles/RegistrationForm.module.scss";
import {useContext} from "react";
import {FormContext} from "../blocks/RegistrationBlock.jsx";
import cross from "../assets/cross.svg";

const validateSchema = Yup.object().shape({
    name: Yup.string().required("Заполните имя!"),
    email: Yup.string().email("Неверно заполнена почта!").required("Заполните почту!"),
    message: Yup.string()
});


const RegistrationForm = () => {

    const {isRegFormVisible, setIsRegFormVisible} = useContext(FormContext)

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },
        validationSchema: validateSchema,
        onSubmit: (values) => {
            console.log(values);
            setIsRegFormVisible(false);
        }
    })
    return isRegFormVisible && (
        <div className={styles.regFormContainer}>
            <div className={styles.regFormContent}>
                <form onSubmit={formik.handleSubmit}>
                    <h2 className={styles.regFormTitle}>Регистрация</h2>
                    <img className={styles.crossImg} src={cross} alt="cross" onClick={() => setIsRegFormVisible(false)}/>
                    <input
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        placeholder="Имя"
                        className={styles.regFormInput}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <p className={styles.errorText}>{formik.errors.name}</p>
                    )}

                    <input
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder="Почта"
                        className={styles.regFormInput}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className={styles.errorText}>{formik.errors.email}</p>
                    )}

                    <textarea
                        name="message"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        placeholder="Сообщение"
                        className={styles.regFormInput}
                    />
                    {formik.touched.message && formik.errors.message && (
                        <p className={styles.errorText}>{formik.errors.message}</p>
                    )}

                    <button type="submit" className={styles.regSubmitButton}>
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;