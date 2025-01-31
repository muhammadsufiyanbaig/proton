import React from "react";
import { Carousel } from "react-bootstrap";

import data1 from "../slickySlider/data";
import data2 from "../slickySlider/data2";
import Nexticon from "../../assets/images/nexticon2.png";
import Previousicon from "../../assets/images/previousicon2.png";

export default function Carousal(props) {
    const whichSlider = props.slider1 ? data1 : data2;
    return (
        <Carousel indicators={false} nextIcon={<img src={Nexticon} alt="error" height="30px" width="30px" />} prevIcon={<img src={Previousicon} alt="error" height="30px" width="30px" />}  >
            {whichSlider && whichSlider.properties && whichSlider.properties.map((image, index) => {
                return (
                    <Carousel.Item>
                        <div >
                        <div className="d-block w-100" style={{position:"absolute"}}>
                            <div className="fontstyle2" style={{color:"#ffffff",marginTop:"57%",paddingLeft:"5%"}}>
                            {image.heading}
                            </div>   
                        </div>
                        <img
                        style={{width:"100%"}}
                            src={image.picture}
                            alt={"picture"}
                        />
                        </div> 
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}