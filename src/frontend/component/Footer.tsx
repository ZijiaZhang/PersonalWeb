import React from "react";

export class Footer extends React.Component<{}, {}>{
    render() {
        return (
        <div className="component-wrapper">
            <div style={{backgroundColor: "rgba(0,0,0,1)", width: "100%"}}>

                <div className="footer">

                    <div>
                        <div style={{textAlign: "center", color: "white"}}>
                            © 2020 Zijia Zhang
                        </div>
                    </div>
                    <div className="links">
                        <a href="https://github.com/ZijiaZhang99">
                            <img src="https://zijiazhang.com/server_files/icons/github-circle.png" alt={"github-icon"}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>)
    }
}