import React, { Component } from 'react';
import ExpandIcon from "../../../assets/x70/takeApeek/Expand.png";
import ExpandIcon2 from "../../../assets/x70/takeApeek/Expand2.png";
import takepeekBG from "../../../assets/images/takepeekBG.png"
import Nexticon from "../../../assets/images/nexticon.png";
import Previousicon from "../../../assets/images/previousicon.png";
import { Carousel } from "react-bootstrap";
import CloseIcon from "@material-ui/icons/Close";
import ExpandImage1 from "../../../assets/x70/takeApeek/1.png";
import ExpandImage2 from "../../../assets/x70/takeApeek/2.png";
import ExpandImage3 from "../../../assets/x70/takeApeek/3.png";
import ExpandImage4 from "../../../assets/x70/takeApeek/4.png";
import ExpandImage5 from "../../../assets/x70/takeApeek/5.png";
import ExpandImage6 from "../../../assets/x70/takeApeek/6.png";
import ExpandImage7 from "../../../assets/x70/takeApeek/7.png";

import X70Logo from "../../../assets/landing/section3/X70Logo.png"
import T1 from "../../../assets/x70/takeApeek/T1.png";
import './takeApeek.css';
class TakeAPeek extends Component {
  constructor() {
    super();
    this.state = {
      expandImage: 99,
      imagesArray: [
        ExpandImage1,
        ExpandImage2,
        ExpandImage3,
        ExpandImage4,
        ExpandImage5,
        ExpandImage6,
        ExpandImage7
      ]
    }
  }
  render() {
    return (
      <div>
   <div className="takeAPeekX70Main">
        <div className="ExpandIcon1 addIcon" >
          <img className="x70icon" alt="-" src={this.state.expandImage === 0 ? ExpandIcon2 : ExpandIcon} height="auto" width="40px" onClick={() => this.setState({ expandImage: this.state.expandImage === 0 ? 99 : 0 })} />
        </div>
        <div className="ExpandIcon2 addIcon" >
          <img className="x70icon" alt="-" src={this.state.expandImage === 1 ? ExpandIcon2 : ExpandIcon} height="auto" width="40px" onClick={() => this.setState({ expandImage: this.state.expandImage === 1 ? 99 : 1 })} />
        </div>
        <div className="ExpandIcon3 addIcon" >
          <img className="x70icon" alt="-" src={this.state.expandImage === 2 ? ExpandIcon2 : ExpandIcon} height="auto" width="40px" onClick={() => this.setState({ expandImage: this.state.expandImage === 2 ? 99 : 2 })} />
        </div>
        <div className="ExpandIcon4 addIcon" >
          <img className="x70icon" alt="-" src={this.state.expandImage === 3 ? ExpandIcon2 : ExpandIcon} height="auto" width="40px" onClick={() => this.setState({ expandImage: this.state.expandImage === 3 ? 99 : 3 })} />
        </div>
        <div className="ExpandIcon5 addIcon" >
          <img className="x70icon" alt="-" src={this.state.expandImage === 4 ? ExpandIcon2 : ExpandIcon} height="auto" width="40px" onClick={() => this.setState({ expandImage: this.state.expandImage === 4 ? 99 : 4 })} />
        </div>
        <div className="ExpandIcon6 addIcon" >
          <img className="x70icon" alt="-" src={this.state.expandImage === 5 ? ExpandIcon2 : ExpandIcon} height="auto" width="40px" onClick={() => this.setState({ expandImage: this.state.expandImage === 5 ? 99 : 5 })} />
        </div>
        <div className="ExpandIcon7 addIcon" >
          <img className="x70icon" alt="-" src={this.state.expandImage === 6 ? ExpandIcon2 : ExpandIcon} height="auto" width="40px" onClick={() => this.setState({ expandImage: this.state.expandImage === 6 ? 99 : 6 })} />
        </div>
        
        {
          this.state.expandImage !== 99 &&
          <div className="ExpandedImage">
            <img alt="-" src={this.state.imagesArray[this.state.expandImage]} height="100%" width="100%" />
          </div>
        }
          <div   className="takeaPeekText"  style={{ height: "30px", width: "12%",lineHeight:"30px"  }}>
         <img src={X70Logo} height="100%" width="100%" alt="-" /> 
        </div>
        <div>
          <img alt="-" src={T1} height="100%" width="100%" />
        </div>
      </div>



      <div className="takeApeekMobileX70" style={{ display: "none" }}>
         <div className="ExpandIcon1MobileX70 addIconMobileX70" >
          <img  alt="-" src={this.state.expandImage === 0 ? ExpandIcon2 : ExpandIcon} height="auto" width="20px" onClick={() => this.setState({ expandImage: this.state.expandImage === 0 ? 99 : 0 })} />
        </div>
        <div className="ExpandIcon2MobileX70 addIconMobileX70" >
          <img  alt="-" src={this.state.expandImage === 1 ? ExpandIcon2 : ExpandIcon} height="auto" width="20px" onClick={() => this.setState({ expandImage: this.state.expandImage === 1 ? 99 : 1 })} />
        </div>
        <div className="ExpandIcon3MobileX70 addIconMobileX70" >
          <img  alt="-" src={this.state.expandImage === 2 ? ExpandIcon2 : ExpandIcon} height="auto" width="20px" onClick={() => this.setState({ expandImage: this.state.expandImage === 2 ? 99 : 2 })} />
        </div>
        <div className="ExpandIcon4MobileX70 addIconMobileX70" >
          <img  alt="-" src={this.state.expandImage === 3 ? ExpandIcon2 : ExpandIcon} height="auto" width="20px" onClick={() => this.setState({ expandImage: this.state.expandImage === 3 ? 99 : 3 })} />
        </div>
        <div className="ExpandIcon5MobileX70 addIconMobileX70" >
          <img  alt="-" src={this.state.expandImage === 4 ? ExpandIcon2 : ExpandIcon} height="auto" width="20px" onClick={() => this.setState({ expandImage: this.state.expandImage === 4 ? 99 : 4 })} />
        </div>
        <div className="ExpandIcon6MobileX70 addIconMobileX70" >
          <img  alt="-" src={this.state.expandImage === 5 ? ExpandIcon2 : ExpandIcon} height="auto" width="20px" onClick={() => this.setState({ expandImage: this.state.expandImage === 5 ? 99 : 5 })} />
        </div>
        <div className="ExpandIcon7MobileX70 addIconMobileX70" >
          <img  alt="-" src={this.state.expandImage === 6 ? ExpandIcon2 : ExpandIcon} height="auto" width="20px" onClick={() => this.setState({ expandImage: this.state.expandImage === 6 ? 99 : 6 })} />
        </div>

          <div style={{position:"absolute",  background: `url(${takepeekBG})`}}>
          <div className="ExpandedImageMobileX70"  >
            {this.state.expandImage !== 99 &&
              
                <Carousel activeIndex={this.state.expandImage} onSelect={(number) => this.setState({ expandImage: number })} interval={3000} controls={false} indicators={false} nextIcon={this.state.expandImage !== 99 && <img src={Nexticon} alt="error" height="30px" width="30px" />} prevIcon={this.state.expandImage !== 99 && <img src={Previousicon} alt="error" height="30px" width="30px" />} >

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
          <div className="fontstyle2" style={{position:"absolute",left:"5%",color:"#ffffff",marginTop:"50%"}}>
         X70
          </div>

          <div >
            <img alt="-"  src={T1} height="auto" width="100%" />
          </div>
        </div>








      </div>
   
    )
  }
}

export default TakeAPeek;
