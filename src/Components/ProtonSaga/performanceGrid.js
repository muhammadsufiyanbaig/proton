import React from "react";
import Grid from '@material-ui/core/Grid';
import { Spring } from 'react-spring/renderprops';
import { Waypoint } from "react-waypoint";
import Slide from 'react-reveal/Slide';
import Performance from "../../assets/images/performanceSaga.png"
import "./protonsaga.css"
import Fade from 'react-reveal/Fade';

export default class PerformanceGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: false
        }
    }
    render() {
        return (
            <div>
                <Grid container className="GridMarginTopBottomPerformance" id="performanceDiv">
                    <Grid item xs={0} sm={1} />
                    <Grid item xs={12} sm={6} >

                        <div className="performanceGridText" style={{ width: "100%", height: "100%" }} >
                            <div >
                                <h2 className="fontstyle headSagaPerf" style={{ fontSize: "3vw", letterSpacing: "-2px" }}>Prepared to <span className="fontstyle2"> perform</span></h2>

                            </div>
                            <div style={{ color: "black", paddingTop: "35px", width: "85%" }}>
                                <p className="fontstyle text1SagaPerf" style={{ fontSize: "1.3vw", letterSpacing: "-0.8px", }} >
                                    The compact sedan equipped to support a 1.3L VVT Engine allows
                                    improved functionality and lowered emissions.
                             </p>
                            </div>

                            <Fade bottom>
                                <div className="performanceFlexDiv" style={{ display: "flex", paddingTop: "2vw", height: "100%" }}>
                                    <div className="performanceFlexDivInner" style={{ borderRight: "1px solid black", width: "30%", height: "25%", paddingTop: "10px" }}>
                                        <h2 className="fontstyle2 head1SagaPerf" style={{ fontSize: "1.65vw", letterSpacing: "-0.8px" }}>1.3L</h2 >
                                        <p className="fontstyle text2SagaPerf" style={{ fontSize: "0.85vw", lineHeight: "1vw", paddingTop: "0.4vw", letterSpacing: "-0.8px" }}>Comes in both AT/MT
                                        variants, giving a powerful
                                driving experience. </p>
                                    </div>
                                    {/* <Waypoint onEnter={() => this.setState({ animate: true })} onLeave={() => this.setState({ animate: false })}> */}

                                    <div className="performanceFlexDivInner" style={{ borderRight: "1px solid black", width: "30%", height: "25%", padding: "10px" }}>

                                        <div >
                                            <h2 className="fontstyle2 head1SagaPerf" style={{ fontSize: "1.65vw", letterSpacing: "-0.8px" }}>95 Bhp</h2>

                                        </div>



                                        <p className="fontstyle text2SagaPerf" style={{ fontSize: "0.85vw", lineHeight: "1vw", paddingTop: "0.4vw", letterSpacing: "-0.8px" }}>Improved torque with
                                 endless power.</p>
                                    </div>
                                    {/* </Waypoint> */}

                                    <div className="performanceFlexDivInner" style={{ width: "30%", height: "25%", padding: "10px" }}>
                                        <h2 className="fontstyle2 head1SagaPerf" style={{ fontSize: "1.65vw", letterSpacing: "-0.8px" }}>120 Nm</h2 >
                                        <p className="fontstyle text2SagaPerf" style={{ fontSize: "0.85vw", lineHeight: "1vw", paddingTop: "0.4vw", letterSpacing: "-0.8px" }}>
                                            Torque at 4000 rpm gives a powerful yet efficient drive.
                                </p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </Grid>


                    <Grid item xs={12} sm={4}>

                        <div className="performanceImage" style={{ width: "100%", paddingTop: "3%", display: "flex", justifyContent: "flex-end" }}>
                            <Slide right>
                                <div style={{ width: "90%", height: "100%" }}>

                                    <img src={Performance} alt="performance" height="100%" width="100%" />
                                </div>
                            </Slide>
                        </div>

                    </Grid>
                    <Grid item xs={0} sm={1} />


                </Grid>



                {/* mobile */}
                <div className="performanceMobile" style={{ display: "none" }} >
                    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center" }}>
                        <img src={Performance} alt="performance" height="100%" width="90%" />
                    </div>

                    <div className="allDivsMainHeadings" style={{ marginTop: "35px", paddingLeft: "20px" }} >
                        <h2 className="fontstyle " style={{ fontSize: "25px", letterSpacing: "-2px" }}>Prepared to <span className="fontstyle2"> perform</span></h2>
                    </div>


                    <div style={{ color: "black", paddingTop: "15px", width: "80%", paddingLeft: "20px" }}>
                        <p className="fontstyle " style={{ fontSize: "13px", }} >
                            The compact sedan equipped to support a 1.3L VVT Engine allows
                            improved functionality and lowered emissions.
                             </p>
                    </div>
                    <Fade bottom delay={2000}>
                    <div style={{ width: "93%", margin: "30px 0px 0px 0px" }} >
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div className="fontstyle2" style={{ borderRight: "2px solid #000000", width: "33%", color: "#000000", display: "flex", justifyContent: "center" }}>
                                1.3 L
                            </div>

                            <div className="fontstyle2" style={{ borderRight: "2px solid #000000", width: "33%", color: "#000000", display: "flex", justifyContent: "center" }}>

                                <div >
                                    95 Bhp
                                 </div>

                            </div>

                            <div className="fontstyle2" style={{ width: "33%", color: "#000000", display: "flex", justifyContent: "center" }}>
                                120 Nm
                            </div>
                        </div>

                    </div>
                    </Fade>
                    
                </div>

                {/* mobile end*/}
            </div>


        )
    }
}
