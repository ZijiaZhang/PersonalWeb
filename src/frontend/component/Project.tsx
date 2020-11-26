import {ProjectInfo} from "./Projects";
import React from "react";

export class Project extends React.Component<ProjectInfo, {}>{
    render() {
        return (
            <div className="post-container">
                <div className="post-module" style={{cursor: "pointer"}}
                     onClick={() => {window.location= (this.props.link as any)}}>

                    <div className="thumbnail">
                        <img src={this.props.image}  alt={this.props.name}/>
                    </div>

                    <div className="post-content">
                        <div className="category">
                            {this.props.status}
                        </div>
                        <h1 className="title">
                            {this.props.name}
                        </h1>
                        <h2 className="sub_title">
                            {this.props.category}
                        </h2>
                        <p className="description">
                            {this.props.description}

                        </p>
                    </div>
                </div>
            </div>
        )
        ;
    }
}