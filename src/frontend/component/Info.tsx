import React from "react";

export class Info extends React.Component<{}, {}>{
    render() {
        return (<section id="info">
            <div className="simple-chord--wrapper component-wrapper" style={{backgroundColor: "rgba(100,100,100,0.7)"}}>
                <div className="simple-chord--inner"
                     style={{opacity: 1, color: "white",marginLeft: "10%",marginRight: "10%"}}>
                    <div className="h-font h2">About</div>
                    <div className="simple-chord--text body-text">
                        <div>
                            <div> Studying in University of British Columbia
                            </div>
                            <div> Bachelor of Science</div>
                            <div> Major in Computer Science</div>
                            <div> Interested in AI, Graphics, Human Computer Interaction</div>
                            <div> Expect Graduation: 2021</div>
                        </div>
                    </div>
                </div>
                <div className="simple-chord--inner"
                     style={{opacity: 1, color: "white",marginLeft: "10%",marginRight: "10%"}}>
                    <div className="h-font h2">Contact</div>
                    <div className="simple-chord--text body-text">
                        <div>
                            <div>E-mail: &nbsp;<a className="emaillink"
                                                  href="mailto:zijia.zhang99@gmail.com">&nbsp;&nbsp; Zijia.Zhang99@gmail.com</a>
                            </div>
                            <div> Phone: &nbsp;&nbsp; (647)219-4689</div>
                            <div><br/></div>
                            2205 Lower Mall<br/> PO Box 1380<br/>
                            <div> Vancouver, BC, Canada</div>
                            <div>V6T1Z4<br/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
    }
}