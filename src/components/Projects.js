import React from "react";
import api from "../InitialState.json";

import ProjectsItem from "./ProjectsItem";

import space from "../assets/static/space.png";
import stone from "../assets/static/stone.png";
import dyd from "../assets/static/dyd.png";
import simon from "../assets/static/simon.jpg";
import lion from "../assets/static/lion.jpg"
import movie from "../assets/static/movie.jpg"
import notFound from "../assets/static/not-found.jpg";

import "../assets/style/components/project.scss";

const Projects = () => {
  return (
    <section id="project" className="project">
      <div className="container-fluid p-0 pt-5 pb-5">
        <h2 className="principalTitle text-center mb-5">Projects</h2>
        <div className="row flex-column-reverse m-0">
          {api.initialState.project.map((item) => {
            let img = null;
            switch (item.cardImgSrc) {
              case "space":
                img = space;
                break;
              case "stone":
                img = stone;
                break;
              case "dyd":
                img = dyd;
                break;
              case "simon":
                img = simon;
                break;
              case "lion":
                img = lion;
                break;
              case "movie":
                img = movie;
                break;
              default:
                img = notFound;
                break;
            }
            return (
              <ProjectsItem
                key={item.key}
                cardImgSrc={img}
                cardTitle={item.cardTitle}
                cardDescription={item.cardDescription}
                cardLink={item.cardLink}
                cardLinkTitle={item.cardLinkTiTle}
                colorCard={item.colorCard}
                flexRow={item.flexRow}
                offset={item.offset}
                numberId={item.key}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
