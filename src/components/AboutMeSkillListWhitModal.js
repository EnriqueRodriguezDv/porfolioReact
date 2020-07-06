import React, { createElement } from "react";
import AboutMeSkillListWhitModalCourse from "./AboutMeSkillListWhitModalCourse";

const AboutMeSkillListWhitModal = ({
  title,
  dataTarget,
  description,
  type,
}) => {
  return (
    <React.Fragment>
      <li
        id="listSkill"
        className="list-group-item list-group-item-action list-group-item-primary"
        data-toggle="modal"
        data-target={`#${dataTarget}`}
      >
        {title}
      </li>
      <div
        className="modal fade"
        id={dataTarget}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                {title}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p> {description} </p>
              <hr />
              <p className="mb-1">Courses</p>
              {type.map((item) => {
                if (item.type.includes(title)) {
                  return (
                    <AboutMeSkillListWhitModalCourse
                      key={item.key}
                      title={item.title}
                    />
                  );
                }
              })}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
              >
                Great!
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMeSkillListWhitModal;
