import React from "react";
import "./index.css";


class Disclaimer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render() {
        return (
            <div className="Disclaimer">

                <div style={{ color: "black" }}>
                    <h2
                        className="fontstyle2 aboutAlhaj"
                        style={{ fontSize: "3vw", letterSpacing: "-2px", padding: "20px 70px" }}
                    >
                        Disclaimer
                    </h2>
                </div>
                <div style={{ marginTop: "30px" }}>
                    <p
                        className="fontstyle aboutText"
                        style={{
                            padding: "1px 70px",
                            fontSize: "1.3vw",
                            color: "#545658",

                            width: "95%",

                        }}
                    >
                        Please take a moment and read the terms & conditions carefully. By accessing this site and its pages thereof, you represent that you have read
                        and understood the terms & conditions. While every effort has been made to ensure that the information on this site is correct and up to date,
                        AL-HAJ Automotive Pvt ltd doesn’t represent or warrant the completeness, accuracy, or availability of such information.
                      </p>
                </div>
                <div>
                    <p
                        className="fontstyle aboutText"
                        style={{
                            padding: "1px 70px",
                            fontSize: "1.3vw",
                            color: "#545658",
                            width: "95%",
                        }}
                    >
                        Furthermore, AL-HAJ Automotive is not liable for any direct, indirect, incidental, special, or consequential punitive damages, losses or expenses
                        arising in connection with your access or use. Or the inability to access or use this site or any linked site-resulting from interruption, error,
                        omission, defect, delay in operation or transmission, failure in performance, computer virus or destructive properties, computer system failure,
                        loss of transmitted information, breach of security or otherwise.
                        </p>
                </div>
                <div>
                    <p className="fontstyle aboutText"
                        style={{
                            padding: "1px 70px",
                            fontSize: "1.3vw",
                            color: "#545658",
                            width: "95%",
                        }}
                    >
                        You acknowledge and agree that access to, and use of, the site may be interfered with by various factors outside of AL-HAJ Automotive control.
                        To the maximum extent permitted by law, Proton does not accept any liability for damages of any kind or otherwise resulting from the access or
                        use of this site and its contents. The services offered on this site are intended to merely provide a guide only, and further information should be
                        ascertained from Authorized Proton Dealers in Pakistan.
                         </p>
                </div>

                <div>
                    <p className="fontstyle aboutText"
                        style={{
                            padding: "1px 70px",
                            fontSize: "1.3vw",
                            color: "#545658",
                            width: "95%",
                        }}
                    >
                        This website is owned by AL-HAJ Automotive and is intended for use within Pakistan only. AL-HAJ Automotive reserves the right to discontinue
                        or change car models, prices, colors, accessories, or other specifications and configurations referred to on this site at any time without notice.
                         </p>
                </div>

                <div>
                    <p className="fontstyle aboutText"
                        style={{
                            padding: "1px 70px",
                            fontSize: "1.3vw",
                            color: "#545658",
                            width: "95%",
                        }}
                    >
                        All model colors showcased on the site cannot reproduce the actual exterior color appearance, hence are for general visual guidance only.
                        Always consult an Authorized Proton Dealer for the latest information about Proton products and its availability before placing an order.
                        All prices specified on this site are in PKR.
                         </p>
                </div>


                <div>
                    <p className="fontstyle aboutText"
                        style={{
                            padding: "1px 70px",
                            fontSize: "1.3vw",
                            color: "#545658",
                            width: "95%",
                        }}
                    >
                        This website contains material which is owned by or licensed to AL-HAJ Automotive. All trademarks, service marks, and logos displayed on this
                        site are registered and owned by Proton. The material in the site includes, but is not limited to, the design, layout, appearance, content, photos,
                        graphics, sound files, animation files, video files, etc.
                         </p>
                </div>

                <div>
                    <p className="fontstyle aboutText"
                        style={{
                            padding: "1px 70px",
                            fontSize: "1.3vw",
                            color: "#545658",
                            width: "95%",
                        }}
                    >
                        You acknowledge and agree that access to, and use of, the site may be interfered with by various factors outside of AL-HAJ Automotive control.
                        To the maximum extent permitted by law, Proton does not accept any liability for damages of any kind or otherwise resulting from the access or
                        use of this site and its contents. The services offered on this site are intended to merely provide a guide only, and further information should be
                        ascertained from Authorized Proton Dealers in Pakistan.
                         </p>
                </div>

                <div>
                    <p className="fontstyle aboutText"
                        style={{
                            padding: "1px 70px",
                            fontSize: "1.3vw",
                            color: "#545658",
                            width: "95%",
                        }}
                    >
                        All information on this site is protected by copyright and other intellectual property laws. No content, including images, models, text, etc. from

                        this site may be copied, modified, reproduced, retransmitted, republished, distributed, sold, exploited or otherwise making available to third par-
                        ties. Unauthorized use of the material copied from this site may give rise to a claim for damages and/or be a criminal offense.
                         </p>
                </div>



            </div>
        );
    }
}

export default Disclaimer;
