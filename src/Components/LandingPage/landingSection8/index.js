import React from 'react';
import Grid from "@material-ui/core/Grid";
import Image1 from "../../../assets/landing/section8/1.png"
import Image2 from "../../../assets/landing/section8/2.png"
import Mobile1 from "../../../assets/landing/section8/mobile1.png"
import Fade from 'react-reveal/Fade';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import "./landingSection8.css"

class LandingSection8 extends React.Component {
    render() {
        return (
            <div>
                <div className="MainWrapperSection8">
                    <Grid container>

                        <Grid item xs={12} sm={7}>
                            <div className="hoverDivSec8">
                                <div className="hoverTextSec8 fontstyle2">
                                    Distinctive and Stylish
                               </div>

                                <div className="image1-sec8 frame1-sec8">
                                    <img src={Image1} height="100%" width="100%" alt="-" />
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={5}>
                            <div className="hoverDivSec8-2">
                                <div className="hoverTextSec8-2 fontstyle2">
                                    Refined Finesse
                               </div>
                                <div className="image2-sec8 frame2-sec8">
                                    <img src={Image2} height="100%" width="100%" alt="-" />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>


                {/* mobile div */}
                <div className="section5MobileMain" style={{ display: "none" }}>
                    <Fade bottom >
                    <div className="fontstyle2" style={{ position: "absolute", color: "#ffffff", margin: "25% 0px 0px 5%", fontSize: "9px" }}>
                    Distinctive and Stylish
                             </div>
                    <div className="fontstyle2" style={{ position: "absolute", color: "#ffffff", margin: "25% 0px 0px 60%", fontSize: "9px" }}>
                    Refined Finesse
                             </div>
                    </Fade>
                   
                    <img src={Mobile1} height="100%" width="100%" alt="section5" />
                    <div className="exploreSagaMain">
                    <div onClick={() => this.props.history.push("/X70")} className="exploreSagaInner Montserrat-SemiBold" >
                        EXPLORE X70
                        <ArrowForwardIosIcon style={{ marginLeft: "10px", height: '15px', width: "15px" }} />
                    </div>
                        </div>
                  

                </div>
                {/* mobile div end*/}


            </div>

        );
    }

}

export default LandingSection8;
