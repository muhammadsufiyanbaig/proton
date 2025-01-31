import React from "react";
import Grid from '@material-ui/core/Grid';
import Interior from "../../assets/x70/features/featuresX70.png"

import Fade from 'react-reveal/Fade';

import "./interiorGrid.css"

export default class InteriorGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: false
        }
    }
    render() {
        return (
            <Grid container className="GridMarginTopBottomInteriorX70"  >
                <Grid item xs={12} sm={12}  >
                    <div className="intResX70" style={{ backgroundImage: `url(${Interior})`, height: "100%", width: "90%", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", marginLeft: "5.2vw" }}>
                        <div className="interiorClass1X70" style={{ width: "100%", height: "65%" }}>
                            <p className="fontstyle refinedDesign" style={{ fontSize: "2.7vw", wordSpacing: "1vw", letterSpacing: "1.5vw", color: "#ffffff" }} >
                                REFINED DESIGN
                            </p>
                            <Fade bottom>
                                <p className="fontstyle interiorText1" style={{ color: "#ffffff", fontSize: "1.7vw", paddingTop: "1.8vw", letterSpacing: "0.1vw" }}>
                                    NOT LESS THAN A COCKPIT
                             </p>
                            </Fade>
                        </div>


                        <div className="interiorClass2X70" style={{ width: "100%", }}>
                            <Fade bottom>
                                <div className="interiorClass3X70 interiorClass3MobileX70" style={{ width: "84%",marginLeft:"8%" }}>
                                    <div style={{ borderRight: "1px solid white", width: "28%", paddingLeft: "1.4vw" }}>
                                        <div className="fontstyle2 h" style={{ fontSize: "1.65vw",}}>
                                            HD Display
                                         </div>
                                         {/* <div className="fontstyle2 InteriorFlexheadX70" style={{ fontSize: "1.65vw",}}>
                                            HD Display
                                         </div> */}
                                        <p style={{ fontSize: "0.95vw", lineHeight: "1vw", paddingTop: "0.4vw", letterSpacing: "-0.8px" }} className="fontstyle InteriorFlextext">
                                            LCD meter combination
                                            with 7 inch HD display.
                                        </p>
                                    </div>
                                 



                                    <div style={{ borderRight: "1px solid white", width: "29%", paddingLeft: "1.4vw" }}>
                                        <div className="fontstyle2 h" style={{ fontSize: "1.65vw", letterSpacing: "-0.8px" }}>
                                            Instrument Panel
                                         </div>
                                        <p style={{ fontSize: "0.95vw", lineHeight: "1vw", paddingTop: "0.4vw", letterSpacing: "-0.8px" }} className="fontstyle InteriorFlextext">
                                            luxurious instrument pannel with
                                          soft-touch surfaces<br/>and silver
                                            finishing.
                                        </p>
                                    </div>
                                    <div style={{ width: "28%", paddingLeft: "1.4vw" }}>
                                        <div className="fontstyle2 h" style={{ fontSize: "1.65vw", letterSpacing: "-0.8px" }}>
                                            Leather Seats
                                        </div>
                                        <p className="fontstyle InteriorFlextext" style={{ fontSize: "0.95vw", lineHeight: "1vw", paddingTop: "0.4vw", letterSpacing: "-0.8px" }}>
                                            Fully powered seats with extra comfort.
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                        </div>

                    </div>
                </Grid>
            </Grid>
        )
    }
}