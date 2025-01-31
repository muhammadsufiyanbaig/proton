
import React from "react";
import Grid from '@material-ui/core/Grid';
import ReverseCamera from "../../assets/images/reversecamera.png";
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';

import "./protonsaga.css"

export default class ReverseCameraGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: false,
        }
    }
    render() {
        return (

            <div>
                <Grid container className="GridMarginTopBottomReverseCamera" ref={this.reverseCameraDiv} >
                    <Grid item xs={0} sm={1}>

                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div style={{ width: "100%" }} className="safetyGridText reverseCameraMobile" >
                            <div style={{ color: "black"}}>
                                <div  className="fontstyle3" style={{fontSize:"18px"}}> Front and Rear</div>
                                <h2 className="fontstyle reverseHead" style={{ fontSize: "3vw", letterSpacing: "-2px" }}>Innovative <span className="fontstyle2">sensing</span></h2>
                            </div>
                            <div style={{ color: "black", paddingTop: "2vw" }}>
                                <p className="fontstyle safetyTwoText" style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }} >
                                    The all-new Saga comes with reverse camera for
                                    perimeter coverage, along with Front and Rear
                                    parking sensors confirming audible alerts and
                                    ample warnings from blind spots behind the vehicle.
                                 </p>
                            </div>

                            <div style={{ color: "black", paddingTop: "2vw" }}>
                                <p className="fontstyle safetyTwoText" style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }} >
                                    * Available in the Premium AT variant only.
                                </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Fade right>
                            <div style={{ width: "95%", height: "100%", marginLeft: "3vw" }}>
                                <img className="reverseImage" src={ReverseCamera} alt="safety" height="100%" width="100%" />
                            </div>
                        </Fade>

                    </Grid>
                    <Grid xs={0} sm={1}>

                    </Grid>
                </Grid>


                {/* mobile */}
                <div className="reverseMobile" style={{ display: "none" }}>

                    <div className="TopAllImages" style={{ width: "100%", height: "100%" }}>
                        <img className="ExteriorImage" src={ReverseCamera} alt="Exterior" height="100%" width="100%" />
                    </div>

                    <div style={{ width: "100%" }} className="ExteriorGridText">
                    
                        <div className="allDivsMainHeadings" style={{ marginTop: "35px" }} >
                        <div  className="fontstyle3" style={{fontSize:"18px"}}> Front and Rear</div>
                            <h2 className="fontstyle " style={{ fontSize: "25px",letterSpacing: "-2px" }}>Innovative<span className="fontstyle2 sth">sensing</span></h2>
                        </div>
                        <div className="exteriorGridTextInnerDiv" style={{ color: "black", paddingTop: "35px", marginLeft: "4vw", width: "72%" }}>
                            <p
                                className="fontstyle exteriorText1"
                                style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }}
                            >
                                The all-new Saga comes with reverse camera for
                                perimeter coverage, along with Front and Rear
                                parking sensors confirming audible alerts and
                                ample warnings from blind spots behind the vehicle.
                            </p>
                        </div>

                        <div className="exteriorGridTextInnerDiv" style={{ color: "black", paddingTop: "35px", marginLeft: "4vw", width: "68%" }}>
                            <p
                                className="fontstyle  exteriorText1"
                                style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }}
                            >
                                * Available in the Premium AT variant only.
                              </p>
                        </div>

    
                    </div>

                </div>

                {/* mobile end */}

            </div>

        )
    }
}