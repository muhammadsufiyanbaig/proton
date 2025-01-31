import React, { Component } from "react";

import "./careers.css";

class Careers extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render() {
        return (
            <div className="fontstyle2" style={{width:"100%",height:"100vh",justifyContent:"center",display:"flex",alignItems:"center",fontSize:"20px" }}>
                
                Send your resumes at <span style={{borderBottom:"2px solid black",marginLeft:"5px"}}> careers@proton.com.pk</span>
                
            </div>
        );
    }
}

export default  Careers;
