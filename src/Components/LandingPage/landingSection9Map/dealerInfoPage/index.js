import React from 'react';
import "./dealerInfo.css"
import { Server } from "../../../Services"
import map from "../../../../assets/landing/section9Map/map.png"
import maphotspot1 from "../../../../assets/landing/section9Map/isbHotSpotGrey.png"
import maphotspot2 from "../../../../assets/landing/section9Map/lhrHotSpotGrey.png"
import maphotspot3 from "../../../../assets/landing/section9Map/khiHotSpotGrey.png"
import maphotspotgrey from "../../../../assets/landing/section9Map/greyhotspot.png"

// import maphotspot11 from "../../../../assets/landing/section9Map/isbHotSpotRed.png"
// import maphotspot22 from "../../../../assets/landing/section9Map/lhrHotSpotRed.png"
// import maphotspot33 from "../../../../assets/landing/section9Map/khiHotSpotRed.png"
import maphotspotred from "../../../../assets/landing/section9Map/redhotspot.png"



class DealerInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: {},
            status: 'sales',
            karachiSouth: {
                name: "South",
                sales: {
                    address: "Main Korangi Industrial Rd, Sector 27, Korangi Industrial Area, Karachi, Sindh.",
                    direction: "https://www.google.com/maps/dir//south+motors+faw/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3eb33a4a2c7db119:0xc2ee598eead2c20e?sa=X&ved=2ahUKEwiIpI-Q7_TqAhXa8OAKHWkvBqYQ9RcwC3oECBMQDg",
                    phone: "(021) 35074445-6",
                    email: "south.motors@proton.com.pk",
                    workinghours: {
                        mondayToThursday: "9am - 6pm",
                        friday: "9am - 12pm (Namaz Break) 3pm - 6pm",
                        saturday: "9am - 6pm",
                        sunday: "Closed"
                    },
                    website: "www.southmotors.com.pk"
                },
                services: {
                    address: "Main Korangi Industrial Rd, Sector 27, Korangi Industrial Area, Karachi, Sindh.",
                    direction: "https://www.google.com/maps/dir//south+motors+faw/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3eb33a4a2c7db119:0xc2ee598eead2c20e?sa=X&ved=2ahUKEwiIpI-Q7_TqAhXa8OAKHWkvBqYQ9RcwC3oECBMQDg",
                    phone: "(021) 35074445-6",
                    email: "services@southmotors.com.pk",
                    workinghours: {
                        mondayToThursday: "9am - 6pm",
                        friday: "9am - 12pm (Namaz Break) 3pm - 6pm",
                        saturday: "9am - 6pm",
                        sunday: "Closed"
                    },
                    website: "www.southmotors.com.pk"
                }
            },
            karachiApollo: {
                name: "Apollo",
                sales: {
                    address: "Main Sharah-e-Faisal, near Faisal Cantonment Board, Karachi, Sindh.",
                    direction: "https://www.google.com/maps/dir/24.8956156,67.1060354/apollomotors/@24.888237,67.0869407,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3eb33946c7651435:0x6438b4965bea3cad!2m2!1d67.1110091!2d24.881052",
                    phone: "(021) 34573329",
                    email: "apollo.motors@proton.com.pk",
                    workinghours: {
                        mondayToThursday: "9am - 6pm",
                        friday: "9am - 12pm (Namaz Break) 3pm - 6pm",
                        saturday: "9am - 6pm",
                        sunday: "Closed"
                    },
                    website: "www.apollomotors.com.pk"
                },
                services: {
                    address: "Main Sharah-e-Faisal, near Faisal Cantonment Board, Karachi, Sindh.",
                    direction: "https://www.google.com/maps/dir/24.8956156,67.1060354/apollomotors/@24.888237,67.0869407,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3eb33946c7651435:0x6438b4965bea3cad!2m2!1d67.1110091!2d24.881052",
                    phone: "(021) 34573327",
                    email: "services@apollomotors.com.pk",
                    workinghours: {
                        mondayToThursday: "9am - 6pm",
                        friday: "9am - 12pm (Namaz Break) 3pm - 6pm",
                        saturday: "9am - 6pm",
                        sunday: "Closed"
                    },
                    website: "www.apollomotors.com.pk"
                }
            },
            Lahore: {
                name: "Momentum",
                sales: {
                    address: "23-A Queen's Road, Jubilee Town, Lahore, Punjab.",
                    direction: "https://www.google.com/maps/dir/24.8956156,67.1060354/momentum+motors+lahore/@28.161553,66.1975959,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x391904aee5fb802d:0xc380d38ee03b7972!2m2!1d74.3193919!2d31.5522881",
                    phone: "(042) 36369618",
                    email: "momentum.motors@proton.com.pk",
                    workinghours: {
                        mondayToThursday: "9am - 6pm",
                        friday: "9am - 12pm (Namaz Break) 3pm - 6pm",
                        saturday: "9am - 6pm",
                        sunday: "Closed"
                    },
                    website: "www.momentummotors.com.pk"
                },
                services: {
                    address: "23-A Queen's Road, Jubilee Town, Lahore, Punjab.",
                    direction: "https://www.google.com/maps/dir/24.8956156,67.1060354/momentum+motors+lahore/@28.161553,66.1975959,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x391904aee5fb802d:0xc380d38ee03b7972!2m2!1d74.3193919!2d31.5522881",
                    phone: "(021) 36369618",
                    email: "services@momentummotors.com.pk",
                    workinghours: {
                        mondayToThursday: "9am - 6pm",
                        friday: "9am - 12pm (Namaz Break) 3pm - 6pm",
                        saturday: "9am - 6pm",
                        sunday: "Closed"
                    },
                    website: "www.momentummotors.com.pk"
                }
            },
            Islamabad: {
                name: "Islamabad",
                sales: {
                    address: "Plot 415, Industrial Area, I-9/3, Islamabad.",
                    direction: "https://www.google.com/maps/dir/24.8956156,67.1060354/islamabad+motors+faw/@29.2029801,65.2999756,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x38df956a26afe7d7:0xf83c5174349bd596!2m2!1d73.061716!2d33.6632486",
                    phone: "(051) 4433704",
                    email: "islamabad.motors@proton.com.pk",
                    workinghours: {
                        mondayToThursday: "9am - 6pm",
                        friday: "9am - 12pm (Namaz Break) 3pm - 6pm",
                        saturday: "9am - 6pm",
                        sunday: "Closed"
                    },
                    website: "www.islamabadmotors.com.pk"
                },
                services: {
                    address: "Plot 415, Industrial Area, I-9/3, Islamabad.",
                    direction: "https://www.google.com/maps/dir/24.8956156,67.1060354/islamabad+motors+faw/@29.2029801,65.2999756,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x38df956a26afe7d7:0xf83c5174349bd596!2m2!1d73.061716!2d33.6632486",
                    phone: "(051) 4433704",
                    email: "services@islamabadmotors.com.pk",
                    workinghours: {
                        mondayToThursday: "9am - 6pm",
                        friday: "9am - 12pm (Namaz Break) 3pm - 6pm",
                        saturday: "9am - 6pm",
                        sunday: "Closed"
                    },
                    
                    website: "www.islamabadmotors.com.pk"
                }
            }
        }
    }
    changeCity(city) {
        window.location.href = `${Server}/dealerInfo?city=` + city
    }


    render() {
        var c = window.location.search;
        var cityName = c.split("=");
        var city = cityName[1] === "karachiSouth" ? this.state.karachiSouth : cityName[1] === "karachiApollo" ? this.state.karachiApollo : cityName[1] === "Lahore" ? this.state.Lahore : cityName[1] === "Islamabad" ? this.state.Islamabad : "no-city";


        return (
            <div className="DealerInfo-Main-wrapper">
                {/* karachi Apollo */}
                {/* {city === "karachiApollo" && */}
                {
                    city !== "no-city" ?
                        <div className="DealerInfo-flex-wrapper" >
                            {this.state.status === "sales" &&
                                <div className="dealerInfo-LeftSide">
                                    <div className="fontstyle " style={{ backgroundColor: "#d4d4d4", width: "100%", height: "12vh", display: "flex", alignItems: "center", paddingLeft: "3vw", borderBottom: "1px solid black" }}>
                                        <h3 className="cityHeading" style={{ fontSize: "3vw", letterSpacing: "-2px" }}>
                                            {city.name}<span className="fontstyle2" > motors </span>
                                        </h3>
                                    </div>
                                    <div style={{ width: "100%", }}>
                                        <div style={{ display: "flex", width: "52%", marginLeft: "50px", justifyContent: "space-between" }}>
                                            <div className={this.state.status === 'sales' ? "fontstyle2" : "fontstyle"} onClick={() => this.setState({ status: "sales" })} style={{ width: "30%", borderTop: this.state.status === "sales" ? "3px solid red" : "none", cursor: "pointer", fontWeight: this.state.status === "sales" ? "bold" : "none", paddingTop: "6px" }}>SALES</div>
                                            <div className={this.state.status === 'services' ? "fontstyle2" : "fontstyle"} onClick={() => this.setState({ status: "services" })} style={{ width: "33%", borderTop: this.state.status === "services" ? "3px solid red" : "none", cursor: "pointer", fontWeight: this.state.status === "services" ? "bold" : "none", paddingTop: "6px" }}>SERVICES</div>
                                        </div>
                                    </div>
                                    <div style={{ width: "100%", marginTop: "45px" }}>
                                        <div className="fontstyle2 address" style={{ width: "52%", fontSize: "1.3vw", letterSpacing: "-0.8px", marginLeft: "50px" }}>
                                            {city.sales.address}
                                        </div>
                                    </div>

                                    <div style={{ width: "100%", marginTop: "35px" }}>
                                        <div className="fontstyle phone" style={{ width: "100%", fontSize: "1.3vw", letterSpacing: "-0.8px", marginLeft: "50px", }}>
                                            Phone: {city.sales.phone}
                                        </div>
                                        <div className="fontstyle email" style={{ width: "100%", fontSize: "1.3vw", letterSpacing: "-0.8px", marginLeft: "50px" }}>
                                            Email: {city.sales.email}
                                        </div>
                                    </div>

                                    <div style={{ width: "100%", marginTop: "35px" }}>
                                        <div className="fontstyle2 hours" style={{ width: "100%", fontSize: "1.3vw", letterSpacing: "-0.8px", marginLeft: "50px" }}>
                                            Working hours
                                    </div>
                                    </div>

                                    <div style={{ width: "100%", marginTop: "20px" }}>
                                        <div className="fontstyle days" style={{ width: "100%", fontSize: "1.3vw", letterSpacing: "-0.8px", marginLeft: "50px" }}>
                                            Mon- Thur: {city.sales.workinghours.mondayToThursday}
                                        </div>
                                        <div className="fontstyle days" style={{ width: "100%", fontSize: "1.3vw", letterSpacing: "-0.8px", marginLeft: "50px" }}>
                                            Fri: {city.sales.workinghours.friday}
                                        </div>
                                        <div className="fontstyle days" style={{ width: "100%", fontSize: "1.3vw", letterSpacing: "-0.8px", marginLeft: "50px" }}>
                                            Sat: {city.sales.workinghours.saturday}
                                        </div>
                                        <div className="fontstyle days" style={{ width: "100%", fontSize: "1.3vw", letterSpacing: "-0.8px", marginLeft: "50px" }}>
                                            Sun: {city.sales.workinghours.sunday}
                                        </div>
                                    </div>

                                    <div style={{ width: "100%", marginTop: "35px", display: "flex" }}>
                                        <div className="fontstyle web" style={{ width: "68%", fontSize: "1.3vw", letterSpacing: "-0.8px", marginLeft: "50px" }}>
                                            Web: <span style={{ borderBottom: "2px solid black" }} >{city.sales.website}</span>
                                        </div>

                                        <div className="directionMain" style={{ width: "32%"}}>
                                            <div className="fontstyle2 direction" onClick={() => window.open(city.sales.direction, '_blank')} style={{ width: "9vw", fontSize: "0.8vw", height: "5.2vh", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px", cursor: "pointer" }}>
                                                DIRECTIONS
                                             </div>
                                        </div>
                                    </div>
                                </div>
                            }


                            {this.state.status === "services" &&
                                <div className="dealerInfo-LeftSide">
                                    <div className="fontstyle" style={{ backgroundColor: "#d4d4d4", width: "100%", height: "12vh", display: "flex", alignItems: "center", paddingLeft: "3vw", borderBottom: "1px solid black" }}>
                                        <h3 className="cityHeading" style={{ fontSize: "3vw", letterSpacing: "-2px" }}>
                                            {city.name}<span className="fontstyle2" > motors </span>
                                        </h3>
                                    </div>
                                    <div style={{ width: "100%", }}>
                                        <div style={{ display: "flex", width: "52%", marginLeft: "50px", justifyContent: "space-between" }}>
                                            <div className={this.state.status === 'sales' ? "fontstyle2" : "fontstyle"} onClick={() => this.setState({ status: "sales" })} style={{ width: "30%", borderTop: this.state.status === "sales" ? "3px solid red" : "none", cursor: "pointer", fontWeight: this.state.status === "sales" ? "bold" : "none", paddingTop: "6px" }}>SALES</div>
                                            <div className={this.state.status === 'services' ? "fontstyle2" : "fontstyle"} onClick={() => this.setState({ status: "services" })} style={{ width: "33%", borderTop: this.state.status === "services" ? "3px solid red" : "none", cursor: "pointer", fontWeight: this.state.status === "services" ? "bold" : "none", paddingTop: "6px" }}>SERVICES</div>
                                        </div>
                                    </div>
                                    <div style={{ width: "100%", marginTop: "45px" }}>
                                        <div className="fontstyle2 address" style={{ width: "52%", fontSize: "1.3vw", letterSpacing: "-0.8px", marginLeft: "50px" }}>
                                            {city.services.address}
                                        </div>
                                    </div>

                                    <div style={{ width: "100%", marginTop: "35px" }}>
                                        <div className="fontstyle phone" style={{ width: "100%", fontSize: "1.3vw", letterSpacing: "-0.8px", marginLeft: "50px", }}>
                                            Phone: {city.services.phone}
                                        </div>
                                        <div className="fontstyle email" style={{ width: "100%", fontSize: "1.3vw", letterSpacing: "-0.8px", marginLeft: "50px" }}>
                                            Email: {city.services.email}
                                        </div>
                                    </div>

                                    <div style={{ width: "100%", marginTop: "35px" }}>
                                        <div className="fontstyle2 hours" style={{ width: "100%", fontSize: "1.3vw", letterSpacing: "-0.8px", marginLeft: "50px", }}>
                                            Working hours
                                </div>
                                    </div>

                                    <div style={{ width: "100%", marginTop: "20px" }}>
                                        <div className="fontstyle days" style={{ width: "100%", fontSize: "1.3vw", letterSpacing: "-0.8px", marginLeft: "50px", }}>
                                            Mon- Thur: {city.services.workinghours.mondayToThursday}
                                        </div>
                                        <div className="fontstyle days" style={{ width: "100%", fontSize: "1.3vw", letterSpacing: "-0.8px", marginLeft: "50px", }}>
                                            Fri: {city.services.workinghours.friday}
                                        </div>
                                        <div className="fontstyle days" style={{ width: "100%", fontSize: "1.3vw", letterSpacing: "-0.8px", marginLeft: "50px", }}>
                                            Sat: {city.services.workinghours.saturday}
                                        </div>
                                        <div className="fontstyle days" style={{ width: "100%", fontSize: "1.3vw", letterSpacing: "-0.8px", marginLeft: "50px" }}>
                                            Sun: {city.services.workinghours.sunday}
                                        </div>
                                    </div>

                                    <div style={{ width: "100%", marginTop: "35px", display: "flex" }}>
                                        <div className="fontstyle web" style={{ width: "68%", fontSize: "1.3vw", letterSpacing: "-0.8px", marginLeft: "50px" }}>
                                            Web: <span style={{ borderBottom: "2px solid black" }} >{city.services.website}</span>
                                        </div>

                                        <div className="directionMain" style={{ width: "32%" }}>
                                            <div className="fontstyle2 direction" onClick={() => window.open(city.services.direction, '_blank')} style={{ width: "9vw", fontSize: "0.8vw", height: "5.2vh", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px", cursor: "pointer" }}>
                                                DIRECTIONS
                                             </div>
                                        </div>
                                    </div>

                                </div>
                            }



                            <div className="dealerInfo-RightSide">
                                {city.name === "Islamabad" ?
                                    <div className="maphotspot1" style={{ cursor: "pointer" }} >
                                        <img src={maphotspotred} height="100%" width="100%" alt="-" />
                                    </div>
                                    :
                                    <div className="maphotspot1" style={{ cursor: "pointer" }} >
                                        <img onClick={this.changeCity.bind(this, "Islamabad")} src={maphotspotgrey} height="100%" width="100%" alt="-" />
                                    </div>
                                }
                                {city.name === "Momentum" ?

                                    <div className="maphotspot2" style={{ cursor: "pointer" }}>
                                        <img src={maphotspotred} height="100%" width="100%" alt="-" />
                                    </div>
                                    :
                                    <div className="maphotspot2" style={{ cursor: "pointer" }}>
                                        <img onClick={this.changeCity.bind(this, "Lahore")} src={maphotspotgrey} height="100%" width="100%" alt="-" />
                                    </div>
                                }

                                {city.name === "South" ?
                                    <div className="maphotspot3" style={{ cursor: "pointer" }}>
                                        <img src={maphotspotred} height="100%" width="100%" alt="-" />
                                    </div> :
                                    <div className="maphotspot3" style={{ cursor: "pointer" }}>
                                        <img onClick={this.changeCity.bind(this, "karachiSouth")} src={maphotspotgrey} height="100%" width="100%" alt="-" />
                                    </div>
                                }
                                {city.name === "Apollo" ?

                                    <div className="maphotspot4" style={{ cursor: "pointer" }}>
                                        <img src={maphotspotred} height="100%" width="100%" alt="-" />
                                    </div>
                                    :
                                    <div className="maphotspot4" style={{ cursor: "pointer" }}>
                                        <img onClick={this.changeCity.bind(this, "karachiApollo")} src={maphotspotgrey} height="100%" width="100%" alt="-" />
                                    </div>
                                }
                                <div className="map-wrapper">
                                    <div className="map">
                                        <img src={map} height="auto" width="100%" alt="-" />
                                    </div>
                                </div>
                            </div>

                        </div> :
                        <div>
                            Page Not Found
                        </div>
                }

            </div>
        );
    }

}

export default DealerInfo;
