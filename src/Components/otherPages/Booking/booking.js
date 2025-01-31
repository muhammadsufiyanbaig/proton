import React, { Component } from "react";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/Star';
import Divider from "@material-ui/core/Divider";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import X70Booking from '../../../assets/images/Booking/sagaBooking.png';
import './booking.css';

class Booking extends Component {
  constructor() {
    super()
    this.state = {
      addComment: false,
      firstName: "",
      lastName: "",
      foneNum: "",
      email: "",
      city: "",
      varient: "",
      color: "",
      dealership: "",
      comment: "",
      success: false
    }
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
      varient: this.state.varient,
      color: this.state.color,
      dealership: this.state.dealership,
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
    
    else if (data.varient === "") {
      this.setState({ error: "Please Select Modal Varient" })
    }
    else if (data.dealership === "") {
      this.setState({ error: "Please Select Proton Dealership " })
    }
   
    else {
      axios.post(`https://proton-server.herokuapp.com/data/Sagaformdata`, data)
      //  axios.post(`http://localhost:8080/data/Sagaformdata`, data)
        .then(res => {
          this.setState({ success: true })
        })
    }
  }

  render() {
    return (
      <div className="bookingMain">
        <div>
          <img src={X70Booking} alt="X70BookingBanner" height="90%" width="100%" />
        </div>


        <div className="bookingMainInner" style={{ width: "80%", marginLeft: "10%", paddingBottom: "100px" }}>

          <div className="heading fontstyle" style={{ fontSize: "3vw", letterSpacing: "-2px" }}>
            Book your <span className="fontstyle2">saga</span>
          </div>
          <div className="fontstyle bookingText" style={{ padding: "20px 50px", fontSize: "1.3vw", fontWeight: 600 }}>
          You are one step away from owning your PROTON. Fill in your details below to secure booking now.</div>

          {/* Personal Details Section */}

          <div>
            <div className="subHeading fontstyle2">
              PERSONAL DETAILS
          </div>
            <Grid className="inputMainDiv" Container style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Grid item xs={12} sm={5}>
                <div class="form-group">
                  <label><StarIcon /></label>
                  <input onChange={this._handleChange.bind(this, "firstName")} type="text" class="form-control fontstyle" placeholder="First Name" style={{ fontWeight: 600 }} />
                </div>
              </Grid>
              <Grid item xs={0} sm={1} />
              <Grid item xs={12} sm={5}>
                <div class="form-group">
                  <label></label>
                  <input onChange={this._handleChange.bind(this, "lastName")} type="text" class="form-control fontstyle" placeholder="Last Name" style={{ fontWeight: 600 }} />
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
            <div className="subHeading fontstyle2">
              CONTACT DETAILS
          </div>
            <Grid className="inputMainDiv" Container style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Grid item xs={12} sm={3}>
                <div class="form-group">
                  <label><StarIcon /></label>
                  <input onChange={this._handleChange.bind(this, "foneNum")} type="text" class="form-control fontstyle" placeholder="Phone Number" style={{ fontWeight: 600 }} />
                </div>
              </Grid>
              <Grid item xs={0} sm={1} />
              <Grid item xs={12} sm={3}>
                <div class="form-group">
                  <label><StarIcon /></label>
                  <input onChange={this._handleChange.bind(this, "email")} type="email" class="form-control fontstyle" placeholder="Email Address" style={{ fontWeight: 600 }} />
                </div>
              </Grid>
              <Grid item xs={0} sm={1} />
              <Grid item xs={12} sm={3}>
                <div class="form-group">
                  <label><StarIcon /></label>
                  <input onChange={this._handleChange.bind(this, "city")} type="city" class="form-control fontstyle" placeholder="Your City" style={{ fontWeight: 600 }} />
                 
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
            <div>
              <div className="subHeading fontstyle2">
                YOUR PROTON
            </div>
              <Grid className="inputMainDiv" Container style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid item xs={12} sm={5}>
                  <div class="form-group">
                    <label><StarIcon /></label>
                    <select onChange={(event) => this.setState({ varient: event.target.value })} class="form-control selector fontstyle">
                      <option value="0" style={{ display: "none" }} selected>Model Variant</option>
                      <option value="PREMIUM AT">PREMIUM AT</option>
                      <option value="STANDARD MT">STANDARD MT</option>
                    </select>
                  </div>
                </Grid>
                <Grid item xs={0} sm={1} />
                <Grid item xs={12} sm={5}>
                  <div class="form-group">
                    <label></label>
                    <select onChange={(event) => this.setState({ color: event.target.value })} class="form-control selector fontstyle">
                      <option value="0" style={{ display: "none" }} selected>Color</option>
                      <option value="RUBY RED">RUBY RED</option>
                      <option value="ROSEWOOD MAROON">ROSEWOOD MAROON</option>
                      <option value="JET GREY">JET GREY</option>
                      <option value="ARMOURED SILVER">ARMOURED SILVER</option>
                      <option value="SNOW WHITE">SNOW WHITE</option>
                    </select>
                  </div>
                </Grid>
              </Grid>
            </div>
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
            <div>
              <div className="subHeading fontstyle2">
                PROTON DEALERSHIP
            </div>
              <div className="fontstyle bookingText" style={{ padding: "0px 50px", paddingBottom: "20px", fontSize: "1.1vw", fontWeight: 600, color: "#545658" }}>
                Select your nearest Proton Dealership to collect your vehicle.
            </div>
              <Grid className="inputMainDiv" Container style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid item xs={12} sm={5}>
                  <div class="form-group">
                    <label><StarIcon /></label>
                    <select onChange={(event) => this.setState({ dealership: event.target.value })} class="form-control selector fontstyle">
                      <option value="0" style={{ display: "none" }} selected>Preferred Dealership</option>
                      <option value="Proton Apollo Motors">Proton Apollo Motors (KHI)</option>
                      <option value="Proton South Motors">Proton South Motors (KHI)</option>
                      <option value="Proton Momentum Motors">Proton Momentum Motors (LHR)</option>
                      <option value="Proton Islamabad Motors">Proton Islamabad Motors (ISL)</option>

                    </select>
                  </div>
                </Grid>
                <Grid item xs={0} sm={1} />
                <Grid item xs={12} sm={5}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ color: "black", display: this.state.addComment ? "none" : "block" }}><AddCircleIcon onClick={() => this.setState({ addComment: true })} className="addIcon" /></div>
                    {!this.state.addComment &&
                      <div className="fontstyle" style={{ marginLeft: 10, fontSize: "16px", fontWeight: 600, color: "black" }}>Add Comments</div>
                    }

