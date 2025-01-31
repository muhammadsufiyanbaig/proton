import React from 'react';
import { Server } from "../../Services"

import map from "../../../assets/landing/section9Map/map.png"
import Fade from 'react-reveal/Fade';
import maphotspot from "../../../assets/landing/section9Map/redhotspot.png"
// import maphotspot2 from "../../../assets/landing/section9Map/lhrHotSpotRed.png"
// import maphotspot3 from "../../../assets/landing/section9Map/khiHotSpotRed.png"
import CloseIcon from "@material-ui/icons/Close";



import line1 from "../../../assets/landing/section9Map/line1.png"
import cityBox from "../../../assets/landing/section9Map/cityBox.png"


import "./landingMap.css"

class LandingSection9 extends React.Component {
    constructor(props) {
        super()
        this.state = {
            value: 0,
            cc: false
        }

    }
    render() {
        return (
            <div className="MainWrapperSection9">

                <div className="maphotspot1" >
                    <img onClick={() => this.setState({ value: this.state.value === 1 ? 0 : 1 })} src={maphotspot} height="100%" width="100%" alt="-" />
                </div>

                {
                    this.state.value === 1 &&

                    <div>
                        <Fade big delay={100}>
                            <div className="line1" >
                                <img src={line1} height="100%" width="100%" alt="-" />
                            </div>
                            <div className="line1CityBox" >
                                <img src={cityBox} height="100%" width="100%" alt="-" />
                            </div>
                            <div className="text1Div">
                                <div className="City1Heading fontstyle">
                                    <div>
                                        ISLAMABAD
                                    </div>
                                    <div className="boxCloseIcon" style={{ display: "none" }}>
                                        <CloseIcon onClick={() => this.setState({ value: this.state.value === 1 && 0 })} style={{ color: "#c0c4ca", cursor: "pointer", height: "20px", width: "20px" }} />
                                    </div>


                                </div>
                                <div className="City1Text fontstyle" >
                                    <div className="fontstyle2">ISLAMABAD MOTORS</div>
                                    <div style={{ marginTop: "5px" }}>
                                        <div>Contact: (051) 4433704</div>
                                        <div>Email: islamabad.motors@proton.com.pk</div>
                                        <div>Click for <span onClick={() => window.open(`${Server}/dealerInfo?city=Islamabad`, '_blank')} className="fontstyle2" style={{ borderBottom: "1px solid black", cursor: "pointer" }}>More Info</span></div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>

                }


                <div className="maphotspot2">
                    <img onClick={() => this.setState({ value: this.state.value === 2 ? 0 : 2 })} src={maphotspot} height="100%" width="100%" alt="-" />
                </div>

                {
                    this.state.value === 2 &&
                    <div>
                        <Fade big delay={100}>

                            <div className="line2" >
                                <img src={line1} height="100%" width="100%" alt="-" />
                            </div>
                            <div className="line2CityBox" >
                                <img src={cityBox} height="100%" width="100%" alt="-" />
                            </div>
                            <div className="text2Div">
                                <div className="City2Heading fontstyle">
                                    <div>
                                        LAHORE
                                    </div>
                                    <div className="boxCloseIcon" style={{ display: "none" }}>
                                        <CloseIcon onClick={() => this.setState({ value: this.state.value === 2 && 0 })} style={{ color: "#c0c4ca", cursor: "pointer", height: "20px", width: "20px" }} />
                                    </div>
                                </div>
                                <div className="City2Text fontstyle" >
                                    <div className="fontstyle2">MOMENTUM MOTORS</div>
                                    <div style={{ marginTop: "5px" }}>

                                        <div>Contact: (042) 36369618</div>
                                        <div>Email: momentum.motors@proton.com.pk</div>
                                        <div>Click for <span onClick={() => window.open(`${Server}/dealerInfo?city=Lahore`, '_blank')} className="fontstyle2" style={{ borderBottom: "1px solid black", cursor: "pointer" }}>More Info</span></div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                }

                <div className="maphotspot3">
                    <img onClick={() => this.setState({ value: this.state.value === 3 ? 0 : 3 })} src={maphotspot} height="100%" width="100%" alt="-" />
                </div>
                {
                    this.state.value === 3 &&
                    <div>
                        <Fade big delay={100}>
                            <div className="line3" >
                                <img src={line1} height="100%" width="100%" alt="-" />
                            </div>
                            <div className="line3CityBox" >
                                <img src={cityBox} height="100%" width="100%" alt="-" />
                            </div>
                            <div className="text3Div">
                                <div className="boxCloseIconhead3" style={{ display: "none" }}>
                                    <CloseIcon onClick={() => this.setState({ value: this.state.value === 3 && 0 })} style={{ color: "#c0c4ca", cursor: "pointer", height: "20px", width: "20px" }} />
                                </div>
                                <div className="City3Heading fontstyle">

                                    <div>
                                        KARACHI
                                    </div>

                                </div>


                                <div className="City3Text fontstyle" >
                                    <div className="fontstyle2">SOUTH MOTORS</div>
                                    <div style={{ marginTop: "5px" }}>

                                        <div>Contact: (021) 35074445-6</div>
                                        <div>Email: south.motors@proton.com.pk</div>
                                        <div>Click for <span onClick={() => window.open(`${Server}/dealerInfo?city=karachiSouth`, '_blank')} className="fontstyle2" style={{ borderBottom: "1px solid black", cursor: "pointer" }}>More Info</span></div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                }

                <div className="maphotspot4">
                    <img onClick={() => this.setState({ value: this.state.value === 4 ? 0 : 4 })} src={maphotspot} height="100%" width="100%" alt="-" />
                </div>
                {
                    this.state.value === 4 &&
                    <div>
                        <Fade big delay={100}>
                            <div className="line4" >
                                <img src={line1} height="80%" width="94%" alt="-" />
                            </div>
                            <div className="line4CityBox" >
                                <img src={cityBox} height="100%" width="100%" alt="-" />
                            </div>
                            <div className="text4Div">
                                <div className="boxCloseIconhead3" style={{ display: "none" }}>
                                    <CloseIcon onClick={() => this.setState({ value: this.state.value === 4 && 0 })} style={{ color: "#c0c4ca", cursor: "pointer", height: "20px", width: "20px" }} />
                                </div>
                                <div className="City3Heading fontstyle">
                                    <div>
                                        KARACHI
                                    </div>

                                </div>
                                <div className="City4Text fontstyle" >
                                    <div className="fontstyle2">APOLLO MOTORS</div>
                                    <div style={{ marginTop: "5px" }}>

                                        <div>Contact: (021) 34573329</div>
                                        <div>Email: apollo.motors@proton.com.pk</div>
                                        <div>Click for <span onClick={() => window.open(`${Server}/dealerInfo?city=karachiApollo`, '_blank')} className="fontstyle2" style={{ borderBottom: "1px solid black", cursor: "pointer" }}>More Info</span></div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                }


                <div className="locateProton" style={{ display: "none" }}>
                    <span style={{ fontSize: "20px", letterSpacing: "-1px" }}>Locate your</span> <span style={{ fontWeight: "bold", marginLeft: "3px", fontSize: "20px", letterSpacing: "-1px" }}>proton</span>
                </div>
                <div className="leftText">
                    <h2 className="fontstyle locateHeading " style={{ fontSize: "3vw", lineHeight: "1vw", letterSpacing: "-0.8px" }}>
                        Locate your <span className="fontstyle2" style={{ fontWeight: "bold" }}>proton</span>
                    </h2>
                    <p className="fontstyle locateText" style={{ fontSize: "1.3vw", lineHeight: "1.5vw", paddingTop: "50px", letterSpacing: "-0.8px" }}>
                        <span className="fontstyle2">Click</span> on the <span className="fontstyle2">Hotspots</span> to get basic information about
                        Proton Dealer in your city or click on the <span className="fontstyle2">'Info Button'</span> for more information and map directions.
                    </p>




                    <div onClick={() => window.open(`${Server}/dealerInfo?city=karachiApollo`, '_blank')} className="fontstyle2 getDealerButton" style={{ width: "9vw", fontSize: "0.8vw", height: "5vh", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px", marginTop: "50px", cursor: "pointer" }}>
                        GET DEALER INFO
                    </div>
                </div>
                <div className="map-wrapper">
                    <div className="map">
                        <img className="mapimgTag" src={map} height="55%" width="55%" alt="-" />
                    </div>
                    
                </div>
            </div>
        );
    }

}

export default LandingSection9;
