import React from "react";
import Grid from "@material-ui/core/Grid";
import HeadShake from "react-reveal/HeadShake";

import TextField from "@material-ui/core/TextField";
import FooterLogo from "../../../assets/images/footerLogo.png";
import Footicon1 from "../../../assets/images/footericon1wh.png";
import Footicon2 from "../../../assets/images/footericon2wh.png";
import Footicon3 from "../../../assets/images/footericon3wh.png";
import Footicon4 from "../../../assets/images/footericon4wh.png";

import sendicon from "../../../assets/images/sendButton.png";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Server } from "../../Services"
import axios from 'axios';
import firebase from "../database"


import digimerselogo from "../../../assets/images/digimerselogo.png"
import "./index.css";
class Footer extends React.Component {
  constructor() {
    super()
    this.state = {
      subsribermail: "",
      design: {},
      data3: ""
    }

    var title2 = []
    firebase.database().ref('digimerseTitle').once("value", snap => {
      var data2 = snap.val();

      for (let keys in data2) {
        title2.push({ ...data2[keys], key: keys });
      }
      this.setState({ design: title2 }, () => {
        var data3 = this.state.design[0].title
        this.setState({ data3 })
      })
    })

  }

  subscriberEvent() {
    var data = {
      subsribermail: this.state.subsribermail,
      js: "success"
    }
    axios.post(`https://proton-server.herokuapp.com/mailchimpdata/subscribe`, data)
      //  axios.post(`http://localhost:8080/mailchimpdata/subscribe`, data)
      .then(res => {
        if (res) {
          alert(res.data)
        }
      })
      .catch(err => {
        console.log(err)
        alert("Enter email address")
      })
  }

  render() {
    return (
      <Grid container style={{ overflow: "hidden" }}>

        <Grid item xs={12} sm={12} md={12}>
          <div className="footerTopParentClass">
            <div >
              <h2 className="fontstyle2 stayinformed">STAY INFORMED</h2>
              <p className="fontstyle subscribeText" style={{ paddingTop: "0.1vw", letterSpacing: "-0.5px" }}>
                Kindly subscribe to our monthly newsletter for lastest news and
                updates
              </p>
              <div className="subscribeButton" style={{ paddingLeft: "19vw" }}>
                <HeadShake>
                  <img
                    className="sendIcon"
                    // onClick={() => alert("News letter campaign starts from JAN 2021")}
                    onClick={this.subscriberEvent.bind(this)}
                    src={sendicon}
                    alt="send"
                    height="3%"
                    width="3%"
                  />
                </HeadShake>
              </div>
              <TextField
                className="textfield"
                style={{ width: "20%", marginTop: "-1vw" }}
                id="filled-basic"
                label="SUBSCRIBE"
                variant="filled"
                onChange={(e) => this.setState({ subsribermail: e.target.value })}
              />
            </div>
          </div>
        </Grid>
        <Grid className="bottomLeft" item xs={12} sm={12} lg={9} >
          <div className="footerBottomleftSide " style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ height: "75%", display: "flex", flexDirection: "row", alignItems: "center" }}>
              <div className="footerLogo" style={{ paddingLeft: "10%" }}>
                <img
                  className="footerLogo"
                  src={FooterLogo}
                  alt="footerlogo"
                  height="120px"
                  width="120px"
                />
              </div>

