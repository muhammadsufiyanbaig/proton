import React from "react";
import Grid from '@material-ui/core/Grid';
import Modal from "../modal/React360"
import X70Icon from "../../assets/images/X70Icon.png";
import Fade from "react-reveal/Fade";

import Color0 from "../../assets/images/color0.png"
import Color1 from "../../assets/images/color1.png"
import Color2 from "../../assets/images/color2.png"
import Color4 from "../../assets/images/color4.png"
import Color5 from '../../assets/images/color5.png';
import Color6 from '../../assets/images/color6.PNG';
import RotateVehicle from '../../assets/images/rotateVehicle2.png';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import "./X70.css"


export default class ModalGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modelClickForGrabbing: false,
            animate: false,
            type: "PREMIUM 2WD",
            mobileType: "PREMIUM 2WD",
            standardprice: "000000",
            exucutivePrice: "",

            dropdown: null,

            openModel: 6,
            button: "OFF",
            premiumAt: true,
            standardAt: false,
            standardMt: false,
            array: [
                'PREMIUM 2WD',
                'EXECUTIVE AWD',
            ],
            index: 0
        }
    }


    handleClick = (event) => {
        this.setState({ dropdown: event.currentTarget })
    }
    goToNext = () => {
        if (this.state.index !== 1) {
        this.setState({ index: (this.state.index + 1) ,type:"EXECUTIVE AWD",openModel:6})
        }
    };
    goToPrev = () => {
        if (this.state.index !== 0) {
            this.setState({ index: (this.state.index - 1) % this.state.array.length,type:"PREMIUM 2WD",openModel:6});
        }
    };

    render() {
        var modalFolderArr = [
            'brown',
            'space-grey',
            'red',
            'jet-grey',
            'arm-silver',
            'snow-white'
        ]
        return (
            <div>
                <Grid className="modalresponsivenes0" container >
                    <Grid item xs={12} sm={12} >
                        <div className="modalresponsivenes1" style={{ height: "100%", width: "100%" }}>

                            <div className="modalresponsivenes2" style={{ paddingLeft: "7vw", paddingTop: "7vw" }}>
                            <div>
                                    <p className="fontstyle makechoiceMobileHead" id="modalresponsivenes3" style={{ paddingBottom: "3vw", fontSize: "2.7vw", wordSpacing: "2vw", letterSpacing: "1.6vw", textAlign: "center" }} >
                                        MAKE YOUR CHOICE
                                     </p>
                                </div>
                                <div className="modelHeadDesktop">

                                    <div className="rotateVehicle" style={{ height: "150px", marginTop: "1%", width: "97%", display: 'flex', justifyContent: 'flex-end', paddingRight: "10%", position: "absolute" }}>
                                        <img alt="-" src={RotateVehicle}  height="30px" width="auto" />
                                    </div>
                                    <div className="sagaHeading" style={{ height: "30px", width: "12%" }}>
                                        <img src={X70Icon} alt="X70Icon" height="100%" width="100%" />
                                    </div>
                                    <p className="fontstyle" style={{ fontSize: "1.2vw", letterSpacing: "-0.5px", marginTop: "16px", fontWeight: 600 }}>FWD Premium PKR. 7,300,000/-</p>
                                </div>
                            </div>
                            <div className="modelHeadMobile" style={{ display: "none" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: "13px", paddingBottom: "50px" }}>
                                    <ArrowBackIosIcon onClick={this.goToPrev} style={{ height: '40px', width: "40px" }} />
                                    <p className="fontstyle " style={{ fontSize: "15px", letterSpacing: "-0.5px", marginTop: "8px", fontWeight: 600 }}> {this.state.array[this.state.index]} <span>PKR. 7,300,000/-</span></p>
                                    <ArrowForwardIosIcon onClick={this.goToNext} style={{ height: '40px', width: "40px" }} />
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "-12%", paddingBottom: "5%" }}>
                                    <img alt="-" src={RotateVehicle}  height="20px" width="auto" />
                                </div>
                            </div>
                            <Fade right delay={1000}>
                                <div onClick={() => this.setState({ modelClickForGrabbing: false })} onMouseOut={() => this.setState({ modelClickForGrabbing: true })} onMouseLeave={() => this.setState({ modelClickForGrabbing: false })} className={this.state.modelClickForGrabbing ? "modelClick" : "modalHover"} style={{ display: "flex", justifyContent: "center" }}>
                                    <Modal dir={modalFolderArr[this.state.openModel - 1]} CarModal={this.state.button === "ON" ? "x70-light-on" : "X70"} />
                                </div>
                            </Fade>
                        </div>
                    </Grid>
                </Grid>
                {/* modal functionality */}
                <Grid container className="modalFuntions mFM" >
                    <Grid xs={0} sm={1}></Grid>
                    <Grid item xs={12} sm={11} >
                        <div style={{ display: "flex", height: "100%", width: "100%" }}>
                            <div className="chooseVMobile dn" style={{ width: "25%", height: "100%", marginLeft: "9vw", borderRight: "1px solid black" }}>
                                <div className="chooseVarient" style={{ paddingLeft: "4vw" }}>
                                    <h1 className="fontstyle2 modalFunctionstext" style={{ fontSize: "1.2vw", letterSpacing: "-1px" }}>CHOOSE VARIANT</h1>
                                </div>
                                <div className="chooseVarient" style={{ paddingLeft: "4vw" }}>

                                    {this.state.type === "PREMIUM 2WD" &&
                                        <p className="fontstyle modalFunctionstext" style={{ fontSize: "0.9vw", letterSpacing: "-0.5px" }}>PREMIUM FWD</p>
                                    }
                                    {this.state.type === "EXECUTIVE AWD" &&
                                        <p className="fontstyle modalFunctionstext" style={{ fontSize: "0.9vw", letterSpacing: "-0.5px" }}>EXECUTIVE AWD</p>
                                    }
                                </div>

                                <div className="selectList sL" style={{ paddingLeft: "4vw" }}>
                                    <div style={{ backgroundColor: "white", width: "72%", height: "50%", borderRadius: 7 }} class="form-group sL">
                                        <select onChange={(event) => this.setState({ type: event.target.value, openModel: 6,index:this.state.index===0 ? 1:0 })} class="form-control selector fontstyle selectList1 " style={{ fontSize: "0.8vw", letterSpacing: "-0.7px", paddingLeft: "1vw", paddingRight: "4vw" }} >
                                            <option onClick={()=>alert("working")} selected value="PREMIUM 2WD">PREMIUM FWD</option>
                                            <option value="EXECUTIVE AWD">EXECUTIVE AWD</option>
                                        </select>
                                    </div>

                                </div>
                            </div>

                            <div className="chooseVarientMobilex70" style={{ width: "25%", height: "100%", borderRight: "1px solid black" }}>
                                <div className="chooseVarient" style={{ paddingLeft: "4vw" }}>
                                    <h1 className="fontstyle2 modalFunctionsHead" style={{ fontSize: "1.2vw", letterSpacing: "-1px" }}>CHOOSE COLOUR</h1>
                                </div>
                                <div className="chooseVarient" style={{ paddingLeft: "4vw" }}>
                                    {this.state.openModel === 1 &&
                                        <p className="fontstyle modalFunctionstext" style={{ fontSize: "0.9vw", letterSpacing: "-0.5px" }}>QUARTZ BLACK</p>
                                    }
                                    {this.state.openModel === 2 &&
                                        <p className="fontstyle modalFunctionstext" style={{ fontSize: "0.9vw", letterSpacing: "-0.5px" }}>SPACE GREY</p>
                                    }
                                    {this.state.openModel === 3 &&
                                        <p className="fontstyle modalFunctionstext" style={{ fontSize: "0.9vw", letterSpacing: "-0.5px" }}>RUBY RED</p>
                                    }
                                    {this.state.openModel === 4 &&
                                        <p className="fontstyle modalFunctionstext" style={{ fontSize: "0.9vw", letterSpacing: "-0.5px" }}>JET GREY</p>
                                    }
                                    {this.state.openModel === 5 &&
                                        <p className="fontstyle modalFunctionstext" style={{ fontSize: "0.9vw", letterSpacing: "-0.5px" }}>ARMOUR SILVER</p>
                                    }
                                    {this.state.openModel === 6 &&
                                        <p className="fontstyle modalFunctionstext" style={{ fontSize: "0.9vw", letterSpacing: "-0.5px" }}>SOLID WHITE</p>
                                    }

                                </div>
                                {this.state.type === "PREMIUM 2WD" && this.state.index===0 &&

                                    <div className="chooseVarient" style={{ display: "flex", width: "100%", paddingLeft: "3.7vw" }}>
                                        <img className="sagaChooseColorHoverEffect" style={{ border: this.state.openModel === 6 ? "1px solid red" : "none", borderRadius: this.state.openModel === 6 && 7, opacity: this.state.openModel === 6 ? "1" : "0.8", cursor: 'pointer', marginLeft: "0.5vw" }} onClick={() => this.setState({ openModel: 6, })} src={Color2} alt="-" height="13%" width="13%" />
                                        <img className="sagaChooseColorHoverEffect" style={{ border: this.state.openModel === 1 ? "1px solid red" : "none", borderRadius: this.state.openModel === 1 && 7, opacity: this.state.openModel === 1 ? "1" : "0.8", cursor: 'pointer', marginLeft: "0.5vw" }} onClick={() => this.setState({ openModel: 1 })} src={Color6} alt="modelImage" height="13%" width="13%" />
                                        <img className="sagaChooseColorHoverEffect" style={{ border: this.state.openModel === 5 ? "1px solid red" : "none", borderRadius: this.state.openModel === 5 && 7, opacity: this.state.openModel === 5 ? "1" : "0.8", cursor: 'pointer', marginLeft: "0.5vw" }} onClick={() => this.setState({ openModel: 5, })} src={Color1} alt="-" height="13%" width="13%" />
                                        <img className="sagaChooseColorHoverEffect" style={{ border: this.state.openModel === 2 ? "1px solid red" : "none", borderRadius: this.state.openModel === 2 && 7, opacity: this.state.openModel === 2 ? "1" : "0.8", cursor: 'pointer', marginLeft: "0.5vw" }} onClick={() => this.setState({ openModel: 2 })} src={Color5} alt="modelImage" height="13%" width="13%" />
                                        <img className="sagaChooseColorHoverEffect" style={{ border: this.state.openModel === 3 ? "1px solid red" : "none", borderRadius: this.state.openModel === 3 && 7, opacity: this.state.openModel === 3 ? "1" : "0.8", cursor: 'pointer', marginLeft: "0.5vw" }} onClick={() => this.setState({ openModel: 3, })} src={Color4} alt="-" height="13%" width="13%" />
                                    </div>
                                }

                                {this.state.type === "EXECUTIVE AWD" && this.state.index===1 &&
                                    <div className="chooseVarient" style={{ display: "flex", width: "100%", paddingLeft: "3.7vw" }}>
                                        <img className="sagaChooseColorHoverEffect" style={{ border: this.state.openModel === 6 ? "1px solid red" : "none", borderRadius: this.state.openModel === 6 && 7, opacity: this.state.openModel === 6 ? "1" : "0.8", cursor: 'pointer', marginLeft: "0.5vw" }} onClick={() => this.setState({ openModel: 6, })} src={Color2} alt="-" height="13%" width="13%" />
                                        <img className="sagaChooseColorHoverEffect" style={{ border: this.state.openModel === 1 ? "1px solid red" : "none", borderRadius: this.state.openModel === 1 && 7, opacity: this.state.openModel === 1 ? "1" : "0.8", cursor: 'pointer', marginLeft: "0.5vw" }} onClick={() => this.setState({ openModel: 1})} src={Color6} alt="modelImage" height="13%" width="13%" />
                                        <img className="sagaChooseColorHoverEffect" style={{ border: this.state.openModel === 4 ? "1px solid red" : "none", borderRadius: this.state.openModel === 4 && 7, opacity: this.state.openModel === 4 ? "1" : "0.8", cursor: 'pointer', marginLeft: "0.5vw" }} onClick={() => this.setState({ openModel: 4, })} src={Color0} alt="-" height="13%" width="13%" />    
                                    </div>
                                }

                            </div>

                            <div className="chooseColourx70" style={{ width: "25%", paddingLeft: "4vw", paddingTop: "0.2vw"}}>
                                <h3 className="fontstyle2 " style={{ fontSize: "1.2vw", letterSpacing: "-1px" }}>CHOOSE DRIVE</h3>
                                <p className="fontstyle " style={{ fontSize: "0.9vw", letterSpacing: "-0.5px" }}>ALL WHEEL DRIVE</p>

                                <div style={{ display: "flex", width: "4.5vw", backgroundColor: "#e30613", borderRadius: 7, height: "2.2vw" }}>

                                    {this.state.type === "EXECUTIVE 2WD" &&
                                        <div style={{ display: "flex" }}>
                                            <div  style={{ width: "2.2vw", backgroundColor: "#fdfdfd", borderRadius: 7, height: "1.95vw", marginTop: "0.12vw", marginLeft: "0.15vw" }}></div>
                                            <div   style={{ width: "1.5vw", color: "#ffffff", cursor: 'pointer' }}><p className="fontstyle" style={{ fontSize: "0.6vw", paddingTop: "0.5vw", paddingLeft: "0.2vw" }}>2WD</p></div>
                                        </div>

                                    }
                                    {this.state.type === "PREMIUM 2WD" &&
                                        <div  style={{ display: "flex" }}>
                                            <div style={{ width: "2.2vw", backgroundColor: "#fdfdfd", borderRadius: 7, height: "1.95vw", marginTop: "0.12vw", marginLeft: "0.15vw" }}></div>
                                            <div style={{ width: "1.5vw", color: "#ffffff", cursor: 'pointer' }}><p className="fontstyle" style={{ fontSize: "0.6vw", paddingTop: "0.5vw", paddingLeft: "0.2vw" }}>2WD</p></div>
                                        </div>

                                    }
                                    {this.state.type === "EXECUTIVE AWD" &&
                                        <div  style={{ display: "flex" }}>
                                            <div style={{ width: "1.5vw", color: "#ffffff", cursor: 'pointer' }}><p className="fontstyle" style={{ fontSize: "0.6vw", paddingTop: "0.5vw", paddingLeft: "0.2vw" }}>AWD</p></div>
                                            <div style={{ width: "2.2vw", backgroundColor: "#fdfdfd", borderRadius: 7, height: "1.95vw", marginTop: "0.12vw", marginLeft: "0.7vw" }}></div>
                                        </div>
                                    }
                                </div>
                            </div>


                            {/* <div className="chooseColourx70Mobile" style={{ width: "42%", paddingLeft: "20px",marginTop:"1px",display:"none"}}>
                                <h3 className="fontstyle2 " style={{ fontSize: "12px",fontWeight:600 }}>CHOOSE DRIVE</h3>
                                <p className="fontstyle" style={{ fontSize: "8px",paddingTop:"5px"}}>ALL WHEEL DRIVE</p>

                                <div style={{ display: "flex", width: "50%", backgroundColor: "#e30613", borderRadius: 7, height: "30%",marginTop:"20px" }}>

                                 
                                    {this.state.type === "PREMIUM 2WD" &&
                                        <div  style={{ display: "flex" }}>
                                            <div style={{ width: "7vw", backgroundColor: "#fdfdfd", borderRadius: 7, height: "6vw",margin:"3px 0px 0px 3px" }}></div>
                                            <div style={{ width: "5vw", color: "#ffffff", cursor: 'pointer' }}><p className="fontstyle" style={{ fontSize: "10px",padding:"5px 3px 0px 3px" }}>2WD</p></div>
                                        </div>

                                    }
                                    {this.state.type === "EXECUTIVE AWD" &&
                                        <div style={{ display: "flex" }}>
                                            <div style={{ width: "7vw", color: "#ffffff", cursor: 'pointer' }}><p className="fontstyle"  style={{ fontSize: "10px",padding:"5px 3px 0px 3px" }}>AWD</p></div>
                                            <div style={{ width: "7vw", backgroundColor: "#fdfdfd", borderRadius: 7, height: "6vw",margin:"3px 0px 0px 6px" }}></div>
                                        </div>
                                    }
                                </div>
                            </div> */}

                            <div className="drlDiv" style={{ width: "25%", paddingLeft: "4vw", paddingTop: "0.2vw",display:"none" }}>
                                <h3 className="fontstyle2 drl" style={{ fontSize: "1.2vw", letterSpacing: "-1px" }}>DRIVE</h3>
                                <p className="fontstyle daytime" style={{ fontSize: "0.9vw", letterSpacing: "-0.5px" }}>ALL WHEEL DRIVE</p>

                                <div className="drlButton" style={{ display: "flex", width: "76px", backgroundColor: "#e30613", borderRadius: 7, height: "40px" }}>
                                    {this.state.type === "PREMIUM 2WD" &&
                                        <div className="drlButtonInner"  style={{ width: "37px", backgroundColor: "#fdfdfd", borderRadius: 7, height: "34px", marginTop: "0.14vw", marginLeft: "0.1vw" }}></div>
                                    }
                                    {this.state.type === "PREMIUM 2WD" &&
                                        <div style={{ color: "#ffffff", cursor: 'pointer',marginTop:"2px" }}><p className="fontstyle on" style={{ fontSize: "10px", paddingTop: "0.7vw", paddingRight: "0.3vw" }}>2WD</p></div>
                                    }
                                    {this.state.type === "EXECUTIVE AWD" &&
                                        <div style={{ width: "37px", color: "#ffffff", cursor: 'pointer',marginTop:"2px" }}><p className="fontstyle on" style={{ fontSize: "10px", paddingTop: "0.7vw", paddingLeft: "0.2vw" }}>AWD</p></div>

                                    }
                                    {this.state.type === "EXECUTIVE AWD" &&
                                        <div className="drlButtonInner2"  style={{ width: "37px", backgroundColor: "#fdfdfd", borderRadius: 7, height: "34px", marginTop: "0.14vw" }}></div>
                                    }

                                </div>
                            </div>

