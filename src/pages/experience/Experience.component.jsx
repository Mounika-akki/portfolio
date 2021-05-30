import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./Experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
      <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                Wysa ( Touchkin eServices pvt ltd. )
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Full Stack Web Developer 
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Duration:</strong> April 2021 - June 2021
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        Underwent intense training on full stack web development
                        (MERN) with a number of projects and hands on experience
                        with each and every technology involved. Worked on daily
                        tasks and assessments and performed well in all of them.
                      </li>
                      <li>Training was focused on making us industry ready.</li>

                      <li>
                        <strong> Technologies involved : </strong>
                        React.js, Redux, Redux Saga, Nodejs,
                        Expressjs, Sails js, Rest api, MongoDB,
                        Javascript, HTML5, CSS3, Git.
                      </li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
        <br/>
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                Guvi Geek Technologies
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Full Stack Web Developer
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Duration:</strong> November 2020 - March 2021
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        Underwent intense training on full stack web development
                        (MERN) with a number of projects and hands on experience
                        with each and every technology involved. Worked on daily
                        tasks and assessments and performed well in all of them.
                      </li>
                      <li>Training was focused on making us industry ready.</li>

                      <li>
                        <strong> Technologies involved : </strong>
                        React.js, Redux, HTML5, CSS3, Bootstrap, Nodejs,
                        Express, Rest api, MySQL, MongoDB, Web pack, Typescript,
                        Javascript, AWS, Heroku, Netlify, Git.
                      </li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
