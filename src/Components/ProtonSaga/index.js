import React from 'react';
import { Server } from "../Services"
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PerformanceGrid from "../ProtonSaga/performanceGrid"
import ExteriorGrid from "../ProtonSaga/exteriorGrid"
import ExteriorGrid2 from "./exterior2";
import DesignGrid from "../ProtonSaga/designGrid"
import InteriorGrid from "../ProtonSaga/interiorGrid"
import SafetyOurPriorityGrid from "../ProtonSaga/safetyOurPriority"
import SafetyGrid2 from "./safetyGrid2";
import ReverseCameraGrid from "../ProtonSaga/reverseCameraParkingSensor"
import TakeAPeekGrid from "./takeAPeek"
import ModalGrid from "../ProtonSaga/modalGrid"
import Grid from '@material-ui/core/Grid';
import { Navbar } from 'react-bootstrap'
import Slickyslider from "../slickySlider";
import CarousalSlider from "../CarousalSlider";
import Fade from 'react-reveal/Fade';
import List from "@material-ui/core/List";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import protonIntro from "../../assets/Video/protonintro.mp4"
import ScrollTop from "../../assets/images/scrollTop.png";
import bookClick from "../../assets/images/bookClick.png";
import bookWork from "../../assets/images/bookworksaga.png";
import pdfclick from "../../assets/images/pdfclick.png";
import pdfwork from "../../assets/images/pdfwork.png";
import { connect } from "react-redux";
import { AppActions } from "../../store/actions"
import "./protonsaga.css"


class ProtonSaga extends React.Component {


    constructor(props) {
        super(props)

        this.videoDiv = React.createRef();
        this.designSliderDiv = React.createRef();
        this.performanceDiv = React.createRef();
        this.exteriorDiv = React.createRef();
        this.exteriorDiv2 = React.createRef();

        this.interiorDiv = React.createRef()
        this.slickyslider11 = React.createRef()
        this.safetyPriotyDiv = React.createRef()
        this.safetyGrid2 = React.createRef()
        this.slickyslider22 = React.createRef()
        this.reverseCameraDiv = React.createRef()
        this.takeApeekDiv = React.createRef();
        this.modal = React.createRef();

        this.state = {
            expand1Icon: false,
            bookingButtonMobile: false,
            pdfMobile: false,
            scrolled: false,
            currentActiveDiv: 1,

            scrollToVideoDiv: false,
            scrollToDesign: false,
            scrollToPerformance: false,
            scrollToExterior: false,
            scrollToInterior: false,
            scrollToslickyslider1: false,
            scrollTosafetypriority: false,
            scrollToslickyslider2: false,
            scrollToReveresecamera: false,
            scrollToTakeapeek: false,
            scrollToModal: false,


            down: false,
            up: false,
            eBook: true,

            expandExterior: false,
            expandSafety: false
        }
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

    }



    componentDidUpdate(prevProps, prevState) {


        if (this.state.scrollToDesign) {
            if (this.state.up) {
                this.scrollToMyRefUp(this.designSliderDiv)
            }
            else {
                this.scrollToMyRefDown(this.designSliderDiv)
            }
        }
        else if (this.state.scrollToPerformance) {
            if (this.state.up) {
                this.scrollToMyRefUp(this.performanceDiv)
            }
            else {
                this.scrollToMyRefDown(this.performanceDiv)
            }
        }
        else if (this.state.scrollToVideoDiv) {
            if (this.state.up) {
                this.scrollToMyRefUp(this.videoDiv)
            }
            else {
                this.scrollToMyRefDown(this.videoDiv)
            }
        }
        else if (this.state.scrollToExterior) {
            if (this.state.up) {
                this.scrollToMyRefUp(this.exteriorDiv)
            }
            else {
                this.scrollToMyRefDown(this.exteriorDiv)
            }
        }
        else if (this.state.scrollToInterior) {
            if (this.state.up) {
                this.scrollToMyRefUp(this.interiorDiv)
            }
            else {
                this.scrollToMyRefDown(this.interiorDiv)
            }
        }
        else if (this.state.scrollToslickyslider1) {
            if (this.state.up) {
                this.scrollToMyRefUp(this.slickyslider11)
            }
            else {
                this.scrollToMyRefDown(this.slickyslider11)
            }
        }
        else if (this.state.scrollTosafetypriority) {
            if (this.state.up) {
                this.scrollToMyRefUp(this.safetyPriotyDiv)
            }
            else {
                this.scrollToMyRefDown(this.safetyPriotyDiv)
            }
        }

        else if (this.state.scrollToslickyslider2) {
            if (this.state.up) {
                this.scrollToMyRefUp(this.slickyslider22)
            }
            else {
                this.scrollToMyRefDown(this.slickyslider22)
            }
        }

        else if (this.state.scrollToReveresecamera) {
            if (this.state.up) {
                this.scrollToMyRefUp(this.reverseCameraDiv)
            }
            else {
                this.scrollToMyRefDown(this.reverseCameraDiv)
            }
        }
        else if (this.state.scrollToTakeapeek) {
            if (this.state.up) {
                this.scrollToMyRefUp(this.takeApeekDiv)
            }
            else {
                this.scrollToMyRefDown(this.takeApeekDiv)
            }
        }

        else if (this.state.scrollToModal) {
            if (this.state.up) {
                this.scrollToMyRefUp(this.modal)
            }
            else {
                this.scrollToMyRefDown(this.modal)
            }
        }

    }


