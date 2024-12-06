import Iframe from "../../TestsPagesElements/Iframe/Iframe";
import "./ExamsTestPage.scss";

function ExamsTestPage() {
  return (
    <div className="tests-pages-container">
      <Iframe
        src="https://wordwall.net/ru/embed/8e1376bd667f494fa096e45a1c4e15b1?themeId=55&templateId=11&fontStackId=0"
        className="tests-pages-iframe"
      ></Iframe>
    </div>
  );
}

export default ExamsTestPage;
