import React from 'react';

const AboutMeCarouselItem = ({ dip, active }) => {
    return (
        <React.Fragment>
            <div className={`carousel-item ${active}`}>
                <img src={dip} className="d-block w-100" alt="..." />
            </div>
        </React.Fragment>
    )
}

export default AboutMeCarouselItem;