import Question from "../components/Question.jsx";
import styles from "./styles/QuestionsBlock.module.scss";

const questions = [
    {
        id: 1,
        text: "Сколько стоят ваши очки?",
        answer: "Цена наших premium очков от 1999 до 9999 рублей. Это одна из самых низких цен в России!",
    },
    {
        id: 2,
        text: "Чем ваши очки отличаются от очков конкурентов?",
        answer: "В наших очках используется поликарбонат высшего качества и оправа из надежного пластика. Благодаря этому они прослужат Вам много лет! ",
    },
    {
        id: 3,
        text: "Где можно купить ваши очки?",
        answer: "Вы можете купить очки на OZON или Wildberries, или посетить наш магазин в г. Санкт-Петербург",
    },
];

function QuestionsBlock()
{
    return (
        <div className={styles.questionsBlock}>
            <h2 className={styles.questionBlockTitle}>Частые вопросы</h2>
            <section className={styles.questionsContainer}>
                {
                    questions.map(question => (
                        <Question key={question.id} text={question.text} answer={question.answer}/>
                    ))
                }
            </section>
        </div>
    );
}

export default QuestionsBlock;