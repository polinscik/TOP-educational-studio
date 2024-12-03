import Iframe from "../../TestsPagesElements/Iframe/Iframe";
import "./ExamsTestPage.scss";

function ExamsTestPage() {
  return (
    <div className="tests-pages-container">
      <Iframe
        src="https://wordwall.net/ru/embed/42facadde00a40aeb07e5456c9040d64?themeId=41&templateId=5&fontStackId=0"
        className="tests-pages-iframe"
      ></Iframe>
    </div>
  );
}

export default ExamsTestPage;
