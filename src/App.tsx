import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "./App.css";
import Navigation from "./Navigation";
import Education from "./section/Education";
import Experience from "./section/Experience";
import Home from "./section/Home";
import Projects from "./section/Projects";

function toString(value: any): string {
  return value.toString();
}

function App() {
  const [section, setSection] = useState("home");

  const options = [
    ("Home", (<Home />)),
    ("Education", (<Education />)),
    ("Experience", (<Experience />)),
    ("Projects", (<Projects />)),
  ];

  return (
    <>
      <Navigation
        options={Object.keys(navigationOptions)}
        setCurrent={setSection}
      />
      <Container id="content">{navigationOptions[section as string]}</Container>
    </>
  );
}

export default App;
