import React from "react";
import Grid from "@material-ui/core/Grid";
import { Spring } from "react-spring/renderprops";
import { Waypoint } from "react-waypoint";
import Fade from 'react-reveal/Fade';


import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import HeadShake from "react-reveal/HeadShake";

import Performance from "../../assets/x70/performance/performanceX70.png"


import "./performance.css"
import EngineSoundicon from "../../assets/images/EngineSoundicon.png";
import EngineSound from "../../assets/sounds/X70enginesound.mp3";

export default class PerformanceGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      animation: false,
    };
  }
  playEngineSound() {
    const sound = document.getElementById("engineSound");
    sound.play();
  }
  render() {

    return (
      <div>
        <Grid
          container
          className="performanceGridX70"
          ref={this.performanceDiv}
        >
          <Grid item xs={0} sm={1} />
          <Grid item xs={12} sm={5}>
            <div
              className="performanceGridText"
              style={{ width: "100%", height: "100%" }}
            >
              <div>
                <h2
                  className="fontstyle headX70Perf"
                  style={{ fontSize: "3vw", letterSpacing: "-2px" }}
                >
                  Discover <span className="fontstyle2"> liberation</span>
                </h2>
              </div>
              <div
                style={{ color: "black", paddingTop: "35px", width: "100%" }}
              >
                <p
                  className="fontstyle text1X70Perf"
                  style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }}
                >
                  The X70 is equipped with 1.5 TGDI Engine with Dual Clutch CVT transmision, giving all the power
                  you need. Designed for the road ahead, the engine is co-developed by Geely and Volvo which advocates a
                  more-spirited drive every time, fulfilling all performance demands.
                </p>
              </div>


              <Fade bottom>
                <div className="performanceFlexDivX70" style={{ display: "flex", paddingTop: "2vw" }}>
                  <div
                    className="performanceFlexDivInnerX70"
                    style={{
                      borderRight: "1px solid black",
                      width: "30%",
                      height: "12vh",
                      paddingTop: "7px",
                    }}
                  >
                    <h2
                      className="fontstyle2 head1SagaPerf"
                      style={{ fontSize: "1.65vw", letterSpacing: "-0.8px" }}
                    >
                      AWD
                  </h2>
                    <p
                      className="fontstyle text2SagaPerf"
                      style={{
                        fontSize: "0.85vw",
                        lineHeight: "1vw",
                        paddingTop: "0.4vw",
                        letterSpacing: "-0.8px",
                        paddingRight: "1vw"
                      }}
                    >
                      The AWD variant instantly controls traction and torque,in all weather conditions.
                  </p>
                  </div>

                  <div
                    style={{
                      borderRight: "1px solid black",
                      width: "30%",
                      height: "12vh",
                      padding: "10px",
                    }}
                  >
                    <div >
                      <h2
                        className="fontstyle2 head1SagaPerf"
                        style={{
                          fontSize: "1.65vw",
                          letterSpacing: "-0.8px",
                        }}
                      >
                        177 Bhp

                     </h2>
                    </div>
                    <p
                      className="fontstyle text2SagaPerf"
                      style={{
                        fontSize: "0.85vw",
                        lineHeight: "1vw",
                        paddingTop: "0.4vw",
                        letterSpacing: "-0.8px",
                      }}
                    >
                      Improved handling with of endless power.
                    </p>
                  </div>



                  <div
                    style={{
                      width: "30%",
                      height: "25%",
                      padding: "10px",
                    }}
                  >

                    <div >
                      <h2
                        className="fontstyle2 head1SagaPerf"
                        style={{
                          fontSize: "1.65vw",
                          letterSpacing: "-0.8px",
                        }}
                      >
                        255 Nm
                            </h2>
                    </div>
                    <p
                      className="fontstyle text2SagaPerf"
                      style={{
                        fontSize: "0.85vw",
                        lineHeight: "1vw",
                        paddingTop: "0.4vw",
                        letterSpacing: "-0.8px",
                      }}
                    >
                      High torque for a powerful yet efficient drive.

                    </p>
                  </div>
                </div>
              </Fade>
              <HeadShake>
                <div
                  style={{
                    color: "black",
                    paddingTop: "50px",
                    cursor: "pointer",
                  }}
                >
                  <p
                    className="MontserratRegular  experianceMoreX70"
                    style={{ fontSize: "1.1vw", color: "red" }}
                  >
                    <span>
                      {this.props.isExpanded ? (
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
                      ) : (
                          <AddIcon
                            onClick={() => this.props.onClickExperience()}

                            style={{
                              backgroundColor: "black",
                              color: "white",
                              borderRadius: 10,
                              height: 30,
                              width: 38,
                            }}
                          />
                        )}
                    </span>{" "}
                    <span style={{ paddingLeft: "0.7vw" }}>
                      EXPERIENCE MORE
                    </span>
                  </p>
                </div>
              </HeadShake>
            </div>
          </Grid>
          <Grid className="enginAndImage" item xs={12} sm={5} style={{ width: "100%", display: "flex", marginTop: "1%" }}>
            <div className="enginSoundX70"
              style={{ width: "30%", display: "flex", alignItems: "flex-end", marginLeft: "12%", marginBottom: "2%" }}
            >
              <audio id="engineSound">
                <source src={EngineSound} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <img
                src={EngineSoundicon}
                width="100%"
                alt="enginesoundicon"
                height="auto"
                style={{ cursor: "pointer", display: "none" }}
                onClick={this.playEngineSound.bind(this)}
              />
            </div>
            <Fade right>
              <div className="performanceX70Image1MAinDiv" style={{ width: "65%", display: "flex", justifyContent: "flex-end" }}>
                <img
                  className="performanceX70Image1"
                  src={Performance}
                  alt="performance"
                  height="auto"
                  width="100%"
                />
              </div>

            </Fade>
          </Grid>
          <Grid item xs={0} sm={1} />
        </Grid>




        {/* mobile */}
        <div className="safetyMainDivMobile" style={{ display: "none" }}>

          <div className="performanceX70Image1Main" style={{ width: "100%" }}>
            <img className="performanceX70Image1" src={Performance} alt="Exterior" height="100%" width="85%" />
          </div>

          <div style={{ width: "100%" }} className="ExteriorGridText">

            <div style={{ color: "black" }}>
              <h2 className="fontstyle perfor2X70Head" style={{ fontSize: "3vw", letterSpacing: "-2px" }}>Discover<span className="fontstyle2 sth">liberation</span></h2>
            </div>
            <div className="exteriorGridTextInnerDiv" style={{ color: "black", paddingTop: "35px", marginLeft: "4vw", width: "72%" }}>
              <p
                className="fontstyle exteriorText1"
                style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }}
              >
                The X70 is equipped with 1.5 TGDI Engine with Dual Clutch CVT transmision, giving all the power
                you need. Designed for the road ahead, the engine is co-developed by Geely and Volvo which advocates a
                more-spirited drive every time, fulfilling all performance demands.
                </p>
            </div>


            <div style={{ width: "93%", margin: "30px 0px 0px 0px" }} >
              <Fade bottom delay={2000}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className="fontstyle2" style={{ borderRight: "2px solid #000000", width: "33%", color: "#000000", display: "flex", justifyContent: "center" }}>
                    AWD
                 </div>


                  <div className="fontstyle2" style={{ borderRight: "2px solid #000000", width: "33%", color: "#000000", display: "flex", justifyContent: "center" }}>
                    177 Bhp
                  </div>


                  <div className="fontstyle2" style={{ width: "33%", color: "#000000", display: "flex", justifyContent: "center" }}>

                    <div >
                      255 Nm
                          </div>

                  </div>
                </div>
              </Fade>

            </div>

            {/* mobile experiance button */}
            <HeadShake >
              <div onClick={() => this.props.onClickExperience()}
                className="mobileExperianceMoreButton" style={{ color: "black", paddingLeft: "30px", display: "flex", alignItems: "center", marginTop: "5%", display: "none" }}>

                {this.props.isExpanded ? (
                  <div style={{ backgroundColor: "black", width: "11%", display: "flex", justifyContent: "center", borderRadius: "10px" }}>
                    <RemoveIcon
                      style={{
                        color: "white",
                      }}
                      onClick={() => this.props.onClickMinimize()}

                    />
                  </div>

                ) : (
                    <div style={{ backgroundColor: "black", width: "11%", display: "flex", justifyContent: "center", borderRadius: "10px" }}>
                      <AddIcon
                        style={{
                          color: "white",
                        }}
                      />
                    </div>
                  )}
                <div style={{ color: "red", paddingLeft: "10px", fontSize: "13px" }}>
                  EXPERIENCE MORE
                 </div>
              </div>
            </HeadShake>
            {/* mobile experiance button end */}
          </div>

        </div>


        {/* mobile end */}
      </div>
    );
  }
}
