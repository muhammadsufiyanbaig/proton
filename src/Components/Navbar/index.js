import React, { useState } from "react";
import { Server } from "../Services"
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Footicon1 from "../../assets/images/f.png";
import Footicon2 from "../../assets/images/i.png";
import Footicon3 from "../../assets/images/y.png";
import Footicon4 from "../../assets/images/t.png";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import X70 from "../../assets/images/10.PNG";
import Saga from "../../assets/images/9.PNG";

import Exora from "../../assets/images/5.png";
import Perdana from "../../assets/images/6.png";
import Persona from "../../assets/images/7.png";
import iriz from "../../assets/images/8.png";

import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
//material ui App Bar
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { useLocation } from 'react-router-dom';
import Logo from "../../assets/images/animatedLogo.gif";
import Searchbar from "./searchbar"
import SearchbarMobile from "./searchbarMobile"
import SearchIcon from '@material-ui/icons/Search';
import "./navbar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  brand: {
    marginRight: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(-3),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function SwipeableTemporaryDrawer(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(0);

  const classes = useStyles();
  let location = useLocation();
  const [state, setState] = React.useState({
    right: false,
  });
  const [expand1Icon, setExpand1Icon] = useState(true);
  const [expand2Icon, setExpand2Icon] = useState(false);
  const [hoverborder, sethoverborder] = useState(0);


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    if (open) {
      setDrawerOpen(true);
    }

    else {
      setDrawerOpen(false);
    }

    setState({ ...state, [anchor]: open });
  };



  const handleClick = (value, activeMenu, links) => {
    setDrawerOpen(value);
    setState({ ...state, right: value });
    setActiveMenu(activeMenu);
    setExpand1Icon(false)
    setExpand2Icon(false)
    props.history.push(links)
  }


  const Mobilelist = (anchor) => (
    <div
      role="presentation"
    >
      <div style={{ padding: "20px 0px 0px 20px" }}>
        <SearchbarMobile history={props.history} onEnterpress={handleClick} />
      </div>

      <List style={{ padding: 10 }}>
        <ExpansionPanel expanded={expand1Icon} style={{ marginTop: 10, boxShadow: "none" }} id="DrawerShoppingToolsMenu" onClick={() => { if (expand1Icon === true) { setExpand1Icon(false) } else { setExpand1Icon(true) } }} >
          <ExpansionPanelSummary
            expandIcon={expand1Icon ? <RemoveIcon style={{ fontSize: 20, color: expand1Icon ? "#000000" : "" }} /> : <AddIcon style={{ fontSize: 20 }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <ListItemText><span style={{ fontWeight: "bold", fontSize: "12px", color: expand1Icon ? "#000000" : "" }}>LOCAL LINE-UP</span></ListItemText>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ListItemText>

              <Grid item xs={12} sm={12}>
                <div
                  button
                  className=""
                  style={{ width: "100%", height: "90%" }}
                >
                  <div
                    className="fontstyle2 "
                    style={{
                      height: "13%",
                      color: "#000000",
                      width: "100%",
                      paddingLeft: "2vw",
                    }}
                  >
                    Compact Sedan
                        </div>
                  <div
                    className="fontstyle "
                    style={{
                      color: "grey",
                      fontSize: "12px",
                      width: "100%",
                      paddingLeft: "2vw",
                      fontStyle: "italic",

                    }}
                  >
                    1.3 VVT
                        </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "1.9vw",
                    }}

                    id="sagaImage"
                  >

                    <div
                      className="MontserratRegular"
                      style={{
                        paddingBottom: "1vw",
                        paddingLeft: "2vw",
                        marginTop: "10%",

                      }}
                    >
                      SAGA
                        </div>

                    <img
                      onClick={() => handleClick(false, null, "/proton-saga")}

                      src={Saga}
                      alt="testing"
                      height="30%"
                      width="30%"
                      style={{ cursor: "pointer" }}
                    />
                  </div>

                </div>

              </Grid>

              <Grid item xs={12} sm={12}>
                <div
                  className=""
                  style={{ width: "100%", height: "90%", marginTop: "15%" }}
                >
                  <div
                    className="fontstyle2 "
                    style={{
                      color: "#000000",
                      height: "13%",
                      width: "100%",
                      paddingLeft: "2vw",

                    }}
                  >
                    SUV

                        </div>
                  <div
                    className="fontstyle "
                    style={{
                      color: "grey",
                      fontSize: "12px",
                      width: "100%",
                      paddingLeft: "2vw",
                      fontStyle: "italic",

                    }}
                  >
                    1.5 TGDI
                        </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "1.9vw",
                    }}

                    id="sagaImage"
                  >

                    <div
                      className="MontserratRegular"
                      style={{
                        paddingBottom: "1vw",
                        paddingLeft: "2vw",
                        marginTop: "14%",
                      }}
                    >
                      X70
                        </div>
                    <img
                      onClick={() => handleClick(false, null, "/X70")}

                      src={X70}
                      alt="testing"
                      height="38%"
                      width="38%"
                      style={{ cursor: "pointer" }}
                    />
                  </div>

                </div>

              </Grid>

            </ListItemText>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <Divider />


        <ExpansionPanel style={{ boxShadow: "none" }} onChange={(event, expanded) => { setExpand2Icon(expanded) }}>
          <ExpansionPanelSummary
            expandIcon={expand2Icon ? <RemoveIcon style={{ fontSize: 20, color: expand2Icon ? "#000000" : "" }} /> : <AddIcon style={{ fontSize: 20 }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <ListItemText><span style={{ fontWeight: "bold", fontSize: "12px", color: expand2Icon ? "#000000" : "" }}>INTERNATIONAL LINE-UP</span></ListItemText>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ListItemText>

              <Grid item xs={12} sm={12}>
                <div
                  className=""
                  style={{ width: "100%", height: "90%", marginTop: "8%" }}
                >
                  <div
                    className="fontstyle2 "
                    style={{
                      color: "#000000",
                      height: "13%",
                      width: "100%",
                      paddingLeft: "2vw",

                    }}
                  >
                    MVP

                        </div>

                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "1.9vw",
                    }}

                    id="sagaImage"
                  >

                    <div
                      className="MontserratRegular"
                      style={{
                        paddingBottom: "1vw",
                        paddingLeft: "2vw",
                        marginTop: "8%",
                      }}
                    >
                      EXORA
                        </div>
                    <img
                      onClick={() => window.open(`https://www.proton.com/en/find-a-car/exora`, '_blank')}
                      src={Exora}
                      alt="testing"
                      height="40%"
                      width="40%"
                      style={{ cursor: "pointer" }}
                    />
                  </div>

                </div>

              </Grid>


              <Grid item xs={12} sm={12}>
                <div
                  className=""
                  style={{ width: "100%", height: "90%", marginTop: "15%" }}
                >
                  <div
                    className="fontstyle2 "
                    style={{
                      color: "#000000",
                      height: "13%",
                      width: "100%",
                      paddingLeft: "2vw",

                    }}
                  >
                    Luxury Sedan

                        </div>

                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "1.9vw",
                    }}

                    id="sagaImage"
                  >

                    <div
                      className="MontserratRegular"
                      style={{
                        paddingBottom: "1vw",
                        paddingLeft: "2vw",
                        marginTop: "8%",
                      }}
                    > PERDANA
                        </div>
                    <img
                      onClick={() => window.open(`https://www.proton.com/en/find-a-car/perdana`, '_blank')}
                      src={Perdana}
                      alt="testing"
                      height="40%"
                      width="40%"
                      style={{ cursor: "pointer" }}
                    />
                  </div>

                </div>

              </Grid>





              <Grid item xs={12} sm={12}>
                <div
                  className=""
                  style={{ width: "100%", height: "90%", marginTop: "15%" }}
                >
                  <div
                    className="fontstyle2 "
                    style={{
                      color: "#000000",
                      height: "13%",
                      width: "100%",
                      paddingLeft: "2vw",

                    }}
                  >
                    Sedan

                        </div>

                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "1.9vw",
                    }}

                    id="sagaImage"
                  >

                    <div
                      className="MontserratRegular"
                      style={{
                        paddingBottom: "1vw",
                        paddingLeft: "2vw",
                        marginTop: "8%",

                      }}
                    > PERSONA
                        </div>
                    <img
                      onClick={() => window.open(`https://www.proton.com/en/find-a-car/persona`, '_blank')}
                      src={Persona}
                      alt="testing"
                      height="40%"
                      width="40%"
                      style={{ cursor: "pointer" }}
                    />
                  </div>

                </div>

              </Grid>


              <Grid item xs={12} sm={12}>
                <div
                  className=""
                  style={{ width: "100%", height: "90%", marginTop: "15%" }}
                >
                  <div
                    className="fontstyle2 "
                    style={{
                      color: "#000000",
                      height: "13%",
                      width: "100%",
                      paddingLeft: "2vw",

                    }}
                  >
                    Hatch back

                        </div>

                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "1.9vw",
                    }}

                    id="sagaImage"
                  >

                    <div
                      className="MontserratRegular"
                      style={{
                        paddingBottom: "1vw",
                        paddingLeft: "2vw",
                        marginTop: "8%",
                      }}
                    >   IRIZ
                        </div>
                    <img
                      onClick={() => window.open(`https://www.proton.com/en/find-a-car/iriz`, '_blank')}
                      src={iriz}
                      alt="testing"
                      height="40%"
                      width="40%"
                      style={{ cursor: "pointer" }}
                    />
                  </div>

                </div>

              </Grid>

            </ListItemText>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <Divider />


        <ListItem
          button
          onClick={() => handleClick(false, 1, '/About')}
          style={{
            height: 73,
            cursor: "pointer",
            fontSize: "12px",

          }}
        >
          <ListItemText>
            <span id="listitemstyle" style={{ fontSize: "12px", }}>
              ABOUT AL-HAJ
            </span>
          </ListItemText>
          <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "30px", height: '18px', width: "18px" }} /></ListItemIcon>
        </ListItem>
        <Divider
          style={{
            width: "100%",
            height: 2,
            backgroundColor: activeMenu === 1 && "red",
          }}
        />


        <ListItem

          onClick={() => handleClick(false, 2, '/About-Proton')}

          button
          style={{
            height: 73,
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          <ListItemText>
            <span
              id="listitemstyle"
              style={{ fontSize: "12px", }}
            >
              PROTON BRAND
         </span>
          </ListItemText>
          <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "30px", height: '18px', width: "18px" }} /></ListItemIcon>
        </ListItem>
        <Divider
          style={{
            width: "100%",
            height: 2,
            backgroundColor: activeMenu === 2 && "red",
          }}
        />
        <ListItem

          onClick={() => handleClick(true, 3)}

          button
          style={{
            height: 73,
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          <ListItemText>
            <a href="https://www.proton.com" target="_blank" id="listitemstyle" style={{ fontSize: "12px", outline: "none" }}>
              PROTON INTERNATIONAL
         </a>
          </ListItemText>
          <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "30px", height: '18px', width: "18px" }} /></ListItemIcon>
        </ListItem>
        <Divider
          style={{
            width: "100%",
            height: 2,
            backgroundColor: activeMenu === 3 && "red",
          }}
        />

        <ListItem
          onClick={() => handleClick(false, 4, '/Warranty')}
          button
          style={{
            height: 73,
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          <ListItemText>
            <span id="listitemstyle" style={{ fontSize: "12px", }}>
              OUR WARRANTY
         </span>
          </ListItemText>
          <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "30px", height: '18px', width: "18px" }} /></ListItemIcon>
        </ListItem>
        <Divider
          style={{
            width: "100%",
            height: 2,
            backgroundColor: activeMenu === 4 && "red",
          }}
        />


        <ListItem
          onClick={() => {
            setActiveMenu(5);
            window.open(`${Server}/X70-Booking`, '_blank')
          }}
          button
          style={{
            height: 73,
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          <ListItemText>
            <span id="listitemstyle" style={{fontSize: "12px" }}>
              BOOK X70
            </span>
          </ListItemText>
          <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "30px", height: '18px', width: "18px" }} /></ListItemIcon>
        </ListItem>
        <Divider
          style={{
            width: "100%",
            height: 2,
            backgroundColor: activeMenu === 5 && "red" || location.pathname === "/X70-Booking" && "red",
          }}
        />
        <ListItem
          onClick={() => {
            setActiveMenu(6);
            window.open(`${Server}/Saga-Booking`, '_blank')
          }}
        
          button
          style={{
            height: 73,
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          <ListItemText>
            <span id="listitemstyle" style={{ fontSize: "12px" }}>
              BOOK SAGA
            </span>
          </ListItemText>
          <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "30px", height: '18px', width: "18px" }} /></ListItemIcon>
        </ListItem>
        <Divider
          style={{
            width: "100%",
            height: 2,
            backgroundColor: activeMenu === 6 && "red" || location.pathname === "/Saga-Booking" && "red",
          }}
        />
        <ListItem
          onClick={() => {
            setActiveMenu(7);
            props.history.push("/");
            window.open(`${Server}/dealerInfo?city=karachiApollo`, '_blank')
          }}
          button
          style={{
            height: 73,
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          <ListItemText>
            <span id="listitemstyle" style={{ fontSize: "12px" }}>
              DEALER NETWORK
            </span>
          </ListItemText>
          <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "30px", height: '18px', width: "18px" }} /></ListItemIcon>
        </ListItem>
        <Divider
          style={{
            width: "100%",
            height: 2,
            backgroundColor: activeMenu === 7 && "red" || location.pathname === `/dealerInfo` && "red",
          }}
        />
        <ListItem
          onClick={() => {
            setActiveMenu(8);
            window.open(`https://www.proton.com/en/corporate/press-release`, '_blank')
          }}
          button
          style={{
            height: 73,
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          <ListItemText>
            <span id="listitemstyle" style={{ fontSize: "12px" }}>
              LATEST NEWS
            </span>
          </ListItemText>
          <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "30px", height: '18px', width: "18px" }} /></ListItemIcon>
        </ListItem>
        <Divider
          style={{
            width: "100%",
            height: 2,
            backgroundColor: activeMenu === 8 && "red",
          }}
        />


        <ListItem

          onClick={()=>{
            setActiveMenu(9);
            window.open(`${Server}/Contact`, '_blank')}
          } 
          button
          style={{
            height: 73,
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          <ListItemText>
            <span id="listitemstyle" style={{ fontSize: "12px" }}>
              CONTACT US
            </span>
          </ListItemText>
          <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "30px", height: '18px', width: "18px" }} /></ListItemIcon>
        </ListItem>

        <div style={{ display: "flex", width: "100%", marginTop: "10px", marginBottom: "30%", justifyContent: "flex-start" }}>
          <div style={{ borderRadius: 50, height: "14%", width: "14%", cursor: "pointer" }}>
            <img onClick={()=> window.open(`https://www.facebook.com/Protonpak/`, '_blank')} src={Footicon1} alt="icon1" width="100%" height="100%" />
          </div>
          <div
            style={{
              marginLeft: "1.4vw",
              borderRadius: 25,
              height: "16%",
              width: "16%",
              cursor: "pointer"
            }}
          >
            <img onClick={()=> window.open(`https://www.instagram.com/proton.pakistan`, '_blank')} src={Footicon2} alt="icon1" width="100%" height="100%" />
          </div>
          <div
            style={{
              marginLeft: "1.4vw",
              borderRadius: 25,
              height: "16%",
              width: "16%",
              cursor: "pointer"
            }}
          >
            <img onClick={()=> window.open(`https://www.youtube.com/channel/UCfx5WZ9_Sfrhv0uwqq-EXYw`, '_blank')}  src={Footicon3} alt="icon1" width="100%" height="100%" />
          </div>
          <div
            style={{
              marginLeft: "1.4vw",
              borderRadius: 25,
              height: "16%",
              width: "16%",
              cursor: "pointer"
            }}
          >
            <img onClick={()=> window.open(`https://twitter.com/ProtonPakistan`, '_blank')} src={Footicon4} alt="icon1" width="100%" height="100%" />
          </div>
        </div>


      </List>
    </div>
  );


  const list = (anchor) => (
    <div
      role="presentation"
      style={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: 110, padding: "0px 80px 0px 75px" }}
    >

      <div
        button
        onClick={() => handleClick(false, 1, '/About')}
        style={{
          color: "#000000",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >

        <div>
          <span id="listitemstyle" onMouseEnter={() => sethoverborder(1)} onMouseLeave={() => sethoverborder(0)} style={{ fontSize: "14px" }}>
            ABOUT AL-HAJ
            </span>
        </div>
        <Divider
          style={{
            width: "100%",
            height: 2,
            backgroundColor: activeMenu === 1 && "red" || hoverborder === 1 && "red",
          }}
        />
      </div>


      <div
        onClick={() => handleClick(false, 2, '/About-Proton')}
        button
        style={{
          color: "#000000",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <div>
          <span
            id="listitemstyle"
            style={{ fontSize: "14px" }}
            onMouseEnter={() => sethoverborder(2)} onMouseLeave={() => sethoverborder(0)}
          >
            PROTON BRAND
            </span>
        </div>
        <Divider
          style={{
            width: "100%",
            height: 2,
            backgroundColor: activeMenu === 2 && "red" || hoverborder === 2 && "red",
          }}
        />
      </div>


      <div
        onClick={() => handleClick(true, 3)}
        button
        style={{
          color: "#000000",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          cursor: "pointer",
        }}
      >
        <div>
          <a href="https://www.proton.com" target="_blank" id="listitemstyle" onMouseEnter={() => sethoverborder(3)} onMouseLeave={() => sethoverborder(0)} style={{ fontSize: "14px", outline: "none" }}>
            PROTON INTERNATIONAL
            </a>
        </div>
        <Divider
          style={{
            width: "100%",
            height: 2,
            backgroundColor: activeMenu === 3 && "red" || hoverborder === 3 && "red",
          }}
        />
      </div>


      <div
        onClick={() => handleClick(false, 4, '/Warranty')}

        button
        style={{
          color: "#000000",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          cursor: "pointer",
        }}
      >
        <div>
          <span id="listitemstyle" onMouseEnter={() => sethoverborder(4)} onMouseLeave={() => sethoverborder(0)} style={{ fontSize: "14px", }}>
            OUR WARRANTY
            </span>
        </div>
        <Divider
          style={{
            width: "100%",
            height: 2,
            backgroundColor: activeMenu === 4 && "red" || hoverborder === 4 && "red",
          }}
        />
      </div>


      <div
        onClick={() => {
          setActiveMenu(5);
          props.history.push("/");
          window.open(`${Server}/dealerInfo?city=karachiApollo`, '_blank')
        }}
        button
        style={{
          color: "#000000",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          cursor: "pointer",
        }}
      >
        <div>
          <span id="listitemstyle" onMouseEnter={() => sethoverborder(5)} onMouseLeave={() => sethoverborder(0)} style={{ fontSize: "14px" }}>
            DEALER NETWORK
            </span>
        </div>
        <Divider
          style={{
            width: "100%",
            height: 2,
            backgroundColor: activeMenu === 5 && "red" || hoverborder === 5 && "red" || location.pathname === "/dealerInfo",
          }}
        />
      </div>



      <div
        onClick={() => {
          setActiveMenu(6);
          window.open(`https://www.proton.com/en/corporate/press-release`, '_blank')
        }}
        button
        style={{
          color: "#000000",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          cursor: "pointer",
        }}
      >
        <div>
          <span id="listitemstyle" onMouseEnter={() => sethoverborder(6)} onMouseLeave={() => sethoverborder(0)} style={{ fontSize: "14px" }}>
            LATEST NEWS
            </span>
        </div>
        <Divider
          style={{
            width: "100%",
            height: 2,
            backgroundColor: activeMenu === 6 && "red" || hoverborder === 6 && "red",
          }}
        />
      </div>



      <div
         
          onClick={()=>{
            setActiveMenu(7);
            window.open(`${Server}/Contact`, '_blank')}
          } 

        button
        style={{
          color: "#000000",

          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          cursor: "pointer",
        }}
      >
        <div>
          <span id="listitemstyle" onMouseEnter={() => sethoverborder(7)} onMouseLeave={() => sethoverborder(0)} style={{ fontSize: "14px" }}>
            CONTACT US
            </span>
        </div>
        <Divider
          style={{
            width: "100%",
            height: 2,
            backgroundColor: activeMenu === 7 && "red" || hoverborder === 7 && "red" || location.pathname === "/Contact" && "red",
          }}
        />
      </div>
    </div>
  );


  return (
    <div className={classes.root}>
      {/* App Bar */}

      <AppBar
        fixed="top"
        className="appBar"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Toolbar>

          <div classes={classes.brand} style={{ marginTop: "10px", cursor: "pointer" }}>
            <img className="protonLogoAppbar" onClick={() => props.history.push('/')} src={Logo} alt="logo" height="40px" width="215px" />
          </div>


          <Typography variant="h6" className={classes.title}>

          </Typography>
          <div className="searchBarD" style={{ marginTop: "0",cursor:"pointer" }}>
            <Searchbar history={props.history} onEnterpress="" />
          </div>
          <div className="socialIconAppbar" style={{ display: "flex", width: "14%", marginRight: "1%" }}>
            <div style={{ borderRadius: 50, height: "20%", width: "20%", cursor: "pointer" }}>
              <img onClick={()=> window.open(`https://www.facebook.com/Protonpak/`, '_blank')} src={Footicon1} alt="icon1" width="100%" height="100%" />
            </div>
            <div
              style={{
                marginLeft: "0.5vw",
                borderRadius: 25,
                height: "20%",
                width: "20%",
                cursor: "pointer"
              }}
            >
              <img onClick={()=> window.open(`https://www.instagram.com/proton.pakistan`, '_blank')} src={Footicon2} alt="icon2" width="100%" height="100%" />
            </div>
            <div
              style={{
                marginLeft: "1vw",
                borderRadius: 25,
                height: "20%",
                width: "20%",
                cursor: "pointer"
              }}
            >
              <img onClick={()=> window.open(`https://www.youtube.com/channel/UCfx5WZ9_Sfrhv0uwqq-EXYw`, '_blank')} src={Footicon3} alt="icon3" width="100%" height="100%" />
            </div>
            <div
              style={{
                marginLeft: "1vw",

                borderRadius: 25,
                height: "20%",
                width: "20%",
                cursor: "pointer"
              }}
            >
              <img onClick={()=> window.open(`https://twitter.com/ProtonPakistan`, '_blank')} src={Footicon4} alt="icon1" width="100%" height="100%" />
            </div>
          </div>

          <IconButton edge="start" className={classes.menuButton}>
            {(!drawerOpen && (
              <MenuIcon
                className="appMenuIcon"
                onClick={toggleDrawer("right", true)}
                style={{ color: "#c0c4ca", cursor: "pointer" }}
              />
            )) || (
                <CloseIcon
                  style={{ color: "#c0c4ca", cursor: "pointer" }}
                />
              )}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}

      <React.Fragment key={"top"}>
        <SwipeableDrawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {/* {list('right')} */}

          {/* mobile menu */}
          <div className="MobileNavbar">
            {["MENU"].map((anchor) => (
              <div>
                {Mobilelist(anchor)}
              </div>

            ))}
          </div>

          {/* mobile menu end */}

          <div className="DesktopNavbar">

            <div style={{ width: "100%" }}>{list("right")}</div>

            <Grid
              container
              style={{
                width: "95%",
                marginLeft: "5%",
                marginBottom: "10%"
              }}
            >

              <h4
                className="fontstyle"
                style={{
                  fontWeight: "bold",
                  width: "100%",
                  padding: "0% 0% 2% 2%",
                  fontSize: "18px",
                  letterSpacing: "-1px"
                }}
              >
                LOCAL LINE - UP
                    </h4>



              <Grid xs={12} sm={6} style={{ paddingLeft: "28%", paddingBottom: "2%" }} >
                {/* <div className="fontstyle2">
                  SAGA
                  </div> */}
                <div
                  style={{ display: "flex",width:"65%",justifyContent:"center" }}
                >
                  <div
                    className="fontstyle2"
                    style={{ fontSize:"17px"}}
                  >
                    SAGA

                  </div>


                  {/* <div
                    className="fontstyle "
                    style={{ fontStyle: "italic", display: "flex", justifyContent: "flex-end", width: "57%",fontWeight:"bold" }}
                  >
                    <div>
                      Compact Sedan
                      </div>
                  </div> */}
                </div>

                <div className="internatinalCarsOpacity" style={{ marginTop: "25px" }}>
                  <img
                    onClick={() => handleClick(false, null, "/proton-saga")}
                    src={Saga}
                    alt="testing"
                    width="62%"
                    style={{ cursor: "pointer" }}
                  />
                </div>

        

              </Grid>
              <Grid xs={12} sm={6} style={{ paddingLeft: "2%", paddingBottom: "2%" }}>
            

                <div
                  style={{display: "flex",width:"35%",justifyContent:"center" }}
                >
                  <div
                    className="fontstyle2"
                    style={{ fontSize:"17px"}}
                  >
                    X70
                  </div>


                  {/* <div
                    className="fontstyle "
                    style={{ fontStyle: "italic",fontWeight:"bold", display: "flex", justifyContent: "flex-end", width: "27%" }}
                  >
                    <div>
                      SUV
                      </div>
                  </div> */}
                </div>
                <div className="internatinalCarsOpacity">
                  <img
                    onClick={() => handleClick(false, null, "/x70")}

                    src={X70}
                    alt="testing"
                    width="33%"
                    style={{ cursor: "pointer" }}
                  />
                </div>

                {/* <div
                  className="fontstyle"
                  style={{
                    fontStyle: "italic",
                  }}
                >
                  SUV
                  </div> */}

              </Grid>
              <Divider
                // className="divider"
                style={{
                  width: "95%",
                  height: 2,
                  backgroundColor: "rgba(0,0,0,0.12)",
                }}
              />
              <h4
                className="fontstyle "
                style={{
                  fontWeight: "bold",
                  width: "100%",
                  fontSize: "18px",
                  padding: "2% 0% 3% 2%",
                  letterSpacing: "-1px"
                }}
              >
                INTERNATIONAL LINE - UP
                    </h4>
              <Grid item xs={12} sm={3}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "31px"
                  }}
                >
                  <div
                    style={{display: "flex",width:"65%",justifyContent:"center" }}
                  >
                    <div
                      className="fontstyle2"
                    >
                      EXORA
                  </div>

                    {/* <div
                      className="fontstyle "
                      style={{ fontStyle: "italic", display: "flex", justifyContent: "flex-end", width: "53%" }}
                    >
                      <div  style={{ fontWeight: "bold" }}>
                        MVP
                      </div>

                    </div> */}
                  </div>
                  <div className="internatinalCarsOpacity" style={{ marginTop: 15, width: "100%" }}>
                    <img
                      src={Exora}
                      alt="testing"
                      height="75%"
                      width="75%"
                      style={{ cursor: "pointer" }}
                      onClick={() => window.open(`https://www.proton.com/en/find-a-car/exora`, '_blank')}
                    />
                  </div>

                </div>
              </Grid>
              <Grid item xs={12} sm={3}>
                <div

                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "31px"
                  }}
                >

                  <div
                    style={{ display: "flex",width:"65%",justifyContent:"center" }}
                  >
                    <div
                      className="fontstyle2"
                    >
                      PERDANA
                  </div>


                    {/* <div
                      className="fontstyle "
                      style={{ fontStyle: "italic", display: "flex", justifyContent: "flex-end", width: "50%" }}
                    >
                      <div  style={{ fontWeight: "bold" }}>
                        Luxury Sedan
                      </div>

                    </div> */}
                  </div>
                  <div className="perdana internatinalCarsOpacity" style={{ marginTop: 15, width: "100%" }}>
                    <img
                      src={Perdana}
                      alt="testing"
                      height="75%"
                      width="75%"
                      style={{ cursor: "pointer" }}
                      onClick={() => window.open(`https://www.proton.com/en/find-a-car/perdana`, '_blank')}
                    />
                  </div>

                </div>
              </Grid>
              <Grid item xs={12} sm={3}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "31px"
                  }}
                >
                  <div
                    style={{ display: "flex",width:"65%",justifyContent:"center" }}
                  >
                    <div
                      className="fontstyle2"
                     
                    >
                      PERSONA
                  </div>


                    {/* <div
                      className="fontstyle "
                      style={{ fontStyle: "italic", display: "flex", justifyContent: "flex-end", width: "45%" }}
                    >
                      <div  style={{ fontWeight: "bold" }}>
                        Sedan
                      </div>

                    </div> */}
                  </div>
                  <div
                    className="persona internatinalCarsOpacity"
                    style={{
                      marginTop: 15,
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <img
                      src={Persona}
                      alt="testing"
                      height="75%"
                      width="75%"
                      style={{ cursor: "pointer" }}
                      onClick={() => window.open(`https://www.proton.com/en/find-a-car/persona`, '_blank')}
                    />
                  </div>

                </div>

              </Grid>
              <Grid item xs={12} sm={3}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "31px"
                  }}
                >
                  <div
                    style={{ display: "flex",width:"65%",justifyContent:"center" }}
                  >
                    <div
                      className="fontstyle2"
                    
                    >
                      IRIZ
                  </div>


                    {/* <div
                      className="fontstyle "
                      style={{ fontStyle: "italic", display: "flex", justifyContent: "flex-end", width: "57%" }}
                    >
                      <div  style={{ fontWeight: "bold" }}>
                        Hatch back
                      </div>
                    </div> */}
                  </div>

                  <div
                    className="internatinalCarsOpacity"
                    style={{ marginTop: 15 }}>
                    <img
                      src={iriz}
                      alt="testing"
                      height="75%"
                      width="75%"
                      style={{ cursor: "pointer" }}
                      onClick={() => window.open(`https://www.proton.com/en/find-a-car/iriz`, '_blank')}
                    />
                  </div>

                </div>
              </Grid>
            </Grid>

          </div>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
