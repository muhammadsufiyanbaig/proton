import React, { Component } from 'react'
import protonWorldWide from "../../../assets/aboutProton/protonworldwide.png"
import Banner from "../../../assets/aboutProton/banneraboutproton.png"
import BannerMobile from "../../../assets/aboutProton/banneraboutprotonmobile.png"
import ourstory1 from "../../../assets/aboutProton/ourstory1.png"
import ourstory2 from "../../../assets/aboutProton/ourstory2.png"
import ourstory3 from "../../../assets/aboutProton/ourstory3.png"




import aboutprotonlogo from "../../../assets/aboutProton/aboutprotonlogo.png"


import "./brand.css"
class AboutProton extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div className="aboutProtonMain">
        <div className="aboutProtonLogo" style={{ display: "flex", justifyContent: "center", marginTop: "9%", marginBottom: "70px" }}  >
          <img className="aboutProtonLogoImage" src={aboutprotonlogo} alt="-" height="60%" width="60%" />
        </div>
        <div  style={{marginTop:"5%",display:"flex",justifyContent:"center"}}>
          <img  src={ourstory1} alt="bannermobile" height="100%" width="100%" />
        </div>
 
        <div className="aboutproton-left-right-Main">

          <div className="aboutproton-left-Wrapper">
            <div style={{ color: "black" }}>
              <h2
                className="fontstyle AboutProton"
                style={{ fontSize: "3vw", letterSpacing: "-2px", padding: "20px 70px" }}
              >
                About <span className="fontstyle2">Proton</span>
              </h2>
            </div>
            <div style={{ marginTop: "30px" }}>
              <p
                className="fontstyle aboutProtonText"
                style={{
                  padding: "1px 70px",
                  fontSize: "1.3vw",
                  color: "#545658",
                  width: "80%",
                  letterSpacing: "-0.8px",


                }}
              >
                Inspiring connections is primarily built on the idea of connecting to the
                humanity within us to create real, lasting connections. At Proton, we
                continue to push the boundaries of technology, allowing us to bridge the
                gap between people and innovation - creating strong bonds to a better
                future for mobility.
        </p>
            </div>
            <div>
              <p
                className="fontstyle aboutProtonText"
                style={{
                  padding: "40px 70px 0px 70px",
                  fontSize: "1.3vw",
                  color: "#545658",
                  width: "80%",
                  letterSpacing: "-0.8px",

                }}
              >
                Proton inspires confidence and pride and has been a driving force in Malaysia’s
                transformation into a global leader in technology and quality.
                 </p>
            </div>
            <div>
              <p className="fontstyle aboutProtonText"
                style={{
                  padding: "1px 70px",
                  fontSize: "1.3vw",
                  color: "#545658",
                  width: "80%",
                  letterSpacing: "-0.8px",

                }}
              >
                When we started out in 1985, our main objective was to propel Malaysia into the 21st
                century as an industrialized nation. To achieve this goal, we aimed higher than our

                competition and strategically developed indigenous R&D. This allowed us to en-
                hance our design capabilities while setting world-class production standards.
        </p>
            </div>
            <div className="fontstyle aboutProtonText"
              style={{
                padding: "1px 70px",
                fontSize: "1.3vw",
                color: "#545658",
                width: "80%",
                letterSpacing: "-0.8px",
              }}>
              We constantly keep a close eye on our competitors and always aim to stay ahead of
              the curve - at the forefront of innovation. Our cutting edge features and innovative
              engineering methods are the main reasons why Proton is held in high regard in the
              automotive industry.
      </div>

            <div className="fontstyle aboutProtonText"
              style={{
                padding: "10px 70px",
                fontSize: "1.3vw",
                color: "#545658",
                width: "80%",
                letterSpacing: "-0.8px",

              }}>
              Proton’s logo is of great significance as the uncaged tiger’s head held high
              symbolizes our brand as an arrowhead steaming forward towards success.
      </div>

          </div>


          <div className="aboutproton-right-Wrapper">
            <div className="protonWorldWide" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={protonWorldWide} alt="X70booking" height="100%" width="100%" />
            </div>
          </div>
        </div>
        {/* banner  */}
        <div>
        <div style={{ color: "black" }}>
              <h2
                className="fontstyle AboutProton"
                style={{ fontSize: "3vw", letterSpacing: "-2px", padding: "50px 70px",marginBottom:"3%" }}
              >
                Innovation at <span className="fontstyle2">Proton</span>
              </h2>
            </div>
            <div style={{display:"flex",justifyContent:"center",marginBottom:"70px"}}>
            <img  src={ourstory2} alt="bannermobile" height="100%" width="100%" />

            </div>
            <div style={{display:"flex",justifyContent:"center",marginTop:"7%"}}>
            <img  src={ourstory3} alt="bannermobile" height="100%" width="100%" />

            </div>
        </div>
        <div className="banner" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img className="bannerImageBrand" src={Banner} alt="banner" height="70%" width="70%" />
        </div>
        <div className="bannerMobileabout" style={{ display: "none" }}>
          <img  src={BannerMobile} alt="bannermobile" height="90%" width="90%" />
        </div>
     
   
      </div>
    )
  }
}

export default AboutProton
