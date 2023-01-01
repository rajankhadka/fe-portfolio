import React, { useState } from "react";
import "./qualification.css";

function Qualification() {
  const [toggleTab, setToggleTab] = useState(1);

  const toggleHandler = (index: number) => {
    setToggleTab(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleTab === 1
                ? "qualification__button qualification__active button--flex qualification__button-active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleHandler(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleTab === 2
                ? "qualification__button qualification__active button--flex qualification__button-active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleHandler(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleTab === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bachelor in Computer Engineer
                </h3>
                <span className="qualification__subtitle">TU - Kathmandu</span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">+2 Science</h3>
                <span className="qualification__subtitle">SHA - Surkhet</span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2014 - 2016
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SLC</h3>
                <span className="qualification__subtitle">SHA - Surkhet</span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2014
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleTab === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Software Engineer, Intern
                </h3>
                <span className="qualification__subtitle">
                  InfoDeveloper - Lalitpur
                </span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Software Engineer, Trainee
                </h3>
                <span className="qualification__subtitle">
                  InfoDeveloper - Lalitpur
                </span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer, Jr.</h3>
                <span className="qualification__subtitle">
                  InfoDeveloper - Lalitpur
                </span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
