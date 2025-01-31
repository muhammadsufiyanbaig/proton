import React, { Component } from 'react';
import ExpandIcon from "../../../assets/images/addiconImg.png";
import { Carousel } from "react-bootstrap";
import CloseIcon from "@material-ui/icons/Close";
import TakeapeekPRAT from "../../../assets/images/1.jpg";
import TakeapeekPRATMobile from "../../../assets/images/1Mobile.jpg";
import takepeekBG from "../../../assets/images/takepeekBG.png"
import Peekinner1PR from "../../../assets/images/peekinner1PR.png";
import Peekinner2PR from "../../../assets/images/peekinner2PR.png";
import Peekinner3PR from "../../../assets/images/peekinner3PR.png";
import Peekinner4PR from "../../../assets/images/peekinner4PR.png";

import Sagawhitelogo from "../../../assets/landing/section3/Sagawhitelogo.png"
import Nexticon from "../../../assets/images/nexticon.png";
import Previousicon from "../../../assets/images/previousicon.png";

import './takeApeek.css';

class TakeAPeek extends Component {
  constructor() {
    super();
    this.state = {
      expandImage: 99,
      imagesArray: [
        Peekinner1PR,
        Peekinner2PR,
        Peekinner3PR,
        Peekinner4PR
      ],
      nextIcon: <span className="glyphicon glyphicon-glass"></span>,
      prevIcon: <span className="glyphicon glyphicon-glass"></span>
    }
  }
  render() {
    return (
      <div>
        <div className="takeAPeekSagaMain">
          <div className="ExpandIcon1 addIcon" style={{ border: this.state.expandImage === 0 ? "1px solid white" : "1px solid red", backgroundColor: this.state.expandImage === 0 ? "rgba(139,48,57,0.9)" : "#00000094" }}>
            <img alt="-" src={ExpandIcon} height="100%" width="100%" onClick={() => this.setState({ expandImage: this.state.expandImage === 0 ? 99 : 0 })} />
          </div>
          <div className="ExpandIcon2 addIcon" style={{ border: this.state.expandImage === 1 ? "1px solid white" : " 1px solid red", backgroundColor: this.state.expandImage === 1 ? "rgba(139,48,57,0.9)" : "#00000094" }}>
            <img alt="-" src={ExpandIcon} height="100%" width="100%" onClick={() => this.setState({ expandImage: this.state.expandImage === 1 ? 99 : 1 })} />
          </div>
          <div className="ExpandIcon3 addIcon" style={{ border: this.state.expandImage === 2 ? "1px solid white" : "1px solid red", backgroundColor: this.state.expandImage === 2 ? "rgba(139,48,57,0.9)" : "#00000094" }}>
            <img alt="-" src={ExpandIcon} height="100%" width="100%" onClick={() => this.setState({ expandImage: this.state.expandImage === 2 ? 99 : 2 })} />
          </div>
          <div className="ExpandIcon4 addIcon" style={{ border: this.state.expandImage === 3 ? "1px solid white" : "1px solid red", backgroundColor: this.state.expandImage === 3 ? "rgba(139,48,57,0.9)" : "#00000094" }}>
            <img alt="-" src={ExpandIcon} height="100%" width="100%" onClick={() => this.setState({ expandImage: this.state.expandImage === 3 ? 99 : 3 })} />
          </div>

          {
            this.state.expandImage !== 99 &&
            <div className="ExpandedImage">
              <img alt="-" src={this.state.imagesArray[this.state.expandImage]} height="100%" width="100%" />
            </div>
          }




          <div className="takeaPeekText" style={{ height: "30px", width: "12%", lineHeight: "30px" }}>
            <span><img src={Sagawhitelogo} height="100%" width="100%" alt="-" /> </span> <span className="fontstyle2 takeaPeekText2" style={{ color: "#ffffff", letterSpacing: '2px', }}>PREMIUM A/T</span>
          </div>
          <div className="pratdesktop">
            <img alt="-" src={TakeapeekPRAT} height="auto" width="100%" />
          </div>

        </div>






        <div className="takeApeekMobile" style={{ display: "none" }}>
          <div className="ExpandIcon1Mobile addIconMobile" style={{ border: this.state.expandImage === 0 ? "1px solid white" : "1px solid red", backgroundColor: this.state.expandImage === 0 ? "rgba(139,48,57,0.9)" : "#00000094" }}>
            <img alt="-" src={ExpandIcon} height="100%" width="100%" onClick={() => this.setState({ expandImage: this.state.expandImage === 0 ? 99 : 0 })} />
          </div>
          <div className="ExpandIcon2Mobile addIconMobile" style={{ border: this.state.expandImage === 1 ? "1px solid white" : " 1px solid red", backgroundColor: this.state.expandImage === 1 ? "rgba(139,48,57,0.9)" : "#00000094" }}>
            <img alt="-" src={ExpandIcon} height="100%" width="100%" onClick={() => this.setState({ expandImage: this.state.expandImage === 1 ? 99 : 1 })} />
          </div>
          <div className="ExpandIcon3Mobile addIconMobile" style={{ border: this.state.expandImage === 2 ? "1px solid white" : "1px solid red", backgroundColor: this.state.expandImage === 2 ? "rgba(139,48,57,0.9)" : "#00000094" }}>
            <img alt="-" src={ExpandIcon} height="100%" width="100%" onClick={() => this.setState({ expandImage: this.state.expandImage === 2 ? 99 : 2 })} />
          </div>
          <div className="ExpandIcon4Mobile addIconMobile" style={{ border: this.state.expandImage === 3 ? "1px solid white" : "1px solid red", backgroundColor: this.state.expandImage === 3 ? "rgba(139,48,57,0.9)" : "#00000094" }}>
            <img alt="-" src={ExpandIcon} height="100%" width="100%" onClick={() => this.setState({ expandImage: this.state.expandImage === 3 ? 99 : 3 })} />
          </div>

          <div style={{position:"absolute",  background: `url(${takepeekBG})`}}>
          <div className="ExpandedImageMobile" >
            {this.state.expandImage !== 99 &&
              
                <Carousel pause={true} activeIndex={this.state.expandImage} onSelect={(number) => this.setState({ expandImage: number })} interval={3000} controls={false} indicators={false} nextIcon={this.state.expandImage !== 99 && <img src={Nexticon} alt="error" height="30px" width="30px" />} prevIcon={this.state.expandImage !== 99 && <img src={Previousicon} alt="error" height="30px" width="30px" />} >

                  {this.state.imagesArray && this.state.imagesArray.map((img, ind) => {
                    return (
                      <Carousel.Item>
                        <div >
                          <div style={{ color: "white", position: "absolute", right: "5%", bottom: "7%" }}><CloseIcon onClick={() => this.setState({ expandImage: 99 })} style={{ color: "#c0c4ca", cursor: "pointer", height: "25px", width: "25px",border:"2px solid #843238",borderRadius:50 }} />
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
          <div className="fontstyle2" style={{position:"absolute",left:"5%",color:"#ffffff",marginTop:"65%",}}>
          PREMIUM A/T
          </div>

          <div >
            <img alt="-"  src={TakeapeekPRATMobile} height="auto" width="100%" />
          </div>
        </div>







      </div>

    )
  }
}

export default TakeAPeek;
