import React from "react";
import Grid from '@material-ui/core/Grid';
import RotateVehicle from '../../assets/images/rotateVehicle2.png';
import SagaHeading from "../../assets/landing/section3/sagaHeading.png"
import Fade from "react-reveal/Fade";
import Modal from "../modal/React360"
import Color0 from "../../assets/images/color0.png"
import Color1 from "../../assets/images/color1.png"
import Color2 from "../../assets/images/color2.png"
import Color3 from "../../assets/images/color3.jpg"
import Color4 from "../../assets/images/color4.png"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LoopIcon from '@material-ui/icons/Loop';
import "./protonsaga.css"

export default class ModalGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modelClickForGrabbing: false,
            animate: false,
            type: "PREMIUM AT",

            standardprice: "000000",
            exucutivePrice: "",

            dropdown: null,

            openModel: 5,
            button: "OFF",
            variant: 1,
            premiumAt: true,
            standardAt: false,
            standardMt: false,
            array: [
                'PREMIUM A/T',
                'STANDARD A/T',
                'STANDARD M/T',
            ],
            index: 0
        }
    }
    handleClick = (event) => {
        this.setState({ dropdown: event.currentTarget })
    }
    goToNext = () => {
        this.setState({ index: (this.state.index + 1) % this.state.array.length });
    };
    goToPrev = () => {
        if (this.state.index !== 0) {
            this.setState({ index: (this.state.index - 1) % this.state.array.length });
        }
    };

    render() {
        var modalFolderArr = [
            'rosewood-maroon',
            'red',
            'jet-grey',
            'arm-silver',
            'snow-white'
        ]
        var modalV = [
            'PremiumAt',
            'StandardAt',
            3
        ]
        return (
            <div>
                <Grid className="modalresponsivenes0" container style={{ paddingBottom: "5%" }}>
                    <Grid item xs={12} sm={12} >
                        <div className="modalresponsivenes1" style={{ height: "100%", width: "100%" }}>

                            <div className="modalresponsivenes2" style={{ paddingLeft: "7vw", paddingTop: "7vw" }}>
                                <div>
                                    <p className="fontstyle makechoiceMobileHead" id="modalresponsivenes3" style={{ paddingBottom: "1vw", fontSize: "2.7vw", wordSpacing: "2vw", letterSpacing: "1.6vw", textAlign: "center" }} >
                                        MAKE YOUR CHOICE
                                     </p>
                                </div>
                                <div className="modelHeadDesktop">
                                    <div className="rotateVehicle" style={{ height: "150px", marginTop: "1%", width: "97%", display: 'flex', justifyContent: 'flex-end', paddingRight: "10%", position: "absolute" }}>
                                        <img alt="-" src={RotateVehicle} alt="rotateVehicle" height="30px" width="auto" />
                                    </div>
                                    <div className="sagaHeading" style={{ height: "30px", width: "12%" }}>
                                        <img src={SagaHeading} height="100%" width="100%" alt="-" />
                                    </div>

                                    {this.state.type === "PREMIUM AT" &&
                                        <p className="fontstyle sagaTextTop" style={{ fontSize: "1.2vw", letterSpacing: "-0.5px", marginTop: "16px", fontWeight: 600 }}>ACE <span>PKR. 3,149,000/-</span></p>
                                    }

                                    {this.state.type === "STANDARD AT" &&
                                        <p className="fontstyle sagaTextTop" style={{ fontSize: "1.2vw", letterSpacing: "-0.5px", marginTop: "16px", fontWeight: 600 }}>STANDARD A/T</p>
                                    }
                                    {this.state.type === "STANDARD MT" &&
                                        <p className="fontstyle sagaTextTop" style={{ fontSize: "1.2vw", letterSpacing: "-0.5px", marginTop: "16px", fontWeight: 600 }}>STANDARD M/T</p>
                                    }
                                </div>
                            </div>



                            

                            <div className="modelHeadMobile" style={{ display: "none" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: "20px", paddingBottom: "50px" }}>
                                    <ArrowBackIosIcon onClick={this.goToPrev} style={{ height: '40px', width: "40px" }} />
                                    <p className="fontstyle " style={{ fontSize: "13px", letterSpacing: "-0.5px", marginTop: "8px", fontWeight: 600 }}> {this.state.array[this.state.index]} <span>PKR. 3,149,000/-</span></p>
                                    <ArrowForwardIosIcon onClick={this.goToNext} style={{ height: '40px', width: "40px" }} />
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "-12%", paddingBottom: "5%" }}>
                                    <img alt="-" src={RotateVehicle}  height="20px" width="auto" />
                                </div>
                            </div>
                            <Fade right delay={1000}>

                                <div onClick={() => this.setState({ modelClickForGrabbing: false })} onMouseOut={() => this.setState({ modelClickForGrabbing: true })} onMouseLeave={() => this.setState({ modelClickForGrabbing: false })} className={this.state.modelClickForGrabbing ? "modelClick" : "modalHover"} style={{ display: "flex", justifyContent: "center" }}>
                                    <Modal dir={modalFolderArr[this.state.openModel - 1]} CarModal={this.state.button === "ON" ? "Saga-light-on" : "Saga"} carVariant={modalV[this.state.variant - 1]} />
                                </div>

                            </Fade>
                        </div>
                    </Grid>
                </Grid>

                {/* modal functionality */}
                <Grid container className="modalFuntions" >
                    <Grid item xs={12} sm={12} >
                        <div className="modelFunctionsMAinDiv" style={{ display: "flex", width: "100%" }}>
                            <div className="chooseVarientMobile dn" style={{ width: "25%", marginLeft: "17vw", borderRight: "1px solid black" }}>
                                <div className="chooseVarient" style={{ paddingLeft: "4vw" }}>
                                    <h1 className="fontstyle2 modalFunctionsHead" style={{ fontSize: "1.2vw", letterSpacing: "-1px" }}>CHOOSE VARIANT</h1>
                                </div>
                                <div className="chooseVarient" style={{ paddingLeft: "4vw" }}>
                                    {this.state.type === "PREMIUM AT" &&
                                        <p className="fontstyle modalFunctionstext" style={{ fontSize: "0.9vw", letterSpacing: "-0.5px" }}>ACE</p>
                                    }

                                    {this.state.type === "STANDARD AT" &&
                                        <p className="fontstyle modalFunctionstext" style={{ fontSize: "0.9vw", letterSpacing: "-0.5px" }}>STANDARD A/T</p>
                                    }
                                    {this.state.type === "STANDARD MT" &&
                                        <p className="fontstyle modalFunctionstext" style={{ fontSize: "0.9vw", letterSpacing: "-0.5px" }}>STANDARD M/T</p>
                                    }
                                </div>
                                <div className="selectList" style={{ paddingLeft: "4vw" }}>
                                    <div style={{ backgroundColor: "white", width: "60%", borderRadius: 7 }} className="form-group selectList">
                                        <select onChange={(event) => this.setState({ type: event.target.value })} class="form-control selector fontstyle selectList1 " style={{ fontSize: "0.8vw", letterSpacing: "-0.7px", paddingLeft: "1vw", paddingRight: "4vw" }} >
                                            <option value="PREMIUM AT">ACE</option>
                                            {/* <option value="STANDARD AT">STANDARD AT</option> */}
                                            <option value="STANDARD MT">STANDARD MT</option>
                                        </select>
                                    </div>

                                </div>
                            </div>

                            <div className="chooseVarientMobile" style={{ width: "25%", borderRight: "1px solid black" }}>
                                <div className="chooseVarient" style={{ paddingLeft: "4vw" }}>
                                    <h1 className="fontstyle2 modalFunctionsHead" style={{ fontSize: "1.2vw", letterSpacing: "-1px" }}>CHOOSE COLOUR</h1>
                                </div>
                                <div className="chooseVarient" style={{ paddingLeft: "4vw" }}>
                                    {this.state.openModel === 1 &&
                                        <p className="fontstyle modalFunctionstext" style={{ fontSize: "0.9vw", letterSpacing: "-0.5px" }}>ROSEWOOD MAROON</p>
                                    }
                                    {this.state.openModel === 2 &&
                                        <p className="fontstyle modalFunctionstext" style={{ fontSize: "0.9vw", letterSpacing: "-0.5px" }}>RUBY RED</p>
                                    }
                                    {this.state.openModel === 3 &&
                                        <p className="fontstyle modalFunctionstext" style={{ fontSize: "0.9vw", letterSpacing: "-0.5px" }}>JET GREY</p>
                                    }
                                    {this.state.openModel === 4 &&
                                        <p className="fontstyle modalFunctionstext" style={{ fontSize: "0.9vw", letterSpacing: "-0.5px" }}>ARMOUR SILVER</p>
                                    }
                                    {this.state.openModel === 5 &&
                                        <p className="fontstyle modalFunctionstext" style={{ fontSize: "0.9vw", letterSpacing: "-0.5px" }}>SNOW WHITE</p>
                                    }
                                </div>

                                <div className="chooseVarient" style={{ display: "flex", width: "100%", paddingLeft: "3.7vw" }}>
                                    <img className="sagaChooseColorHoverEffect" style={{ border: this.state.openModel === 5 ? "1.2px solid red" : "none", opacity: this.state.openModel === 5 ? "1" : "0.8", borderRadius: this.state.openModel === 5 && 7, marginLeft: "0.5vw", cursor: 'pointer' }} onClick={() => this.setState({ openModel: 5 })} alt="-" src={Color2} height="13%" width="13%" />
                                    <img className="sagaChooseColorHoverEffect" style={{ border: this.state.openModel === 4 ? "1.2px solid red" : "none", opacity: this.state.openModel === 4 ? "1" : "0.8", borderRadius: this.state.openModel === 4 && 7, marginLeft: "0.5vw", cursor: 'pointer' }} onClick={() => this.setState({ openModel: 4 })} alt="-" src={Color1} height="13%" width="13%" />
                                    <img className="sagaChooseColorHoverEffect" style={{ border: this.state.openModel === 3 ? "1.2px solid red" : "none", opacity: this.state.openModel === 3 ? "1" : "0.8", borderRadius: this.state.openModel === 3 && 7, marginLeft: "0.5vw", cursor: 'pointer' }} onClick={() => this.setState({ openModel: 3 })} alt="-" src={Color0} height="13%" width="13%" />
                                    <img className="sagaChooseColorHoverEffect" style={{ border: this.state.openModel === 2 ? "1.2px solid red" : "none", opacity: this.state.openModel === 2 ? "1" : "0.8", borderRadius: this.state.openModel === 2 && 7, marginLeft: "0.5vw", cursor: 'pointer' }} onClick={() => this.setState({ openModel: 2 })} alt="-" src={Color4} height="13%" width="13%" />
                                    <img className="sagaChooseColorHoverEffect" style={{ border: this.state.openModel === 1 ? "1.2px solid red" : "none", opacity: this.state.openModel === 1 ? "1" : "0.8", borderRadius: this.state.openModel === 1 && 7, cursor: 'pointer', marginLeft: "0.5vw" }} onClick={() => this.setState({ openModel: 1 })} src={Color3} alt="color3" height="13%" width="13%" />
                                </div>
                            </div>


                            <div className="drlDiv " style={{ width: "25%", paddingLeft: "4vw", paddingTop: "0.2vw" }}>
                                <h3 className="fontstyle2 drl" style={{ fontSize: "1.2vw", letterSpacing: "-1px" }}>DRL</h3>
                                <p className="fontstyle daytime" style={{ fontSize: "0.9vw", letterSpacing: "-0.5px" }}>DAYTIME</p>

                                <div className="drlButton" style={{ display: "flex", width: "76px", backgroundColor: "#e30613", borderRadius: 7, height: "40px" }}>
                                    {this.state.button === "OFF" &&
                                        <div className="drlButtonInner" onClick={() => this.setState({ button: "ON" })} style={{ width: "37px", backgroundColor: "#fdfdfd", borderRadius: 7, height: "34px", marginTop: "0.14vw", marginLeft: "0.1vw" }}></div>
                                    }
                                    {this.state.button === "OFF" &&
                                        <div style={{ color: "#ffffff", cursor: 'pointer' }}><p className="fontstyle on" style={{ fontSize: "12px", paddingTop: "0.6vw", paddingLeft: "0.4vw" }}>ON</p></div>
                                    }
                                    {this.state.button === "ON" &&
                                        <div style={{ width: "37px", color: "#ffffff", cursor: 'pointer' }}><p className="fontstyle on" style={{ fontSize: "12px", paddingTop: "0.6vw", paddingLeft: "0.4vw" }}>OFF</p></div>

                                    }
                                    {this.state.button === "ON" &&
                                        <div className="drlButtonInner2" onClick={() => this.setState({ button: "OFF" })} style={{ width: "37px", backgroundColor: "#fdfdfd", borderRadius: 7, height: "34px", marginTop: "0.14vw" }}></div>
                                    }

                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                {/* modal functionality end */}
            </div>

        )
    }
}