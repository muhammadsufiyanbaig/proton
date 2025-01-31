import React from "react";
import Slide from 'react-reveal/Slide';
import Safety2 from "../../assets/x70/safety/S2.png";
import Bar1 from "../../assets/x70/safety/H1.png";
import Bar2 from "../../assets/x70/safety/H2.png";
import Bar3 from "../../assets/x70/safety/H3.png";

import Bar1Mobile from "../../assets/x70/safety/bar1mobile.png";
import Bar2Mobile from "../../assets/x70/safety/bar2mobile.png";
import Bar3Mobile from "../../assets/x70/safety/bar3mobile.png";
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
      <div className="X70SafetyImage">
        <div
        className="desktopBars"
          style={{
            position: "absolute",
            width: "100%",
            background: "rgba(0,0,0,0)",
          }}
        >
          <Slide right>
            <div className="BarStyle1">
              <img
                src={Bar3}
                alt="bar1"
                height="100%"
                width="100%"
              />
            </div>
          </Slide>
          <Slide left>
            <div className="BarStyle2">
              <img
                src={Bar2}
                alt="bar3"
                height="70%"
                width="70%"
              />
            </div>
          </Slide>
          <Slide right>
            <div className="BarStyle3">
              <img
                src={Bar1}
                alt="bar2"
                height="90%"
                width="90%"
              />
            </div>
          </Slide>
        </div>

        <div
        className="MobileBars"
          style={{
            position: "absolute",
            width: "100%",
            background: "rgba(0,0,0,0)",
            display:"none"
          }}
        >
          <Slide right>
            <div className="BarStyle1">
              <img
                src={Bar2Mobile}
                alt="bar1"
                height="100%"
                width="100%"
              />
            </div>
          </Slide>
          <Slide left>
            <div className="BarStyle2">
              <img
                src={Bar1Mobile}
                alt="bar3"
                height="100%"
                width="100%"
              />
            </div>
          </Slide>
          <Slide right>
            <div className="BarStyle3">
              <img
                src={Bar3Mobile}
                alt="bar2"
                height="100%"
                width="100%"
              />
            </div>
          </Slide>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="safetyBarImage" style={{ height: "70%", width: "70%" }}>
            <img src={Safety2} alt='safety2' height="100%" width="100%" />
          </div>         
        </div>
      </div>
    );
  }
}
