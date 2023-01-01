import React, { useState } from "react";
import "./project.css";

function Project() {
  const [toggleTab, setToggleTab] = useState(0);

  const toggleHandler = (index: number) => {
    setToggleTab(index);
  };
  return (
    <section className="project section" id="project">
      <h2 className="section__title">Project</h2>
      <span className="section__subtitle">What I have done</span>

      <div className="project__container container grid">
        <div className="project__content">
          <div>
            <i className="uil uil-arrow project__icon"></i>
            <h3 className="project__title">
              DSA <br /> Problem Solving
            </h3>
          </div>

          <span className="project__button" onClick={() => toggleHandler(2)}>
            View More
            <i className="uil uil-arrow-right project__button-icon"></i>
          </span>

          <div
            className={
              toggleTab === 2 ? "project__modal active-modal" : "project__modal"
            }
          >
            <div className="project__modal-content">
              <i
                className="uil uil-times project__modal-close"
                onClick={() => toggleHandler(0)}
              ></i>
              <h3 className="project__modal-title">DSA</h3>
              <p className="project__modal-description">
                Storing and Organizing data, so that it can be easy to retrieved
                and efficiently used. And Analyze the problem, optimize the code
                to improve performance.
              </p>

              <ul className="project__modal-project grid">
                <li className="project__modal-service">
                  <i className="uil uil-check-circle project__modal-icon"></i>
                  <p className="project__modal-info">
                    Arrays, Queues, Stack, Linked lists
                  </p>
                </li>

                <li className="project__modal-service">
                  <i className="uil uil-check-circle project__modal-icon"></i>
                  <p className="project__modal-info">
                    Graphs, Tree, Binary tree, Dynamic programming
                  </p>
                </li>

                <li className="project__modal-service">
                  <i className="uil uil-check-circle project__modal-icon"></i>
                  <p className="project__modal-info">Sorting Algorithm</p>
                </li>

                <li className="project__modal-service">
                  <i className="uil uil-check-circle project__modal-icon"></i>
                  <p className="project__modal-info">Searching Algorithm</p>
                </li>

                {/* <li className="project__modal-service">
                  <i className="uil uil-check-circle project__modal-icon"></i>
                  <p className="project__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="project__content">
          <div>
            <i className="uil uil-web-grid project__icon"></i>
            <h3 className="project__title">
              Frontend <br /> Development
            </h3>
          </div>

          <span className="project__button" onClick={() => toggleHandler(1)}>
            View More
            <i className="uil uil-arrow-right project__button-icon"></i>
          </span>

          <div
            className={
              toggleTab === 1 ? "project__modal active-modal" : "project__modal"
            }
          >
            <div className="project__modal-content">
              <i
                className="uil uil-times project__modal-close"
                onClick={() => toggleHandler(0)}
              ></i>
              <h3 className="project__modal-title">Frontend Developement</h3>
              <p className="project__modal-description">
                Service with more than 1 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="project__modal-project grid">
                <li className="project__modal-service">
                  <i className="uil uil-check-circle project__modal-icon"></i>
                  <p className="project__modal-info">
                    SocialE - A Phishing Simulation and Awareness System.
                  </p>
                </li>

                <li className="project__modal-service">
                  <i className="uil uil-check-circle project__modal-icon"></i>
                  <p className="project__modal-info">
                    Burgernaut - Buger Designing and Order System
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="project__content">
          <div>
            <i className="uil uil-edit project__icon"></i>
            <h3 className="project__title">
              Backend <br /> Development
            </h3>
          </div>

          <span className="project__button" onClick={() => toggleHandler(3)}>
            View More
            <i className="uil uil-arrow-right project__button-icon"></i>
          </span>

          <div
            className={
              toggleTab === 3 ? "project__modal active-modal" : "project__modal"
            }
          >
            <div className="project__modal-content">
              <i
                className="uil uil-times project__modal-close"
                onClick={() => toggleHandler(0)}
              ></i>
              <h3 className="project__modal-title">Backend Developement</h3>
              <p className="project__modal-description">
                Service with more than 1 years of experience. Providing quality
                work to clients and companies
              </p>

              <ul className="project__modal-project grid">
                <li className="project__modal-service">
                  <i className="uil uil-check-circle project__modal-icon"></i>
                  <p className="project__modal-info">
                    Online Banking Portal - Digitization KYC and Account
                    Creation.
                  </p>
                </li>

                <li className="project__modal-service">
                  <i className="uil uil-check-circle project__modal-icon"></i>
                  <p className="project__modal-info">
                    Hulaki Application - Centralized Service Distributor.
                  </p>
                </li>

                <li className="project__modal-service">
                  <i className="uil uil-check-circle project__modal-icon"></i>
                  <p className="project__modal-info">
                    Steganography - Communication of secret information.
                  </p>
                </li>

                <li className="project__modal-service">
                  <i className="uil uil-check-circle project__modal-icon"></i>
                  <p className="project__modal-info">Chat App.</p>
                </li>

                <li className="project__modal-service">
                  <i className="uil uil-check-circle project__modal-icon"></i>
                  <p className="project__modal-info">
                    Road Accident Severity Predication By Using
                    Back-Propagation.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
