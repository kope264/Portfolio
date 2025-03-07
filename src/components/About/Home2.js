import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { ImPointRight } from "react-icons/im";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Hi everyone! I’m <span className="purple">Sushant Kope </span>,
             {/* a third-year Computer Science student from Pandharpur, Maharashtra.
            I’m currently pursuing my B.Tech in Computer Science at SVERI’s College of Engineering, Pandharpur. */}

  <br />
  <br />
  I'm skilled in various languages, including
  <i>
    <b className="purple"> Java, Python and JavaScript. </b>
  </i>
  <br />
  <br />
  I like programming and eventually solving leetcode problems. i have solve 100+ problems on leetcode and also 1⭐ coder at codechef(almost 2⭐ by the way).
  <br />
  <br />
  I like working on projects, using <b className="purple"><i>Node.js</i></b> and modern JavaScript frameworks and libraries like
  <i>
    <b className="purple"> React.js </b>
  </i>
  and
  <i>
    <b className="purple"> Express.js.</b>
  </i>
  <br />
  <br />
  Beyond coding, 
  
  <ul>
            <li className="about-activity">
              <ImPointRight /> I enjoy Playing <b className="purple"><i>Football</i></b> 
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> 
          </p> 

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
