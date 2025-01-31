import React from 'react';
import Grid from "@material-ui/core/Grid";
import Image1 from "../../../assets/landing/section5/1.png"
import Image2 from "../../../assets/landing/section5/2.png"
import Mobile1 from "../../../assets/landing/section5/mobile1.png"
import Fade from 'react-reveal/Fade';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import "./landingSection5.css"

class LandingSection5 extends React.Component {
    render() {
        return (
            <div>
                <div className="MainWrapperSection5">
                    <Grid container>

                        <Grid item xs={12} sm={7}>
                            <div className="hoverDivSec5">
                                <div className="hoverTextSec5 fontstyle2">
                                    Expressive Contours
                             </div>

                                <div className="image1-sec5 frame1-sec5">
                                    <img src={Image1} height="auto" width="100%" alt="-" />
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={5}>

                            <div className="hoverDivSec5-2">
                                <div className="hoverTextSec5-2 fontstyle2">
                                    Condescending Light Feature
                             </div>
                                <div className="image2-sec5 frame2-sec5">
                                    <img src={Image2} height="100%" width="100%" alt="-" />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div className="section5MobileMain" style={{ display: "none" }}>
                    <Fade bottom >
                        <div className="fontstyle2" style={{ position: "absolute", color: "#ffffff", margin: "25% 0px 0px 5%", fontSize: "9px" }}>
                            Expressive Contours
                             </div>
                        <div className="fontstyle2" style={{ position: "absolute", color: "#ffffff", margin: "25% 0px 0px 60%", fontSize: "9px" }}>
                            Condescending Light Feature
                             </div>
                    </Fade>

                    <img src={Mobile1} height="100%" width="100%" alt="section5" />

                    <div className="exploreSagaMain">
                        <div onClick={() => this.props.history.push("/proton-saga")} className="exploreSagaInner Montserrat-SemiBold" >
                            EXPLORE SAGA
                        <ArrowForwardIosIcon style={{ marginLeft: "7px", height: '15px', width: "15px" }} />
                        </div>
                    </div>

                </div>

            </div>

        );
    }

}

export default LandingSection5;
