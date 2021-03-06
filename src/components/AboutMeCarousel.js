import React from "react";
import api from "../InitialState.json";

import AboutMeCarouselItem from "./AboutMeCarouselItem";

import apiRest from "../assets/static/diploma/apiRest.svg";
import asynchronism from "../assets/static/diploma/asynchronism.svg";
import basicJS from "../assets/static/diploma/basicJS.svg";
import basicProgramming from "../assets/static/diploma/basicProgramming.svg";
import bootstrap from "../assets/static/diploma/boostrap.svg";
import developingWebOnline from "../assets/static/diploma/developingWebOnline.svg";
import ecmaScript from "../assets/static/diploma/ecmaScript.svg";
import engineer from "../assets/static/diploma/engineer.svg";
import frontendDeveloper from "../assets/static/diploma/frontendDeveloper.svg";
import fundamentalJS from "../assets/static/diploma/fundamentalJS.svg";
import fundamentalNodeJS from "../assets/static/diploma/fundamentalNodeJS.svg";
import fundamentalsBd from "../assets/static/diploma/fundamentalsBd.svg";
import git from "../assets/static/diploma/git.svg";
import introductionWebDevelopment from "../assets/static/diploma/introductionWebDevelopment.svg";
import javascriptProfessional from "../assets/static/diploma/javascriptProfessional.svg";
import oop from "../assets/static/diploma/oop.svg";
import preWork from "../assets/static/diploma/preWork.svg";
import react from "../assets/static/diploma/react.svg";
import reactPractice from "../assets/static/diploma/reactPractice.svg";
import responsiveDesign from "../assets/static/diploma/responsiveDesign.svg";
import scope from "../assets/static/diploma/scope.svg";
import sqlMysql from "../assets/static/diploma/sqlMysql.svg";
import terminal from "../assets/static/diploma/terminal.svg";
import typescript from "../assets/static/diploma/typescript.svg";
import V8 from "../assets/static/diploma/V8.svg";
import webpack from "../assets/static/diploma/webpack.svg";
import postman from "../assets/static/diploma/postman.svg";
import npm from "../assets/static/diploma/npm.svg";
import redux from "../assets/static/diploma/redux.svg";
import router from "../assets/static/diploma/reactRouter.svg";
import routerRedux from "../assets/static/diploma/RouterRedux.svg";
import nodeJs from "../assets/static/diploma/nodeJs.svg";
import hapi from "../assets/static/diploma/hapi.svg";
import nodePractice from "../assets/static/diploma/nodePractice.svg";
import functional from "../assets/static/diploma/funcional.svg";
import mongodb from "../assets/static/diploma/mongodb.svg";
import graphql from "../assets/static/diploma/graphql.svg";
import express from "../assets/static/diploma/express.svg";
import backendNodejs from "../assets/static/diploma/backendNodejs.svg";
import ssr from "../assets/static/diploma/ssr.svg";
import next from "../assets/static/diploma/next.svg";
import notFound from "../assets/static/not-found.jpg";

const AboutMeCarousel = ({ dataTarget, dataTargetId }) => {
  return (
    <div id={dataTargetId} className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {api.initialState.courses.map((item) => {
          return (
            <li
              key={item.key}
              data-target={dataTarget}
              data-slide-to={item.key}
              className={item.active}
            ></li>
          );
        })}
      </ol>
      <div className="carousel-inner">
        {api.initialState.courses.map((item) => {
          let img = null;
          switch (item.img) {
            case "asynchronism":
              img = asynchronism;
              break;
            case "basicJS":
              img = basicJS;
              break;
            case "basicProgramming":
              img = basicProgramming;
              break;
            case "developingWebOnline":
              img = developingWebOnline;
              break;
            case "ecmaScript":
              img = ecmaScript;
              break;
            case "engineer":
              img = engineer;
              break;
            case "frontendDeveloper":
              img = frontendDeveloper;
              break;
            case "fundamentalJS":
              img = fundamentalJS;
              break;
            case "fundamentalsBd":
              img = fundamentalsBd;
              break;
            case "git":
              img = git;
              break;
            case "introductionWebDevelopment":
              img = introductionWebDevelopment;
              break;
            case "javascriptProfessional":
              img = javascriptProfessional;
              break;
            case "oop":
              img = oop;
              break;
            case "preWork":
              img = preWork;
              break;
            case "react":
              img = react;
              break;
            case "reactPractice":
              img = reactPractice;
              break;
            case "responsiveDesign":
              img = responsiveDesign;
              break;
            case "sqlMysql":
              img = sqlMysql;
              break;
            case "terminal":
              img = terminal;
              break;
            case "typescript":
              img = typescript;
              break;
            case "apiRest":
              img = apiRest;
              break;
            case "bootstrap":
              img = bootstrap;
              break;
            case "fundamentalNodeJS":
              img = fundamentalNodeJS;
              break;
            case "scope":
              img = scope;
              break;
            case "V8":
              img = V8;
              break;
            case "webpack":
              img = webpack;
              break;
            case "postman":
              img = postman;
              break;
            case "npm":
              img = npm;
              break;
            case "redux":
              img = redux;
              break;
            case "router":
              img = router;
              break;
            case "routerRedux":
              img = routerRedux;
              break;
            case "nodeJs":
              img = nodeJs;
              break;
            case "hapi":
              img = hapi;
              break;
            case "nodePractice":
              img = nodePractice;
              break;
            case "functional":
              img = functional;
              break;
            case "mongodb":
              img = mongodb;
              break;
            case "graphql":
              img = graphql;
              break;
            case "express":
              img = express;
              break;
            case "backendNodejs":
              img = backendNodejs;
              break;
            case "ssr":
              img = ssr;
              break;
            case "next":
              img = next;
              break;
            default:
              img = notFound;
              break;
          }

          // temporal function, remove went active diploma, item.active
          let courseActive = null;
          const active = () => {
            if (dataTarget === "#firstCarousel" && item.key === 0) {
              courseActive = "active";
            }
            if (dataTarget === "#secondCarousel" && item.key === 11) {
              courseActive = "active";
            }
          };
          active();
          // --------------------------------------------------

          return (
            <AboutMeCarouselItem
              key={item.key}
              dip={img}
              active={courseActive}
              data={item.img}
            />
          );
        })}
      </div>
      <a
        className="carousel-control-prev"
        href={dataTarget}
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href={dataTarget}
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default AboutMeCarousel;
