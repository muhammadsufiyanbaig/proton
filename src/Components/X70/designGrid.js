import React from "react";
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-bootstrap/Carousel'
import x70Bumper from "../../assets/images/D1.png"
import x70Bumper2 from "../../assets/images/D2.png"
import x70Bumper3 from "../../assets/images/D3.png"
import x70Bumper4 from "../../assets/images/D4.png"
import x70Bumper5 from "../../assets/images/D5.png"
import Nexticon from "../../assets/images/nexticon2.png";
import Previousicon from "../../assets/images/previousicon2.png";


import "./designGrid.css"

export default class DesignGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: false
        }
    }
    render() {
        return (
            <Grid id="designDiv">
                <Carousel nextIcon={<img src={Nexticon} alt="error" height="35px" width="35px" style={{marginTop:"10%"}} />} prevIcon={<img src={Previousicon} alt="error" height="35px" width="35px" />} interval={4000} >
                    <Carousel.Item>
                        <div className="designSliderX70-mainWrapper">
                        <div className="mobileHeadsurprisingx70" style={{display:"none",lineHeight:"15px"}}>
                                <p className="fontstyle " style={{ color: "#ffffff", fontSize: "20px" }} >
                                    A Suprising <span className="fontstyle2"> ride</span>
                                </p>
                                <p className="fontstyle" style={{ color: "#ffffff", fontSize: "10px",marginTop:"-10px"}} >
                                *Actual product may vary from the product shown.

                                </p>
                            </div>
                            <div className="sliderX70-text" style={{backgroundColor:"#0c67c157",padding:"10px"}}>
                                <p className="fontstyle sliderInnerText1X70" style={{ color: "#ffffff", fontSize: "3vw" }} >
                                    Malayan tiger in<span className="fontstyle2"> full motion</span>
                                </p>
                                <p className="fontstyle sliderInnerText2" style={{ color: "#ffffff", fontSize: "1.3vw", lineHeight: "1.5vw" }}>
                                    Born from luxury and adventure, the X70 is a distinct
                                    model that offers exceptional comfort and detail.
                                    It is meticulously designed to cater for the modern
                                    explorer and deliver optimum drive satisfaction.
                                    The fluid silhouette evokes thrilling and dramatic
                                    appearance paired with responsive control.
                                    </p>
                                    <p className="fontstyle sliderInnerText2" style={{ color: "#ffffff", fontSize: "0.9vw", lineHeight: "1.5vw" }}>
                                    *Actual product may vary from the product shown.
                                    </p>
                            </div>
                            <div className="sliderX70-image">
                                <img src={x70Bumper} height="100%" width="100%" alt="-" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="designSliderX70-mainWrapper">
                           
                            <div className="sliderX70-image">
                                <img src={x70Bumper2} height="100%" width="100%" alt="-" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="designSliderX70-mainWrapper">
                         
                        
                            <div className="sliderX70-image">
                                <img src={x70Bumper3} height="100%" width="100%" alt="-" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="designSliderX70-mainWrapper">
                        
                            <div className="sliderX70-image">
                                <img src={x70Bumper4} height="100%" width="100%" alt="-" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="designSliderX70-mainWrapper">
                           
                            <div className="sliderX70-image">
                                <img src={x70Bumper5} height="100%" width="100%" alt="-" />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Grid>
        )
    }
}