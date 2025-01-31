import React from "react";
import Grid from "@material-ui/core/Grid";
import Image from "../../assets/x70/safety/safetyX70.png";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Fade from "react-reveal/Fade";
import HeadShake from "react-reveal/HeadShake";

import "./safety.css";


export default class Safety1 extends React.Component {
  render() {
    return (
      <div>
        <Grid container style={{ marginTop: 60 }}>
          <Grid item xs={12} sm={12}>
            <div className="safetyheadingX70 safetymobilehead">
              <h2 className="fontstyle reasseredsafety" style={{ fontSize: "2.7vw" }}>
                REASSURED SAFETY
              </h2>
            </div>
          </Grid>
        </Grid>

        <Grid container className="safety1x70" >
          <Grid item xs={0} sm={1}></Grid>
          <Grid item xs={12} sm={5}>
            <div style={{ width: "100%" }} >
              <div style={{ color: "black" }}>
                <h2
                  className="fontstyle safetyFirst"
                  style={{ fontSize: "3vw", letterSpacing: "-2px" }}
                >
                  Safety <span className="fontstyle2">first</span>
                </h2>
              </div>
              <div style={{ color: "black", paddingTop: "35px" }}>
                <p
                  className="fontstyle safetytext"
                  style={{
                    fontSize: "1.3vw",
                    letterSpacing: "-0.8px",
                    width: "500px",
                    color: "black",
                  }}
                >
                  Deployed with six SRS airbags to offer additional protection
                  from unforeseen circumstances. Also, utilizing HPF technology
                  to maintain a safe following distance on a nominated speed.
                </p>
              </div>


            </div>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Fade right>
              <div className="refinedImage1" style={{ width: "100%", height: "100%" }}>
                <img src={Image} alt="safety" height="100%" width="100%" />
              </div>
            </Fade>
          </Grid>

          <Grid xs={0} sm={1}></Grid>
        </Grid>
        {/* experiance safety fearures */}
        {/* experiance safety fearures End */}




        <div className="safetyMainDivMobile" style={{ display: "none" }}>

          <div className="performanceX70Image1Main" style={{ width: "100%", }}>
            <img className="performanceX70Image1" src={Image} alt="safety" height="100%" width="95%" />
          </div>
          <div style={{ width: "100%" }} className="ExteriorGridText">



            <div style={{ color: "black" }}>
              <h2 className="fontstyle perfor2X70Head" style={{ fontSize: "3vw", letterSpacing: "-2px" }}>Safety<span className="fontstyle2 sth">first</span></h2>
            </div>

            <div className="exteriorGridTextInnerDiv" style={{ color: "black", paddingTop: "35px" }}>
              <p className="fontstyle exteriorText1" style={{ fontSize: "1.3vw", letterSpacing: "-0.8px", color: "black" }} >
                Deployed with six SRS airbags to offer additional protection
                from unforeseen circumstances. Also, utilizing HPF technology
                to maintain a safe following distance on a nominated speed.
          </p>
            </div>


          </div>
        </div>
      </div>
    );
  }
}
