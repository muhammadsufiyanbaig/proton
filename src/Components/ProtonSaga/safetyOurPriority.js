import React from "react";
import Grid from '@material-ui/core/Grid';
import Image from "../../assets/images/safetyprioritySaga.png"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';

import "./protonsaga.css"


export default class SafetyOurPriorityGrid extends React.Component {
    constructor(props) {
        super(props);
        this.expandSafetyDiv = React.createRef();
        this.SafetyDiv = React.createRef();

        this.state = {
            animate: false,
            expandSafetyFeatures: false,
        }
    }
    scrollToMyRef = (to) => window.scrollTo(0, to.current.offsetTop)


    componentDidUpdate(prevProps, prevState) {
        if (this.state.expandSafetyFeatures) {
            this.scrollToMyRef(this.expandSafetyDiv)
        }
    }

    removeSafetyEvent() {
        this.scrollToMyRef(this.SafetyDiv)
        this.setState({ expandSafetyFeatures: false })
    }

    render() {
        return (
            <div>
                <Grid className="safetyM" container ref={this.SafetyDiv}>
                    <Grid item xs={12} sm={12}>
                        <div className="safetyheading">
                            <h2 className="fontstyle  headSagaPerf" style={{ fontSize: "2.7vw" }}>SAFETY OUR PRIORITY</h2>
                        </div>
                    </Grid>
                </Grid>

                <Grid container className="GridMarginTopBottomSafety" >

                    <Grid item xs={0} sm={1}>

                    </Grid>
                    <Grid item xs={12} sm={5} >
                        <div style={{ width: "100%" }} className="safetyGridText" >
                            <div style={{ color: "black" }}>
                                <h2 className="fontstyle  headSagaPerf" style={{ fontSize: "3vw", letterSpacing: "-2px" }}>Navigates <span className="fontstyle2" >safety</span></h2>
                            </div>
                            <div style={{ color: "black", paddingTop: "35px", width: "85%" }}>
                                <p className="fontstyle text1SagaPerf" style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }} >
                                    Saga delivers its safety promise.The SRS front
                                    air-bags act as a shield in the case of collision and
                                    are devised to assist during troublesome parts of
                                    driving.
                                </p>
                            </div>

                            <div style={{ color: "black", paddingTop: "35px", width: "85%" }}>
                                <p className="fontstyle safety4StarsRating" style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }} >*All Saga variants have dual airbags with an ASEAN NCAP 4-Star rating.</p>
                            </div>
                            < HeadShake>
                                <div style={{ color: "black", paddingTop: "35px" }}>
                                    <p className="MontserratRegular experianceMore" style={{ fontSize: "1.1vw", color: "red" }}> <span>  {this.props.isExpanded ? <RemoveIcon onClick={() => this.props.onClickMinimize()} style={{ backgroundColor: "black", color: "white", borderRadius: 10, height: 30, width: 45 }} /> : <AddIcon onClick={() => this.props.onClickExperience()} style={{ backgroundColor: "black", color: "white", borderRadius: 10, height: 30, width: 45 }} />}</span> <span style={{ paddingLeft: '0.7vw' }}>EXPERIENCE SAFETY</span>
                                    </p>
                                </div>
                            </HeadShake>

                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Fade right>
                            <div className="safetyImage" style={{ width: "84%", height: "100%" }}>
                                <img src={Image} alt="safety" height="98%" width="100%" />
                            </div>
                        </Fade>

                    </Grid>

                    <Grid xs={0} sm={0}>

                    </Grid>
                </Grid>



                {/* mobile */}
                <div className="safetyMainDivMobile" style={{ display: "none" }}>

                    <div className="TopAllImages" style={{ width: "100%", height: "100%" }}>
                        <img className="ExteriorImage" src={Image} alt="Exterior" height="100%" width="100%" />
                    </div>

                    <div style={{ width: "100%" }} className="ExteriorGridText">
                        <div className="allDivsMainHeadings" style={{ marginTop: "35px" }} >
                            <h2 className="fontstyle " style={{ fontSize: "25px",letterSpacing: "-2px" }}>Navigates<span className="fontstyle2 sth">safety</span></h2>
                        </div>

                        <div className="exteriorGridTextInnerDiv" style={{ color: "black", paddingTop: "35px", marginLeft: "4vw", width: "72%" }}>
                            <p
                                className="fontstyle exteriorText1"
                                style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }}
                            >
                                Saga delivers its safety promise.The SRS front
                                air-bags act as a shield in the case of collision and
                                are devised to assist during troublesome parts of
                                driving.
                            </p>
                        </div>

                        <div className="exteriorGridTextInnerDiv" style={{ color: "black", paddingTop: "35px", marginLeft: "4vw", width: "68%" }}>
                            <p
                                className="fontstyle  exteriorText1"
                                style={{ fontSize: "1.3vw", letterSpacing: "-0.8px" }}
                            >
                                *All Saga variants have dual airbags with an ASEAN NCAP 4-Star rating.
                               </p>
                        </div>

                        {/* mobile */}
                        <HeadShake >
                            <div onClick={() => this.props.onClickExperience()} className="mobileExperianceMoreButton" style={{ color: "black", paddingLeft: "30px", display: "flex", alignItems: "center", marginTop: "5%", display: "none" }}>

                                {this.props.isExpanded ? (
                                    <div style={{ backgroundColor: "black", width: "11%", display: "flex", justifyContent: "center", borderRadius: "10px" }}>
                                        <RemoveIcon
                                            style={{
                                                color: "white",
                                            }}
                                            onClick={() => this.props.onClickMinimize()}
                                        />
                                    </div>

                                ) : (
                                        <div style={{ backgroundColor: "black", width: "11%", display: "flex", justifyContent: "center", borderRadius: "10px" }}>
                                            <AddIcon

                                                style={{
                                                    color: "white",
                                                }}
                                            />
                                        </div>
                                    )}
                                <div style={{ color: "red", paddingLeft: "10px", fontSize: "13px" }}>
                                    EXPERIENCE MORE
                   </div>
                            </div>
                        </HeadShake>
                        {/* mobile end */}
                    </div>

                </div>


                {/* mobile end */}




            </div>
        )
    }
}