import React from "react";
import { Carousel } from "react-bootstrap";

import  {X70Slider1} from "../slickySlider/data"
import data from "../X70/SlickySlider/data"
import Nexticon from "../../assets/images/nexticon2.png";
import Previousicon from "../../assets/images/previousicon2.png";

export default function Carousal(props) {
    const whichSlider2 = props.X70Slider ? X70Slider1 : data;
    return (
        <Carousel indicators={false}  nextIcon={<img src={Nexticon} alt="error" height="30px" width="30px" />} prevIcon={<img src={Previousicon} alt="error" height="30px" width="30px" />} >
            {whichSlider2 && whichSlider2.properties && whichSlider2.properties.map((image, index) => {
                return (
                    <Carousel.Item>
                        <div>
                        <div className="d-block w-100" style={{position:"absolute"}}>
                            <div className="fontstyle2" style={{color:"#ffffff",marginTop:"57%",paddingLeft:"5%",fontSize:"16px"}}>
                            {image.heading}
                            </div>   
                        </div>
                        <img
                            className="d-block w-100"
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