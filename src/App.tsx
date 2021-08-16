import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "./App.css";
import Navigation from "./Navigation";
import Education from "./section/Education";
import Experience from "./section/Experience";
import Home from "./section/Home";
import Projects from "./section/Projects";

function App() {
  const options = [
    ["Home", <Home />],
    ["Experience", <Experience />],
    ["Education", <Education />],
    ["Projects", <Projects />],
  ];

  const [section, setSection] = useState<string>(options[0][0] as string);

  const optionMap = options.reduce((accum, [key, element]) => {
    (accum as { string: React.ComponentType<any> })[key as string] = element;

    return accum;
  }, {} as { string: React.ComponentType<any> });

  return (
    <>
      <Navigation options={Object.keys(optionMap)} setCurrent={setSection} />
      <Container id="content">{optionMap[section as string]}</Container>
    </>
  );
}

export default App;
