import React from 'react';

const AboutMeSkillListWhitModal = ({ title, dataTarget, description }) => {
    return (
        <React.Fragment>
            <li id="listSkill" className="list-group-item list-group-item-action list-group-item-primary" data-toggle="modal" data-target={`#${dataTarget}`}>{title}</li>
            <div className="modal fade" id={dataTarget} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">{title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p> {description} </p>
                            <hr />
                            <p className="mb-1" >Courses</p>
                            <div className="badge badge-primary mr-3" role="alert">course 1</div>
                            <div className="badge badge-secondary" role="alert">course 2</div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" data-dismiss="modal">Great!</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AboutMeSkillListWhitModal;