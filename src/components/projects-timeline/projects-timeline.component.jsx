import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_RestApi from "../../assets/img/projects/RestApi.jpg";
import L_AmazonClone from "../../assets/img/projects/amazon-clone.jpg";
import L_VIDEOCONFERENCE from "../../assets/img/projects/zoom-clone.jpg";
import L_TOURSPROJECT from "../../assets/img/projects/tours-project.jpg";
import L_BROCHURE from "../../assets/img/projects/brochure.jpg";
import L_CALCULATOR from "../../assets/img/projects/calculator.jpg";
import L_NEWSPAPER from "../../assets/img/projects/newspaper.jpg";
import L_QUIZAPP from "../../assets/img/projects/quiz.jpg";
import L_CHATAPP from "../../assets/img/projects/chatApp.jpg";
import L_AUTHENTICATION from "../../assets/img/projects/authentication.jpg";
import L_SECRET_MESSAGING from "../../assets/img/projects/secret-message.jpg";
import L_AGE_CALCULATOR from "../../assets/img/projects/age-calculator.jpg";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript-4.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
// import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
// import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_FIREBASE from "../../assets/img/skills/firebase-icon.svg";
import L_STRIPE from "../../assets/img/skills/stripe.svg";

import "./projects-timeline.styles.css";

