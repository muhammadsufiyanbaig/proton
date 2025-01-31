import React, { Component } from 'react';
import TakeAPeek1 from "./takeapeek";
import TakeAPeek2 from "./takeapeek2";



class componentName extends Component {
    constructor() {
        super();
        this.state = {
            active: 1,
            text1: false
        }
    }
    render() {
        return (
            <div>
                <div className="TakeApeekhead">
                    <h2 className="fontstyle ahostofLuxury" style={{ fontSize: "2.7vw" }}>
                        A HOST OF LUXURY
                      </h2>
                </div>

                {this.state.text1 &&
                    <div className="button1 fontstyle bm">
                        Instrument Panel
                     </div>
                }

                {this.state.text2 &&
                    <div className="button2 fontstyle bm">
                        Interior
                     </div>
                }

                <div className="takeApeekchangingButtons" style={{ height: "100%", position: "absolute", right: "5%", marginTop: "12%" }} >
                    <div className="a" style={{ width: "5vw", height: "30vh", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", }} >
                        <div className={this.state.active === 2 && "radiation"}>
                        </div>
                        <div className="aa" onMouseOver={() => this.setState({ text1: true })} onMouseLeave={() => this.setState({ text1: false })} onClick={() => this.setState({ active: 1 })} id="buttonsize" style={{ backgroundColor: "#cbcbcb", borderRadius: "200px", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }} >
                            <div style={{ width: "25px", height: "25px", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "200px", border: "2px solid #0675c1", backgroundColor: "#ffffff" }} />
                        </div>

                    </div>
                    <div className="a" style={{ width: "5vw", height: "30vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div className="a" style={{ borderLeft: "3px solid #ffffff", height: "30vh" }} />
                    </div>



                    <div className="b" style={{ width: "5vw", height: "30vh", position: "absolute", flexDirection: "column", display: "flex", alignItems: "center", justifyContent: "center", }} >
                        <div className={this.state.active === 1 && "radiation"}>
                        </div>
                        <div className="aa" onMouseOver={() => this.setState({ text2: true })} onMouseLeave={() => this.setState({ text2: false })} onClick={() => this.setState({ active: 2 })} id="buttonsize" style={{ backgroundColor: "#cbcbcb", borderRadius: "200px", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }} >
                            <div style={{ width: "25px", height: "25px", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "200px", border: "2px solid #0675c1", backgroundColor: "#ffffff" }} />
                        </div>
                    </div>
                    <div className="b" style={{ width: "5vw", height: "30vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div className="b" style={{ borderLeft: "3px solid #ffffff", height: "30vh" }} />
                    </div>

                </div>

                <div className="takeApeekchangingButtonsMobileX70" style={{ display: "none" }}>
                    <div onClick={() => this.setState({ active: 1 })} style={{ width: "20px", height: "20px", backgroundColor: this.state.active === 1 ? "#ffffff" : "grey", borderRadius: "40px", border: this.state.active === 1 ? "2px solid #000000" : "none" }}> </div>
                    <div onClick={() => this.setState({ active: 2 })} style={{ width: "20px", height: "20px", backgroundColor: this.state.active === 2 ? "#ffffff" : "grey", borderRadius: "40px", marginLeft: "10px", border: this.state.active === 2 ? "2px solid #000000" : "none" }}> </div>
                </div>
                {this.state.active === 1 ?
                    <TakeAPeek1 />
                    :
                    <TakeAPeek2 />
                }

             

            </div>
        )
    }
}

export default componentName
