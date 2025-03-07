import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
<          p style={{ textAlign: "justify" }}>
          
            
             I’m passionate about exploring new technologies and constantly learning as I work towards building a strong foundation in the field of computer science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          

    
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
