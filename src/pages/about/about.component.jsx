import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
// import Profile from "../../assets/img/profile/profile.webp";
// import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 px-4 align-items-center">
            <Col>
              <Row className=" align-items-start p-4 my-details rounded">
                Hi there! I am <strong>&nbsp;Mounika Akki</strong>
                <br />
                <ul>
                  <li>
                    A passionate programmer born and brought up in India. I am a
                    Full Stack Web Developer with React.js, Express.js, Node.js,
                    and MongoDB as my tech stack.
                  </li>
                  <li>
                    Working on multiple projects as a full stack developer at
                    wysa
                  </li>
                  <li>
                    Trained in Full Stack Development-MERN Stack from Guvi with
                    hands on experience on all technologies involved working on
                    numerous projects.
                  </li>
                  <li>
                    I love learning about new technologies, what problems they
                    solve and How can I use them to build better and scalable
                    products.
                  </li>
                </ul>
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1VKlUv2DSeEbXtK7v37GCEbfNzQoUE1Aw/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/Mounika-akki"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/mounika-akki-857816196/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
