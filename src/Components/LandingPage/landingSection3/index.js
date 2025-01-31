import React from 'react';
import Grid from "@material-ui/core/Grid";
import Image1 from "../../../assets/landing/section3/1.png"
import Mobile from "../../../assets/landing/section3/mobile1.png"
import SagaHeading from "../../../assets/landing/section3/sagahead.png"
import Arrow from "../../../assets/landing/section3/arrow.png"
import Fade from 'react-reveal/Fade';
import "./landingSection3.css"
class LandingSection3 extends React.Component {
    render() {
        return (
            <div>
                {/* desktop */}
                <div className="MainWrapperSection3">
                    <Grid container>
                        <div className="section2">
                            <div className="section3Text0" style={{ height: "40px", width: "50%", marginLeft: "20%" }}>
                                <img src={SagaHeading} height="100%" width="100%" alt="-" />
                            </div>
                            <div className="fontstyle section3Text1" style={{ fontSize: "32px", paddingTop: "20px", paddingLeft: "5.4vw", letterSpacing: "-0.1vw" }} >
                                Curved to create a

                   </div>
                            <div className="fontstyle2 section3Text2" style={{ fontSize: "31px", paddingLeft: "9vw", fontWeight: "bold", marginTop: "-1.2vw", letterSpacing: "-0.1vw" }} >
                                visual impression
                   </div>
                            <Fade left>
                                <div onClick={() => this.props.history.push("/proton-saga")} className="fontstyle section3text3" style={{ fontSize: "17px", marginLeft: "17.7vw", paddingTop: "40px", color: "red", cursor: "pointer", fontWeight: 600 }} >
                                    EXPLORE <span style={{ paddingLeft: "9px" }}> <img className="arrow-icon" src={Arrow} height="15px" width="10px" alt="-" /></span>
                                </div>
                            </Fade>
                        </div>
                        <div className="section1">
                            <div className="image1">
                                <img src={Image1} height="100%" width="100%" alt="-" />
                            </div>
                        </div>
                    </Grid>
                </div>
                {/* desktop end */}


                {/* mobile */}

                <div className="MainWrapperSection6Mobile" style={{ display: "none" }} >
                    <div style={{ width: "100%", paddingBottom: "50px" }}>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <img src={SagaHeading}  width="30%" height="30%" alt="-" />
                        </div>

                        <div className="fontstyle" style={{ fontSize: "20px",letterSpacing:"-2px", width: "100%", display: "flex", justifyContent: "center", paddingTop: "20px" }} >
                            Curved to create a
                             </div>
                        <div className="fontstyle2 " style={{ fontSize: "20px",letterSpacing:"-2px", width: "100%", display: "flex", justifyContent: "center",marginTop:"-8px",paddingLeft:"50px" }} >
                            visual impression
                             </div>

                    </div>
                    <div >
                        <Fade right >
                            <div>
                                <img src={Mobile} height="100%" width="100%" alt="-" />
                            </div>
                        </Fade>

                    </div>
                </div>
                {/* mobile end*/}

            </div>

        );
    }

}

export default LandingSection3;
