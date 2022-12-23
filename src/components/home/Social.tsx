import React from "react";

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/virus__mama/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/rajan-khadka-33bb62b9/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/rajankhadka"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
}

export default Social;
