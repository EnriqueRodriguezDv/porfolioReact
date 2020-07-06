import React from "react";
import api from "../InitialState.json";

import AboutMeCarousel from "./AboutMeCarousel";
import AboutMeSkillListWhitModal from "./AboutMeSkillListWhitModal";

import "../assets/style/components/aboutMe.scss";

const AboutMe = () => {
  return (
    <section id="aboutMe" className="">
      <div className="container-fluid">
        <h2 className="principalTitle text-center pt-3">About Me</h2>

        <div className="row">
          <div className="col-12 col-md-8 d-flex flex-column pt-4 pb-4">
            <div className="col">
              <p>
                <span>
                  <i>
                    Show me a worker with big dreams and you will find a man who
                    can change history. Show me a man without dreams, and in him
                    you will find a simple worker
                  </i>
                  <br />
                  <small>- Jame Cash Penny</small>{" "}
                </span>{" "}
                <br /> <br />{" "}
                <span>
                  Phrase with power but not complete, I would add to the{" "}
                  <a
                    className="text-secondary"
                    href="https://es.wikipedia.org/wiki/5S"
                    target="_blank"
                  >
                    <abbr
                      title="Seiri, Seiton, Seiso,
                Seiketsu and Shutsuke"
                    >
                      5S philosophy
                    </abbr>
                  </a>{" "}
                  and functional effort.{" "}
                </span>{" "}
                <br /> <br />I wish to have the freedom to create changes, to
                create news, never stop learning the tools that can make me
                improve no matter what city or country I have to go to create,
                devise and transform dreams into realities. I want to be part of
                the technological revolution of our era.
              </p>
            </div>
            <div className="row">
              <div className="carouselOne col">
                <AboutMeCarousel
                  dataTarget="#firstCarousel"
                  dataTargetId="firstCarousel"
                />
              </div>

              <div className="carouselTwo col">
                <AboutMeCarousel
                  dataTarget="#secondCarousel"
                  dataTargetId="secondCarousel"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <ul className="list-group list-group-flush text-center mt-2 mb-2">
              {api.initialState.skillList.map((item) => {
                return (
                  <AboutMeSkillListWhitModal
                    key={item.key}
                    title={item.skill}
                    dataTarget={item.dataTarget}
                    description={item.description}
                    type={api.initialState.courses.map((item) => {
                      return item;
                    })}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
