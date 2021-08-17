import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./App.css";
import Navigation from "./Navigation";
import Education from "./section/Education";
import Experience from "./section/Experience";
import Home from "./section/Home";
import Projects from "./section/Projects";

function App() {
  const options = [
    ["Home", <Home />],
    ["Projects", <Projects />],
    ["Experience", <Experience />],
    ["Education", <Education />],
  ];

  const DEFAULT_OPTION = "Home";
  const [section, setSection] = useState<string>(DEFAULT_OPTION);

  const optionMap = options.reduce((accum, [key, element]) => {
    (accum as { string: React.ComponentType<any> })[key as string] = element;

    return accum;
  }, {} as { string: React.ComponentType<any> });

  return (
    <>
      <Navigation options={Object.keys(optionMap)} />
      <Container className="pt-5 mt-4">
        {options.map(([header, component], i) => (
          <Container key={header as string} className="mb-5">
            {i > 0 && (
              <>
                <Row>
                  {header !== "Home" ? (
                    <h3
                      id={header as string}
                      className="text-center"
                      style={{ paddingTop: "2.5em", marginTop: "-2.5em" }}
                    >
                      {header}
                    </h3>
                  ) : (
                    <span id={header}></span>
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
