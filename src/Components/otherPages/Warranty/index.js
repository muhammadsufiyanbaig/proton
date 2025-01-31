import React, { Component } from "react";

import "./warranty.css";

class Warranty extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render() {
        return (
            <div className="warrantyMain" style={{ marginTop: "100px" }}>

                <div style={{ color: "black" }}>
                    <h2
                        className="fontstyle aboutAlhaj"
                        style={{ fontSize: "3vw", letterSpacing: "-2px", padding: "20px 70px" }}
                    >
                        Our <span className="fontstyle2">warranty</span>
                    </h2>
                </div>
                <div style={{ color: "black" }}>
                    <h2
                        className="fontstyle warrantyHeadings"

                        style={{ letterSpacing: "-2px", padding: "30px 70px", width: "70%", }}
                    >
                        Basic Warranty Coverage
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
                        The Basic warranty coverage for Proton vehicles is 5 years, starting from the date of vehicle's registration or

                        150,000 km, whichever comes first. Al-Haj Automotive warrants that it will either repair or replace as it deems appropri-
                        ate free of charge on any part of your Proton vehicle if there are any defects in material or workmanship under

                        normal use. This coverage does not apply to the items listed under 'Specific Warranty Coverage' and 'What Is
                        Not Covered by the Warranty'.
              </p>
                </div>

                <div style={{ color: "black" }}>
                    <h2
                        className="fontstyle warrantyHeadings"

                        style={{ letterSpacing: "-2px", padding: "30px 70px", width: "70%", }}
                    >
                        Parts Warranty Coverage
                    </h2>
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
                        All PROTON Genuine Parts purchased by customers from its Authorized Dealers / Branches are warranted

                        from defects on material for a period of 6 months from the date of purchase or 10,000 km travelled, whichev-
                        er comes first (the Warranty Period). The replacement of PROTON Genuine Parts during the Warranty Period

                        is warrantable until the expiry of the vehicle Warranty Period.
                           </p>
                </div>

                <div style={{ color: "black" }}>
                    <h2
                        className="fontstyle warrantyHeadings"

                        style={{letterSpacing: "-2px", padding: "30px 70px", width: "70%", }}
                    >
                        Specific Warranty Coverage
                    </h2>
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
                        The following items are covered under specific terms and conditions of warranty, where the Basic Warranty
                        Coverage mentioned above would not apply. The variation in the warranty coverage for specific items of com-
                        ponents or class of components takes into account the ordinary wear and tear caused by the usage, opera-
                        tions and functionality:
              </p>
                </div>

                <div style={{}}>
                    <p className="fontstyle aboutText"
                        style={{
                            padding: "1px 70px",
                            fontSize: "1.3vw",
                            color: "#545658",
                            width: "70%",
                            letterSpacing: "-0.8px",

                        }}
                    >
                     1.The following components are covered by warranty for 5 years from the date of vehicle's first registration or
                        150,000 km, whichever occurs first:<br/>
                        1.1. Power window system<br/>
                        1.1.1. Power window regulator<br/>
                         1.1.2. Power window switches<br/>
                         1.1.3. Power window motor<br/>
                       1.1.4. Power window run channel<br/>
                    </p>
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
                        2. Due to specific nature such as normal wear and tear in operations, the following components are specifically
                        NOT COVERED above 3 years from the date of first registration or 100,000km, whichever occurs first,:
              </p>
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
                        2.1. ENGINE <br/>

                        High Tension leads/cables, all cables including wiring harness, all hoses and tubes, clamps & clips, engine
                        mountings, oil pan, piston rings, oil seals, core plugs, breathers, turbocharger assembly, sensors and bearings.
              </p>
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
                        2.2. TRANSMISSION
              </p>
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
                        • Manual transmission - All cables and rubber bushes, gearbox mountings and bearings.<br/>
                        • Automatic Transmission - All cables (including wiring harness), pipes, hoses, mountings, rubber bushes, sen-
                        sors and bearings.<br/>
                        • Continuous Variable Transmission (CVT) - All cables including wiring harness, pipes, hoses, mountings,
                        rubber bushes, sensors, bearings and CVT belt.
                    </p>
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
                        2.3. DRIVE TRAIN<br/>
                        All clips, rubber boots and mountings.
              </p>
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
                        2.4. COOLING SYSTEM <br/>
                        All hoses, clamps, clips and radiator cap.
              </p>
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
                        2.5. FUEL SYSTEM<br/>
                        All hoses, cables, clips, fuel lines, gaskets, and relays.
              </p>
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
                        2.6. FRONT AND REAR SUSPENSION<br/>
                        All pipes and hoses, shock absorbers, struts, upper & lower control arms and bushes.
              </p>
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
                        2.7. STEERING SYSTEM<br/>
                        All pipes and hoses, clips, rubber boots, rack & pinion, steering rack bush and control link.
              </p>
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
                        2.8. BRAKE SYSTEM<br/>
                        All pipes, hoses, disc rotors, brake drums, front hubs, parking brake system (including linkages) and all cables.
              </p>
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
                        2.9. ELECTRICAL SYSTEM<br/>
                        All cables, relays, horn, headlamp adjustment mechanism, remote control, alarm system and reverse distance
                        system.
              </p>
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
                        2.10. AIR CONDITIONER SYSTEM<br/>
                        Bearing, seals, pulleys, hoses, cables and switches
              </p>
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
                        2.11. BODY INTERIOR<br/>
                        Supplementary Restraint System (SRS), all cables, soft trim items and bright metal & trims.<br/>
                        2.12. BODY EXTERIOR<br/>
                        All cables, soft trim items and bright metal & trims and discoloration- paint work.
              </p>
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
                        2.13. AUDIO VISUAL & NAVIGATION SYSTEMS<br/>
                        Audio system, DVD, GPS and camera.
              </p>
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
                        3. Exhaust System (1 year from the date of vehicle's first registration or 20,000 km, whichever occurs first)<br/>
                        4. Battery (6 Month from the date of vehicle's first registration or 10,000 km, whichever occurs first)
              </p>
                </div>

                <div style={{ color: "black" }}>
                    <h2
                        className="fontstyle warrantyHeadings"
                        style={{letterSpacing: "-2px", padding: "30px 70px", width: "70%", }}
                    >
                        What is not covered in the warranty?
                    </h2>
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
                        1. Vehicles that have not undergone the periodical service maintenance as specified in the Service Booklet.<br/>

                        2. Any service carried out by non-authorized Proton dealerships or service centers.<br/>

                        3. Repairs and adjustments caused by improper maintenance or lack of required service maintenance against
                        those specified in the service booklet, Proton owner's manual and Proton workshop manuals.<br/>

                        4. Repairs and adjustments caused by misuse (i.e. racing, overloading vehicle operation and handling against
                        proper use), accident, negligence, modification, alteration, tampering, disconnection of wiring or components,
                        and improper adjustments or repairs.<br/>

                        5. Repairs and adjustments caused by use of any non-genuine parts, lubricants or additives that are not ap-
                        proved by Proton.<br/>

                        6. The replacement of wear and tear parts under normal periodic service maintenance such as spark plugs,
                        timing belts (including front end auxiliary drive belts), wiper blades, brake lining and pads, clutches, light
                        bulbs, fuses, filters, refrigerant gas, receiver drier, lubricants and fluids are not covered when they are replaced
                        as a maintenance service ordinarily required with vehicle use, except in cases where these parts are replaced
                        as a result of a clearly discernible defect in material or workmanship.<br/>

                        7. The labour, parts and/or lubricant costs of service maintenance such as diagnostic check, engine tune up,
                        cooling system and fuel system cleaning, carbon and sludge removal, inspection and adjustment of brake,<br/>

                        clutch, timing belt, front end auxiliary drive belt and linkage of various parts, wheel alignment, wheel balanc-
                        ing, tire rotation, light bulb and highlight adjustment and other similar service maintenance ordinarily associat-
                        ed with vehicle use.<br/>

                        8. Any cosmetic or surface corrosion caused by stone chips or scratches in the paint, wear and tear or normal
                        deterioration such as discoloration, fading, deformation or blurring.<br/>

                        9. Damage or surface corrosion from the environment such as acid rain, airborne fall-out chemicals reaction<br/>

                        for instance sea water influences along the coast, tree sap, salt, hail, windstorms, lightning, floods, bird drop-
                        pings, industrial emission, industrial dust deposits, pollen and other acts of God.<br/>

                        10. Unauthorized alteration, disruption or change to the vehicle's odometer that may cause the vehicle's mile-
                        age reading to be inaccurate or may not be ascertained.<br/>

                        11. Any damage to glass such as breakage, scratches, edge finish chipping or optical distortion due to anything
                        other than defect in material or workmanship or is conclusively proven to be due to manufacturing defect.<br/>

                        12. Incidental and consequential damages including but not limited to telephone calls, taxi or car rental charg-
                        es, vehicle towing, fuel, hotel bills, loss of time, and inconvenience or commercial loss.<br/>

                        13. Defects resulting from the distributor's improper storage arrangement, absence of proper maintenance and

                        general services, and defects discovered after you had inspected and acknowledged receipt of your new vehi-
                        cle during process of delivery.<br/>

                        14. Defect in equipment, devices and accessories other than those specified and fixed to the vehicle by Proton,
                        and any new defects resulted from the use of such unspecified equipment, devices and accessories.<br/>

                        <p>15. Any changes occurring to your vehicle over a period of time under normal use such as slight irregularities
                        not recognized as affecting quality or function of the vehicle or part, functional phenomena, and defects ap-
                        pearing only under particular or irregular operations. Note: Typical examples of "slight irregularities not recog-
                        nized as affecting quality or function of the vehicle or part functional phenomena" are as follows:</p>

                        - Leakage of oil or other fluids near oil seals, packing and joints too slight to affect a decrease in the specified
                        amount of fluid.<br/>
                        - Slight noise or negligible vibration not affecting vehicle operation or function of components.
              </p>
                </div>


                {/* <div className="banner" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img className="bannerImage" src={X70Booking2} alt="X70booking" height="30%" width="30%" />
                </div> */}
            </div>
        );
    }
}

export default Warranty;
