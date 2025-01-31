import React from "react";
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

import "./exterior.css"
import ExteriorImage2 from "../../assets/x70/exterior/exteriorImage2.png";
import ExteriorImage2Mobile from "../../assets/x70/exterior/e2mobile.png";

export default class Exterior2 extends React.Component {
    render() {
        return (
            <div>
                <div className="GridMarginTopBottomExterior2X70">
                    <Grid container>
                        <Grid item xs={0} sm={1}>

                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <div style={{ color: "black" }}>
                                <h2 className="fontstyle perfor2X70Head" style={{ fontSize: "3vw", letterSpacing: "-2px" }}>Built <span className="fontstyle2" >bold</span></h2>
                            </div>
                            <div className="ext2TextMain" style={{ color: "black", paddingTop: "35px", width: "90%" }}>
                                <p className="fontstyle perfor2X70Text" style={{ fontSize: "1.3vw", letterSpacing: "-0.8px", color: "black" }}>
                                    Ambitious exterior draw the most attention
                                    alongside smooth and sophisticated
                                    aesthetic. While a truly imaginative
                                    experience has been seized to suit any life-
                                    style, by bringing natural beauty inside with
                                    a panoramic sunroof.
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Fade right>
                                <div className="exterior1ImageMain" style={{ width: "100%", height: "100%" }}>
                                    <img className="exterior1Image" src={ExteriorImage2} alt="safety" height="100%" width="100%" />
                                </div>
                            </Fade>
                        </Grid>
                        <Grid xs={0} sm={1}>

                        </Grid>
                    </Grid>
                </div>


                <div className="safetyMainDivMobile" style={{ display: "none" }}>

                    <div className="performanceX70Image1Main" style={{ width: "100%" }}>
                        <img className="performanceX70Image1" src={ExteriorImage2Mobile} alt="safety" height="100%" width="90%" />
                    </div>
                    <div style={{ width: "100%" }} className="ExteriorGridText">


                      
                        <div style={{ color: "black" }}>
                            <h2 className="fontstyle perfor2X70Head" style={{ fontSize: "3vw", letterSpacing: "-2px" }}>Built<span className="fontstyle2 sth">bold</span></h2>
                        </div>

                        <div className="exteriorGridTextInnerDiv" style={{ color: "black", paddingTop: "35px" }}>
                            <p className="fontstyle exteriorText1" style={{ fontSize: "1.3vw", letterSpacing: "-0.8px", color: "black" }} >
                                Ambitious exterior draw the most attention
                                alongside smooth and sophisticated
                                aesthetic. While a truly imaginative
                                experience has been seized to suit any life-
                                style, by bringing natural beauty inside with
                                a panoramic sunroof.
                              </p>
                        </div>


                    </div>
                </div>


            </div>

        )
    }
}