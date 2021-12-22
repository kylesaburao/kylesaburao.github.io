import React from "react";
import { Container, Row } from "react-bootstrap";
import "./App.css";
import Navigation from "./Navigation";
import Education from "./section/Education";
import Experience from "./section/Experience";
import Home from "./section/Home";
import Projects from "./section/Projects";
import Technologies from "./section/Technologies";

function App() {
  const sections = [
    ["Home", <Home />],
    ["Technologies", <Technologies />],
    ["Experience", <Experience />],
    ["Projects", <Projects />],
    ["Education", <Education />],
  ];

  const sectionHeaders = sections.map(([header, ..._]) => header);

  return (
    <>
      <Navigation options={sectionHeaders} />
      <span id="Home"></span>
      <Container className="pt-5 mt-4">
        {sections.map(([header, component], i) => (
          <Container key={header as string} style={{ marginBottom: "4em" }}>
            {i > 0 && (
              <>
                <Row>
                  {header !== "Home" && (
                    <h3
                      id={header as string}
                      className="text-center"
                      style={{ paddingTop: "3em", marginTop: "-3em" }}
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
