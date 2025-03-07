import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
// import Home2 from "./Home2";
import Type from "./Type";
// import Slider from "./slider";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "450px",
                  // width: "250px", // Set a fixed width
                  // height: "250px", // Set a fixed height
                  borderRadius: "50%", // Make it circular
                  objectFit: "cover", // Ensure the image fits within the circle
                  border: "5px solid #333" // Add a border
                }}
                
              />
            </Col>

            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 20, marginLeft: 120 }} className="heading">
                Hello There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{ paddingBottom: 20, marginLeft: 120, fontSize: '60px' }}>
  I'm
  <strong className="main-name"> SUSHANT </strong>
</h1>

              <div style={{ padding: 50,  marginLeft: 120 ,textAlign: "centre" }}>
                {/* <Type /> */}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
      {/* <Slider /> */}
    </section>
  );
}

export default Home;
