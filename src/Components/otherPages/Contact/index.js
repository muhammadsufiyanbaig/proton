import React, { Component } from "react";
import axios from 'axios';
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/Star";
import Divider from "@material-ui/core/Divider";
import foneIcon from "../../../assets/images/foneIcon.png"
import "./contact.css";

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addComment: false,
      firstName: "",
      lastName: "",
      foneNum: "",
      email: "",
      city: "",
      query: "",
      comment: "",
      success: false
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  _handleChange(key, event) {
    this.setState({ [key]: event.target.value })
  }
  _handleSubmit() {
    var data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      foneNum: this.state.foneNum,
      email: this.state.email,
      city: this.state.city,
      query: this.state.query,
      comment: this.state.comment
    }
    if (data.firstName === "") {
      this.setState({ error: "First Name is Required" })
    }
  
    else if (data.firstName.search(/[a-zA-Z]/) == -1) {
      this.setState({ error: "Name should be Alphabetic" })
    }
  

    else if (data.foneNum === "") {
      this.setState({ error: "Your Contact Detail is Required" })
    }

    else if (data.foneNum.search(/^[0-9]+$/) == -1) {
      this.setState({ error: "Inavalid Contact Detail" })
    }

    else if (data.email === "") {
      this.setState({ error: "Email Address is Required" })
    }
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email))) {
      this.setState({ error: "Invalid Email Entered" })
    }
    else if (data.city === "") {
      this.setState({ error: "City Name is Required" })
    }
    else if (data.query === "") {
      this.setState({ error: "Please Select Query" })
    }
 

    else {
      axios.post(`https://proton-server.herokuapp.com/data/Contactformdata`, data)
        .then(res => {
          this.setState({ success: true })
        })
     }
  }
  render() {
    return (
      <div className="contactMain">
        <div style={{ width: "80%", marginLeft: "9%", paddingTop: "2%", paddingBottom: "100px" }}>
          <div className="contactMaininner" style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="heading fontstyle headingContact" style={{ fontSize: "3vw", letterSpacing: "-2px", }}>
              Contact <span className="fontstyle2"> us</span>
            </div>
            <div className="headingPhone" style={{ fontSize: "1.5vw", letterSpacing: "-2px", paddingTop: "3%", paddingRight: "3%" }}>
           
             <div style={{display:"flex"}}>
             <div style={{}}><img src={foneIcon} height="25px" width="25px" /> </div><div>(92 - 21)</div> <div>111 - 776 - 866 <div style={{fontSize:"1.43vw"}}>111 - PROTON</div ></div>
             </div>
          </div>
          </div>

          <div className="contactMainMobile" style={{display:"none"}}>
            <div className=" fontstyle headingContact0" style={{ letterSpacing: "-2px", }}>
              Contact <span className="fontstyle2"> us</span>
            </div>
            
            <div  style={{ fontSize: "20px", letterSpacing: "-2px", }}>
              <span style={{ paddingRight: "10px" }}><img src={foneIcon} height="20px" width="20px" /></span>  (92-21) 111 - 776 - 866
             <div  style={{marginLeft:"77px"}}> 111 - PROTON</div>
          </div>
          </div>

          <div
            className="fontstyle contactText"
            style={{
              padding: "20px 10px 0px 50px", fontSize: "1.3vw", fontWeight: 600, color: "#545658",width:"98%"
            }}
          >
            We strive to deliver the best possible experience to our customers. If
            there’s something we can help you with, please don’t hesitate to contact the Proton Team.
        </div>
          <div>
            <h2
              className="fontstyle headingContact"
              style={{
                padding: "20px 0px 10px 50px",
                fontSize: "1.6vw",
                fontWeight: 600,
                color: "#545658",
                letterSpacing: "-1px"
              }}
            >
              Head office
          </h2>
          </div>
          <div
            className="fontstyle contactText"
            style={{
              padding: "0px 0px 0px 50px", fontSize: "1vw", fontWeight: 600, color: "#545658"
            }}
          >
            <span style={{ textDecoration: 'underline' }}>Al-Haj Automotive (Pvt. Ltd.)</span><br/> Main National Highway, Zulfiqarabad Karachi,
          Pakistan.
        </div>
          <div
            className="fontstyle contactText"
            style={{
              padding: "20px 0px 0px 50px", fontSize: "1vw", fontWeight: 600, color: "#545658"
            }}
          >
            info@proton.com.pk <br />
          customersupport@proton.com.pk
        </div>
          <div
            className="fontstyle headingContact"
            style={{
              padding: "30px 50px 20px 50px",
              fontSize: "1.6vw",
              fontWeight: 600,
              color: "#545658",
              letterSpacing: "-1px"
            }}
          >
            Submit a request
        </div>

          {/* Personal Details Section */}

          <div>
            <div className="subHeading fontstyle2 headingContact">Personal Details</div>
            <Grid
            className="inputMainDiv"
              Container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} sm={5}>
                <div class="form-group">
                  <label>
                    <StarIcon />
                  </label>
                  <input
                    type="text"
                    class="form-control fontstyle"
                    placeholder="First Name"
                    style={{ fontWeight: 600 }}
                    onChange={this._handleChange.bind(this, "firstName")}
                  />
                </div>
              </Grid>
              <Grid item xs={0} sm={1} />
              <Grid item xs={12} sm={5}>
                <div class="form-group">
                  <label></label>
                  <input
                    type="text"
                    class="form-control fontstyle"
                    placeholder="Last Name"
                    style={{ fontWeight: 600 }}
                    onChange={this._handleChange.bind(this, "lastName")}
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ padding: "10px 50px" }}>
            <Divider
              style={{
                width: "100%",
                height: 2,
              }}
            />
          </div>
          <div>
            <div className="subHeading fontstyle2 headingContact">Contact Details</div>
            <Grid
            className="inputMainDiv"
              Container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} sm={3}>
                <div class="form-group">
                  <label>
                    <StarIcon />
                  </label>
                  <input
                    type="text"
                    class="form-control fontstyle"
                    placeholder="Phone Number"
                    style={{ fontWeight: 600 }}
                    onChange={this._handleChange.bind(this, "foneNum")}
                  />
                </div>
              </Grid>
              <Grid item xs={0} sm={1} />
              <Grid item xs={12} sm={3}>
                <div class="form-group">
                  <label>
                    <StarIcon />
                  </label>
                  <input
                    type="email"
                    class="form-control fontstyle"
                    placeholder="Email Address"
                    style={{ fontWeight: 600 }}
                    onChange={this._handleChange.bind(this, "email")}
                  />
                </div>
              </Grid>
              <Grid item xs={0} sm={1} />
              <Grid item xs={12} sm={3}>
                <div class="form-group">
                  <label><StarIcon/></label>
                  <input
                    type="city"
                    class="form-control fontstyle"
                    placeholder="Your City"
                    style={{ fontWeight: 600 }}
                    onChange={this._handleChange.bind(this, "city")}
                  />
               
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ padding: "10px 50px" }}>
            <Divider
              style={{
                width: "100%",
                height: 2,
              }}
            />
          </div>
          <div>
            <div></div>
          </div>

          <div>
            <div>
              <div className="subHeading fontstyle2 headingContact">Query</div>

              <Grid
            className="inputMainDiv"

                Container
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item xs={12} sm={5}>

                  <div class="form-group">
                    <label>
                      <StarIcon />
                    </label>
                    <select onChange={(event) => this.setState({ query: event.target.value })} class="form-control selector fontstyle">
                    <option  value="PROTON" style={{display:"none"}} selected>Query</option>
                      <option  value="Enquire about Proton line up">Enquire about Proton line up</option>
                      <option  value="Book a test drive">Book a test drive</option>
                      <option  value="Enquire about leasing options">Enquire about leasing options</option>
                      <option  value="Enquire about our free service campaigns">Enquire about our free service campaigns</option>
                      <option  value="Report a problem in your car">Report a problem in your car</option>
                      <option  value="Register a complaint">Register a complaint</option>
                      <option  value="Other query">Other query</option>


                    </select>
                  </div>
                  <div class="form-group">
                    <textarea onChange={this._handleChange.bind(this, "comment")} placeholder="Comment" class="form-control2 fontstyle" />
                  </div>

                </Grid>
                <Grid item xs={0} sm={1} />
                <Grid item xs={12} sm={5}>
                  <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "column" }}>
                    <div
                      className="fontstyle bookingTextByClickingcontact"
                      style={{
                        padding: "0px 0px 30px 0px", fontSize: "0.95vw", fontWeight: 600, color: "#545658", lineHeight: "2.5vh"
                      }}
                    >
                      By clicking on the "Submit Request" you agree to be
                      contacted by the Proton Team with more information or offers
                      about Proton products.
                     </div>

                    <div className="submitBtn " >
                      <button onClick={this._handleSubmit.bind(this)} type="button" className="btn fontstyle2">
                        SUBMIT REQUEST
                       </button>
                    </div>
                    {!this.state.success &&
                      <div className="fontstyle2 contacError" style={{ fontSize: "1.5vw", letterSpacing: "-1px", display: "flex", justifyContent: "center", color: "red" }}>
                        {this.state.error}
                      </div>
                    }
                    {this.state.success &&
                      <div className="fontstyle contacError" style={{ fontSize: "1.5vw", letterSpacing: "-1px", display: "flex", justifyContent: "center", color: "green" }}>
                        Your Contact Form is Successfully Submitted
                      </div>
                    }

                  </div>
                </Grid>
              </Grid>
            </div>
          </div>



        </div>



      </div>
    );
  }
}

export default Contact;
