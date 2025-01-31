import React from "react";
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid';
import HeadShake from "react-reveal/HeadShake";

import Exterior3Image1 from "../../assets/x70/exterior/exterior3image1.png";
import Exterior3Image2 from "../../assets/x70/exterior/exterior3image2.png";
import Shoes from "../../assets/x70/exterior/shoes.png";

const AirbnbSlider = withStyles({
    root: {
        color: '#ffffff',
        height: 3,
        padding: '13px 0',
    },
    active: {},
    track: {
        height: 3,
    },
    rail: {
        color: '#d8d8d8',
        opacity: 1,
        height: 3,
    },
})(Slider);

export default class Exterior3 extends React.Component {
    constructor() {
        super();
        this.state = {
            dragged: false,
            overflow: false,
        }
    }

    allowDrop(ev) {
        ev.preventDefault();
    }
    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }
    drop(ev) {
        this.setState({ dragged: !this.state.dragged });
        ev.preventDefault();
    }
    AirbnbThumbComponent(props) {
        return (

            <HeadShake bottom>
                <span {...props}>
                    <img className="shoes" src={Shoes} alt="shoes" height="auto" width="45px" style={{ position: "relative", top: 10, right: -5 }} />
                </span>
            </HeadShake>

        );
    }
    changeSliderValue(event, number) {
        this.setState({ dragged: number > 50 ? true : false, overflow: number > 50 ? true : false });
    }
    render() {
        
        return (

            <div className="GridMarginTopBottomExterior3X70">
                <Grid container  >
                    <Grid item xs={0} sm={0}>
                    </Grid>
                    <div className="ConvenienceAtaStepMobile" style={{ display: "none" }}>
                        <h1 className="fontstyle convenienceHead">Convenience at <span className="fontstyle2">a step</span></h1>
                        <p className="fontstyle" style={{letterSpacing:"-1px",fontSize:"14px"}}> Swing your foot under the bumper and back to expereince hands-free trunk opening and closing.</p>
                    </div>
                    <Grid item xs={12} sm={7} style={{ paddingTop: "0.5%" }}>

                        <div className="ext3MainImageDiv" style={{ width: "100%", height: "100%"}}>
                            {!this.state.dragged &&
                                <img src={Exterior3Image1} alt="exteriorimage1" height="100%" width="100%" />
                                ||
                                <img src={Exterior3Image2} alt="exteriorimage2" height="auto" width="100%" />
                            }
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={5} >

                        <div className="ext3MainFoot" style={{ width: "100%", paddingLeft: "40px", height: "100%", justifyContent: "center", display: "flex", flexDirection: "column" }}>
                            <div style={{ height: "20%", display: "flex", flexDirection: "column" }}>
                                <div className="ConvenienceAtaStep">
                                    <h1 className="fontstyle ext3Head" style={{ fontSize: "3vw", letterSpacing: "-2px" }}>Convenience at <span className="fontstyle2">a step</span></h1>
                                </div>
                                <div className="fontstyle swingYourfootText" style={{ width: "80%", paddingTop: "35px", fontSize: "1.3vw", letterSpacing: "-0.8px", color: "black" }}>
                                    Swing your foot under the bumper and back to expereince hands-free trunk opening and closing.
                        </div>
                            </div>
                            
                            <div className="AirbnbSlider" style={{ height: "50%", paddingTop: "55px", width: "70%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            
                                    <div className="AirbnbSliderInner1" style={{ width: "40%", height: "70%", borderTop: "2px solid dodgerblue", display: "flex", justifyContent: "center", overflowY: this.state.overflow && "hidden" }}>
                                        <AirbnbSlider
                                            style={{ height: "50%"}}
                                            className="airbsliderMobile"
                                            ThumbComponent={this.AirbnbThumbComponent}
                                            getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                                            defaultValue={0}
                                            orientation="vertical"
                                            onChange={this.changeSliderValue.bind(this)}
                                        />
                                    </div>
                                



                                <div className="LiftToOpenText1" style={{ width: "25%", paddingTop: "55px", display: "flex", height: "80%", alignItems: "center", }}>
                                    <div className="fontstyle2 LiftToOpenText" style={{ color: "black", fontSize: "0.8vw", borderTop: "1px solid black", borderBottom: "1px solid black", padding: "10px 0px" }}>
                                        LIFT YOUR
                                        FOOT TO OPEN
                                        TAIL GATE.
                            </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={0} sm={0}>

                    </Grid>
                </Grid>
            </div>
        )
    }
}