import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emp from "../../Assets/Projects/emp.png";
import drum from "../../Assets/Projects/drums.png";
import qr from "../../Assets/Projects/qr.png";
import simon from "../../Assets/Projects/simon.png";
import journey from "../../Assets/Projects/journey.png";
import atm from "../../Assets/Projects/atm.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row> */}








<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={qr}
      isBlog={false}
      title="QR Code Generator"
      description="A web-based QR code generator built with React.js. Users can input text or URLs to generate QR codes instantly. The project includes options for customization, such as size and color, and allows users to download the generated QR codes."
      ghLink="https://github.com/kope264/QrCodeGen.git"
      demoLink="https://qrcodegen-production-4ab0.up.railway.app/"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={journey}
      isBlog={false}
      title="Travel Itinerary Planner"
      description="A travel itinerary planner built with React.js that helps users organize their trips by adding destinations, dates, activities, and notes. Includes a user-friendly interface and the ability to save and edit itineraries."
      ghLink="https://github.com/yourgithub/travel-itinerary"
      demoLink="https://your-demo-link.com"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={emp}
      isBlog={false}
      title="Employee Management System"
      description="A full-stack employee management system built with React.js and Node.js. It allows HR managers to add, update, and remove employees, track attendance, and manage salaries efficiently."
      ghLink="https://github.com/kope264/-react-EmployeeManagement-System.git"
      demoLink="https://react-employee-management-system-peach.vercel.app/"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={atm  }
      isBlog={false}
      title="ATM Simulator using Java GUI"
      description="A Java-based ATM simulator with a graphical user interface (Swing). It includes functionalities like account balance checking, withdrawals, deposits, and transaction history, providing a real-time banking experience."
      ghLink="https://github.com/yourgithub/atm-java-gui"
      demoLink="https://your-demo-link.com"
      
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={simon}
      isBlog={false}
      title="Simon Game"
      description="A classic memory-based Simon game built with JavaScript. Players must memorize and repeat a sequence of lights and sounds that increase in difficulty as the game progresses."
      ghLink="https://github.com/kope264/SimonGame.git"
      demoLink="https://simon-game-tawny-two-81.vercel.app/"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={drum}
      isBlog={false}
      title="Drum Set Simulator"
      description="A fun and interactive drum set simulator built with JavaScript and HTML. Users can play different drum sounds by clicking on the drum pads or using keyboard keys, mimicking a real drum set experience."
      ghLink="https://github.com/kope264/DrumSet.git"
      demoLink="https://drum-set-rho.vercel.app/"
    />
  </Col>
</Row>

      </Container>
    </Container>
  );
}

export default Projects;