    scrollToMyRefDown = (to) => window.scrollTo(0, to.current.offsetTop - 40);
    scrollToMyRefUp = (to) => window.scrollTo(0, to.current.offsetTop)

    componentDidMount() {
        if (this.props.searchglobalvalue !== undefined) {
            var c = this.props.searchglobalvalue;
            if (c === "Saga CC") {
                var gg = document.getElementById("pMobile");
                gg.scrollIntoView();
                this.props.searchGlobal("")
            }
            else if (c === "Saga Features") {
                var gg = document.getElementById("SsliderMobile");
                gg.scrollIntoView();
                this.props.searchGlobal("")
            }
            else if (c === "Saga Variants") {
                var gg = document.getElementById("InteriorMobile");
                gg.scrollIntoView();
                this.props.searchGlobal("")
            }
            else if (c === "Saga Price") {
                var gg = document.getElementById("ModalMobile");
                gg.scrollIntoView();
                this.props.searchGlobal("")
            }
            else if (c === "Saga Safety") {
                var gg = document.getElementById("SMobile");
                gg.scrollIntoView();
                this.props.searchGlobal("")
            }
           
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps, "component will reciewve props")
        if (nextProps && nextProps.searchglobalvalue) {
                var c = nextProps.searchglobalvalue;
                if (c === "Saga CC") {
                    var gg = document.getElementById("pMobile");
                    gg.scrollIntoView();
                    this.props.searchGlobal("")
                }
                else if (c === "Saga Features") {
                    var gg = document.getElementById("SsliderMobile");
                    gg.scrollIntoView();
                    this.props.searchGlobal("")
                }
                else if (c === "Saga Variants") {
                    var gg = document.getElementById("InteriorMobile");
                    gg.scrollIntoView();
                    this.props.searchGlobal("")
                }
                else if (c === "Saga Price") {
                    var gg = document.getElementById("ModalMobile");
                    gg.scrollIntoView();
                    this.props.searchGlobal("")
                }
                else if (c === "Saga Safety") {
                    var gg = document.getElementById("SMobile");
                    gg.scrollIntoView();
                    this.props.searchGlobal("")
                }
        }
    }

    scrollFunction = () => {
        if (
            document.body.scrollTop > 500 ||
            document.documentElement.scrollTop > 500
        ) {
            this.setState({ scrollToTop: true });
        } else {
            this.setState({ scrollToTop: false });
        }
    };


