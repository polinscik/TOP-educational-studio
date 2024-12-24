import Iframe from "../../TestsPagesElements/Iframe/Iframe";
import "./RussuanTestPage.scss";

function RussuanTestPage() {
  return (
    <div className="tests-pages-container">
      <Iframe
        src="https://wordwall.net/ru/embed/36ce6af7fba442c4beb5708e74dd4511?themeId=53&templateId=5&fontStackId=0"
        className="tests-pages-iframe"
      ></Iframe>
    </div>
  );
}

export default RussuanTestPage;
