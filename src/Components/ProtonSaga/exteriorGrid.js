import React from "react";
import Grid from "@material-ui/core/Grid";
import Exterior from "../../assets/images/exteriorSaga.png";


import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import Slide from "react-reveal/Slide";
import HeadShake from "react-reveal/HeadShake";


import "./protonsaga.css";


export default class ExteriorGrid extends React.Component {
  render() {
    return (
      <div>
        <Grid
          container
          className="GridMarginTopBottomExterior"
          ref={this.exteriorDiv}
        >
          <Grid item xs={0} sm={1}></Grid>

          <Grid item xs={12} sm={5}>
            <Slide left>
              <div className="TopAllImages" style={{ width: "100%", height: "100%" }}>
                <img className="ExteriorImage" src={Exterior} alt="Exterior" height="100%" width="100%" />
              </div>
            </Slide>
          </Grid>

          <Grid item xs={12} sm={6} >
            <div style={{ width: "100%" }} className="ExteriorGridText">
              <div className="exteriorGridTextInnerDiv" style={{ color: "black", paddingLeft: "4vw" }}>
                <h2
                  className="fontstyle exterHeadDesktop"
                  style={{ fontSize: "3vw", letterSpacing: "-2px" }}
                >
                  Dramatic <span className="fontstyle2 sth" >semblance</span>
                </h2>
              </div>
              <div className="exterHeadMobile" style={{marginTop:"35px",display:"none", }} >
                        <h2 className="fontstyle " style={{ fontSize: "25px",letterSpacing: "-2px" }}>Dramatic<span className="fontstyle2 sth">semblance</span></h2>
                    </div>
              <div className="exteriorGridTextInnerDiv" style={{ color: "black", paddingTop: "35px", marginLeft: "4vw", width: "72%" }}>
                <p
                  className="fontstyle exteriorText1"
                  style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }}
                >
                  Get noticed, with the newly designed front bumper illuminating
                  LED Day-time running lamps, adding the every bit of detail.{" "}
                </p>
              </div>

              <div className="exteriorGridTextInnerDiv" style={{ color: "black", paddingTop: "35px", marginLeft: "4vw", width: "68%" }}>
                <p
                  className="fontstyle  exteriorText1"
                  style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }}
                >
                  * LED lamps available in the Premium AT variant only.
                </p>
              </div>
              <HeadShake>
                <div className="experianceMoreIconDiv" style={{ color: "black", paddingTop: "35px", marginLeft: "4vw", width: "68%" }}>
                  <p
                    className="MontserratRegular experianceMore"
                    style={{ fontSize: "1.1vw", color: "red" }}
                  >
                    {" "}
                    <span>
                      {this.props.isExpanded ? (
                        <RemoveIcon
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            borderRadius: 10,
                            height: 30,
                            width: 45,
                          }}
                          onClick={() => this.props.onClickMinimize()}
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
                        )}{" "}
                    </span>{" "}
                    <span style={{ paddingLeft: "0.7vw" }}>
                      EXPERIENCE MORE
                    </span>
                  </p>
                </div>
              </HeadShake>



              {/* mobile */}
              <HeadShake >
                <div onClick={() => this.props.onClickExperience()} className="mobileExperianceMoreButton" style={{ color: "black", paddingLeft: "30px", display: "flex", alignItems: "center", marginTop: "5%", display: "none" }}>

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
          </Grid>

          <Grid xs={0} sm={0}></Grid>
        </Grid>

     
        <div>

        </div>

      </div>
    );
  }
}
