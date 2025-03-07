import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about2.svg";
import Toolstack from "./Toolstack";
import EducationTimeline from "./Education";
import Home2 from "./Home2";

function About() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
    
      <Container>
      
    <Home2 />
        <Row style={{ justifyContent: "center", padding: "10px" }}>

       



         

          <Col
  md={5}
  
  className="about-img"
>
  <img
    src={laptopImg}
    alt="about"
    className="img-fluid"
    style={{
      maxHeight: "300px",
      marginTop: "200px",
      padding: "20px",
      // width: "250px", // Set a fixed width
      // height: "250px", // Set a fixed height
      borderRadius: "50%", // Make it circular
      objectFit: "cover", // Ensure the image fits within the circle
      border: "0.5px solid #fff", // Add a border
      boxShadow: "0 0 1px 1px rgba(255, 255, 255, 0.8)",
      backgroundColor: "#fff",
     
    }}
  />
</Col>

<Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="project-heading"  >
        E<strong className="purple">ducation</strong>
        </h1>
        <EducationTimeline />
            {/* <Aboutcard /> */}
          </Col>
          

        </Row>
        <br/>
       

        <h1 className="project-heading"  >
        Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />
        <br/>
        <br/>
        <br/>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        
        
        <Toolstack />
        <br/>
        <br/>
        <Github />
        <br/>
        <br/>
      </Container>
    </Container>
  );
}

export default About;
