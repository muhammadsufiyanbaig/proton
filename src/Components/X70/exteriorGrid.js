import React from "react";
import Grid from '@material-ui/core/Grid';
import Exterior from "../../assets/x70/exterior/exteriorX70.png";
import ExteriorMobile from "../../assets/x70/exterior/emobile.png";

import Slide from 'react-reveal/Slide';

import "./exterior.css"
export default class ExteriorGrid extends React.Component {
    constructor(props) {
        super(props);
        this.exteriorDiv = React.createRef();
        this.exteriorDiv2 = React.createRef();


        this.state = {
            animate: false,
            expandExterior: false,
            scrollToExteriorDiv: false,
        }
    }
    scrollToMyRefUp = (to) => window.scrollTo(0, to.current.offsetTop)

    componentDidUpdate(prevProps, prevState) {
        if (this.state.expandExterior) {
            this.scrollToMyRefUp(this.exteriorDiv2)
        }
    }

    removeEvent() {
        this.scrollToMyRefUp(this.exteriorDiv)
        this.setState({ expandExterior: false })

    }


    render() {
        return (
            <div>
                <div className="GridMarginTopBottomExteriorX70">
                    <Grid container ref={this.exteriorDiv} >
                        <Grid item xs={0} sm={1}>
                        </Grid>
                        <Grid item xs={12} sm={5} style={{ paddingTop: "0.5%" }}>
                            <Slide left>
                                <div className="exterior1ImageMain" style={{ width: "100%", height: "100%" }}>
                                    <img className="exterior1Image" src={Exterior} alt="Exterior" height="100%" width="100%" />
                                </div>
                            </Slide>
                        </Grid>
                        <Grid item xs={12} sm={5} >
                            <div style={{ width: "100%" }} className="ExteriorGridTextX70">
                                <div style={{ color: "black" }}>
                                    <h2 className="fontstyle perfor2X70Head" style={{ fontSize: "3vw", letterSpacing: "-2px" }}>Enjoy <span className="fontstyle2">encounter</span></h2>
                                </div>
                                <div style={{ color: "black", paddingTop: "35px" }}>
                                    <p className="fontstyle perfor2X70Text" style={{ fontSize: "1.3vw", letterSpacing: "-0.8px", color: "black" }} >
                                        Instantly recognizable visage along with LEDs
                                        increase illumination and recently incorporated
                                        cutting-edge safety features allow accurate
                                        warnings from potentially challenging and
                                        dangerous situations as a preventive action.
                                </p>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={0} sm={1}>

                        </Grid>
                    </Grid>
                    {/* experiance more */}
                </div>


                <div className="safetyMainDivMobile" style={{ display: "none" }}>

                    <div className="performanceX70Image1Main" style={{ width: "100%",paddingLeft:"30px" }}>
                        <img  src={ExteriorMobile} alt="safety" height="100%" width="90%" />
                    </div>
                    <div style={{ width: "100%" }} className="ExteriorGridText">

                        <div style={{ color: "black" }}>
                            <h2 className="fontstyle perfor2X70Head" style={{ fontSize: "3vw", letterSpacing: "-2px" }}>Enjoy<span className="fontstyle2 sth">encounter</span></h2>
                        </div>

                        <div className="exteriorGridTextInnerDiv" style={{ color: "black", paddingTop: "35px" }}>
                            <p className="fontstyle exteriorText1" style={{ fontSize: "1.3vw", letterSpacing: "-0.8px", color: "black" }} >
                                Instantly recognizable visage along with LEDs
                                increase illumination and recently incorporated
                                cutting-edge safety features allow accurate
                                warnings from potentially challenging and
                                dangerous situations as a preventive action.
                            </p>
                        </div>


                    </div>
                </div>
            </div>

        )
    }
}