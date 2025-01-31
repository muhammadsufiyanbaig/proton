import React from "react";
import Grid from '@material-ui/core/Grid';
import RemoveIcon from "@material-ui/icons/Remove";
import Fade from 'react-reveal/Fade';
import HeadShake from "react-reveal/HeadShake";



import Performance3Image from "../../assets/x70/performance/P3.png";

export default class Performance3 extends React.Component {
    render() {
        return (
            <div>
                <div className="performanceGridX70" >
                    <Grid container>
                        <Grid item xs={0} sm={1}>

                        </Grid>
                        <Grid item xs={12} sm={4} style={{ paddingTop: "0.5%" }}>
                            <div style={{ color: "black" }}>
                                <h2 className="fontstyle perfor2X70Head" style={{ fontSize: "3vw", letterSpacing: "-2px" }}>Adaptive  <span className="fontstyle2" >integration</span></h2>
                            </div>
                            <div style={{ color: "black", paddingTop: "35px" }}>
                                <p className="fontstyle perfor2X70Text" style={{ fontSize: "1.3vw", letterSpacing: "-0.8px", color: "black" }} >
                                    The All-Wheel drive system in X70, helps maintain
                                    stability and strength along with a firm suspension
                                    to enhance safety in unfavorable road conditions.
                            </p>
                            </div>
                            <div style={{ color: "black", paddingTop: "25px" }}>
                                <p
                                    className="fontstyle perfor2X70Text"
                                    style={{
                                        fontSize: "1.1vw",
                                        letterSpacing: "-0.8px",

                                        color: "black",
                                    }}
                                >
                                    * Available only in Premium 4WD variant.
                            </p>
                            </div>
                            <div
                                style={{
                                    color: "black",
                                    paddingTop: "35px",
                                    cursor: "pointer",
                                }}
                            >
                                <p
                                    className="MontserratRegular perfor2X70Text"
                                    style={{ fontSize: "1.1vw", color: "red" }}
                                >
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
                        </Grid>
                        <Grid xs={0} sm={1} />
                        <Grid item xs={12} sm={5}>
                            <Fade right>
                                <div className="performance3Image" style={{ width: "100%", height: "100%", marginLeft: "10%" }}>
                                    <img src={Performance3Image} alt="safety" height="auto" width="90%" />
                                </div>
                            </Fade>
                        </Grid>
                        <Grid xs={0} sm={1}>

                        </Grid>
                    </Grid>
                </div>



                <div className="safetyMainDivMobile" style={{ display: "none",marginTop:"20%" }}>

                    <div className="performanceX70Image1Main" style={{ width: "100%" }}>
                        <img className="performanceX70Image1" src={Performance3Image} alt="safety" height="100%" width="90%" />
                    </div>
                    <div style={{ width: "100%" }} className="ExteriorGridText">

                      
                        <div style={{ color: "black" }}>
                            <h2 className="fontstyle perfor2X70Head" style={{ fontSize: "3vw", letterSpacing: "-2px" }}>Adaptive<span className="fontstyle2 sth">integration</span></h2>
                        </div>

                        <div className="exteriorGridTextInnerDiv" style={{ color: "black", paddingTop: "35px" }}>
                            <p className="fontstyle exteriorText1" style={{ fontSize: "1.3vw", letterSpacing: "-0.8px", color: "black" }} >
                                The All-Wheel drive system in X70, helps maintain
                                stability and strength along with a firm suspension
                                to enhance safety in unfavorable road conditions.
                         </p>
                        </div>
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

                    </div>
                </div>
            </div>

        )
    }
}