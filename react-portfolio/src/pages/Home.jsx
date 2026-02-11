import React from "react";
import "./Home.css";

// Assets imports (exact file names)
import certificateFile from "../assets/certificate.pdf";
import resumeFile from "../assets/resume.pdf";
import myProfileImage from "../assets/my image.png";

const Home = () => {
  return (
    <section className="firstSection">
      <div className="leftSection">
        <span className="greet">Hi, My Name is</span>

        <h1 className="name-span">Pratibha Singh</h1>

        <div className="role">
          I am a <span className="typing-text">Python Full Stack Developer</span>
        </div>

        <div className="buttons">
          <a
            href={certificateFile}
            download="certificate.pdf"
            className="btn btn-outline"
          >
            Download Certificate
          </a>

          <a
            href={resumeFile}
            download="resume.pdf"
            className="btn btn-filled"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="rightSection">
        <div className="image-box">
          <img src={myProfileImage} alt="Pratibha Singh" />
        </div>
      </div>
    </section>
  );
};

export default Home;
