import React from "react";
import Grid from "@material-ui/core/Grid";
import connectivity2 from "../../assets/x70/connectivity/connectivity2X70.jpg";
import RemoveIcon from "@material-ui/icons/Remove";
import Fade from "react-reveal/Fade";
import connectivityGif from "../../assets/x70/connectivity/connectivityGif.gif"
import HeadShake from "react-reveal/HeadShake";
import "./X70.css";

export default class SafetyOurPriorityGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: false,
        };
    }
    render() {
        return (
            <div>
                <Grid
                    className="GridMarginTopBottomSafety2"
                    container
                    ref={this.expandSafetyDiv}
                >
                    <Grid item xs={0} sm={1}></Grid>
                    <Grid item xs={12} sm={6}>
                        <Fade left>
                            <div className="refinedImage1" style={{ width: "100%", height: "100%", paddingTop: "4.5vw" }}>
                                <img
                                    src={connectivity2}
                                    alt="safety"
                                    height="auto"
                                    width="85%"
                                />
                            </div>
                        </Fade>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div style={{ width: "100%" }} className="safetyGridText">
                            <div style={{ paddingTop: "50px" }}>
                                <h2
                                    className="fontstyle refinedhead"
                                    style={{ fontSize: "3vw", letterSpacing: "-2px" }}
                                >
                                    Pump up the <span className="fontstyle2">volume</span>
                                </h2>
                            </div>
                            <div style={{ color: "black", paddingTop: "35px" }}>
                                <p
                                    className="fontstyle refinedText"
                                    style={{
                                        fontSize: "1.3vw",
                                        letterSpacing: "-0.8px",
                                        color: "black",
                                    }}
                                >
                                    The X70 pampers you with an amplified speaker audio system
                                    that accompanies you on long-lasting journeys.
                  </p>
                            </div>
                            <div style={{ display: "flex", paddingTop: "2vw" }}>
                                <div
                                    style={{
                                        borderRight: "1px solid black",
                                        width: "33%",
                                        height: "13vh",
                                        paddingTop: "10px",
                                    }}
                                >
                                    <h2
                                        className="fontstyle2 refinedFlexHead"
                                        style={{ fontSize: "1.65vw", letterSpacing: "-0.8px" }}
                                    >
                                        9 Speakers
                                     </h2>
                                    <p
                                        className="fontstyle refinedFlexText"
                                        style={{
                                            fontSize: "0.85vw",
                                            lineHeight: "1vw",
                                            paddingTop: "0.4vw",
                                            letterSpacing: "-0.8px",
                                        }}
                                    >
                                        Equipped with 9 Kenwood speakers around the inside.
                                     </p>
                                </div>

                                <div
                                    style={{
                                        borderRight: "1px solid black",
                                        width: "33%",
                                        height: "13vh",
                                        padding: "10px",
                                    }}
                                >
                                    <h2
                                        className="fontstyle2 refinedFlexHead"
                                        style={{ fontSize: "1.65vw", letterSpacing: "-0.8px" }}
                                    >
                                        AMD
                                    </h2>
                                    <p
                                        className="fontstyle refinedFlexText"
                                        style={{
                                            fontSize: "0.85vw",
                                            lineHeight: "1vw",
                                            paddingTop: "0.4vw",
                                            letterSpacing: "-0.8px",
                                        }}
                                    >
                                        Gives the right amount of power to all speakers.
                                     </p>
                                </div>
                                <div style={{ width: "33%", height: "13vh", padding: "10px" }}>
                                    <h2
                                        className="fontstyle2 refinedFlexHead"
                                        style={{ fontSize: "1.65vw", letterSpacing: "-0.8px" }}
                                    >
                                        Subwoofer
                                    </h2>
                                    <p
                                        className="fontstyle refinedFlexText"
                                        style={{
                                            fontSize: "0.85vw",
                                            lineHeight: "1vw",
                                            paddingTop: "0.4vw",
                                            letterSpacing: "-0.8px",
                                        }}
                                    >
                                        Pushes upto the limit by giving the best quality of music
                                        to your ears.
                                    </p>
                                </div>
                            </div>


                            <div style={{ color: "black", paddingTop: "30px" }}>
                                <p
                                    className="fontstyle refinedText"
                                    style={{
                                        fontSize: "1.1vw",
                                        letterSpacing: "-0.8px",
                                        color: "black",
                                    }}
                                >
                                    * Available only in Premium 2WD and 4WD variants
                                </p>
                            </div>

                            <div className="refinedGifAndExp" style={{ display: "flex", paddingTop: "30px" }}>
                                <div>
                                    <img src={connectivityGif} alt="logo" height="30px" width="40px" />
                                </div>
                                <div
                                    style={{
                                        color: "black",
                                        paddingLeft: "18vw",
                                        cursor: "pointer",
                                    }}
                                >
                                    <p
                                        className="MontserratRegular refinedExperiance"
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

                        </div>
                    </Grid>
                    <Grid xs={0} sm={1}></Grid>
                </Grid>




                {/* mobile */}
                <div className="safetyMainDivMobile" style={{ display: "none" }}>

                    <div className="performanceX70Image1Main" style={{ width: "100%" }}>
                        <img className="performanceX70Image1" src={connectivity2} alt="Exterior" height="100%" width="90%" />
                    </div>

                    <div style={{ width: "100%" }} className="ExteriorGridText">


                        <div style={{ color: "black" }}>
                            <h2 className="fontstyle perfor2X70Head" style={{ fontSize: "3vw", letterSpacing: "-2px" }}>Pump up the<span className="fontstyle2 sth">volume</span></h2>
                        </div>
                        <div className="exteriorGridTextInnerDiv" style={{ color: "black", paddingTop: "35px", marginLeft: "4vw", width: "72%" }}>
                            <p
                                className="fontstyle exteriorText1"
                                style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }}
                            >
                                The X70 pampers you with an amplified speaker audio system
                                that accompanies you on long-lasting journeys.
                              </p>
                        </div>


                        <div style={{ width: "93%", margin: "30px 0px 0px 0px" }} >
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div className="fontstyle2" style={{ borderRight: "2px solid #000000", width: "33%", color: "#000000", display: "flex", justifyContent: "center" }}>
                                    9 Speakers
                                 </div>


                                <div className="fontstyle2" style={{ borderRight: "2px solid #000000", width: "33%", color: "#000000", display: "flex", justifyContent: "center" }}>
                                    AMD
                                 </div>


                                <div className="fontstyle2" style={{ width: "33%", color: "#000000", display: "flex", justifyContent: "center" }}>
                                    <div >
                                        Subwoofer
                                          </div>
                                </div>
                            </div>

                        </div>
                        <div className="exteriorGridTextInnerDiv" style={{ color: "black", paddingTop: "35px", marginLeft: "4vw", width: "72%" }}>


                            <p
                                className="fontstyle exteriorText1"
                                style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }}
                            >
                                * Available only in Premium 2WD and 4WD variants

                              </p>
                        </div>

                        {/* mobile */}
                        <HeadShake >
                            <div onClick={() => this.props.onClickMinimize()} className="mobileExperianceMoreButton" style={{ color: "black", paddingLeft: "30px", display: "flex", alignItems: "center", marginTop: "5%", display: "none" }}>
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