                    {this.state.addComment &&
                      <div class="form-group">
                        <textarea placeholder="Comment"  onChange={this._handleChange.bind(this, "comment")} class="form-control2 fontstyle"/>
                      </div>
                    }

                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
          <div style={{ padding: "10px 50px" }}>
            <Divider
              style={{
                width: "100%",
                height: 2,
              }}
            />
          </div>
          <div className="fontstyle bookingTextByClicking" style={{ padding: "5px 50px", fontSize: "1vw", fontWeight: 600, color: "#545658", lineHeight: "3vh" }}>
            By clicking on the "SUBMIT REQUEST", you are directing Proton to share your personal information with the above selected dealer. We would also like to
            contact you to let you know about our products and services, including special offers. If you do not want us to do so, please let us know by mentioning it
            in the ‘’ADD COMMENTS’ section.
        </div>
          <div className="submitBtn" style={{ borderRadius: "10px", cursor: "pointer", marginTop: "20px" }}>
            <button onClick={this._handleSubmit.bind(this)} type="button" className="btn fontstyle2">SUBMIT REQUEST</button>
          </div>
          {!this.state.success &&
            <div className="fontstyle2 errorText" style={{ fontSize: "1.5vw", letterSpacing: "-1px", display: "flex", justifyContent: "center", color: "red" }}>
              {this.state.error}
            </div>
  }
  {this.state.success &&
    <div className="fontstyle errorText" style={{ fontSize: "1.5vw", letterSpacing: "-1px", display: "flex", justifyContent: "center", color: "green" }}>
    Your Booking Form is Successfully Submitted 
  </div>
  }
        
        </div>
      </div>
    )
  }
}

export default Booking;
