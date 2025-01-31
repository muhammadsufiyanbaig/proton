import React from 'react';
import Fade from 'react-reveal/Fade';
import Image1 from "../../../assets/landing/section7/1.png"
import Image2 from "../../../assets/landing/section7/2.png"
import mobile1 from "../../../assets/landing/section7/mobile1.png"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import "./landingSection7.css"
class LandingSection7 extends React.Component {
    render() {
        return (
            <div>

                <div className="MainWrapperSection7">
                    <div className="image1">
                        <img src={Image1} height="100%" width="100%" alt="-" />
                    </div>

                    <Fade right >
                        <div className="image2Wrapper">
                            <div className="image2">
                                <img src={Image2} height="100%" width="100%" alt="-" />
                            </div>
                        </div>
                    </Fade>
                </div>

                <div style={{ display: "none" }} className="MainWrapperSection7Mobile">
                    <div >
                        <img src={mobile1} height="100%" width="100%" alt="section4" />
                    </div>

                </div>
            </div>

        );
    }

}

export default LandingSection7;
