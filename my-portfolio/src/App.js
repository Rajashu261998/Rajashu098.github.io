// import logo from "./logo.svg";
import "./App.css";
import Layout from "./layout/Layout";
import style from "./styles/global.module.css";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className='App'>
      {/* https://www.npmjs.com/package/react-animated-cursor */}
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color='255, 160, 1'
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Layout style={style} />
    </div>
  );
}

export default App;
