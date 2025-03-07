import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Programmer",
          "Student",
          "Tech Enthusiast",
          "Learner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40, // Adjusted delete speed
        typeSpeed: 80,   // Adjusted type speed
        backDelay: 1000, // Delay before backspacing
        cursor: "|",     // Custom cursor
        delay: 100,      // Delay between each character
      }}
    />
  );
}

export default Type;
