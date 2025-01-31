import React from 'react';
import { Server } from "../../Services"
import Image1 from "../../../assets/landing/section2/1.png"
import Image2 from "../../../assets/landing/section2/2.png"
import Image3 from "../../../assets/landing/section2/3-2.png"

import "./landingSection2.css"

class LandingSection2 extends React.Component {
    constructor() {
        super();
        this.state = {
            imagesArr: [
                {
                    img:Image1,
                    src:'x70',
                },
                {
                    img:Image2,
                    src:'x70',
                },
                {
                    img:Image3,
                    src:'proton-saga',
                }
               
            ],
          
          
            activeImage: 1,
            animateClockWise: false,
            animateAntiClockWise: false,
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.status !== null && !nextProps.status) {
            if (this.state.activeImage === 0) {
                this.setState({ animateAntiClockWise: true }, () => {
                    setTimeout(() => {
                        this.setState({ activeImage: 2, animateAntiClockWise: false })
                    }, 3000)
                })
            }
            else if (this.state.activeImage === 2) {
                this.setState({ animateAntiClockWise: true }, () => {
                    setTimeout(() => {
                        this.setState({ activeImage: 1, animateAntiClockWise: false })
                    }, 3000)
                })
            }
            else if (this.state.activeImage === 1) {
                this.setState({ animateAntiClockWise: true }, () => {
                    setTimeout(() => {
                        this.setState({ activeImage: 0, animateAntiClockWise: false })
                    }, 3000)
                })
            }
       
        }
        if (nextProps.status !== null && nextProps.status) {
         

            if (this.state.activeImage === 0) {
                this.setState({ animateClockWise: true }, () => {
                    setTimeout(() => {
                        this.setState({ activeImage: 1, animateClockWise: false })
                    }, 3000)
                })
            }
            else if (this.state.activeImage === 1) {
                this.setState({ animateClockWise: true }, () => {
                    setTimeout(() => {
                        this.setState({ activeImage: 2, animateClockWise: false })
                    }, 3000)
                })
            }
            else if (this.state.activeImage === 2) {
                this.setState({ animateClockWise: true }, () => {
                    setTimeout(() => {
                        this.setState({ activeImage: 0, animateClockWise: false })
                    }, 3000)
                })
            }
        }
    }
    render() {
        const activeImage = this.state.activeImage;
        const imageArr = this.state.imagesArr;
        return (
            <div className="section2Main-wrapper">
                <div className={this.state.animateClockWise ? "animateImage1Clock" : this.state.animateAntiClockWise ? "animateImage1AntiClock" : "none"}>
                    <div className="image1" >
                        <img alt="-" onClick={()=>window.open(`${Server}/${imageArr[activeImage === 0 ? 2 : activeImage - 1].src}`,'_blank')} src={imageArr[activeImage === 0 ? 2 : activeImage - 1].img} height="auto" width="80%" />
                    </div>
                </div>
                <div className="image2">
                    <div className={this.state.animateClockWise ? "animateImage2Clock" : this.state.animateAntiClockWise ? "animateImage2AntiClock" : "none"}>
                        <img alt="-" onClick={()=>window.open(`${Server}/${imageArr[activeImage].src}`,'_blank')} src={imageArr[activeImage].img} height="auto" width="100%" />  
                    </div>
                </div>
                <div className={this.state.animateClockWise ? "animateImage3Clock" : this.state.animateAntiClockWise ? "animateImage3AntiClock" : "none"}>
                    <div className="image3">
                        <img alt="-" onClick={()=>window.open(`${Server}/${imageArr[activeImage === 2 ? 0 : activeImage + 1].src}`,'_blank')} src={imageArr[activeImage === 2 ? 0 : activeImage + 1].img} height="auto" width="80%" />
                    </div>
                </div>
            </div>
        );
    }
}
export default LandingSection2;
