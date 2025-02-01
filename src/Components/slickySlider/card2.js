import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ property, slider }) => {
    const { index, picture, city, text, heading, text2 } = property;
    return (
        <div>
            {
                slider === "slider1" && <div id={`card-${index}`} className="card" style={{ height: 530, width: 700, backgroundImage: `url(${picture})`, backgroundSize: "100% 100%" }} >
                    {/* <img src={picture} alt={city} height="100%" width="100%" /> */}

                    <div style={{ backgroundColor: "", height: "100%" }}>
                        <div className="SliderInnerTextSaga" style={{ width: "70%", height: "100%" }}>
                            
                            <div style={{backgroundColor:"#20212499",padding:"10px 10px 5px 10px"}}>
                            <h2 className="fontstyle2" style={{ fontSize: "1.65vw", letterSpacing: "-0.8px", color: "#ffffff" }} >
                                {heading}
                            </h2>
                            <p className="fontstyle" style={{ fontSize: "1.2vw", lineHeight: "1.5vw", paddingTop: "0.3vw", letterSpacing: "-0.8px", color: "#ffffff" }}>
                                {text}
                            </p>
                            <p className="fontstyle" style={{ fontSize: "1vw", lineHeight: "1.5vw", paddingTop: "0.3vw", letterSpacing: "-0.8px", color: "#ffffff" }}>
                                {text2}
                            </p>
                            </div>
                        
                        </div>
                    </div>

                </div>
                ||
                <div id={`card-${index}`} className="card" style={{ height: 530, width: 700 }} >
                    <img src={picture} alt={city} height="100%" width="100%" />
                </div>
            }
        </div>

    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;