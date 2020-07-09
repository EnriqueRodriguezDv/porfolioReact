import React from "react";
import "../assets/style/components/projectsItem.scss";

const ProjectsItem = ({
  cardImgSrc,
  cardTitle,
  cardDescription,
  cardLinkTitle,
  colorCard,
  cardLink,
  flexRow,
  offset,
  numberId,
}) => {
  let style = null;
  if (numberId % 2 === 0) {
    style = {
      left: "0",
      borderTopRightRadius: "40px",
      borderBottomRightRadius: "40px",
    };
  } else {
    style = {
      right: "0",
      borderTopLeftRadius: "40px",
      borderBottomLeftRadius: "40px",
    };
  }

  return (
    <div className={`projectItem shadow-lg col-6 ${offset} p-0`}>
      <div className={`row m-0 ${flexRow} bg-${colorCard}`} style={style}>
        <img
          src={cardImgSrc}
          className={`card-img-top`}
          alt="..."
          style={style}
        />
        <div
          className={`card-body-absolute d-flex flex-column justify-content-around align-items-center bg-${colorCard}`}
          style={style}
        >
          <h4 className="card-title text-center">{cardTitle}</h4>
          <p className="card-text d-none d-sm-block text-center">
            {cardDescription}
          </p>
          <a href={cardLink} target="_blank" className={`btn btn-${colorCard}`}>
            {cardLinkTitle}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsItem;