const Projects = () => {
  // const [load, setLoad] = useState(false)
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: Amazon Clone */}
          <ImageEvent
            date="05/02/2021"
            className="text-center"
            text="Amazon Clone"
            src={L_AmazonClone}
            alt="Amazon Clone"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A complete clone of Amazon
                        website with all the features of a ecommerce.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Login &amp; User Authentication with firebase</li>
                          <li>Home Page</li>
                          <li>Checkout Page</li>
                          <li>Cart</li>
                          <li>Payment Processing with stripe</li>
                          <li>Orders Page</li>
                          <li>Backend using Node and Express</li>
                          <li>Data base using firestore</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_STRIPE}
                                alt="Stripe"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              Stripe
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              Firebase
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material ui"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              Material UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node JS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              Node JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express JS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              Express JS
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://amazon-clone-ecommerce.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Mounika-akki/Amazon-clone-frontend"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Login-Authentication App */}
          <ImageEvent
            date="01/03/2020"
            className="text-center"
            text="Authentication App"
            src={L_AUTHENTICATION}
            alt="Authentication App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a React
                        Authentication App where you can register, login or
                        reset password to securely access your personal data.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            Dont have an account? register with your details.
                          </li>
                          <li>Login to access your private data</li>
                          <li>JWT token to Authenticate</li>
                          <li>
                            Forgot Password? No worries. we will send you a mail
                            with reset Password link through nodemailer.
                          </li>
                          <li>
                            Reset token to make link available for only 10 min.
                          </li>
                          <li>Authorised access to private data</li>
                          <li>Backend using NodeJs and ExpressJs</li>
                          <li>
                            Data base managemnet with MongoDB and mongoose orm.
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              React
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node JS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              Node JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express JS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              Express JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              MongoDB
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://authentication-mern.netlify.app"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Mounika-akki/Authentication-mern-frontend"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Secret Messaging App */}
          <ImageEvent
            date="01/02/2020"
            className="text-center"
            text="Secret Messaging App"
            src={L_SECRET_MESSAGING}
            alt="Secret Messaging App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>A Full stack application
                        build with MERN stack to send secret messages to your
                        friend anonymously.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            Send messages to your friend without letting him
                            know who you are
                          </li>
                          <li>Delete messages which you have sent</li>
                          <li>
                            A responsive page to read the received messages.
                          </li>
                          <li>Nodemailer to send mails.</li>
                          <li>
                            Deployed frontend on netlify and backend on heroku
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SECRET_MESSAGING}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node JS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              Node JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express JS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              Express JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="BOOTSTRAP"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              Bootstrap
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://gifted-shirley-74fd25.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Mounika-akki/secret-messaging-backend"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* Project: Chat Clone */}
          <ImageEvent
            date="01/02/2020"
            className="text-center"
            text="Chat App"
            src={L_CHATAPP}
            alt="Chat App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>A React Chat Application
                        created with chat engine.io with all the functionalities
                        of Messaging App
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Login with given Credentials</li>
                          <li>Chat with your friends in real time</li>
                          <li>
                            Create a group and add members from your friends
                          </li>
                          <li>Send photos, Videos or files to your friends</li>
                          <li>Remove friends from group</li>
                          <li>Read reciepts on seen</li>
                          <li>Audio Notification on new message receival</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node JS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              Node JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS3"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2"> Chat Engine.IO</span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://eloquent-babbage-9f6cae.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Mounika-akki/Chat-app"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Video Conference App */}
          <ImageEvent
            date="28/01/2020"
            className="text-center"
            text="Video Conference App"
            src={L_VIDEOCONFERENCE}
            alt="Video Conference App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Video Conference App where
                        multiple users can connect, Chat and Video Call each
                        other in real time by forming a private room.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Multiple Users Can connect online</li>
                          <li>
                            Create rooms to chat privately using unique uuid
                          </li>
                          <li>Chat with fellow users</li>
                          <li>Mute video</li>
                          <li>Mute Audio</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node JS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              Node JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express JS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              Express JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              JavaScript
                            </span>
                          </li>

                          <li>
                            <span className="p-2">Peer JS</span>
                          </li>
                          <li>
                            <span className="p-2">Socket IO</span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://zoom-clone-video-conference.herokuapp.com/1cf6f4a4-8b0a-4ab5-b79c-59486081d2f5"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Mounika-akki/Video-Chat-App"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* Project: Weather reporting App */}
          <ImageEvent
            date="02/12/2020"
            className="text-center"
            text="Weather Reporting App"
            src={L_RestApi}
            alt="Weather Reporting App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Weather
                        Reporting App which fetches weather data of all
                        countries from RESTful Api and displays each countries
                        weather data on click. Each and every html element and
                        its functionality is created purely using Dom
                        manipulation.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            Can get real time Weather details of all the
                            countries.
                          </li>
                          <li>
                            Created with DOM manipulation, without using html
                          </li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JAVASCRIPT"
                                rounded
                                className="image-style m-1"
                              ></Image>
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>
                              CSS3
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://peaceful-montalcini-c57117.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Mounika-akki/async-await-restcountries-weatherdata/blob/main/index.html"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Calculator App */}
          <ImageEvent
            date="16/09/2020"
            className="text-center"
            text="Calculator"
            src={L_CALCULATOR}
            alt="Calculator"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a simple
                        calculator with beautiful UI created with javascript,
                        performs all Arithematic operations.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            Performs Addition, Subtraction Division,
                            Multiplication, Percentages , Negation
                          </li>
                          <li>
                            Functionality for All clear for output and backspace
                            for input.
                          </li>
                          <li>Handy to perform quick calculations with ease</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML5"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              HTML5
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="css3"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              CSS3
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://gallant-aryabhata-41cb88.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Mounika-akki/Calculator"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project:Age Calculator & Random number Generator */}
          <ImageEvent
            date="16/09/2020"
            className="text-center"
            text="Age Calculator"
            src={L_AGE_CALCULATOR}
            alt="Age Calculator"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A hibrid Application with
                        two functionalities. Age Calculator &amp; Random Number
                        Generator
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            Calculate your age by entering your date of birth.
                          </li>
                          <li>
                            Generate a random number with any number of digits
                            of your choice.
                          </li>
                          <li>
                            Responsive web app created with pure dom
                            manipulation without using html.
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="css3"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              CSS3
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://gallant-aryabhata-41cb88.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Mounika-akki/Calculator"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Quiz App */}
          <ImageEvent
            date="01/12/2020"
            className="text-center"
            text="QUIZ APP"
            src={L_QUIZAPP}
            alt="QUIZ APP"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Quiz app of
                        General knowledge questions built with Javascript.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Check your Knowledge by playing this Quiz</li>
                          <li>Each Correct answer awards you 10 points</li>
                          <li>Complete the quiz to know your total points</li>
                          <li>Responsive Design using Bootstrap</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JAVASCRIPT"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              JAVASCRIPT
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML5"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              HTML5
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="css3"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="BOOTSTRAP4"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              BOOTSTRAP4
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://sharp-swartz-534c2d.netlify.app/"
                  target="_blank"
                >
                  Play
                </UrlButton>
                <UrlButton
                  href="https://github.com/Mounika-akki/Quiz-App"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Tours Project */}
          <ImageEvent
            date="15/01/2021"
            className="text-center"
            text="Tours Project"
            src={L_TOURSPROJECT}
            alt="Tours Project"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Tours App which
                        fetches data from Api and displays available holiday
                        packages using react.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Fetches data from Api</li>
                          <li>
                            useState and useEffect hooks help changing the state
                            of display here.
                          </li>
                          <li>Toggle effect, Details display, Delete option</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style m-1"
                              ></Image>
                              React Js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JAVASCRIPT"
                                rounded
                                className="image-style m-1"
                              ></Image>
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>
                              CSS3
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://practical-austin-ea7b7a.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Mounika-akki/ToursApp-ReactJS"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Newspaper */}
          <ImageEvent
            date="15/11/2020"
            className="text-center"
            text="NEWSPAPER"
            src={L_NEWSPAPER}
            alt="NEWSPAPER"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Newspaper built with html
                        and styled using bootstrap to look just like a regular
                        newspaper.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>structured using HTML5</li>
                          <li>Styled with css and bootstrap</li>
                          <li>Toggle between pages to read more.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML5"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              HTML5
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="css3"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="BOOTSTRAP4"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              BOOTSTRAP4
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://confident-colden-3c3b22.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Mounika-akki/Newspaper-with-bootstrap"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* Project: Brochure */}
          <ImageEvent
            date="15/11/2020"
            className="text-center"
            text="Brochure"
            src={L_BROCHURE}
            alt="Brochure"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a regular Brochure
                        built using HTML and CSS without using traditional
                        Bootstrap
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Looks like built with photoshop but its isn't</li>
                          <li>
                            Can add functionalities which cant be done if we use
                            photoshop
                          </li>
                          <li>
                            Can customize it to look different in different
                            screens
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML5"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              HTML5
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="css3"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              CSS3
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://elated-swirles-460b1f.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Mounika-akki/Brochure-with-css"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default Projects;
