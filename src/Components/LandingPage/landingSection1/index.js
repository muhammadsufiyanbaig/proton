import React from 'react';
import Image1 from "../../../assets/landing/section1/1.png"
import Image2 from "../../../assets/landing/section1/2.jpg"
import Image3 from "../../../assets/landing/section1/3.jpg"
import Image4 from "../../../assets/landing/section1/4.jpg"

import Nexticon from "../../../assets/images/nexticon2.png";
import Previousicon from "../../../assets/images/previousicon2.png";
import Carousel from 'react-bootstrap/Carousel'

import "./landingSection1.css"
class LandingSection1 extends React.Component {
    render() {
        return (
            <div className="MainWrapper">
                <Carousel interval={4000} nextIcon={<img src={Nexticon} alt="error" height="35px" width="35px" />} prevIcon={<img src={Previousicon} alt="error" height="35px" width="35px" />} >
                <Carousel.Item>
                        <img src={Image4} height="auto" width="100%" alt="-" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Image3} height="auto" width="100%" alt="-" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Image1} height="auto" width="100%" alt="-" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Image2} height="auto" width="100%" alt="-" />
                    </Carousel.Item>
                   

                </Carousel>

            </div>
        );
    }
}

export default LandingSection1;