{/* drl x70  */}
                            {/* <div className="drlDiv" style={{ width: "25%", paddingLeft: "4vw", paddingTop: "0.2vw" }}>
                                <h3 className="fontstyle2 drl" style={{ fontSize: "1.2vw", letterSpacing: "-1px" }}>DRL</h3>
                                <p className="fontstyle daytime" style={{ fontSize: "0.9vw", letterSpacing: "-0.5px" }}>DAYTIME</p>
                                <div className="drlButton" style={{ display: "flex", width: "76px", backgroundColor: "#e30613", borderRadius: 7, height: "36px" }}>
                                    {this.state.button === "OFF" && 
                                        <div className="drlButtonInner" onClick={() => this.setState({ button:"ON" })} style={{ width: "37px", backgroundColor: "#fdfdfd", borderRadius: 7, height: "31.5px", marginTop: "0.14vw", marginLeft: "0.1vw" }}></div>
                                    }
                                    {this.state.button === "OFF" &&
                                        <div style={{ color: "#ffffff", cursor: 'pointer' }}><p className="fontstyle on" style={{ fontSize: "12px", paddingTop: "0.45vw", paddingLeft: "0.4vw" }}>ON</p></div>
                                    }
                                    {this.state.button === "ON" &&
                                        <div style={{ width: "37px", color: "#ffffff", cursor: 'pointer' }}><p className="fontstyle on" style={{ fontSize: "12px", paddingTop: "0.45vw", paddingLeft: "0.4vw" }}>OFF</p></div>

                                    }
                                    {this.state.button === "ON" &&
                                        <div className="drlButtonInner2" onClick={() => this.setState({ button: "OFF" })} style={{ width: "37px", backgroundColor: "#fdfdfd", borderRadius: 7, height: "31.5px", marginTop: "0.14vw" }}></div>
                                    }
                                </div>
                            </div> */}
                        </div>
                    </Grid>
                </Grid>
                {/* modal functionality end */}
            </div>

        )
    }
}