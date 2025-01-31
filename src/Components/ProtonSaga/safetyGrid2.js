import React from "react";
import Grid from '@material-ui/core/Grid';
import RemoveIcon from '@material-ui/icons/Remove';
import EcsTcs from "../../assets/images/ecsSaga.png"
import HeadShake from 'react-reveal/HeadShake';
import Fade from 'react-reveal/Fade';

import "./protonsaga.css"

export default class SafetyOurPriorityGrid extends React.Component {
    render() {
        return (
            <div>
                {/* experiance safety fearures */}
                <Grid className="GridMarginTopBottomSafety2" container ref={this.expandSafetyDiv} >
                    <Grid item xs={0} sm={1}>

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Fade left >
                            <div style={{ width: "100%", height: "100%", paddingTop: "3vw" }}>
                                <img src={EcsTcs} alt="safety" height="100%" width="100%" />
                            </div>
                        </Fade>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Fade right >
                            <div style={{ width: "100%" }} className="safetyGridText" >
                                <div style={{ paddingTop: "50px" }}>
                                    <h2 className="fontstyle headSagaPerf" style={{ fontSize: "3vw", letterSpacing: "-2px" }}>Comprehensively <span className="fontstyle2">equipped</span></h2>
                                </div>

                                <div style={{ color: "black", paddingTop: "35px" }}>
                                    <p className="fontstyle safetyTwoText" style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }} >
                                        The combination of Electronic Stability Control with
                                        Traction Control System is adaptive to easy
                                        braking to ensure driving comfort.
                               </p>
                                </div>

                                <div style={{ color: "black", paddingTop: "35px" }}>
                                    <p className="fontstyle safetyTwoText" style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }} >
                                        * Available only in Premium AT variant
                                    </p>
                                </div>
                                <Fade left delay={500}>
                                    <div className="withoutTraction" style={{ paddingTop: "2vw", width: "55%" }}>
                                        <p className="fontstyle" style={{ fontSize: "1vw", fontWeight: "bold", borderBottom: "3px dashed red", letterSpacing: "-0.5px" }}>
                                            Without Traction Control System
                                    </p>
                                    </div>
                                    <div className="withTraction" style={{ paddingTop: "15px", width: "55%", paddingLeft: 30 }}>
                                        <p className="fontstyle" style={{ fontSize: "1vw", fontWeight: "bold", borderBottom: "3px dashed  red", letterSpacing: "-0.5px" }}>
                                            With Traction Control System
                                    </p>
                                    </div>
                                </Fade>
                                <div className="experianceMoreIconDiv" style={{ color: "black", paddingTop: "35px", paddingLeft: "22vw" }}>
                                    <p className="MontserratRegular experianceMore" style={{ fontSize: "1.3vw", color: "red" }}> <span><RemoveIcon onClick={() => this.props.onClickMinimize()} style={{ backgroundColor: "black", color: "white", borderRadius: 10, height: 30, width: 45 }} /></span><span style={{ paddingLeft: '0.7vw' }}>MINIMIZE</span> </p>
                                </div>

                            </div>
                        </Fade>
                    </Grid>
                    <Grid xs={0} sm={1}>

                    </Grid>
                </Grid>
                {/* experiance safety fearures End */}


                {/* mobile */}
                <div className="safety2MainDivMobile" style={{ display: "none" }}>
                    <div style={{position:"absolute",width:'100%',marginTop:"46%"}}>
                    <Fade left delay={500}>
                        <div style={{ width: "65%",paddingLeft: 20 }}>
                            <p className="fontstyle" style={{ fontSize: "11px", fontWeight:800, borderBottom: "2px dashed red" }}>
                                Without Traction Control System
                             </p>
                        </div>
                        <div  style={{ width: "65%", paddingLeft: 20,marginTop:"-10px" }}>
                            <p className="fontstyle" style={{ fontSize: "11px", fontWeight: 800, borderBottom: "2px dashed  red", }}>
                                With Traction Control System
                             </p>
                        </div>
                    </Fade>
                    </div>
                 
                    <div className="TopAllImages" style={{ width: "100%", height: "100%" }}>
                        <img className="ExteriorImage" src={EcsTcs} alt="Exterior" height="100%" width="100%" />
                    </div>

                    <div style={{ width: "100%" }} className="ExteriorGridText">
                        <div className="allDivsMainHeadings" style={{ marginTop: "35px" }} >
                            <h2 className="fontstyle " style={{ fontSize: "22px",letterSpacing: "-2px" }}>Comprehensively<span className="fontstyle2 sth">equipped</span></h2>
                        </div>
                        <div className="exteriorGridTextInnerDiv" style={{ color: "black", paddingTop: "35px", marginLeft: "4vw", width: "72%" }}>
                            <p
                                className="fontstyle exteriorText1"
                                style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }}
                            >
                                The combination of Electronic Stability Control with
                                Traction Control System is adaptive to easy
                                braking to ensure driving comfort.
                            </p>
                        </div>

                        <div className="exteriorGridTextInnerDiv" style={{ color: "black", paddingTop: "35px", marginLeft: "4vw", width: "68%" }}>
                            <p
                                className="fontstyle  exteriorText1"
                                style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }}
                            >
                                * Available only in Premium AT variant

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

        )
    }
}