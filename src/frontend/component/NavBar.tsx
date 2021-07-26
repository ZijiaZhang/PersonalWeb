import React from "react";

export class NavBar extends React.Component<{}, {}>{
    ref = React.createRef<HTMLUListElement>();
    render() {
        return (
            <ul ref={this.ref} id="primary_nav" className="hiddenm">

                <li className="active interactive">
                    <a id="menu_control" onClick={() => this.expand()}>
                        <i className="fa fa-bars"/>
                    </a>
                </li>

                <li className="current-menu-item">
                    <a href="#">Home</a>
                </li>
                <li className="active">
                    <a href="#projects">Projects</a>
                </li>
                <li className="active">
                    <a href="#experience">Experience</a>
                </li>
                <li className="active">
                    <a href="#photos">Photos</a>
                </li>
                <li className="have-child">
                    <a>Server</a>
                    <ul>
                        <li>
                            <a href="http://files.zijiazhang.me">Files</a>
                        </li>
                    </ul>
                </li>
                <li className="active">
                    <a href="#info">Contact Me</a>
                </li>

            </ul>
        )
    }

    expand(){
        let x = this.ref.current;
        if (x) {
            if (x.className === "") {
                x.className += "hiddenm";
            } else {
                x.className = "";
            }
        }
    }
}