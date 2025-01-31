import React, { Component } from 'react';
import takeApeekBottomImage from "../../../assets/images/takeApeekBottomImage.png";
import TakeAPeek1 from "./takeapeek";
import TakeAPeek2 from "./takeapeek2";
import TakeAPeek3 from "./takeapeek3";
import './takeApeek.css';

class componentName extends Component {
    constructor() {
        super();
        this.state = {
            active: 1
        }
    }
    render() {
        return (
            <div className="takeapeekParent">
                <div className="TakeApeekhead">
                    <h2 className="fontstyle makechoiceMobileHead" style={{ fontSize: "2.7vw" }}>
                        A HOST OF LUXURY
                      </h2>
                </div>

                <div className="hovertextChangingButtons">
                    {this.state.text1 &&
                        <div className="hoverText1X70 fontstyle">
                            PREMIUM A/T
                     </div>
                    }

                    {this.state.text3 &&
                        <div className="hoverText2X70 fontstyle">
                            {/* STANDARD A/T */}
                             STANDARD M/T
                     </div>
                    }
                    {this.state.text2 &&
                        <div className="hoverText3X70 fontstyle">
                             Available Soon
                     </div>
                    }
                </div>



                <div className="takeApeekchangingButtons" style={{ position: "absolute", right: "5%", marginTop: "2%" }} >



                    <div className="a" style={{ width: "5vw", height: "20vh", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center" }} >
                        <div className={this.state.active === 3 && "radiationX70" || this.state.active === 2 && "radiationX70"}>
                        </div>
                        <div className="aa" onMouseOver={() => this.setState({ text1: true })} onMouseLeave={() => this.setState({ text1: false })} onClick={() => this.setState({ active: 1 })} id="buttonsize" style={{ backgroundColor: "#cbcbcb", borderRadius: "200px", display: "flex", justifyContent: "center", alignItems: "center",cursor:"pointer" }} >
                            <div style={{ width: "25px", height: "25px", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "200px", border: "2px solid #bf2b2b", backgroundColor: "#ffffff" }} />
                        </div>
                    </div>
                    <div className="a" style={{ width: "5vw", height: "20vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div className="a" style={{ borderLeft: "3px solid #bf2b2b", height: "20vh" }} />
                    </div>



                    <div className="c" style={{ width: "5vw", height: "20vh", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center" }} >
                        <div className={this.state.active === 1 && "radiationX70" || this.state.active === 2 && "radiationX70"}>
                        </div>
                        <div className="aa" onMouseOver={() => this.setState({ text3: true })} onMouseLeave={() => this.setState({ text3: false })} onClick={() => this.setState({ active: 3 })} id="buttonsize" style={{ backgroundColor: "#cbcbcb", borderRadius: "200px", display: "flex", justifyContent: "center", alignItems: "center",cursor:"pointer" }} >
                            <div style={{ width: "25px", height: "25px", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "200px", border: "2px solid #bf2b2b", backgroundColor: "#ffffff" }} />
                        </div>
                    </div>

                    <div className="c" style={{ width: "5vw", height: "20vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div className="c" style={{ borderLeft: "3px solid #bf2b2b", height: "20vh" }} />
                    </div>



                    <div className="b" style={{ width: "5vw", height: "20vh", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center" }} >
                        <div className={this.state.active === 1 && "radiationX70" || this.state.active === 3 && "radiationX70"}>
                        </div>
                        <div className="aa" onMouseOver={() => this.setState({ text2: true })} onMouseLeave={() => this.setState({ text2: false })}  id="buttonsize" style={{ backgroundColor: "#cbcbcb", borderRadius: "200px", display: "flex", justifyContent: "center", alignItems: "center",cursor:"pointer" }} >
                            <div style={{ width: "25px", height: "25px", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "200px", border: "2px solid #bf2b2b", backgroundColor: "#ffffff" }} />
                        </div>
                    </div>
                    <div className="b" style={{ width: "5vw", height: "20vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div className="b" style={{ borderLeft: "3px solid #bf2b2b", height: "20vh" }} />
                    </div>





                



                </div>

                <div className="takeApeekchangingButtonsMobileSaga" style={{ display: "none", padding: "20px 20px" }}>
                    <div onClick={() => this.setState({ active: 1 })} style={{ width: "20px", height: "20px", backgroundColor: this.state.active === 1 ? "#ffffff" : "grey", borderRadius: "40px", border: this.state.active === 1 ? "2px solid #000000" : "none" }}> </div>
                    {/* <div onClick={() => this.setState({ active: 2 })} style={{ width: "20px", height: "20px", backgroundColor: this.state.active === 2 ? "#ffffff" : "grey", borderRadius: "40px", marginLeft: "20px", border: this.state.active === 2 ? "2px solid #000000" : "none" }}> </div> */}
                    <div onClick={() => this.setState({ active: 3 })} style={{ width: "20px", height: "20px", backgroundColor: this.state.active === 3 ? "#ffffff" : "grey", borderRadius: "40px", marginLeft: "20px", border: this.state.active === 3 ? "2px solid #000000" : "none" }}> </div>
                </div>
                {this.state.active === 1 ?
                    <TakeAPeek1 />
                    :
                    this.state.active === 2 ?
                        <TakeAPeek2 />
                        :
                        <TakeAPeek3 />
                }
            </div>
        )
    }
}

export default componentName