    topFunction() {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    playPause() {
        var myVideo = document.getElementById("video2");
        if (myVideo.paused)
            myVideo.play();
        else
            myVideo.pause();
    }

    scrolltodiv() {
        var elmnt = document.getElementById("content");
        elmnt.scrollIntoView();
    }

    scrolltodiv2() {
        var elmnt = document.getElementById("exterior");
        elmnt.scrollIntoView();
    }
    handleExpand() {
        this.setState({ expand1Icon: false })
    }

    scrollDiv(value) {
        var e = document.getElementById(value);
        e.scrollIntoView({ behavior: "smooth" });
    }
    // scrollFunctionSearch(){
    //        var gg = document.getElementById("pMobile");
    //         gg.scrollIntoView();
    //     // alert("working")
    // }
    render() {


        window.onscroll = this.scrollFunction;
        window.onkeydown = function (e) {
            if (e.keyCode === 40) {
                if (this.state.currentActiveDiv === 1) {
                    this.setState({ currentActiveDiv: 2, scrollToDesign: true, down: true, up: false }, () => {
                        this.setState({ scrollToDesign: false })
                    })
                }
                else if (this.state.currentActiveDiv === 2) {
                    this.setState({ currentActiveDiv: 3, scrollToPerformance: true, scrollToDesign: false, down: true, up: false }, () => {
                        this.setState({ scrollToPerformance: false })
                    })
                }
                else if (this.state.currentActiveDiv === 3) {
                    this.setState({ currentActiveDiv: 4, scrollToExterior: true, scrollToPerformance: false, scrollToVideoDiv: false, scrollToDesign: false, down: true, up: false }, () => {
                        this.setState({ scrollToExterior: false })
                    })
                }
                else if (this.state.currentActiveDiv === 4) {
                    this.setState({ currentActiveDiv: 5, scrollToInterior: true, scrollToExterior: false, scrollToPerformance: false, scrollToVideoDiv: false, scrollToDesign: false, down: true, up: false }, () => {
                        this.setState({ scrollToInterior: false })
                    })
                }
                else if (this.state.currentActiveDiv === 5) {
                    this.setState({ currentActiveDiv: 6, scrollToslickyslider1: true, scrollToInterior: false, scrollToExterior: false, scrollToPerformance: false, scrollToVideoDiv: false, scrollToDesign: false, down: true, up: false }, () => {
                        this.setState({ scrollToslickyslider1: false })
                    })
                }
                else if (this.state.currentActiveDiv === 6) {
                    this.setState({ currentActiveDiv: 7, scrollTosafetypriority: true, scrollToslickyslider1: false, scrollToInterior: false, scrollToExterior: false, scrollToPerformance: false, scrollToVideoDiv: false, scrollToDesign: false, down: true, up: false }, () => {
                        this.setState({ scrollTosafetypriority: false })
                    })
                }
                else if (this.state.currentActiveDiv === 7) {
                    this.setState({ currentActiveDiv: 8, scrollToslickyslider2: true, scrollTosafetypriority: false, scrollToslickyslider1: false, scrollToInterior: false, scrollToExterior: false, scrollToPerformance: false, scrollToVideoDiv: false, scrollToDesign: false, down: true, up: false }, () => {
                        this.setState({ scrollToslickyslider2: false })
                    })
                }
                else if (this.state.currentActiveDiv === 8) {
                    this.setState({ currentActiveDiv: 9, scrollToReveresecamera: true, scrollToslickyslider2: false, scrollTosafetypriority: false, scrollToslickyslider1: false, scrollToInterior: false, scrollToExterior: false, scrollToPerformance: false, scrollToVideoDiv: false, scrollToDesign: false, down: true, up: false }, () => {
                        this.setState({ scrollToReveresecamera: false })
                    })
                }
                else if (this.state.currentActiveDiv === 9) {
                    this.setState({ currentActiveDiv: 10, scrollToTakeapeek: true, scrollToReveresecamera: false, scrollToslickyslider2: false, scrollTosafetypriority: false, scrollToslickyslider1: false, scrollToInterior: false, scrollToExterior: false, scrollToPerformance: false, scrollToVideoDiv: false, scrollToDesign: false, down: true, up: false }, () => {
                        this.setState({ scrollToTakeapeek: false })
                    })
                }
                else if (this.state.currentActiveDiv === 10) {
                    this.setState({ currentActiveDiv: 11, scrollToModal: true, scrollToTakeapeek: false, scrollToReveresecamera: false, scrollToslickyslider2: false, scrollTosafetypriority: false, scrollToslickyslider1: false, scrollToInterior: false, scrollToExterior: false, scrollToPerformance: false, scrollToVideoDiv: false, scrollToDesign: false, down: true, up: false }, () => {
                        this.setState({ scrollToModal: false })
                    })
                }
                else {
                    this.setState({ scrollToDesign: false, scrollToPerformance: false, scrollToVideoDiv: false, scrollToExterior: false, scrollToInterior: false, scrollToslickyslider1: false, scrollTosafetypriority: false, scrollToslickyslider2: false, scrollToReveresecamera: false, scrollToTakeapeek: false, scrollToModal: false, down: true, up: false })
                }
            }


            else if (e.keyCode === 38) {
                if (this.state.currentActiveDiv === 11) {
                    this.setState({ currentActiveDiv: 10, scrollToModal: false, scrollToTakeapeek: true, down: false, up: true }, () => {
                        this.setState({ scrollToTakeapeek: false })
                    })
                }
                else if (this.state.currentActiveDiv === 10) {
                    this.setState({ currentActiveDiv: 9, scrollToTakeapeek: false, scrollToReveresecamera: true, down: false, up: true }, () => {
                        this.setState({ scrollToReveresecamera: false })
                    })
                }
                else if (this.state.currentActiveDiv === 9) {
                    this.setState({ currentActiveDiv: 8, scrollToReveresecamera: false, scrollToslickyslider2: true, down: false, up: true }, () => {
                        this.setState({ scrollToslickyslider2: false })
                    })
                }
                else if (this.state.currentActiveDiv === 8) {
                    this.setState({ currentActiveDiv: 7, scrollToslickyslider2: false, scrollTosafetypriority: true, down: false, up: true }, () => {
                        this.setState({ scrollTosafetypriority: false })
                    })
                }
                else if (this.state.currentActiveDiv === 7) {
                    this.setState({ currentActiveDiv: 6, scrollTosafetypriority: false, scrollToslickyslider1: true, down: false, up: true }, () => {
                        this.setState({ scrollToslickyslider1: false })
                    })
                }
                else if (this.state.currentActiveDiv === 6) {
                    this.setState({ currentActiveDiv: 5, scrollTosafetypriority: false, scrollToInterior: true, down: false, up: true }, () => {
                        this.setState({ scrollToInterior: false })
                    })
                }

                else if (this.state.currentActiveDiv === 5) {
                    this.setState({ currentActiveDiv: 4, scrollToInterior: false, scrollToExterior: true, down: false, up: true }, () => {
                        this.setState({ scrollToExterior: false })
                    })
                }
                else if (this.state.currentActiveDiv === 4) {
                    this.setState({ currentActiveDiv: 3, scrollToExterior: false, scrollToPerformance: true, down: false, up: true }, () => {
                        this.setState({ scrollToPerformance: false })
                    })
                }
                else if (this.state.currentActiveDiv === 3) {
                    this.setState({ currentActiveDiv: 2, scrollToPerformance: false, scrollToDesign: true, down: false, up: true }, () => {
                        this.setState({ scrollToDesign: false })
                    })
                }
                else if (this.state.currentActiveDiv === 2) {
                    this.setState({ currentActiveDiv: 1, scrollToDesign: false, scrollToVideoDiv: true, down: false, up: true }, () => {
                        this.setState({ scrollToVideoDiv: false })
                    })
                }
                else {
                    this.setState({ scrollToDesign: false, scrollToPerformance: false, scrollToExterior: false, scrollToInterior: false, scrollToslickyslider1: false, scrollTosafetypriority: false, scrollToReveresecamera: false, scrollToTakeapeek: false, })
                }
            }
        }.bind(this);




        return (
            <div>
                <button
                    style={{ display: this.state.scrollToTop ? "block" : "none", background: "rgba(0,0,0,0)" }}
                    onClick={this.topFunction.bind(this)}
                    id="myBtn"
                >
                    <img src={ScrollTop} alt="scrollTop" height="40px" width="40px" />
                </button>
                <div>

                </div>
                {!this.state.bookingButtonMobile &&
                    <button
                        style={{ display: "none", background: "rgba(0,0,0,0)" }}
                        onClick={() => this.setState({ bookingButtonMobile: true })}
                        id={this.state.expand1Icon ? "bookingButtonMobile2" : "bookingButtonMobile"}
                    >
                        <img src={bookClick} alt="bookingButton" height="30px" width="60px" />
                    </button>
                }

                {this.state.bookingButtonMobile &&
                    <Fade right>
                        <button
                            style={{ background: "rgba(0,0,0,0)" }}
                            onClick={() => this.setState({ bookingButtonMobile: false })}
                            id={this.state.expand1Icon ? "bookingButtonMobile2" : "bookingButtonMobile"}
                        >
                            <img onClick={() => window.open(`${Server}/Saga-Booking`, '_blank')} src={bookWork} alt="bookingButton" height="20px" width="100px" />
                        </button>
                    </Fade>
                }
                {!this.state.pdfMobile &&
                    <button
                        style={{ display: "none", background: "rgba(0,0,0,0)" }}
                        onClick={() => this.setState({ pdfMobile: true })}
                        id={this.state.expand1Icon ? "pdfButtonMobile2" : "pdfButtonMobile"}
                    >
                        <img src={pdfclick} alt="bookingButton" height="30px" width="60px" />
                    </button>
                }

                {this.state.pdfMobile &&
                    <Fade right>
                        <button
                            style={{ background: "rgba(0,0,0,0)" }}
                            onClick={() => this.setState({ pdfMobile: false })}
                            id={this.state.expand1Icon ? "pdfButtonMobile2" : "pdfButtonMobile"}
                        >
                            <img onClick={() => window.open(`https://drive.google.com/file/d/1BSm3d20EQeYB_H2DOELn37Nj_pGdBKsm/view?usp=sharing`)} src={pdfwork} alt="bookingButton" height="20px" width="100px" />
                        </button>
                    </Fade>
                }
                <Navbar className="mobileStickyMenu" fixed="top" style={{ width: "111%", margin: "14% 0% 0% -18px", display: "none" }}>
                    <ExpansionPanel expanded={this.state.expand1Icon} style={{ boxShadow: "none", backgroundColor: "#cb1a24d6", width: "100%" }} onClick={() => { if (this.state.expand1Icon === true) { this.setState({ expand1Icon: false }) } else { this.setState({ expand1Icon: true }) } }} >
                        <ExpansionPanelSummary
                            expandIcon={this.state.expand1Icon ? <RemoveIcon style={{ fontSize: 15, color: this.state.expand2Icon ? "#000000" : "", color: "#ffffff", width: "22px", marginRight: "-53px" }} /> : <AddIcon style={{ fontSize: 15, color: "#ffffff", width: "22px", marginRight: "18px" }} />}

                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <ListItemText><span style={{ fontWeight: "bold", fontSize: "13px", color: "#ffffff", paddingLeft: "16px" }}>FEATURES</span></ListItemText>
                        </ExpansionPanelSummary>

                        <List >
                            <ListItem
                                button
                                onClick={this.scrollDiv.bind(this, "Mobile")}
                                style={{
                                    height: 33,
                                    cursor: "pointer",
                                    fontSize: "10px",
                                }}
                            >
                                <ListItemText ><span className="fontstyle2" style={{ fontSize: "11px", paddingLeft: "16px", color: "#ffffff" }}>DESIGN</span></ListItemText>

                                <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "24px", height: '16px', width: "16px", color: "#ffffff" }} /></ListItemIcon>
                            </ListItem>

                        </List>

                        <List >
                            <ListItem
                                button
                                onClick={this.scrollDiv.bind(this, "pMobile")}
                                style={{
                                    height: 33,
                                    cursor: "pointer",
                                    fontSize: "11px",
                                }}
                            >
                                <ListItemText><span className="fontstyle2" style={{ fontSize: "11px", paddingLeft: "16px", color: "#ffffff" }}>PERFORMANCE</span></ListItemText>
                                <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "24px", height: '16px', width: "16px", color: "#ffffff" }} /></ListItemIcon>
                            </ListItem>

                        </List>

                        <List >
                            <ListItem
                                button
                                onClick={this.scrollDiv.bind(this, "EMobile")}
                                style={{
                                    height: 33,
                                    cursor: "pointer",
                                    fontSize: "11px",
                                }}
                            >
                                <ListItemText ><span className="fontstyle2" style={{ fontSize: "11px", paddingLeft: "16px", color: "#ffffff" }}>EXTERIOR</span></ListItemText>
                                <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "24px", height: '16px', width: "16px", color: "#ffffff" }} /></ListItemIcon>
                            </ListItem>

                        </List>

                        <List >
                            <ListItem
                                button
                                onClick={this.scrollDiv.bind(this, "IMobile")}
                                style={{
                                    height: 33,
                                    cursor: "pointer",
                                    fontSize: "11px",
                                }}
                            >
                                <ListItemText ><span className="fontstyle2" style={{ fontSize: "11px", paddingLeft: "16px", color: "#ffffff" }}>FEATURES</span></ListItemText>
                                <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "24px", height: '16px', width: "16px", color: "#ffffff" }} /></ListItemIcon>
                            </ListItem>

                        </List>

                        <List >
                            <ListItem
                                button
                                onClick={this.scrollDiv.bind(this, "SMobile")}
                                style={{
                                    height: 33,
                                    cursor: "pointer",
                                    fontSize: "11px",
                                }}
                            >
                                <ListItemText ><span className="fontstyle2" style={{ fontSize: "11px", paddingLeft: "16px", color: "#ffffff" }}>SAFETY</span></ListItemText>
                                <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "24px", height: '16px', width: "16px", color: "#ffffff" }} /></ListItemIcon>
                            </ListItem>

                        </List>


                        <List >
                            <ListItem
                                button
                                onClick={this.scrollDiv.bind(this, "InteriorMobile")}
                                style={{
                                    height: 33,
                                    cursor: "pointer",
                                    fontSize: "11px",
                                }}
                            >
                                <ListItemText ><span className="fontstyle2" style={{ fontSize: "11px", paddingLeft: "16px", color: "#ffffff" }}>INTERIOR</span></ListItemText>
                                <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "24px", height: '16px', width: "16px", color: "#ffffff" }} /></ListItemIcon>
                            </ListItem>

                        </List>


                        <List >
                            <ListItem
                                button
                                onClick={this.scrollDiv.bind(this, "ModalMobile")}
                                style={{
                                    height: 33,
                                    cursor: "pointer",
                                    fontSize: "11px",
                                    marginBottom: "20px"
                                }}
                            >
                                <ListItemText ><span className="fontstyle2" style={{ fontSize: "11px", paddingLeft: "16px", color: "#ffffff" }}>CUSTOMIZE</span></ListItemText>
                                <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "24px", height: '16px', width: "16px", color: "#ffffff" }} /></ListItemIcon>
                            </ListItem>

                        </List>
                    </ExpansionPanel>
                </Navbar>



                <div className="stickyNavbar">
                    <Navbar className="navbarResponsive" fixed="top" style={{ display: "flex",justifyContent:"space-around", backgroundColor: "#ffffff", marginTop: "65px", paddingLeft:"13%" }}>
                        <div  onClick={() => this.setState({ currentActiveDiv: 2 }, () => {
                            if (this.state.currentActiveDiv < 2) {
                                this.scrollToMyRefDown(this.designSliderDiv)
                            }
                            else {
                                this.scrollToMyRefUp(this.designSliderDiv)
                            }
                        })}>
                            <p className="fontstyle2 hoverBorder" id={this.state.currentActiveDiv === 2 && "mobileBorder"} style={{ fontSize: "10px", color: this.state.currentActiveDiv === 2 ? "red" : "black", borderBottom: this.state.currentActiveDiv === 2 ? "2px solid grey" : "none", cursor: "pointer" }} >DESIGN</p>
                        </div>

                        <div className="navItemMain" style={{  }} onClick={() => this.setState({ currentActiveDiv: 3 }, () => {
                            if (this.state.currentActiveDiv < 3) {
                                this.scrollToMyRefDown(this.performanceDiv)
                            }
                            else {
                                this.scrollToMyRefUp(this.performanceDiv)
                            }
                        })}>
                            <p className="fontstyle2 hoverBorder" id={this.state.currentActiveDiv === 3 && "mobileBorder"} style={{ fontSize: "10px", color: this.state.currentActiveDiv === 3 ? "red" : "black", borderBottom: this.state.currentActiveDiv === 3 ? "2px solid grey" : "none", cursor: "pointer" }}>PERFORMANCE</p>
                        </div>

                        <div className="navItemMain" style={{  }} onClick={() => this.setState({ currentActiveDiv: 4 }, () => {
                            if (this.state.currentActiveDiv < 4) {
                                this.scrollToMyRefDown(this.exteriorDiv)
                            }
                            else {
                                this.scrollToMyRefUp(this.exteriorDiv)
                            }
                        })}>
                            <p className="fontstyle2 hoverBorder" id={this.state.currentActiveDiv === 4 && "mobileBorder"} style={{ fontSize: "10px", color: this.state.currentActiveDiv === 4 ? "red" : "black", borderBottom: this.state.currentActiveDiv === 4 ? "2px solid grey" : "none", cursor: "pointer" }}>EXTERIOR</p>
                        </div>

                        <div className="navItemMain" style={{  }} onClick={() => this.setState({ currentActiveDiv: 5 }, () => {
                            if (this.state.currentActiveDiv < 5) {
                                this.scrollToMyRefDown(this.interiorDiv)
                            }
                            else {
                                this.scrollToMyRefUp(this.interiorDiv)
                            }
                        })}>
                            <p className="fontstyle2 hoverBorder" id={this.state.currentActiveDiv === 5 && "mobileBorder"} style={{ fontSize: "10px", color: this.state.currentActiveDiv === 5 || this.state.currentActiveDiv === 6 ? "red" : "black", borderBottom: this.state.currentActiveDiv === 5 || this.state.currentActiveDiv === 6 ? "2px solid grey" : "none", cursor: "pointer" }} >FEATURES</p>
                        </div>

                        <div className="navItemMain" style={{display: "none" }} onClick={() => this.setState({ currentActiveDiv: 6 }, () => {
                            if (this.state.currentActiveDiv < 6) {
                                this.scrollToMyRefDown(this.slickyslider11)
                            }
                            else {
                                this.scrollToMyRefUp(this.slickyslider11)
                            }
                        })}>
                            <p className="fontstyle2 hoverBorder" id={this.state.currentActiveDiv === 6 && "mobileBorder"} style={{ fontSize: "10px", color: this.state.currentActiveDiv === 6 ? "red" : "black", borderBottom: this.state.currentActiveDiv === 6 ? "2px solid grey" : "none", cursor: "pointer" }} >slider1</p>
                        </div>


                        <div className="navItemMain" style={{}} onClick={() => this.setState({ currentActiveDiv: 7 }, () => {
                            if (this.state.currentActiveDiv < 7) {
                                this.scrollToMyRefDown(this.safetyPriotyDiv)
                            }
                            else {
                                this.scrollToMyRefUp(this.safetyPriotyDiv)
                            }
                        })}>
                            <p className="fontstyle2 hoverBorder" id={this.state.currentActiveDiv === 7 && "mobileBorder"} style={{ fontSize: "10px", color: this.state.currentActiveDiv === 7 || this.state.currentActiveDiv === 8 || this.state.currentActiveDiv === 9 ? "red" : "black", borderBottom: this.state.currentActiveDiv === 7 || this.state.currentActiveDiv === 8 || this.state.currentActiveDiv === 9 ? "2px solid grey" : "none", cursor: "pointer" }}>SAFETY</p>
                        </div>

                        <div className="navItemMain" style={{ display: "none" }} onClick={() => this.setState({ currentActiveDiv: 8 }, () => {
                            if (this.state.currentActiveDiv < 8) {
                                this.scrollToMyRefDown(this.slickyslider22)
                            }
                            else {
                                this.scrollToMyRefUp(this.slickyslider22)
                            }
                        })}>
                            <p className="fontstyle2 hoverBorder" id={this.state.currentActiveDiv === 8 && "mobileBorder"} style={{ fontSize: "10px", color: this.state.currentActiveDiv === 8 ? "red" : "black", borderBottom: this.state.currentActiveDiv === 8 ? "2px solid grey" : "none" }}>slider2</p>
                        </div>

                        <div className="navItemMain" style={{  display: "none" }} onClick={() => this.setState({ currentActiveDiv: 9 }, () => {
                            if (this.state.currentActiveDiv < 9) {
                                this.scrollToMyRefDown(this.reverseCameraDiv)
                            }
                            else {
                                this.scrollToMyRefUp(this.reverseCameraDiv)
                            }
                        })}>
                            <p className="fontstyle2 hoverBorder" id={this.state.currentActiveDiv === 9 && "mobileBorder"} style={{ fontSize: "10px", color: this.state.currentActiveDiv === 9 ? "red" : "black", borderBottom: this.state.currentActiveDiv === 9 ? "2px solid grey" : "none" }}>REVCamera</p>
                        </div>

                        <div className="navItemMain" style={{  }} onClick={() => this.setState({ currentActiveDiv: 10 }, () => {
                            if (this.state.currentActiveDiv < 10) {
                                this.scrollToMyRefDown(this.takeApeekDiv)
                            }
                            else {
                                this.scrollToMyRefUp(this.takeApeekDiv)
                            }
                        })}>
                            <p className="fontstyle2 hoverBorder" id={this.state.currentActiveDiv === 10 && "mobileBorder"} style={{ fontSize: "10px", color: this.state.currentActiveDiv === 10 ? "red" : "black", borderBottom: this.state.currentActiveDiv === 10 ? "2px solid grey" : "none", cursor: "pointer" }}>INTERIOR</p>
                        </div>

                        <div className="customize" style={{}} onClick={() => this.setState({ currentActiveDiv: 11 }, () => {
                            if (this.state.currentActiveDiv < 11) {
                                this.scrollToMyRefDown(this.modal)
                            }
                            else {
                                this.scrollToMyRefUp(this.modal)
                            }
                        })}>
                            <p className="fontstyle2 hoverBorder" id={this.state.currentActiveDiv === 11 && "mobileBorder"} style={{ fontSize: "10px", color: this.state.currentActiveDiv === 11 ? "red" : "black", borderBottom: this.state.currentActiveDiv === 11 ? "2px solid grey" : "none", cursor: "pointer" }}>CUSTOMIZE</p>
                        </div>

                        <div onClick={() => window.open(`https://drive.google.com/file/d/1BSm3d20EQeYB_H2DOELn37Nj_pGdBKsm/view?usp=sharing`)}   >
                            <p className="fontstyle2" style={{ fontSize: "10px", color: "black", cursor: "pointer" }}>E-CATALOG</p>
                        </div>
                        <div onClick={() => window.open(`${Server}/Saga-Booking`, '_blank')} className="bookNow-saga fontstyle2">
                            BOOK NOW
                        </div>

                    </Navbar>
                </div>


                {/* design div with slider */}
                <div id="Mobile" ref={this.designSliderDiv} >
                    <DesignGrid />
                </div>
                {/* design div with slider end */}

                     {/* video div */}
                     <div ref={this.videoDiv} className="video" onClick={this.playPause.bind(this)} style={{
                    // marginTop: "5%", marginBottom: "-6.3%"
                    marginTop: "0%", 

                }}>
                    <div
                        style={{
                            position: "relative",
                            paddingBottom: "56.25%",

                            paddingTop: 10,
                            height: 0,

                        }}
                    >
                        <iframe allowfullscreen loop="loop" id="video1"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                            }}
                            src={`${protonIntro}`}
                        />
                    </div>
                </div>
                {/* video div End */}


                {/* performance grid */}
                <div id="pMobile" ref={this.performanceDiv}  >
                    <PerformanceGrid />
                </div>
                {/* performance grid end */}


                {/* Exterior */}
                <div id="EMobile" ref={this.exteriorDiv} >
                    <ExteriorGrid
                        onClickExperience={() =>
                            this.setState({ expandExterior: true }, () => {
                                this.scrollToMyRefDown(this.exteriorDiv2)
                            })
                        }
                        isExpanded={this.state.expandExterior}
                        onClickMinimize={() =>
                            this.setState({ expandExterior: false }, () => {
                                this.scrollToMyRefUp(this.exteriorDiv)
                            })
                        }
                    />
                </div>
                {/* Exterior End */}

                {/* Exterior Grid 2 */}

                {this.state.expandExterior &&
                    <div id="p2Mobile" ref={this.exteriorDiv2}>
                        <ExteriorGrid2
                            onClickMinimize={() =>
                                this.setState({ expandExterior: false }, () => {
                                    this.scrollToMyRefUp(this.exteriorDiv)
                                })
                            }
                        />
                    </div>
                }

                {/* Exterior Grid 2 End */}

                {/* Interior Grid */}
                <div id="IMobile" ref={this.interiorDiv} >
                    <InteriorGrid />
                </div>
                {/* Interior Grid End */}

                {/* slicky slider Interior  */}
                <Grid id="SsliderMobile" className="slickySlider1" container ref={this.slickyslider11} style={{ paddingTop: "12%" }}>
                    <Grid item xs={12} sm={12} style={{ paddingBottom: "25%" }}>
                        <div className="sliderForOtherDevicesSaga">
                            <Slickyslider slider1={true} />
                        </div>
                        <div className="sliderForMobileTabletsSaga">
                            <CarousalSlider slider1={true} />
                        </div>
                    </Grid>
                </Grid>
                {/* slicky slider Interior End  */}



                {/* SAFETY OUR PRIORITY */}
                <div id="SMobile" ref={this.safetyPriotyDiv}>
                    <SafetyOurPriorityGrid
                        onClickExperience={() =>
                            this.setState({ expandSafety: true }, () => {
                                this.scrollToMyRefDown(this.safetyGrid2)
                            })
                        }
                        isExpanded={this.state.expandSafety}
                        onClickMinimize={() =>
                            this.setState({ expandSafety: false }, () => {
                                this.scrollToMyRefUp(this.safetyPriotyDiv)
                            })
                        }
                    />
                </div>


                {/* SAFETY OUR PRIORITY End */}

                {this.state.expandSafety &&
                    <div id="S2Mobile" ref={this.safetyGrid2}>
                        <SafetyGrid2
                            onClickMinimize={() =>
                                this.setState({ expandSafety: false }, () => {
                                    this.scrollToMyRefUp(this.safetyPriotyDiv)
                                })
                            }
                        />
                    </div>
                }


                {/* slicky slider2 Safety  */}
                <Grid id="SsliderMobile" className="slickySlider1" container ref={this.slickyslider22} style={{ paddingTop: "12%" }}>

                    <Grid item xs={12} sm={12} style={{ paddingBottom: "15%" }}>
                        <div className="sliderForOtherDevicesSaga">
                            <Slickyslider slider2={true} />
                        </div>
                        <div className="sliderForMobileTabletsSaga">
                            <CarousalSlider slider2={true} />
                        </div>

                    </Grid>
                </Grid>
                {/* slicky slider2 Safety End */}



                {/* reverse camera and parking sensor (safety) */}
                <div id="reverseCamera" ref={this.reverseCameraDiv}>
                    <ReverseCameraGrid />
                </div>
                {/* reverse camera and parking sensor End (safety) */}

                {/* TAKE A PEEK INSIDE */}
                <div id="InteriorMobile" ref={this.takeApeekDiv} style={{ paddingTop: "1%", paddingBottom: "3.2%" }}>
                    <TakeAPeekGrid />
                </div>
                {/* TAKE A PEEK INSIDE End */}

                {/* modal */}
                <div id="ModalMobile" className="modalMainIndex" ref={this.modal} style={{ marginTop: "20%", paddingBottom: "10%" }}>
                    < ModalGrid />
                </div>
                <div className="mobileVideo" style={{ display: "none" }} onClick={this.playPause.bind(this)}>
                    <video
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                        id="video2" autoPlay loop muted>
                        <source src={protonIntro} type="video/mp4" />
                    </video>
                </div>
            </div >
        );
    }

}


const mapStateToProps = (state) => {
    return {
        searchglobalvalue: state.AppReducer.searchglobalvalue,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        searchGlobal: (payload) => dispatch(AppActions.searchGlobal(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProtonSaga);