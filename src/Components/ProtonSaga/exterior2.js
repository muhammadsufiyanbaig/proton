import React from "react";
import Grid from "@material-ui/core/Grid";
import Exterior2 from "../../assets/images/exterior2.png";
import AlloyRims from "../../assets/images/alloyRims.png";
import HeadShake from "react-reveal/HeadShake";

import RemoveIcon from "@material-ui/icons/Remove";

import Fade from "react-reveal/Fade";


import "./protonsaga.css";


export default class ExteriorGrid extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Grid
            container
            className="GridMarginTopBottomExterior exterior2Desktop"
            ref={this.exteriorDiv2}
          >
            <Grid item xs={0} sm={1}></Grid>
            <Grid item xs={12} sm={4}>
              <Fade left>
                <div
                  style={{ width: "100%" }}
                  className="ExteriorMinimiGridText"
                >
                  <div style={{ color: "black" }}>
                    <h2
                      className="fontstyle exteriorHeading"
                      style={{ fontSize: "3vw", letterSpacing: "-2px" }}
                    >
                      Exhilarating <span className="fontstyle2">style</span>
                    </h2>
                  </div>

                  <div style={{ color: "black", paddingTop: "35px" }}>
                    <p
                      className="fontstyle exterior2Text1"
                      style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }}
                    >
                      The redesigned rear bumper and spoiler,compliments the
                        exterior and gives a distinct rear garnish to the ride.{" "}
                    </p>
                  </div>

                  <div style={{ color: "black", paddingTop: "35px" }}>
                    <p
                      className="fontstyle exterior2Text1"
                      style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }}
                    >
                      * 15 inch Alloy rims are available in the Premium AT
                        variant only.{" "}
                    </p>
                  </div>

                  <div style={{ color: "black", paddingTop: "35px" }}>
                    <p
                      className="MontserratRegular experianceMore"
                      style={{ fontSize: "1.1vw", color: "red" }}
                    >
                      {" "}
                      <span>
                        <RemoveIcon
                          onClick={() => this.props.onClickMinimize()}
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            borderRadius: 10,
                            height: 30,
                            width: 45,
                          }}
                        />
                      </span>
                      <span style={{ paddingLeft: "0.7vw" }}>MINIMIZE</span>{" "}
                    </p>
                  </div>
                </div>
              </Fade>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <Fade right>
                  <div style={{ height: "100%", width: "100%" }}>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        paddingLeft: "6vw",
                      }}
                    >
                      <img
                        src={Exterior2}
                        alt="Exterior"
                        height="100%"
                        width="100%"
                      />
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="alloyRim"
                style={{ position: "relative", top: "-57px", right: "14%" }}
              >
                <Fade left delay={500}>
                  <div style={{ width: "350px", height: "auto" }}>
                    <img
                      src={AlloyRims}
                      alt="Exterior"
                      height="auto"
                      width="100%"
                    />
                  </div>
                </Fade>
              </div>
            </Grid>
            <Grid item xs={0} sm={1}></Grid>
          </Grid>
        </div>
        {/* experiance more End */}


        {/* mobile */}
        <div className="exterior2MainDivMobile" style={{ display: "none" }}>

          <div className="TopAllImages" style={{ width: "100%", height: "100%" }}>
            <img className="ExteriorImage" src={Exterior2} alt="Exterior" height="100%" width="100%" />
          </div>

          <div style={{ width: "100%" }} className="ExteriorGridText">
           
             <div className="allDivsMainHeadings" style={{marginTop:"35px" }} >
                        <h2 className="fontstyle " style={{ fontSize: "25px",letterSpacing: "-2px" }}> Exhilarating<span className="fontstyle2 sth">style</span></h2>
                    </div>
            <div className="exteriorGridTextInnerDiv" style={{ color: "black", paddingTop: "35px", marginLeft: "4vw", width: "72%" }}>
              <p
                className="fontstyle exteriorText1"
                style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }}
              >
                The redesigned rear bumper and spoiler,compliments the
                 exterior and gives a distinct rear garnish to the ride.{" "}
              </p>
            </div>

            <div className="exteriorGridTextInnerDiv" style={{ color: "black", paddingTop: "35px", marginLeft: "4vw", width: "68%" }}>
              <p
                className="fontstyle  exteriorText1"
                style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }}
              >
               * 15 inch Alloy rims are available in the Premium AT
                        variant only.
                </p>
            </div>

            {/* mobile */}
            <HeadShake >
              <div  onClick={() => this.props.onClickMinimize()} className="mobileExperianceMoreButton" style={{ color: "black", paddingLeft: "30px", display: "flex", alignItems: "center", marginTop: "5%", display: "none" }}>
                    <div style={{ backgroundColor: "black", width: "11%", display: "flex", justifyContent: "center", borderRadius: "10px" }}>
                      <RemoveIcon
                        style={{
                          color: "white",
                        }}
                      />
                    </div>
                  
                <div style={{ color: "red", paddingLeft: "10px", fontSize: "13px" }}>
                MINIMIZE
                   </div>
              </div>
            </HeadShake>
            {/* mobile end */}
          </div>

        </div>

        {/* mobile end */}


      </div>
    );
  }
}
