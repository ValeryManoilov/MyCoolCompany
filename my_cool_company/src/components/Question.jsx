import styles from './styles/Question.module.scss';
import {useState} from "react";

function Question(props)
{
    const [isOpen, setIsOpen] = useState(false);
    return (
        <article
            className={`${styles.questionContainer} 
                        ${isOpen ? styles.questionClicked : styles.isUnselected}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className={styles.textContainer}>
                <p
                    className={`${styles.textQuestion} 
                ${isOpen ? styles.isClicked : styles.isUnselected}`}
                >
                    {props.text}
                </p>
                {isOpen ?
                    (<p className={styles.textAnswer}>{props.answer}</p>) :
                    (<></>)
                }
            </div>
        </article>
    );
}

export default Question;