              <div className="footerMenuesMain" style={{ display: "flex", flexDirection: "column", paddingLeft: "3%" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div className="footerMenues fontstyle2" >
                    <span style={{ cursor: "pointer" }} onClick={() => window.open(`${Server}/About-Proton`, '_blank')} >Brand</span>
                  </div>
                  {/* <div className="footerMenues fontstyle2">
                    <span style={{ cursor: "pointer" }} onClick={() => window.open(`${Server}/News`, '_blank')}>News</span>
                  </div> */}
                  <div className="footerMenues fontstyle2">
                    <span style={{ cursor: "pointer" }} onClick={() => window.open(`${Server}/Warranty`, '_blank')}>Warranty</span>
                  </div>
                  <div className="footerMenues fontstyle2">
                    <span style={{ cursor: "pointer" }} onClick={() => window.open(`${Server}/Careers`, '_blank')}>Careers</span>
                  </div>
                  <div className="footerMenues fontstyle2">
                    <span style={{ cursor: "pointer" }} onClick={() => window.open(`${Server}/Contact`, '_blank')}>Contact</span>
                  </div>
                  <div className="footerMenues2 fontstyle2">
                    <span style={{ cursor: "pointer" }} onClick={() => window.open(`${Server}/sitemap`, '_blank')}>Site map</span>
                  </div>
                </div>
                <div className="textAllRight">
                  @ 2020.ALL RIGHT RESERVED
                </div>
              </div>
            </div>
            <div className="text3 text3M fontstyle2" style={{ height: "25%", borderTop: "2px solid red", padding: "15px 0px 0px 125px" }}>
              <span style={{ cursor: "pointer" }} onClick={() => this.props.history.push("/Disclaimer")}>TERMS AND CONDITIONS</span>  | <span style={{ cursor: "pointer" }} onClick={() => this.props.history.push("/Privacy")}>PRIVACY NOTICE</span>
            </div>
          </div>
        </Grid>
        <Grid className="bottomRight" item xs={12} sm={12} lg={3} >
          <div className="footerBottomRightSide footerBottomRightSideMobile" style={{ display: "flex", flexDirection: "column" }}>
            <div className="footerBottomRightSideMobile2" style={{ height: "75%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingLeft: "100px", paddingRight: "120px" }}>
              <img onClick={() => window.open(`https://www.facebook.com/Protonpak/`, '_blank')} style={{ cursor: "pointer" }} className="hoverIcons" src={Footicon1} alt="icon1" width="40px" height="40px" />
              <img onClick={() => window.open(`  https://www.instagram.com/proton.pakistan`, '_blank')} style={{ cursor: "pointer" }} className="hoverIcons" src={Footicon2} alt="icon1" width="40px" height="40px" />
              <img onClick={() => window.open(`https://www.youtube.com/channel/UCfx5WZ9_Sfrhv0uwqq-EXYw`, '_blank')} style={{ cursor: "pointer" }} className="hoverIcons" src={Footicon3} alt="icon1" width="40px" height="40px" />
              <img onClick={() => window.open(`https://twitter.com/ProtonPakistan`, '_blank')} style={{ cursor: "pointer" }} className="hoverIcons" src={Footicon4} alt="icon1" width="40px" height="40px" />

              {/* <div className="hoverIconstwitter" style={{height:"40px",width:"40px",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <img style={{ cursor: "pointer" }}  src={Footicon4} alt="icon1" width="18px" height="18px" />
              </div>  */}

            </div>
            {this.state.data3 &&
              <div ref="digimersetitle" style={{ height: "25%", display: "flex", marginTop: "-9px", paddingLeft: "110px" }}>
                <p onClick={() => window.open(`https://digimerse.com`, '_blank')} className="text3 fontstyle2" style={{ letterSpacing: "1px", cursor: "pointer" }}>
                  {this.state.data3}
                </p>
              </div>
            }

          </div>
        </Grid>




        <div className="mobileFooter" style={{ display: "none" }}>

          <div style={{ backgroundColor: "#e6e6e6" }}>
            <List style={{ padding: 10 }}>
              <ListItem
                button
                onClick={() => window.open(`${Server}/About-Proton`, '_blank')}
                style={{
                  height: 73,
                  cursor: "pointer",
                  fontSize: "12px",
                }}
              >
                <ListItemText>
                  <span style={{ cursor: "pointer" }}  >Brand</span>

                </ListItemText>
                <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "30px", height: '18px', width: "18px", color: "red" }} /></ListItemIcon>
              </ListItem>
              <Divider
                style={{
                  width: "100%",
                  height: 2,
                }}
              />
            </List>



            <List style={{ padding: 10 }}>
              <ListItem
                button
                onClick={() => window.open(`${Server}/Warranty`, '_blank')}
                style={{
                  height: 73,
                  cursor: "pointer",
                  fontSize: "12px",
                }}
              >
                <ListItemText>
                  <span style={{ cursor: "pointer" }} >Warranty</span>
                </ListItemText>
                <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "30px", height: '18px', width: "18px", color: "red" }} /></ListItemIcon>
              </ListItem>
              <Divider
                style={{
                  width: "100%",
                  height: 2,

                }}
              />
            </List>

