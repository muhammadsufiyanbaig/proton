import React from "react";
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';



import Performance2Image from "../../assets/x70/performance/p2.png";


export default class Performance2 extends React.Component {
    render() {
        return (
            <div>


                <div className="performanceGridX70">
                    <Grid container>
                        <Grid item xs={0} sm={1}>

                        </Grid>

                        <Grid item xs={12} sm={5}>
                            <Fade left>
                                <div className="performanceX70Image2" style={{ width: "100%", height: "100%" }}>
                                    <img src={Performance2Image} alt="safety" height="auto" width="90%" />
                                </div>
                            </Fade>
                        </Grid>
                        <Grid xs={0} sm={1} />
                        <Grid className="performance2X70Text" item xs={12} sm={4} style={{ paddingTop: "0.5%" }}>
                            <div style={{ color: "black" }}>
                                <h2 className="fontstyle" style={{ fontSize: "3vw", letterSpacing: "-2px" }}>Evocative <span className="fontstyle2" >performance</span></h2>
                            </div>
                            <div style={{ color: "black", paddingTop: "35px" }}>
                                <p className="fontstyle perfor2X70Text" style={{ fontSize: "1.3vw", letterSpacing: "-0.8px", color: "black" }} >
                                    Tuned by <span className="fontstyle2" style={{ color: 'black' }}>MIRA</span> experts and engineers, the vehicle will
                                boost your driving pleasure helping you ride with
                                charisma and confidence.
                            </p>
                            </div>
                        </Grid>
                        <Grid xs={0} sm={1}>

                        </Grid>
                    </Grid>
                </div>



                <div className="safetyMainDivMobile" style={{ display: "none",marginTop:"30%"}}>

                    <div className="performanceX70Image1Main" style={{ width: "100%", height: "100%" }}>
                        <img className="performanceX70Image1" src={Performance2Image} alt="safety" height="100%" width="90%" />
                    </div>
                    <div style={{ width: "100%" }} className="ExteriorGridText">


                        <div style={{ color: "black" }}>
                            <h2 className="fontstyle perfor2X70Head" style={{ fontSize: "3vw", letterSpacing: "-2px" }}>Evocative<span className="fontstyle2 sth">performance</span></h2>
                        </div>

                        <div className="exteriorGridTextInnerDiv" style={{ color: "black", paddingTop: "35px" }}>
                            <p className="fontstyle exteriorText1" style={{ fontSize: "1.3vw", letterSpacing: "-0.8px", color: "black" }} >
                                Tuned by <span className="fontstyle2" style={{ color: 'black' }}>MIRA</span> experts and engineers, the vehicle will
                                boost your driving pleasure helping you ride with
                                charisma and confidence.
                         </p>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}