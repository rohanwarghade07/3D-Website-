import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Soundsection from "./components/Soundsection";
import Displaysection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";
import Loader from "./components/Loader";
// import New from "./components/new";
import { useRef } from "react";

function App() {
  const WebgiViewerRef = useRef();
  const contentRef = useRef();
  const handlePreview = () => {
    WebgiViewerRef.current.triggerPreview();
  };

  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} id="content">
        <Nav />
        <Jumbotron />
        <Soundsection />
        <Displaysection triggerPreview={handlePreview} />
      </div>
      <WebgiViewer contentRef={contentRef} ref={WebgiViewerRef} />
    </div>
  );
}

export default App;
