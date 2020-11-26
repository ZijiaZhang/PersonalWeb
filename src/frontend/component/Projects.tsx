import React from "react";
import {Project} from "./Project";


export interface ProjectInfo {
    name: string;
    image: string;
    status: string;
    category: string;
    description: string;
    link: string;
}

export interface ProjectsProps {
    projects: ProjectInfo[];
}

export class Projects extends React.Component<ProjectsProps, {}>{
   render() {
       return (<section id="projects">
           <div className="component-wrapper">
               <div className="project-outer">
                   <div style={ {height: "100px", width: "100%", padding: "0px"}}>
                   </div>

                   <h1 className="sectionTitle">
                       Projects
                   </h1>

                   <div style={{width: "100%", display: "flex", flexWrap: "wrap"}}>
                       {this.props.projects.map( (info) =>
                           <Project name={info.name} image={info.image} status={info.status} category={info.category} description={info.description} link={info.link} key={info.name}/>)}
                   </div>
               </div>
           </div>
       </section>)
   }
}