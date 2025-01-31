import React from "react";
import Grid from "@material-ui/core/Grid";
import Safety from "../../assets/x70/safety/safety.gif";

import RemoveIcon from "@material-ui/icons/Remove";
import Slide from "react-reveal/Slide";

import "./safety.css";
export default class ExteriorGrid extends React.Component {
  constructor(props) {
    super(props);
    this.exteriorDiv = React.createRef();
    this.exteriorDiv2 = React.createRef();

    this.state = {
      animate: false,
      expandExterior: false,
      scrollToExteriorDiv: false,
    };
  }
  scrollToMyRefUp = (to) => window.scrollTo(0, to.current.offsetTop);

  componentDidUpdate(prevProps, prevState) {
    if (this.state.expandExterior) {
      this.scrollToMyRefUp(this.exteriorDiv2);
    }
  }

  removeEvent() {
    this.scrollToMyRefUp(this.exteriorDiv);
    this.setState({ expandExterior: false });
  }

  render() {
    return (
      <div>
        <Grid
          container
          className="GridMarginTopSafetyX70 GridMarginTopSafetyX70M"
          ref={this.exteriorDiv}
        >
          <Grid item xs={0} sm={0}></Grid>
          <Grid item xs={12} sm={6}  >
            <Slide left>
              <div className="safety4M" style={{ width: "90%", height: "93%", marginLeft: "16%" }}>
                <img src={Safety} alt="Exterior" height="100%" width="100%" />
              </div>
            </Slide>
          </Grid>
          <Grid item xs={12} sm={5}>
            <div style={{ width: "100%" }} className="ExteriorGridTextX70">
              <div style={{ color: "black" }}>
                <h2
                  className="fontstyle safetyFirst"
                  style={{ fontSize: "3vw", letterSpacing: "-2px" }}
                >
                  Intelligent <span className="fontstyle2">monitoring</span>
                </h2>
              </div>
              <div style={{ color: "black", paddingTop: "35px" }}>
                <p
                  className="fontstyle safetytext"
                  style={{
                    fontSize: "1.3vw",
                    letterSpacing: "-0.8px",
                    color: "black",
                  }}
                >
                  Inclusive of detecting vehicles at blind spots, using 9
                  advanced sensors and 5 cameras alleviate the risk of unseen
                  errors. And, intelligent LED headlamps deactivate from a high
                  to low beam in the direction of an oncoming vehicle for
                  improved vision.
                </p>
              </div>
              <div className="safetyM4" style={{ color: "black", paddingTop: "35px", width: "70%" }}>
                <p
                  className="fontstyle safetytext"
                  style={{
                    fontSize: "1.2vw",
                    letterSpacing: "-0.8px",
                    color: "black",
                    width: "32vw",
                  }}
                >
                  * The ADAS safety features are not a substitute for safe and
                  attentive driving. Driver remains responsible for safe vehicle
                  operation at all times.
                </p>
              </div>

            </div>
          </Grid>
          <Grid xs={0} sm={1}></Grid>
        </Grid>
        {/* experiance more */}


        <div className="safetyMainDivMobile m" style={{ display: "none" }}>

          <div className="performanceX70Image1Main" style={{ width: "100%",paddingLeft:"10px" }}>
            <img className="performanceX70Image1" src={Safety} alt="safety" height="100%" width="95%" />
          </div>
          <div style={{ width: "100%" }} className="ExteriorGridText">

            
            <div style={{ color: "black" }}>
              <h2 className="fontstyle perfor2X70Head" style={{ fontSize: "3vw", letterSpacing: "-2px" }}>Intelligent<span className="fontstyle2 sth">monitoring</span></h2>
            </div>

            <div className="exteriorGridTextInnerDiv" style={{ color: "black", paddingTop: "35px" }}>
              <p className="fontstyle exteriorText1" style={{ fontSize: "1.3vw", letterSpacing: "-0.8px", color: "black" }} >
                Inclusive of detecting vehicles at blind spots, using 9
                advanced sensors and 5 cameras alleviate the risk of unseen
                errors. And, intelligent LED headlamps deactivate from a high
                to low beam in the direction of an oncoming vehicle for
                improved vision.
                </p>

              <p className="fontstyle exteriorText1" style={{ fontSize: "1.3vw", letterSpacing: "-0.8px", color: "black" }} >
                * The ADAS safety features are not a substitute for safe and
                attentive driving. Driver remains responsible for safe vehicle
                operation at all times.
                </p>
            </div>


          </div>
        </div>
      </div>
    );
  }
}
