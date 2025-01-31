import React, { Component } from "react";
import X70Booking2 from '../../../assets/images/Booking2/X70Booking2.png';
import ceoImages from '../../../assets/aboutProton/ceoImages.png'
import ceoImagesMobile from '../../../assets/aboutProton/ceoImagesMobile.png'

import "./about.css";

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  render() {
    return (
      <div className="aboutMain">
<div className="contentFlex">
  <div className="contentLeft">
  <div style={{ color: "black" }}>
          <h2
            className="fontstyle aboutAlhaj"
            style={{ fontSize: "3vw", letterSpacing: "-2px", padding: "20px 70px" }}
          >
            About <span className="fontstyle2">Al-Haj</span>
          </h2>
        </div>
        <div style={{ marginTop: "30px" }}>
          <p
            className="fontstyle aboutText"
            style={{
              padding: "1px 70px",
              fontSize: "1.3vw",
              color: "#545658",
              letterSpacing: "-0.8px",
              width: "70%",

            }}
          >
            The very first ‘Al-Haj’ companies were launched in 1960 by Late Haji Sakhi Gul at Jamrud Khyber Agency
            in District Peshawar, with their initial business focused on the trading of tires, textiles, electronic goods,
            logistics, and leasing. Since then the group expands its business to Assembling of HCV, LCV &amp; Passenger
            Vehicles, Import of Passenger vehicles, Oil Exploration &amp; Al-Haj Foundry.
          </p>
        </div>
        <div>
          <p
            className="fontstyle aboutText"
            style={{
              padding: "1px 70px",
              fontSize: "1.3vw",
              color: "#545658",
              width: "70%",
              letterSpacing: "-0.8px",

            }}
          >
            Under the leadership of Haji Shah Jee Gul, Chairman Al-Haj Group has embarked on a journey with a
            highly qualified and motivated core team, which has shown a strong focus on products, employee
            satisfaction, and world-class customer service. The management has a vast experience of consistently
            introducing innovation and improvement in products to increase reliability. By adhering to international
            standards and constantly upgrading our skills and infrastructure, we foresee creating a benchmark in
Pakistan for our core and related businesses.          </p>
        </div>
        <div>
          <p className="fontstyle aboutText"
            style={{
              padding: "1px 70px",
              fontSize: "1.3vw",
              color: "#545658",
              width: "70%",
              letterSpacing: "-0.8px",

            }}
          >
            Al-Haj Automotive (Pvt. Ltd.) since its first product launch in 2006 has received a great reception from
            the public and since then, it has continually grown and become a recognized name in Pakistan’s
            automotive industry. Our unwavering commitment to selling high-quality, reliable, economical, and
            expertly designed vehicles have enabled us to build a loyal customer base.
          </p>
        </div>
   

        <div className="fontstyle aboutText"
          style={{
            padding: "20px 70px",
            fontSize: "1.3vw",
            color: "#545658",
            width: "70%",
            letterSpacing: "-0.8px",

          }}>
          Al-Haj Automotive Private Limited has signed an agreement with the Malaysian automaker Proton, on
          the 29th of August, 2018, as the Exclusive Authorized Distributor and Assemblers of Proton vehicles in
          Pakistan.
        </div>
  </div>
<div className="contentRight">
<div className="ceoImagesDesktop" >
          <img src={ ceoImagesMobile} alt="X70booking"  width="50%" />
        </div>
</div>
</div>
       
     
        <div className="bannerImage1Mobile" style={{  display:"none"}}>
          <img className="bannerImage2Mobile" src={X70Booking2} alt="X70booking" height="30%" width="30%" />
        </div>
        <div className="fontstyle2 aboutText"
          style={{
            padding: "50px 70px",
            fontSize: "1.5vw",
            color: "grey",
            width: "70%",
            letterSpacing: "-0.8px",

          }}>
         AL-HAJ Group Units and Companies
         </div>
         <div className="fontstyle aboutTextLast"
          style={{
            padding: "0px 70px",
            fontSize: "1.3vw",
            color: "#545658",
            width: "70%",
            letterSpacing: "-0.8px",

          }}>
         1. AL-HAJ Logistics <br/>
2. AL-HAJ Energy Limited<br/>
3. AL-HAJ Metallic Industry/AL-HAJ TEX Industries (Pvt.) Ltd.<br/>
4. AL-HAJ Real Estate Solutions<br/>
5. AL-HAJ Foundry<br/>
6. AL-HAJ Tires<br/>
7. AL-HAJ BUS Company<br/>
8. AL-HAJ Automotive<br/>
       </div>
      
     
        <div className="ceoImagesMobile" style={{ display:"none" }}>
          <img src={ ceoImagesMobile} alt="X70booking" height="50%" width="50%" />
        </div>
        <div className="bannerImage1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img className="bannerImage2" src={X70Booking2} alt="X70booking" height="30%" width="30%" />
        </div>
    
      </div>
    );
  }
}

export default About;
