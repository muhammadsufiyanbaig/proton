import React from "react";
import Grid from "@material-ui/core/Grid";
import connectivity1 from "../../assets/x70/connectivity/connectivity1X70.png";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Fade from "react-reveal/Fade";
import HeadShake from "react-reveal/HeadShake";
import ExperienceSound from "../../assets/x70/connectivity/Sound.png";
import HiProton from "../../assets/sounds/X70hiproton.mp3";



export default class SafetyOurPriorityGrid extends React.Component {

  playHiProton() {
    const sound = document.getElementById("hiProton");
    sound.play();
  }

  render() {
    return (
      <div>
        <Grid container ref={this.SafetyDiv}>
          <Grid item xs={12} sm={12}>
            <div className="safetyheadingX70 refinedMobile" style={{ marginBottom: "2%" }}>
              <h2 className="fontstyle refinedConnectivity" style={{ fontSize: "2.7vw" }}>
                REFINED CONNECTIVITY
              </h2>
            </div>
          </Grid>
        </Grid>


        <Grid container className="GridMarginTopBottomSafety">
          <Grid item xs={0} sm={1}></Grid>
          <Grid item xs={12} sm={5}>
            <div style={{ width: "82%" }} className="safetyGridText safetyGridTextM">
              <div style={{ color: "black" }}>
                <h2
                  className="fontstyle commandControl"
                  style={{ fontSize: "3vw", letterSpacing: "-2px" }}
                >
                  Command in <span className="fontstyle2">control</span>
                </h2>
              </div>
              <div style={{ color: "black", paddingTop: "35px" }}>
                <p
                  className="fontstyle perfor2X70Text"
                  style={{
                    fontSize: "1.3vw",
                    letterSpacing: "-0.8px",
                    color: "black",
                  }}
                >
                  Elegantly displayed, the 8-inch multi-media infotainment unit,
                  mirroring your android through smart phone connectivity will
                  be ideal for a seamless ride. Along with{" "}
                  <span style={{ fontWeight: 1000 }}>Hi PROTON</span> feature, powered with <span style={{ fontWeight: 1000 }}>Artificial Intelligence </span>
                  that compliments the acoustics as you venture into.
                </p>
              </div>

              <div style={{ color: "black", paddingTop: "20px", width: "100%" }}>
                <p
                  className="fontstyle perfor2X70Text"
                  style={{
                    fontSize: "1.1vw",
                    letterSpacing: "-0.8px",
                    color: "black",
                  }}
                >
                  * Control features like AC, windows, infotainment unit, etc
                  through voice command.{" "}
                </p>
              </div>


              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px", }}>
                <HeadShake>
                  <div
                    style={{
                      color: "black",
                      cursor: "pointer",
                    }}
                  >
                    <p
                      className="MontserratRegular refinedExperiance"
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
                                width: 45,
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
                <div style={{ cursor: "pointer", paddingRight: "20px" }}>
                  <audio id="hiProton">
                    <source src={HiProton} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                  <img
                    src={ExperienceSound}
                    alt="experienceSound"
                    width="130px"
                    height="auto"
                    onClick={this.playHiProton.bind(this)}
                  />
                </div>


              </div>




            </div>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Fade right>
              <div className="refinedImage1" style={{ width: "96%", height: "93%", marginLeft: "4%" }}>
                <img
                  src={connectivity1}
                  alt="safety"
                  height="100%"
                  width="100%"
                />
              </div>
            </Fade>
          </Grid>
          <Grid xs={0} sm={1}></Grid>
        </Grid>





        {/* mobile */}
        <div className="safetyMainDivMobile" style={{ display: "none" }}>

          <div className="performanceX70Image1Main" style={{ width: "100%" }}>
            <img className="performanceX70Image1" src={connectivity1} alt="Exterior" height="100%" width="95%" />
          </div>

          <div style={{ width: "100%" }} className="ExteriorGridText">


            <div style={{ color: "black" }}>
              <h2 className="fontstyle perfor2X70Head" style={{ fontSize: "3vw", letterSpacing: "-2px" }}>Command in<span className="fontstyle2 sth">control</span></h2>
            </div>
            <div className="exteriorGridTextInnerDiv" style={{ color: "black", paddingTop: "35px", marginLeft: "4vw", width: "72%" }}>
              <p
                className="fontstyle exteriorText1"
                style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }}
              >
                Elegantly displayed, the 8-inch multi-media infotainment unit,
                mirroring your android through smart phone connectivity will
                  be ideal for a seamless ride. Along with{" "}
                <span style={{ fontWeight: 1000 }}>Hi PROTON</span> feature, powered with <span style={{ fontWeight: 1000 }}>Artificial Intelligence </span>
                  that compliments the acoustics as you venture into.
                   </p>

              <p
                className="fontstyle exteriorText1"
                style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }}
              >
                * Control features like AC, windows, infotainment unit, etc
                  through voice command.{" "}
              </p>
            </div>




            {/* mobile */}
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
            {/* mobile end */}
          </div>

        </div>


        {/* mobile end */}














      </div>
    );
  }
}
