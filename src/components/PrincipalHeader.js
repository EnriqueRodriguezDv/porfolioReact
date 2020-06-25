import React from 'react';
import imgMain from '../assets/static/imgMain.png'
import '../assets/style/components/principalHeader.scss'

const PrincipalHeader = () => {
    return (
        <main id="principal" className="principalHeader container-fluid">
            <div className="row">
                <div className="col-12 col-sm-6 p-0 order-sm-2">
                    <figure className="figure m-0 mt-5">
                        <img className="figure-img img-fluid m-0" src={imgMain}></img>
                    </figure>
                </div>
                <div className="inspiringSentence col-sm-6 order-sm-1">
                    <h1>
                        Seeking how can
                        <br />
                        get better day a day.
                        <br />
                        Developed JavaScript
                    </h1>
                </div>
            </div>
        </main>
    )
}

export default PrincipalHeader;