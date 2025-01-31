import React from 'react';
import { Waypoint } from "react-waypoint";

import DragButtonLeft from "../../../assets/landing/section2/dragbuttonLeft.png"
import DragButtonLefDark from "../../../assets/landing/section2/DragButtonLeftDark.png"

import DragButtonRight from "../../../assets/landing/section2/dragbuttonRight.png"
import DragButtonRightDark from "../../../assets/landing/section2/DragButtonRightDark.png"

import ImageWheel from "./imageWheel";


import "./landingSection2.css"

class LandingSection2 extends React.Component {
    constructor() {
        super();
        this.state = {
            status: null,
            arrowLeft: 0,
            arrowRight: 0,
            animate: false
        }
    }
    render() {
        return (
            <div className="mainWrappersection2">
                <div className="fontstyle" style={{ display: "flex", justifyContent: "center", letterSpacing: "2.2vw", fontSize: "2.5vw", paddingTop: "1vw"}}>
                    PROTON <span className="fontstyle2" style={{ marginLeft: "1.5vw" }}>FAMILIA</span>
                </div>
                <div className="fontstyle" style={{ display: "flex", justifyContent: "center", fontSize: "1.8vw", paddingTop: "1.5vw", paddingBottom: "3vw" }}>
                    We are known for versatility
                </div>
                <ImageWheel history={this.props.history}
                    status={this.state.status}
                />

<Waypoint onEnter={() => this.setState({ animate: true,status: true })} onLeave={() => this.setState({ animate: false })}>
<div className="arrow-Wrapper">
                    <div className="arrow-Wrapper-left-wrapper">
                        <div className="arrowImageLeft1">
                            <img alt="-" src={DragButtonLeft} height="45px" width="55px" onClick={() => {
                                this.setState({ status: true })
                            }} />
                        </div>

                        <div className="arrowImageLeft2">
                            <img alt="-" src={DragButtonLefDark} height="45px" width="55px" onClick={() => {
                                this.setState({ status: true })
                            }} />
                        </div>
                    </div>

                    <div className="arrow-Wrapper-right-wrapper">
                        <div className="arrowImageRight1">
                            <img alt="-" src={DragButtonRight} height="45px" width="55px" onClick={() => {
                                this.setState({ status: false })
                            }} />
                        </div>

                        <div className="arrowImageRight2">
                            <img alt="-" src={DragButtonRightDark} height="45px" width="55px" onClick={() => {
                                this.setState({ status: false})
                            }} />
                        </div>
                    </div>
                </div>
</Waypoint>
               
            </div>
        );
    }
}
export default LandingSection2;
