import React from 'react';
import Fade from 'react-reveal/Fade';
import Image1 from "../../../assets/landing/section4/1.png"
import Image2 from "../../../assets/landing/section4/2.png"
import mobile1 from "../../../assets/landing/section4/mobile1.png"

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import "./landingSection4.css"
class LandingSection4 extends React.Component {
    render() {
        return (
            <div>

                <div className="MainWrapperSection4">
                    <Fade left delay={200}>
                        <div className="image1">
                            <img src={Image2} height="100%" width="100%" alt="-" />
                        </div>
                    </Fade>

                    <div className="image2Wrapper">
                        <div className="image2">
                            <img src={Image1} height="100%" width="100%" alt="-" />
                        </div>
                    </div>
                </div>

                <div style={{ display: "none" }} className="MainWrapperSection4Mobile">
                    <div >
                        <img src={mobile1} height="100%" width="100%" alt="section4" />
                    </div>

                </div>

            </div>

        );
    }

}

export default LandingSection4;
