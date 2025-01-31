import React from 'react';
import PropTypes from 'prop-types';
import "./slickslider.css";

const Card = ({ property, slider }) => {
    const { index, picture, city, text,heading,text2 } = property;
    return (
        <div>
            {
                slider === "slider1" && <div id={`card-${index}`} className="card" style={{ height: 530, width: 700, backgroundImage: `url(${picture})`, backgroundSize: "100% 100%" }} >
                    {/* <img src={picture} alt={city} height="100%" width="100%" /> */}
                   
                    <div  style={{ width: "60%",height:"100%"}}>
                        <h2 className="fontstyle2" style={{  fontSize: "1.65vw", letterSpacing: "-0.8px", color: "#ffffff" }} >
                            {heading}
                        </h2>
                        <p className="fontstyle" style={{ fontSize: "1.5vw", lineHeight: "1.5vw", paddingTop: "0.4vw", letterSpacing:"-0.8px",color:"#ffffff" }}>
                            {text}
                            <br/>
                            {text2}
                        </p>
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