import React, { Component } from 'react';
import ExpandIcon from "../../../assets/images/addiconImg.png";
import { Carousel } from "react-bootstrap";
import TakeapeekSTAT from "../../../assets/images/2.jpg";
import TakeapeekSTATMobile from "../../../assets/images/2Mobile.jpg";

import Peekinner1stat from "../../../assets/images/peekinner1stat.png";
import Peekinner2stat from "../../../assets/images/peekinner2stat.png";
import Peekinner4stat from "../../../assets/images/peekinner4stat.png";
import Nexticon from "../../../assets/images/nexticon.png";
import Previousicon from "../../../assets/images/previousicon.png";
import Sagawhitelogo from "../../../assets/landing/section3/Sagawhitelogo.png"
import takepeekBG from "../../../assets/images/takepeekBG.png"
import CloseIcon from "@material-ui/icons/Close";

import './takeApeek.css';

class TakeAPeek extends Component {
  constructor() {
    super();
    this.state = {
      expandImage: 99,
      imagesArray: [
        Peekinner1stat,
        Peekinner2stat,
        Peekinner4stat
      ]
    }
  }
  render() {
    return (
      <div>
        <div className="takeAPeekSagaMain">
          <div className="ExpandIcon1stat addIcon" style={{ border: this.state.expandImage === 0 ? "1px solid white" : "1px solid red", backgroundColor: this.state.expandImage === 0 ? "rgba(139,48,57,0.9)" : "#00000094" }}>
            <img alt="-" src={ExpandIcon} height="100%" width="100%" onClick={() => this.setState({ expandImage: this.state.expandImage === 0 ? 99 : 0 })} />
          </div>
          <div className="ExpandIcon2stat addIcon" style={{ border: this.state.expandImage === 1 ? "1px solid white" : " 1px solid red", backgroundColor: this.state.expandImage === 1 ? "rgba(139,48,57,0.9)" : "#00000094" }}>
            <img alt="-" src={ExpandIcon} height="100%" width="100%" onClick={() => this.setState({ expandImage: this.state.expandImage === 1 ? 99 : 1 })} />
          </div>
          <div className="ExpandIcon3stat addIcon" style={{ border: this.state.expandImage === 2 ? "1px solid white" : "1px solid red", backgroundColor: this.state.expandImage === 2 ? "rgba(139,48,57,0.9)" : "#00000094" }}>
            <img alt="-" src={ExpandIcon} height="100%" width="100%" onClick={() => this.setState({ expandImage: this.state.expandImage === 2 ? 99 : 2 })} />
          </div>


          {
            this.state.expandImage !== 99 &&
            <div className="ExpandedImage">
              <img alt="-" src={this.state.imagesArray[this.state.expandImage]} height="100%" width="100%" />
            </div>
          }
          <div className="takeaPeekText" style={{ height: "30px", width: "12%", lineHeight: "30px" }}>
            <span><img src={Sagawhitelogo} height="100%" width="100%" alt="-" /> </span> <span className="fontstyle2 takeaPeekText2" style={{ color: "#ffffff", letterSpacing: '2px', }}>STANDARD A/T</span>
          </div>
          <div>
            <img alt="-" src={TakeapeekSTAT} height="100%" width="100%" />
          </div>
        </div>





        <div className="takeApeekMobile" style={{ display: "none" }}>
        <div className="ExpandIcon1statMobile addIconMobile" style={{ border: this.state.expandImage === 0 ? "1px solid white" : "1px solid red", backgroundColor: this.state.expandImage === 0 ? "rgba(139,48,57,0.9)" : "#00000094" }}>
            <img alt="-" src={ExpandIcon} height="100%" width="100%" onClick={() => this.setState({ expandImage: this.state.expandImage === 0 ? 99 : 0 })} />
          </div>
          <div className="ExpandIcon2statMobile addIconMobile" style={{ border: this.state.expandImage === 1 ? "1px solid white" : " 1px solid red", backgroundColor: this.state.expandImage === 1 ? "rgba(139,48,57,0.9)" : "#00000094" }}>
            <img alt="-" src={ExpandIcon} height="100%" width="100%" onClick={() => this.setState({ expandImage: this.state.expandImage === 1 ? 99 : 1 })} />
          </div>
          <div className="ExpandIcon3statMobile addIconMobile" style={{ border: this.state.expandImage === 2 ? "1px solid white" : "1px solid red", backgroundColor: this.state.expandImage === 2 ? "rgba(139,48,57,0.9)" : "#00000094" }}>
            <img alt="-" src={ExpandIcon} height="100%" width="100%" onClick={() => this.setState({ expandImage: this.state.expandImage === 2 ? 99 : 2 })} />
          </div>

          <div style={{ position: "absolute", background: `url(${takepeekBG})` }}>
            <div className="ExpandedImageMobile" >
              {this.state.expandImage !== 99 &&

                <Carousel activeIndex={this.state.expandImage} onSelect={(number) => this.setState({ expandImage: number })} interval={3000} controls={false} indicators={false} nextIcon={this.state.expandImage !== 99 && <img src={Nexticon} alt="error" height="30px" width="30px" />} prevIcon={this.state.expandImage !== 99 && <img src={Previousicon} alt="error" height="30px" width="30px" />} >

                  {this.state.imagesArray && this.state.imagesArray.map((img, ind) => {
                    return (
                      <Carousel.Item>
                        <div >
                          <div style={{ color: "white", position: "absolute", right: "5%", bottom: "7%" }}><CloseIcon onClick={() => this.setState({ expandImage: 99 })} style={{ color: "#c0c4ca", cursor: "pointer", height: "25px", width: "25px", border: "2px solid #843238", borderRadius: 50 }} />
                          </div>
                          <img alt="-" src={img} height="auto" width="100%" />

                        </div>
                      </Carousel.Item>
                    )
                  })}

                </Carousel>


              }
            </div>
          </div>
          <div className="fontstyle2" style={{position:"absolute",left:"5%",color:"#ffffff",marginTop:"65%"}}>
          STANDARD A/T
          </div>

          <div >
            <img alt="-" src={TakeapeekSTATMobile} height="auto" width="100%" />
          </div>
        </div>
      </div>
    )
  }
}

export default TakeAPeek;
