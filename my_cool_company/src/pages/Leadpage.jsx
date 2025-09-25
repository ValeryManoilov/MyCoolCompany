import Header from "../blocks/Header.jsx";
import FullscreenImageBlock from "../blocks/FullscreenImageBlock.jsx";
import QuestionsBlock from "../blocks/QuestionsBlock.jsx";
import Footer from "../blocks/Footer.jsx";
import RegistrationBlock from "../blocks/RegistrationBlock.jsx";

function LeadPage()
{
    console.log("LeadPage");
    return (
        <>
            <Header/>
            <main>
                <FullscreenImageBlock/>
                <RegistrationBlock/>
                <QuestionsBlock/>
            </main>
            <Footer/>
        </>
    );
}
export default LeadPage;