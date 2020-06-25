import React from 'react';
import api from '../InitialState.json';

import AboutMeCarousel from "./AboutMeCarousel";
import AboutMeSkillListWhitModal from './AboutMeSkillListWhitModal';

import '../assets/style/components/aboutMe.scss';

const AboutMe = () => {
    return (
        <section id="aboutMe" className="">
            <div className="container-fluid">
                <h2 className="text-center pt-3" >About Me</h2>

                <div className="row">
                    <div className="col-12 col-md-8 d-flex flex-column pt-4 pb-4">
                        <div className="col">
                            <p>uerpo argumentativo y la conclusión. A pesar de que la mayoría de los textos argumentativos suele presentar estos tres elementos, puede ocurrir que esté ausente alguno de ellos: la tesis, en muchos casos, es sustituida por una exposición inicial sobre el tema que se va a tratar. Es muy importante, por esta razón, señalar que el texto expositivo y argumentativo funcionan
                            conjuntamente en el caso de la argumentación: no podemos defender ideas o situaciones sin haberlas puesto, previamente, en conocimiento de nuestro receptor.
                            La tesis
                            Es la idea fundamental en torno a la que se reflexiona; puede aparecer al principio o al final del texto y ocupa un párrafo, también al inicio o al final. En este último caso muchas veces se omite la conclusión por considerarse innecesaria, pues es la tesis la que ocupa su lugar.
                            Es muy importante que la tesis esté formulada de forma clara, dado que es el núcleo en torno al cual gira la argumentación que se va a desarrollar a continuación.
                            </p>
                        </div>
                        <div className="row">
                            <div className="carouselOne col">
                                <AboutMeCarousel dataTarget="#firstCarousel" dataTargetId="firstCarousel" />
                            </div>

                            <div className="carouselTwo col">
                                <AboutMeCarousel dataTarget="#secondCarousel" dataTargetId="secondCarousel" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <ul className="list-group list-group-flush text-center mt-2 mb-2">
                            {api.initialState.skillList.map(item => {
                                return (
                                    <AboutMeSkillListWhitModal key={item.key} title={item.skill} dataTarget={item.dataTarget} />
                                )
                            })}
                        </ul></div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;