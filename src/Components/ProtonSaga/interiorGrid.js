import React from "react";
import Grid from '@material-ui/core/Grid';
import Interior from "../../assets/images/interior.png"


import Fade from 'react-reveal/Fade';

import "./protonsaga.css"



export default class InteriorGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: false
        }
    }
    render() {
        return (
            <Grid container className="GridMarginTopBottomInterior"  >
                <Grid item xs={12} sm={12}  >
                    <div className="intRes0" style={{ backgroundImage: `url(${Interior})`, height: "100%", width: "90%", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", marginLeft: "5.2vw" }}>
                        <div className="interiorClass1" style={{ width: "100%", height: "65%" }}>
                            <p className="fontstyle experianceUrbane" style={{ fontSize: "2.7vw", wordSpacing: "1vw", letterSpacing: "1.5vw", color: "#ffffff" }} >
                                EXPERIENCE URBANE
                            </p>
                            <Fade bottom>
                            <p className="fontstyle interiorText1" style={{ color: "#ffffff", fontSize: "1.7vw", paddingTop: "1.8vw", letterSpacing: "0.1vw" }}>
                                ITS EVERYTHING YOU DREAMT OF
                            </p>
                            </Fade>
                        </div>


                        <div className="interiorClass2" style={{ width: "100%", height: "10%" }}>
                            <Fade bottom>
                                <div className="interiorClass3 interiorClass3Mobile" style={{ width: "84%" }}>
                               
                                    <div className="interiorInnerClassMobile" style={{ borderRight: "1px solid white", width: "28%", paddingLeft: "1.4vw" }}>
                                        <div className="fontstyle2 InteriorFlexhead" style={{  fontSize: "1.65vw", letterSpacing: "-0.8px" }}>
                                            Steering Switches
                                    </div>
                                        <p className="fontstyle InteriorFlextext" style={{fontSize: "0.95vw", lineHeight: "1vw", paddingTop: "0.4vw", letterSpacing: "-0.8px"}}>
                                            Bluetooth pairs to compatiple mobile
                                            devices and gives you hands free calls and
                                            music streaming.
                                    </p>
                                    </div>



                                    <div className="interiorInnerClassMobile" style={{ borderRight: "1px solid white", width: "28%", paddingLeft: "1.4vw" }}>
                                        <div className="fontstyle2 InteriorFlexhead" style={{  fontSize: "1.65vw", letterSpacing: "-0.8px" }}>
                                            7’’ Touch Display
                                         </div>
                                        <p style={{fontSize: "0.95vw", lineHeight: "1vw", paddingTop: "0.4vw", letterSpacing: "-0.8px"}} className="fontstyle InteriorFlextext">
                                            Access and organize every thing,
                                            with 16GB of internal storage
                                            conveniently through your finger
                                            tips
                                        </p>
                                    </div>
                                    <div className="interiorInnerClassMobile" style={{ width: "28%", paddingLeft: "1.4vw" }}>
                                        <div className="fontstyle2 InteriorFlexhead" style={{fontSize: "1.65vw", letterSpacing: "-0.8px"}}>
                                            New Upholstery
                                    </div>
                                        <p className="fontstyle InteriorFlextext" style={{fontSize: "0.95vw", lineHeight: "1vw", paddingTop: "0.4vw", letterSpacing: "-0.8px"}}>
                                            The new stylish seat upholstery enhances
                                            your driving experience by giving extra
                                            comfort.
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