import React from "react";
import {Experience, ExperienceProps} from "./Experience";


export class Experiences extends React.Component<{experiences: ExperienceProps[]}, {}>{
    render(){
        return (
            <section id="experience">
                <div style={{height: "100px", width: "100%", padding: "0px"}}>
                </div>
                <h1 className="sectionTitle">
                    Experiences
                </h1>
                <section id="cd-timeline" className="cd-container">
                    { this.props.experiences.map((experience, index) =>
                        <Experience  body={experience.body} color={experience.color} date={experience.date}
                                     icon={experience.icon} link={experience.link} location={experience.location}
                                     title={experience.title} left={index % 2 === 0} key={index}/>
                    )}
                </section>
            </section>
        );
    }
}