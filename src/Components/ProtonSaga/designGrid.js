import React from "react";
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-bootstrap/Carousel'
import ProtonBumper from "../../assets/images/protonBumper.png"
import ProtonBumper2 from "../../assets/images/protonBumper2.png"
import ProtonBumper3 from "../../assets/images/protonBumper3.png"
import Nexticon from "../../assets/images/nexticon2.png";
import Previousicon from "../../assets/images/previousicon2.png";
import "./designSlider.css"

export default class DesignGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: false
        }
    }
    render() {
        return (
            <Grid >
                <Carousel nextIcon={<img src={Nexticon} alt="error" height="35px" width="35px" />} prevIcon={<img src={Previousicon} alt="error" height="35px" width="35px" />} interval={4000} >
                    <Carousel.Item>
                        <div className="designSlider-mainWrapper">
                            <div className="mobileHeadsurprising" style={{display:"none",lineHeight:"15px"}}>
                                <p className="fontstyle " style={{ color: "#ffffff", fontSize: "20px" }} >
                                    A Suprising <span className="fontstyle2"> ride</span>
                                </p>
                                <p className="fontstyle" style={{ color: "#ffffff", fontSize: "10px",marginTop:"-10px"}} >
                                *Actual product may vary from the product shown.

                                </p>
                            </div>
                            <div className="slider-text" style={{ backgroundColor: "#ea433578", padding: "10px" }}>
                                <p className="fontstyle sliderInnerText1" style={{ color: "#ffffff", fontSize: "3vw" }} >
                                    A Suprising <span className="fontstyle2"> ride</span>
                                </p>
                                <p className="fontstyle sliderInnerText2" style={{ color: "#ffffff", fontSize: "1.3vw", lineHeight: "1.5vw" }}>
                                    The 3rd Generation of Saga is from our industry-leading range built for enhanced efficiency
                                    and unparalleled features with Malaysian
                                    craftsmanship.
                                </p>
                                <p className="fontstyle sliderInnerText2" style={{ color: "#ffffff", fontSize: "0.9vw", lineHeight: "1.5vw" }}>*Actual product may vary from the product shown.</p>
                            </div>
                            <div className="slider-image">
                                <img src={ProtonBumper} height="auto" width="100%" alt="-" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="designSlider-mainWrapper">

                            <div className="slider-image">
                                <img src={ProtonBumper2} height="auto" width="100%" alt="-" />
                            </div>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="designSlider-mainWrapper">
                            <div className="slider-image">
                                <img src={ProtonBumper3} height="auto" width="100%" alt="-" />
                            </div>
                        </div>
                    </Carousel.Item>

                </Carousel>
            </Grid>
        )
    }
}