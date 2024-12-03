import Iframe from "../../TestsPagesElements/Iframe/Iframe";
import "./EnglishTestPage.scss";

function EnglishTestPage() {
  return (
    <div className="tests-pages-container">
      <Iframe
        src="https://wordwall.net/ru/embed/4f675eb31c1148a29d65726828560a2d?themeId=61&templateId=11&fontStackId=0"
        className="tests-pages-iframe"
      ></Iframe>
    </div>
  );
}

export default EnglishTestPage;
