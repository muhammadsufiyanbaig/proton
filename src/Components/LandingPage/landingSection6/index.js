import React from 'react';
import Grid from "@material-ui/core/Grid";
import Image1 from "../../../assets/landing/section6/1.png"
import Mobile from "../../../assets/landing/section6/mobile1.png"
import X70Heading from "../../../assets/landing/section6/X70Heading.png"
import Arrow from "../../../assets/landing/section3/arrow.png"
import Fade from 'react-reveal/Fade';

import "./landingSection6.css"
class LandingSection6 extends React.Component {
    render() {
        return (
            <div>
                {/* desktop */}
                <div className="MainWrapperSection6">
                    <Grid container>
                        <div className="section1">
                            <div className="image1">
                                <img src={Image1} height="100%" width="100%" alt="-" />
                            </div>
                        </div>
                        <div className="section2">
                            <div className="section6Text0" style={{ height: "50px", width: "45%", marginLeft: "20%" }}>
                                <img src={X70Heading} height="100%" width="100%" alt="-" />
                            </div>
                            <div className="fontstyle section6Text1" style={{ fontSize: "32px", paddingTop: "20px", paddingLeft: "5.4vw", letterSpacing: "-0.1vw" }} >
                                Styled to anticipate
                            </div>
                            <div className="fontstyle2 section6Text2" style={{ fontSize: "33px", paddingLeft: "13.3vw", fontWeight: "bold", marginTop: "-1.2vw", letterSpacing: "-0.1vw" }} >
                                your needs
                            </div>
                            <Fade left>
                                <div onClick={() => this.props.history.push("/x70")} className="fontstyle section6Text3" style={{ height: "3vh", width: "7vw", display: "flex", fontSize: "17px", marginLeft: "17vw", marginTop: "40px", color: "red", cursor: "pointer", fontWeight: 600 }} >
                                    <div className="explore" style={{ paddingTop: "1%" }}>EXPLORE </div> <div style={{ marginLeft: "12px" }}> <img src={Arrow} height="15px" width="10px" alt="-" /></div>
                                </div>
                            </Fade>
                        </div>
                    </Grid>
                </div>
                {/* desktop */}


                {/* mobile */}
                <div className="MainWrapperSection6Mobile" style={{display: "none"}} >
                       <div  style={{width:"100%",paddingBottom:"50px"}}>
                            <div  style={{  width: "100%",display:"flex",justifyContent:"center" }}>
                                <img src={X70Heading} height="30%" width="30%" alt="-" />
                            </div>
                            <div className="fontstyle " style={{ fontSize: "20px", width: "100%",letterSpacing:"-2px",display:"flex",justifyContent:"center",paddingTop:"20px" }} >
                               Styled to anticipate
                             </div>
                            <div className="fontstyle2 " style={{ fontSize: "20px",  width: "100%",letterSpacing:"-2px",display:"flex",justifyContent:"center",paddingLeft:"100px",marginTop:"-8px" }} >
                                your needs
                             </div>
                           
                        </div>
                        <div >
                            <Fade left delay={2000}>
                            <div>
                                <img src={Mobile} height="100%" width="100%" alt="-" />
                            </div>
                            </Fade>
                           
                        </div>
                </div>
                {/* mobile end */}

            </div>

        );
    }

}

export default LandingSection6;