            <List style={{ padding: 10 }}>
              <ListItem
                button
                onClick={() => window.open(`${Server}/Careers`, '_blank')}
                style={{
                  height: 73,
                  cursor: "pointer",
                  fontSize: "12px",
                }}
              >
                <ListItemText>
                  <span style={{ cursor: "pointer" }} >Careers</span>
                </ListItemText>
                <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "30px", height: '18px', width: "18px", color: "red" }} /></ListItemIcon>
              </ListItem>
              <Divider
                style={{
                  width: "100%",
                  height: 2,
                }}
              />
            </List>

            <List style={{ padding: 10 }}>
              <ListItem
                button
                onClick={() => window.open(`${Server}/Contact`, '_blank')}
                style={{
                  height: 73,
                  cursor: "pointer",
                  fontSize: "12px",
                }}
              >
                <ListItemText>
                  <span style={{ cursor: "pointer" }} >Contact</span>
                </ListItemText>
                <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "30px", height: '18px', width: "18px", color: "red" }} /></ListItemIcon>
              </ListItem>
              <Divider
                style={{
                  width: "100%",
                  height: 2,
                }}
              />
            </List>

            <List style={{ padding: 10 }}>
              <ListItem
                button
                onClick={() => window.open(`${Server}/sitemap`, '_blank')}
                style={{
                  height: 73,
                  cursor: "pointer",
                  fontSize: "12px",
                }}
              >
                <ListItemText>
                  <span style={{ cursor: "pointer" }} >Site map</span>
                </ListItemText>
                <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "30px", height: '18px', width: "18px", color: "red" }} /></ListItemIcon>
              </ListItem>
              <Divider
                style={{
                  width: "100%",
                  height: 2,
                }}
              />
            </List>
          </div>


          <div style={{ backgroundColor: "#3c3c3b" }}>

            <div style={{ color: "white", fontSize: "9px", display: "flex", justifyContent: "center", paddingTop: "15px" }}>
              <span style={{ cursor: "pointer" }} onClick={() => this.props.history.push("/Disclaimer")}>TERMS AND CONDITIONS</span> <span style={{ margin: "0px 5px 0px 5px" }}> | </span> <span style={{ cursor: "pointer" }} onClick={() => this.props.history.push("/Privacy")}>PRIVACY NOTICE</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: "100px", paddingRight: "100px", paddingTop: "15px" }}>
              <img onClick={() => window.open(`https://www.facebook.com/Protonpak/`, '_blank')} style={{ cursor: "pointer" }} className="hoverIcons" src={Footicon1} alt="icon1" width="40px" height="40px" />
              <img onClick={() => window.open(` https://www.instagram.com/proton.pakistan`, '_blank')} style={{ cursor: "pointer" }} className="hoverIcons" src={Footicon2} alt="icon1" width="40px" height="40px" />
              <img onClick={() => window.open(`https://www.youtube.com/channel/UCfx5WZ9_Sfrhv0uwqq-EXYw`, '_blank')} style={{ cursor: "pointer" }} className="hoverIcons" src={Footicon3} alt="icon1" width="40px" height="40px" />
              <img onClick={() => window.open(` https://twitter.com/ProtonPakistan`, '_blank')} style={{ cursor: "pointer" }} className="hoverIcons" src={Footicon4} alt="icon1" width="40px" height="40px" />

            </div>

            <div style={{ color: "white", fontSize: "9px", display: "flex", justifyContent: "center", paddingTop: "15px" }}>
              @ 2020.ALL RIGHT RESERVED
               </div>
            <div style={{ color: "white", fontSize: "9px", display: "flex", justifyContent: "center", paddingTop: "15px" }}>
              <p onClick={() => window.open(`https://digimerse.com`, '_blank')} className="fontstyle2" style={{ cursor: "pointer" }}>
                {this.state.data3}
              </p>
            </div>
            <div onClick={() => window.open(`https://digimerse.com`, '_blank')} style={{ width: "100%", display: "flex", justifyContent: "center", padding: "10px 0px 30px 0px" }}>
              <img src={digimerselogo} height="40px" height="40px" />
            </div>

          </div>



        </div>
      </Grid >
    );
  }
}

export default Footer;
