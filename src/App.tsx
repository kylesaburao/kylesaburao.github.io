import React from "react";
import { Container, Row } from "react-bootstrap";
import "./App.css";
import Navigation from "./Navigation";
import Education from "./section/Education";
import Experience from "./section/Experience";
import Technologies from "./section/Technologies";
import Home from "./section/Home";
import Projects from "./section/Projects";

function App() {
  const options = [
    ["Home", <Home />],
    ["Technologies", <Technologies />],
    ["Projects", <Projects />],
    ["Experience", <Experience />],
    ["Education", <Education />],
  ];

  const optionMap = options.reduce((accum, [key, element]) => {
    (accum as { string: React.ComponentType<any> })[key as string] = element;

    return accum;
  }, {} as { string: React.ComponentType<any> });

  return (
    <>
      <Navigation options={Object.keys(optionMap)} />
      <span id="Home"></span>
      <Container className="pt-5 mt-4">
        {options.map(([header, component], i) => (
          <Container key={header as string} style={{ marginBottom: "4em" }}>
            {i > 0 && (
              <>
                <Row>
                  {header !== "Home" && (
                    <h3
                      id={header as string}
                      className="text-center"
                      style={{ paddingTop: "2.5em", marginTop: "-2.5em" }}
                    >
                      {header}
                    </h3>
                  )}
                </Row>
                <hr />
              </>
            )}

            <Row>{component}</Row>
          </Container>
        ))}
      </Container>
    </>
  );
}

export default App;
