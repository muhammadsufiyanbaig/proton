import React from "react";
import Safety1 from "../../assets/x70/safety/S1.png";
import Fade from 'react-reveal/Fade';


import "./safety.css";

export default class SafetyMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
    };
  }
  render() {
    return (
      <div className="X70SafetyMain X70SafetyMainM">
        <div
        className="ADASsystem"
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            paddingTop: "100px",
          }}
        >
          <div
            className="fontstyle adasText"
            style={{
              fontSize: "2.3vw",
              color: "white",
              wordSpacing: "1.5vw",
              letterSpacing: "1.7vw",
            }}
          >
            ADAS SYSTEM
          </div>
          <Fade bottom>
          <div
            className="fontstyle adasText2"
            style={{
              fontSize: "1.3vw",
              color: "white",
              wordSpacing: "0.3vw",
              paddingTop: "20px",
            }}
          >
            SEES WHAT YOU CAN’T SEE
          </div>
          </Fade>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img  className="safResX70"   src={Safety1} height="100%" width="100%" alt="Safety Main Image"/>
        </div>
      </div>
    );
  }
}
