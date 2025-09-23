import Header from "../Blocks/Header.jsx";
import FullscreenImageBlock from "../Blocks/FullscreenImageBlock.jsx";
import QuestionsBlock from "../Blocks/QuestionsBlock.jsx";
import Footer from "../Blocks/Footer.jsx";

function LeadPage()
{
    console.log("LeadPage");
    return (
        <>
            <Header/>
            <FullscreenImageBlock/>
            <QuestionsBlock/>
            <Footer/>
        </>
    );
}
export default LeadPage;