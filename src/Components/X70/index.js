import React from "react";
import { Server } from "../Services"

import Performance1 from "./performance1";
import Performance2 from "./performance2";
import Performance3 from "./performance3";


import ExteriorGrid from "./exteriorGrid";
import Exterior2 from "./exterior2";
import Exterior3 from "./exterior3";

import SafetyMain from "../X70/safetyMain";
import Safety1 from "../X70/safety1";
import Safety2 from "../X70/safety2";
import Safety4 from "../X70/safety4";

import DesignGrid from "../X70/designGrid";
import InteriorGrid from "../X70/interiorGrid";

import RefinedConnectivity from "../X70/refinedConnectivity";
import RefinedConnectivity2 from "../X70/refinedConnectivity2";

import TakeAPeek from "./takeAPeek";
import X70Modal from "./X70Modal";

import Grid from "@material-ui/core/Grid";
import { Navbar } from "react-bootstrap";

import Slickyslider from "../slickySlider";
import Slickyslider2 from "./SlickySlider";

import CarousalSlider from "../CarousalSlider";
import CarousalSliderX70 from "../CarousalSlider/x70CarouselSlider"


import x70intro from "../../assets/Video/x70intro.mp4";
import ScrollTop from "../../assets/images/scrollTop.png";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Fade from 'react-reveal/Fade';
import bookClick from "../../assets/images/bookClickX70.png";
import bookWork from "../../assets/images/bookworkX70.png";
import pdfclick from "../../assets/images/pdfclickX70.png";
import pdfwork from "../../assets/images/pdfworkX70.png";
import { connect } from "react-redux";
import { AppActions } from "../../store/actions"
import "./X70.css";

// When the user scrolls down 20px from the top of the document, show the button
class ProtonSaga extends React.Component {
  constructor() {
    super();
    this.videoDiv = React.createRef();
    this.designSliderDiv = React.createRef();

    this.performanceDiv = React.createRef();
    this.performance2 = React.createRef();
    this.performance3 = React.createRef();

    this.exteriorDiv = React.createRef();
    this.exteriorDiv2 = React.createRef();
    this.exteriorDiv3 = React.createRef();



    this.interiorDiv = React.createRef();

    this.slickyslider11 = React.createRef();
    this.refinedConnectivity1 = React.createRef();
    this.refinedConnectivity2 = React.createRef();
    this.safety = React.createRef();
    this.safety1 = React.createRef();
    this.safety2 = React.createRef();
    this.safety3 = React.createRef();
    this.safety4 = React.createRef();


    this.takeApeekDiv = React.createRef();

    this.modal = React.createRef();

    this.state = {

      expand1Icon: false,
      bookingButtonMobile: false,
      pdfMobile: false,
      scrolled: false,
      currentActiveDiv: 1,

      scrollToVideoDiv: false,
      scrollToDesign: false,
      scrollToPerformance: false,
      scrollToExterior: false,
      scrollToExterior2: false,
      scrollToExterior3: false,

      scrollToInterior: false,

      scrollToConnectivity: false,

      scrollToslickyslider1: false,

      scrollTosafetypriority: false,
      scrollTosafetypriority1: false,
      scrollTosafetypriority2: false,
      scrollTosafetypriority3: false,
      scrollTosafetypriority4: false,



      scrollToTakeapeek: false,

      scrollToModal: false,


      expandPerformance: false,
      expandSafety: false,
      expandRefined: false,

      down: false,
      up: false,
      eBook: true,

      scrollToTop: false,
    };
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.scrollToVideoDiv) {
      if (this.state.up) {
        this.scrollToMyRefUp(this.videoDiv);
      } else {
        this.scrollToMyRefDown(this.videoDiv);
      }
    }

    if (this.state.scrollToDesign) {
      if (this.state.up) {
        this.scrollToMyRefUp(this.designSliderDiv);
      } else {
        this.scrollToMyRefDown(this.designSliderDiv);
      }
    }
    else if (this.state.scrollToPerformance) {
      if (this.state.up) {
        this.scrollToMyRefUp(this.performanceDiv);
      } else {
        this.scrollToMyRefDown(this.performanceDiv);
      }
    }
    else if (this.state.scrollToExterior) {
      if (this.state.up) {
        this.scrollToMyRefUp(this.exteriorDiv);
      } else {
        this.scrollToMyRefDown(this.exteriorDiv);
      }
    }
    else if (this.state.scrollToExterior2) {
      if (this.state.up) {
        this.scrollToMyRefUp(this.exteriorDiv2);
      } else {
        this.scrollToMyRefDown(this.exteriorDiv2);
      }
    }
    else if (this.state.scrollToExterior3) {
      if (this.state.up) {
        this.scrollToMyRefUp(this.exteriorDiv3);
      } else {
        this.scrollToMyRefDown(this.exteriorDiv3);
      }
    }
    else if (this.state.scrollToInterior) {
      if (this.state.up) {
        this.scrollToMyRefUp(this.interiorDiv);
      } else {
        this.scrollToMyRefDown(this.interiorDiv);
      }
    }
    else if (this.state.scrollToslickyslider1) {
      if (this.state.up) {
        this.scrollToMyRefUp(this.slickyslider11);
      } else {
        this.scrollToMyRefDown(this.slickyslider11);
      }
    }
    else if (this.state.scrollToConnectivity) {
      if (this.state.up) {
        this.scrollToMyRefUp(this.refinedConnectivity1);
      } else {
        this.scrollToMyRefDown(this.refinedConnectivity1);
      }
    }
    else if (this.state.scrollTosafetypriority) {
      if (this.state.up) {
        this.scrollToMyRefUp(this.safety);
      } else {
        this.scrollToMyRefDown(this.safety);
      }
    }

    else if (this.state.scrollTosafetypriority1) {
      if (this.state.up) {
        this.scrollToMyRefUp(this.safety1);
      } else {
        this.scrollToMyRefDown(this.safety1);
      }
    }


    else if (this.state.scrollTosafetypriority2) {
      if (this.state.up) {
        this.scrollToMyRefUp(this.safety2);
      } else {
        this.scrollToMyRefDown(this.safety2);
      }
    }


    else if (this.state.scrollTosafetypriority3) {
      if (this.state.up) {
        this.scrollToMyRefUp(this.safety3);
      } else {
        this.scrollToMyRefDown(this.safety3);
      }
    }


    else if (this.state.scrollTosafetypriority4) {
      if (this.state.up) {
        this.scrollToMyRefUp(this.safety4);
      } else {
        this.scrollToMyRefDown(this.safety4);
      }
    }


    else if (this.state.scrollToTakeapeek) {
      if (this.state.up) {
        this.scrollToMyRefUp(this.takeApeekDiv);
      } else {
        this.scrollToMyRefDown(this.takeApeekDiv);
      }
    }


    else if (this.state.scrollToModal) {
      if (this.state.up) {
        this.scrollToMyRefUp(this.modal);
      } else {
        this.scrollToMyRefDown(this.modal);
      }
    }
  }



  componentDidMount() {
    if (this.props.searchglobalvalue !== undefined) {
        var c = this.props.searchglobalvalue;
        if (c === "X70 ADAS") {
            var gg = document.getElementById("safety3X70Main");
            gg.scrollIntoView();
            this.props.searchGlobal("")
        }
        else if (c === "X70 CC") {
            var gg = document.getElementById("perfX70Main");
            gg.scrollIntoView();
            this.props.searchGlobal("")
        }
        else if (c === "X70 Features") {
            var gg = document.getElementById("slider1X70Main");
            gg.scrollIntoView();
            this.props.searchGlobal("")
        }
        else if (c === "X70 Interior") {
            var gg = document.getElementById("takeApeekX70Main");
            gg.scrollIntoView();
            this.props.searchGlobal("")
        }
        else if (c === "X70 Price") {
            var gg = document.getElementById("ModelX70Main");
            gg.scrollIntoView();
            this.props.searchGlobal("")
        }
        else if (c === "X70 Safety") {
          var gg = document.getElementById("safety1X70Main");
          gg.scrollIntoView();
          this.props.searchGlobal("")
      }
       
    }
}

componentWillReceiveProps(nextProps) {
    console.log(nextProps, "component will reciewve props")
    if (nextProps && nextProps.searchglobalvalue) {
            var c = nextProps.searchglobalvalue;
            if (c === "X70 ADAS") {
              var gg = document.getElementById("safety3X70Main");
              gg.scrollIntoView();
              this.props.searchGlobal("")
          }
          else if (c === "X70 CC") {
              var gg = document.getElementById("perfX70Main");
              gg.scrollIntoView();
              this.props.searchGlobal("")
          }
          else if (c === "X70 Features") {
              var gg = document.getElementById("slider1X70Main");
              gg.scrollIntoView();
              this.props.searchGlobal("")
          }
          else if (c === "X70 Interior") {
              var gg = document.getElementById("takeApeekX70Main");
              gg.scrollIntoView();
              this.props.searchGlobal("")
          }
          else if (c === "X70 Price") {
              var gg = document.getElementById("ModelX70Main");
              gg.scrollIntoView();
              this.props.searchGlobal("")
          }
          else if (c === "X70 Safety") {
            var gg = document.getElementById("safety1X70Main");
            gg.scrollIntoView();
            this.props.searchGlobal("")
        }
    }
}






  scrollToMyRefDown = (to) => window.scrollTo(0, to.current.offsetTop - 40);
  scrollToMyRefUp = (to) => window.scrollTo(0, to.current.offsetTop);

  scrollFunction = () => {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      this.setState({ scrollToTop: true });
    } else {
      this.setState({ scrollToTop: false });
    }
  };
  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    window.scrollTo({top: 0, behavior: "smooth"})
  }
  playPause() {
    var myVideo = document.getElementById("video2");
    if (myVideo.paused)
      myVideo.play();
    else
      myVideo.pause();
  }

  scrollDivX70(value) {
    var e = document.getElementById(value);
    e.scrollIntoView({behavior:"smooth"});
  }
  render() {

    window.onscroll = this.scrollFunction;
    window.onkeydown = function (e) {
      if (e.keyCode === 40) {
        if (this.state.currentActiveDiv === 1) {
          this.setState({
            currentActiveDiv: 2,
            scrollToDesign: true,
            scrollToVideoDiv: false,
            down: true,
            up: false,
          }, () => {
            this.setState({ scrollToDesign: false })
          });
        }

        else if (this.state.currentActiveDiv === 2) {
          this.setState({
            currentActiveDiv: 3,
            scrollToPerformance: true,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: true,
            up: false,
          }, () => {
            this.setState({ scrollToPerformance: false })
          });

        }

        else if (this.state.currentActiveDiv === 3) {
          this.setState({
            currentActiveDiv: 4,
            scrollToExterior: true,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: true,
            up: false,
          }, () => {
            this.setState({ scrollToExterior: false })
          });
        }

        else if (this.state.currentActiveDiv === 4) {
          this.setState({
            currentActiveDiv: 5,
            scrollToExterior2: true,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: true,
            up: false,
          }, () => {
            this.setState({ scrollToExterior2: false })
          });
        } else if (this.state.currentActiveDiv === 5) {
          this.setState({
            currentActiveDiv: 6,
            scrollToExterior3: true,
            scrollToExterior2: false,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: true,
            up: false,
          }, () => {
            this.setState({ scrollToExterior3: false })
          });
        }
        else if (this.state.currentActiveDiv === 6) {
          this.setState({
            currentActiveDiv: 7,
            scrollToInterior: true,
            scrollToExterior3: false,
            scrollToExterior2: false,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: true,
            up: false,
          }, () => {
            this.setState({ scrollToInterior: false })
          });
        }

        else if (this.state.currentActiveDiv === 7) {
          this.setState({
            currentActiveDiv: 8,
            scrollToslickyslider1: true,
            scrollToInterior: false,
            scrollToExterior3: false,
            scrollToExterior2: false,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: true,
            up: false,
          }, () => {
            this.setState({ scrollToslickyslider1: false })
          });
        }
        else if (this.state.currentActiveDiv === 8) {
          this.setState({
            currentActiveDiv: 9,
            scrollToConnectivity: true,
            scrollToslickyslider1: false,
            scrollToInterior: false,
            scrollToExterior3: false,
            scrollToExterior2: false,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: true,
            up: false,
          }, () => {
            this.setState({ scrollToConnectivity: false })
          });
        }
        else if (this.state.currentActiveDiv === 9) {
          this.setState({
            currentActiveDiv: 10,
            scrollTosafetypriority: true,
            scrollToConnectivity: false,
            scrollToslickyslider1: false,
            scrollToInterior: false,
            scrollToExterior3: false,
            scrollToExterior2: false,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: true,
            up: false,
          }, () => {
            this.setState({ scrollTosafetypriority: false })
          });
        }
        else if (this.state.currentActiveDiv === 10) {
          this.setState({
            currentActiveDiv: 11,
            scrollTosafetypriority1: true,
            scrollTosafetypriority: false,
            scrollToConnectivity: false,
            scrollToslickyslider1: false,
            scrollToInterior: false,
            scrollToExterior3: false,
            scrollToExterior2: false,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: true,
            up: false,
          }, () => {
            this.setState({ scrollTosafetypriority1: false })
          });
        }



        else if (this.state.currentActiveDiv === 11) {
          this.setState({
            currentActiveDiv: 12,
            scrollTosafetypriority2: true,
            scrollTosafetypriority1: false,
            scrollTosafetypriority: false,
            scrollToConnectivity: false,
            scrollToslickyslider1: false,
            scrollToInterior: false,
            scrollToExterior3: false,
            scrollToExterior2: false,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: true,
            up: false,
          }, () => {
            this.setState({ scrollTosafetypriority2: false })
          });
        }




        else if (this.state.currentActiveDiv === 12) {
          this.setState({
            currentActiveDiv: 13,
            scrollTosafetypriority3: true,
            scrollTosafetypriority2: false,
            scrollTosafetypriority1: false,
            scrollTosafetypriority: false,
            scrollToConnectivity: false,
            scrollToslickyslider1: false,
            scrollToInterior: false,
            scrollToExterior3: false,
            scrollToExterior2: false,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: true,
            up: false,
          }, () => {
            this.setState({ scrollTosafetypriority3: false })
          });
        }



        else if (this.state.currentActiveDiv === 13) {
          this.setState({
            currentActiveDiv: 14,
            scrollTosafetypriority4: true,
            scrollTosafetypriority3: false,
            scrollTosafetypriority2: false,
            scrollTosafetypriority1: false,
            scrollTosafetypriority: false,
            scrollToConnectivity: false,
            scrollToslickyslider1: false,
            scrollToInterior: false,
            scrollToExterior3: false,
            scrollToExterior2: false,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: true,
            up: false,
          }, () => {
            this.setState({ scrollTosafetypriority4: false })
          });
        }



        else if (this.state.currentActiveDiv === 14) {
          this.setState({
            currentActiveDiv: 15,
            scrollToTakeapeek: true,
            scrollTosafetypriority4: false,
            scrollTosafetypriority3: false,
            scrollTosafetypriority2: false,
            scrollTosafetypriority1: false,
            scrollTosafetypriority: false,
            scrollToConnectivity: false,
            scrollToslickyslider1: false,
            scrollToInterior: false,
            scrollToExterior3: false,
            scrollToExterior2: false,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: true,
            up: false,
          }, () => {
            this.setState({ scrollToTakeapeek: false })
          });
        }
        else if (this.state.currentActiveDiv === 15) {
          this.setState({
            currentActiveDiv: 16,
            scrollToModal: true,
            scrollToTakeapeek: false,
            scrollTosafetypriority4: false,
            scrollTosafetypriority3: false,
            scrollTosafetypriority2: false,
            scrollTosafetypriority1: false,
            scrollTosafetypriority: false,
            scrollToConnectivity: false,
            scrollToslickyslider1: false,
            scrollToInterior: false,
            scrollToExterior3: false,
            scrollToExterior2: false,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: true,
            up: false,
          }, () => {
            this.setState({ scrollToModal: false })
          });
        }
        else {
          this.setState({
            scrollToModal: false,
            scrollToTakeapeek: false,
            scrollTosafetypriority4: false,
            scrollTosafetypriority3: false,
            scrollTosafetypriority2: false,
            scrollTosafetypriority1: false,
            scrollTosafetypriority: false,
            scrollToConnectivity: false,
            scrollToslickyslider1: false,
            scrollToInterior: false,
            scrollToExterior3: false,
            scrollToExterior2: false,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: true,
            up: false,
          });
        }
      }








      else if (e.keyCode === 38) {
        if (this.state.currentActiveDiv === 16) {
          this.setState({
            currentActiveDiv: 15,
            scrollToModal: false,
            scrollToTakeapeek: true,
            scrollTosafetypriority4: false,
            scrollTosafetypriority3: false,
            scrollTosafetypriority2: false,
            scrollTosafetypriority1: false,
            scrollTosafetypriority: false,
            scrollToConnectivity: false,
            scrollToslickyslider1: false,
            scrollToInterior: false,
            scrollToExterior3: false,
            scrollToExterior2: false,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: false,
            up: true,
          }, () => {
            this.setState({ scrollToTakeapeek: false })
          });
        }



        else if (this.state.currentActiveDiv === 15) {
          this.setState({
            currentActiveDiv: 14,
            scrollToTakeapeek: false,
            scrollTosafetypriority4: true,
            scrollTosafetypriority3: false,
            scrollTosafetypriority2: false,
            scrollTosafetypriority1: false,
            scrollTosafetypriority: false,
            scrollToConnectivity: false,
            scrollToslickyslider1: false,
            scrollToInterior: false,
            scrollToExterior3: false,
            scrollToExterior2: false,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: false,
            up: true,
          }, () => {
            this.setState({ scrollTosafetypriority4: false })
          });
        }




        else if (this.state.currentActiveDiv === 14) {
          this.setState({
            currentActiveDiv: 13,
            scrollTosafetypriority4: false,
            scrollTosafetypriority3: true,
            scrollTosafetypriority2: false,
            scrollTosafetypriority1: false,
            scrollTosafetypriority: false,
            scrollToConnectivity: false,
            scrollToslickyslider1: false,
            scrollToInterior: false,
            scrollToExterior3: false,
            scrollToExterior2: false,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: false,
            up: true,
          }, () => {
            this.setState({ scrollTosafetypriority3: false })
          });
        }





        else if (this.state.currentActiveDiv === 13) {
          this.setState({
            currentActiveDiv: 12,
            scrollTosafetypriority3: false,
            scrollTosafetypriority2: true,
            scrollTosafetypriority1: false,
            scrollTosafetypriority: false,
            scrollToConnectivity: false,
            scrollToslickyslider1: false,
            scrollToInterior: false,
            scrollToExterior3: false,
            scrollToExterior2: false,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: false,
            up: true,
          }, () => {
            this.setState({ scrollTosafetypriority2: false })
          });
        }





        else if (this.state.currentActiveDiv === 12) {
          this.setState({
            currentActiveDiv: 11,
            scrollTosafetypriority2: false,
            scrollTosafetypriority1: true,
            scrollTosafetypriority: false,
            scrollToConnectivity: false,
            scrollToslickyslider1: false,
            scrollToInterior: false,
            scrollToExterior3: false,
            scrollToExterior2: false,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: false,
            up: true,
          }, () => {
            this.setState({ scrollTosafetypriority1: false })
          });
        }
        else if (this.state.currentActiveDiv === 11) {
          this.setState({
            currentActiveDiv: 10,
            scrollTosafetypriority1: false,
            scrollTosafetypriority: true,
            scrollToConnectivity: false,
            scrollToslickyslider1: false,
            scrollToInterior: false,
            scrollToExterior3: false,
            scrollToExterior2: false,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: false,
            up: true,
          }, () => {
            this.setState({ scrollTosafetypriority: false })
          });
        }
        else if (this.state.currentActiveDiv === 10) {
          this.setState({
            currentActiveDiv: 9,
            scrollTosafetypriority: false,
            scrollToConnectivity: true,
            scrollToslickyslider1: false,
            scrollToInterior: false,
            scrollToExterior3: false,
            scrollToExterior2: false,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: false,
            up: true,
          }, () => {
            this.setState({ scrollToConnectivity: false })
          });
        }

        else if (this.state.currentActiveDiv === 9) {
          this.setState({
            currentActiveDiv: 8,
            scrollToConnectivity: false,
            scrollToslickyslider1: true,
            scrollToInterior: false,
            scrollToExterior3: false,
            scrollToExterior2: false,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: false,
            up: true,
          }, () => {
            this.setState({ scrollToslickyslider1: false })
          });
        }

        else if (this.state.currentActiveDiv === 8) {
          this.setState({
            currentActiveDiv: 7,
            scrollToslickyslider1: false,
            scrollToInterior: true,
            scrollToExterior3: false,
            scrollToExterior2: false,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: false,
            up: true,
          }, () => {
            this.setState({ scrollToInterior: false })
          });
        } else if (this.state.currentActiveDiv === 7) {
          this.setState({
            currentActiveDiv: 6,
            scrollToInterior: false,
            scrollToExterior3: true,
            scrollToExterior2: false,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: false,
            up: true,
          }, () => {
            this.setState({ scrollToExterior3: false })
          });
        } else if (this.state.currentActiveDiv === 6) {
          this.setState({
            currentActiveDiv: 5,
            scrollToExterior3: false,
            scrollToExterior2: true,
            scrollToExterior: false,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: false,
            up: true,
          }, () => {
            this.setState({ scrollToExterior2: false })
          });
        }

        else if (this.state.currentActiveDiv === 5) {
          this.setState({
            currentActiveDiv: 4,
            scrollToExterior2: false,
            scrollToExterior: true,
            scrollToPerformance: false,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: false,
            up: true,
          }, () => {
            this.setState({ scrollToExterior: false })
          });
        } else if (this.state.currentActiveDiv === 4) {
          this.setState({
            currentActiveDiv: 3,
            scrollToExterior: false,
            scrollToPerformance: true,
            scrollToDesign: false,
            scrollToVideoDiv: false,
            down: false,
            up: true,
          }, () => {
            this.setState({ scrollToPerformance: false })
          });
        }

        else if (this.state.currentActiveDiv === 3) {
          this.setState({
            currentActiveDiv: 2,
            scrollToPerformance: false,
            scrollToDesign: true,
            scrollToVideoDiv: false,
            down: false,
            up: true,
          }, () => {
            this.setState({ scrollToDesign: false })
          });
        }
        else if (this.state.currentActiveDiv === 2) {
          this.setState({
            currentActiveDiv: 1,
            scrollToDesign: false,
            scrollToVideoDiv: true,
            down: false,
            up: true,
          }, () => {
            this.setState({ scrollToVideoDiv: false })
          });
        }
        else {
          this.setState({
            scrollToDesign: false,
            scrollToPerformance: false,
            scrollToExterior: false,
            scrollToInterior: false,
            scrollToslickyslider1: false,
            scrollTosafetypriority: false,
            scrollToReveresecamera: false,
            scrollToTakeapeek: false,
          }, () => {
            this.setState({ scrollToModal: false })
          });
        }
      }
    }.bind(this);
    return (
      <div>
        <button
          style={{ display: this.state.scrollToTop ? "block" : "none", background: "rgba(0,0,0,0)" }}
          onClick={this.topFunction.bind(this)}
          id="myBtn"
        >

          <img src={ScrollTop} alt="scrollTop " height="40px" width="40px" />
        </button>
        {!this.state.bookingButtonMobile &&
          <button
            style={{ display: "none", background: "rgba(0,0,0,0)" }}
            onClick={() => this.setState({ bookingButtonMobile: true })}
            id="bookingButtonMobilex70"
          >
            <img src={bookClick} alt="bookingButton" height="30px" width="60px" />
          </button>
        }

        {this.state.bookingButtonMobile &&
          <Fade right>
            <button
              style={{ background: "rgba(0,0,0,0)" }}
              onClick={() => this.setState({ bookingButtonMobile: false })}
              id="bookingButtonMobilex70"
            >
              <img onClick={() => window.open(`${Server}/X70-Booking`, '_blank')} src={bookWork} alt="bookingButton" height="20px" width="100px" />
            </button>
          </Fade>
        }
        {!this.state.pdfMobile &&
          <button
            style={{ display: "none", background: "rgba(0,0,0,0)" }}
            onClick={() => this.setState({ pdfMobile: true })}
            id="pdfButtonMobilex70"
          >
            <img src={pdfclick} alt="bookingButton" height="30px" width="60px" />
          </button>
        }

        {this.state.pdfMobile &&
          <Fade right>
            <button
              style={{ background: "rgba(0,0,0,0)" }}
              onClick={() => this.setState({ pdfMobile: false })}
              id="pdfButtonMobilex70"
            >
           
              <img onClick={() => window.open(`https://drive.google.com/file/d/1bTdwdbgPVwIegcbbIbeEZbkYLefnf8F2/view?usp=sharing`)} src={pdfwork} alt="bookingButton" height="20px" width="100px" />
            </button>
          </Fade>
        }

    

        <Navbar className="mobileStickyMenu" fixed="top" style={{ width: "111%", margin: "14% 0% 0% -18px", display: "none" }}>
          <ExpansionPanel expanded={this.state.expand1Icon} style={{ boxShadow: "none", backgroundColor: "#0c67c1d1", width: "100%" }} onClick={() => { if (this.state.expand1Icon === true) { this.setState({ expand1Icon: false }) } else { this.setState({ expand1Icon: true }) } }} >
            <ExpansionPanelSummary
              expandIcon={this.state.expand1Icon ? <RemoveIcon style={{ fontSize: 15, color: this.state.expand2Icon ? "#000000" : "", color: "#ffffff", width: "22px", marginRight: "-53px" }} /> : <AddIcon style={{ fontSize: 15, color: "#ffffff", width: "22px", marginRight: "18px" }} />}

              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <ListItemText><span style={{ fontWeight: "bold", fontSize: "13px", color: "#ffffff", paddingLeft: "16px" }}>FEATURES</span></ListItemText>
            </ExpansionPanelSummary>

            <List >
              <ListItem
                button
                onClick={this.scrollDivX70.bind(this, "designX70Main")}
                style={{
                  height: 33,
                  cursor: "pointer",
                  fontSize: "10px",
                }}
              >
                <ListItemText ><span className="fontstyle2" style={{fontSize: "11px", paddingLeft: "16px", color: "#ffffff" }}>DESIGN</span></ListItemText>


                <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "24px", height: '16px', width: "16px", color: "#ffffff" }} /></ListItemIcon>
              </ListItem>

            </List>

            <List >
              <ListItem
                button
                onClick={this.scrollDivX70.bind(this, "perfX70Main")}
                style={{
                  height: 33,
                  cursor: "pointer",
                  fontSize: "11px",
                }}
              >
                <ListItemText ><span className="fontstyle2" style={{fontSize: "11px", paddingLeft: "16px", color: "#ffffff" }}>PERFORMANCE</span></ListItemText>

                <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "24px", height: '16px', width: "16px", color: "#ffffff" }} /></ListItemIcon>
              </ListItem>

            </List>

            <List >
              <ListItem
                button
                onClick={this.scrollDivX70.bind(this, "extX70Main")}
                style={{
                  height: 33,
                  cursor: "pointer",
                  fontSize: "11px",
                }}
              >
                <ListItemText ><span className="fontstyle2" style={{fontSize: "11px", paddingLeft: "16px", color: "#ffffff" }}>EXTERIOR</span></ListItemText>

                <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "24px", height: '16px', width: "16px", color: "#ffffff" }} /></ListItemIcon>
              </ListItem>

            </List>

            <List >
              <ListItem
                button
                onClick={this.scrollDivX70.bind(this, "intX70Main")}
                style={{
                  height: 33,
                  cursor: "pointer",
                  fontSize: "11px",
                }}
              >
                <ListItemText ><span className="fontstyle2" style={{fontSize: "11px", paddingLeft: "16px", color: "#ffffff" }}>FEATURES</span></ListItemText>
                <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "24px", height: '16px', width: "16px", color: "#ffffff" }} /></ListItemIcon>
              </ListItem>

            </List>

            <List >
              <ListItem
                button
                onClick={this.scrollDivX70.bind(this, "rconnect1X70Main")}
                style={{
                  height: 33,
                  cursor: "pointer",
                  fontSize: "11px",
                }}
              >
                <ListItemText ><span className="fontstyle2" style={{fontSize: "11px", paddingLeft: "16px", color: "#ffffff" }}>CONNECTIVITY</span></ListItemText>
                <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "24px", height: '16px', width: "16px", color: "#ffffff" }} /></ListItemIcon>
              </ListItem>

            </List>


            <List >
              <ListItem
                button
                onClick={this.scrollDivX70.bind(this, "safety1X70Main")}
                style={{
                  height: 33,
                  cursor: "pointer",
                  fontSize: "11px",
                }}
              >
                <ListItemText ><span  className="fontstyle2" style={{fontSize: "11px", paddingLeft: "16px", color: "#ffffff" }}>SAFETY</span></ListItemText>
                <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "24px", height: '16px', width: "16px", color: "#ffffff" }} /></ListItemIcon>
              </ListItem>

            </List>


            <List >
              <ListItem
                button
                onClick={this.scrollDivX70.bind(this, "safety3X70Main")}
                style={{
                  height: 33,
                  cursor: "pointer",
                  fontSize: "11px",
                }}
              >
                <ListItemText><span  className="fontstyle2" style={{fontSize: "11px", paddingLeft: "16px", color: "#ffffff" }}>ADAS</span></ListItemText>
                <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "24px", height: '16px', width: "16px", color: "#ffffff" }} /></ListItemIcon>
              </ListItem>

            </List>


            <List >
              <ListItem
                button
                onClick={this.scrollDivX70.bind(this, "takeApeekX70Main")}
                style={{
                  height: 33,
                  cursor: "pointer",
                  fontSize: "11px",
                }}
              >
                <ListItemText ><span  className="fontstyle2"  style={{fontSize: "11px", paddingLeft: "16px", color: "#ffffff" }}>INTERIOR</span></ListItemText>
                <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "24px", height: '16px', width: "16px", color: "#ffffff" }} /></ListItemIcon>
              </ListItem>

            </List>

            <List >
              <ListItem
                button
                onClick={this.scrollDivX70.bind(this, "ModelX70Main")}
                style={{
                  height: 33,
                  cursor: "pointer",
                  fontSize: "11px",
                  marginBottom: "20px"
                }}
              >
                <ListItemText ><span  className="fontstyle2" style={{fontSize: "11px", paddingLeft: "16px", color: "#ffffff" }}>CUSTOMIZE</span></ListItemText>
                <ListItemIcon><ArrowForwardIosIcon style={{ marginLeft: "24px", height: '16px', width: "16px", color: "#ffffff" }} /></ListItemIcon>
              </ListItem>

            </List>
          </ExpansionPanel>
        </Navbar>


        <div className="stickyNavbar">
          <Navbar
            className="navbarResponsive"
            fixed="top"
            style={{
              display: "flex",
              justifyContent:"space-around",
              paddingLeft:"13%",
              height: "40px",
              backgroundColor: "#ffffff",
              marginTop: "65px",
            }}
          >
            <div
              // className="navbarResponsive1"

              onClick={() =>
                this.setState({ currentActiveDiv: 2 }, () => {
                  if (this.state.currentActiveDiv < 2) {
                    this.scrollToMyRefDown(this.designSliderDiv);
                  } else {
                    this.scrollToMyRefUp(this.designSliderDiv);
                  }
                })
              }
            >
              <p
                className="fontstyle2 hoverBorder"
                style={{
                  fontSize: "10px",
                  color: this.state.currentActiveDiv === 2 ? "red" : "black",
                  borderBottom:
                    this.state.currentActiveDiv === 2
                      ? "2px solid grey"
                      : "none",
                  cursor: "pointer",
                }}
                id={this.state.currentActiveDiv === 2 && "mobileBorder"}
              >
                DESIGN
              </p>
            </div>

            <div
              className="navItemMain gapBetweenMenues"
              onClick={() =>
                this.setState({ currentActiveDiv: 3 }, () => {
                  if (this.state.currentActiveDiv < 3) {
                    this.scrollToMyRefDown(this.performanceDiv);
                  } else {
                    this.scrollToMyRefUp(this.performanceDiv);
                  }
                })
              }
            >
              <p
                className="fontstyle2 hoverBorder"
                style={{
                  fontSize: "10px",
                  color: this.state.currentActiveDiv === 3 ? "red" : "black",
                  borderBottom:
                    this.state.currentActiveDiv === 3
                      ? "2px solid grey"
                      : "none",
                  cursor: "pointer",
                }}
                id={this.state.currentActiveDiv === 3 && "mobileBorder"}
              >
                PERFORMANCE
              </p>
            </div>

            <div
              className="navItemMain gapBetweenMenues"
              onClick={() =>
                this.setState({ currentActiveDiv: 4 }, () => {
                  if (this.state.currentActiveDiv < 4) {
                    this.scrollToMyRefDown(this.exteriorDiv);
                  } else {
                    this.scrollToMyRefUp(this.exteriorDiv);
                  }
                })
              }
            >
              <p
                className="fontstyle2 hoverBorder"
                style={{
                  fontSize: "10px",
                  color: this.state.currentActiveDiv === 4 || this.state.currentActiveDiv === 5 || this.state.currentActiveDiv === 6 ? "red" : "black",
                  borderBottom:
                    this.state.currentActiveDiv === 4 || this.state.currentActiveDiv === 5 || this.state.currentActiveDiv === 6
                      ? "2px solid grey"
                      : "none",
                  cursor: "pointer",
                }}
                id={this.state.currentActiveDiv === 4 && "mobileBorder"}
              >
                EXTERIOR
              </p>
            </div>

            <div
              className="navItemMain gapBetweenMenues"
              style={{ display: "none" }}
              onClick={() =>
                this.setState({ currentActiveDiv: 5 }, () => {
                  if (this.state.currentActiveDiv < 5) {
                    this.scrollToMyRefDown(this.exteriorDiv2);
                  } else {
                    this.scrollToMyRefUp(this.exteriorDiv2);
                  }
                })
              }
            >
              <p
                className="fontstyle2 hoverBorder"
                style={{
                  fontSize: "10px",
                  color: this.state.currentActiveDiv === 4 || this.state.currentActiveDiv === 5 || this.state.currentActiveDiv === 6 ? "red" : "black",
                  borderBottom:
                    this.state.currentActiveDiv === 4 || this.state.currentActiveDiv === 5 || this.state.currentActiveDiv === 6
                      ? "2px solid grey"
                      : "none",
                  cursor: "pointer",
                }}
                id={this.state.currentActiveDiv === 4 || this.state.currentActiveDiv === 5 || this.state.currentActiveDiv === 6 && "mobileBorder"}
              >
                EXTERIOR2
              </p>
            </div>


            <div
              className="navItemMain gapBetweenMenues"
              style={{ display: "none" }}
              onClick={() =>
                this.setState({ currentActiveDiv: 6 }, () => {
                  if (this.state.currentActiveDiv < 6) {
                    this.scrollToMyRefDown(this.exteriorDiv3);
                  } else {
                    this.scrollToMyRefUp(this.exteriorDiv3);
                  }
                })
              }
            >
              <p
                className="fontstyle2 hoverBorder"
                style={{
                  fontSize: "10px",
                  color: this.state.currentActiveDiv === 4 || this.state.currentActiveDiv === 5 || this.state.currentActiveDiv === 6 ? "red" : "black",
                  borderBottom:
                    this.state.currentActiveDiv === 4 || this.state.currentActiveDiv === 5 || this.state.currentActiveDiv === 6
                      ? "2px solid grey"
                      : "none",
                  cursor: "pointer",
                }}
                id={this.state.currentActiveDiv === 4 || this.state.currentActiveDiv === 5 || this.state.currentActiveDiv === 6 && "mobileBorder"}
              >
                EXTERIOR3
              </p>
            </div>


            <div
              className="navItemMain gapBetweenMenues"
              onClick={() =>
                this.setState({ currentActiveDiv: 7 }, () => {
                  if (this.state.currentActiveDiv < 7) {
                    this.scrollToMyRefDown(this.interiorDiv);
                  } else {
                    this.scrollToMyRefUp(this.interiorDiv);
                  }
                })
              }
            >
              <p
                className="fontstyle2 hoverBorder"
                style={{
                  fontSize: "10px",
                  color: this.state.currentActiveDiv === 7 || this.state.currentActiveDiv === 8 ? "red" : "black",
                  borderBottom:
                    this.state.currentActiveDiv === 7 || this.state.currentActiveDiv === 8
                      ? "2px solid grey"
                      : "none",
                  cursor: "pointer",
                }}
                id={this.state.currentActiveDiv === 7 || this.state.currentActiveDiv === 8 && "mobileBorder"}
              >
                FEATURES
              </p>
            </div>

            <div
              className="navItemMain gapBetweenMenues"
              style={{ display: "none" }}
              onClick={() =>
                this.setState({ currentActiveDiv: 8 }, () => {
                  if (this.state.currentActiveDiv < 8) {
                    this.scrollToMyRefDown(this.slickyslider11);
                  } else {
                    this.scrollToMyRefUp(this.slickyslider11);
                  }
                })
              }
            >
              <p
                className="fontstyle2 hoverBorder"
                style={{
                  fontSize: "10px",
                  color: this.state.currentActiveDiv === 8 ? "red" : "black",
                  borderBottom:
                    this.state.currentActiveDiv === 8
                      ? "2px solid grey"
                      : "none",
                  cursor: "pointer",
                }}
                id={this.state.currentActiveDiv === 8 && "mobileBorder"}

              >
                FEATURES2
              </p>
            </div>




            <div
              className="navItemMain gapBetweenMenues"
              onClick={() =>
                this.setState({ currentActiveDiv: 9 }, () => {
                  if (this.state.currentActiveDiv < 9) {
                    this.scrollToMyRefDown(this.refinedConnectivity1);
                  } else {
                    this.scrollToMyRefUp(this.refinedConnectivity1);
                  }
                })
              }
            >
              <p
                className="fontstyle2 hoverBorder"
                style={{
                  fontSize: "10px",
                  color: this.state.currentActiveDiv === 9 ? "red" : "black",
                  borderBottom:
                    this.state.currentActiveDiv === 9
                      ? "2px solid grey"
                      : "none",
                  cursor: "pointer",
                }}
                id={this.state.currentActiveDiv === 9 && "mobileBorder"}

              >
                CONNECTIVITY
              </p>
            </div>
            <div
              className="navItemMain gapBetweenMenues"
              onClick={() =>
                this.setState({ currentActiveDiv: 10 }, () => {
                  if (this.state.currentActiveDiv < 10) {
                    this.scrollToMyRefDown(this.safety);
                  } else {
                    this.scrollToMyRefUp(this.safety);
                  }
                })
              }
            >
              <p
                className="fontstyle2 hoverBorder"
                style={{
                  fontSize: "10px",
                  color: this.state.currentActiveDiv === 10 || this.state.currentActiveDiv === 11 ? "red" : "black",
                  borderBottom:
                    this.state.currentActiveDiv === 10 || this.state.currentActiveDiv === 11
                      ? "2px solid grey"
                      : "none",
                  cursor: "pointer",
                }}
                id={this.state.currentActiveDiv === 10 && "mobileBorder"}

              >
                SAFETY
              </p>
            </div>

            <div
              className="navItemMain gapBetweenMenues"
              style={{ display: "none" }}
              onClick={() =>
                this.setState({ currentActiveDiv: 11 }, () => {
                  if (this.state.currentActiveDiv < 11) {
                    this.scrollToMyRefDown(this.safety1);
                  } else {
                    this.scrollToMyRefUp(this.safety1);
                  }
                })
              }
            >
              <p
                className="fontstyle2 hoverBorder"
                style={{
                  fontSize: "10px",
                  color: this.state.currentActiveDiv === 10 || this.state.currentActiveDiv === 11 ? "red" : "black",
                  borderBottom:
                    this.state.currentActiveDiv === 10 || this.state.currentActiveDiv === 11
                      ? "2px solid grey"
                      : "none",
                  cursor: "pointer",
                }}
                id={this.state.currentActiveDiv === 10 || this.state.currentActiveDiv === 11 && "mobileBorder"}

              >
                SAFETY1
              </p>
            </div>



            {/* ADAS */}

            <div
              className="navItemMain gapBetweenMenues"
              onClick={() =>
                this.setState({ currentActiveDiv: 12 }, () => {
                  if (this.state.currentActiveDiv < 12) {
                    this.scrollToMyRefDown(this.safety2);
                  } else {
                    this.scrollToMyRefUp(this.safety2);
                  }
                })
              }
            >
              <p
                className="fontstyle2 hoverBorder"
                style={{
                  fontSize: "10px",
                  color: this.state.currentActiveDiv === 12 || this.state.currentActiveDiv === 13 || this.state.currentActiveDiv === 14 ? "red" : "black",
                  borderBottom:
                    this.state.currentActiveDiv === 12 || this.state.currentActiveDiv === 13 || this.state.currentActiveDiv === 14
                      ? "2px solid grey"
                      : "none",
                  cursor: "pointer",
                }}
                id={this.state.currentActiveDiv === 12 || this.state.currentActiveDiv === 13 || this.state.currentActiveDiv === 14 && "mobileBorder"}
              >
                ADAS
              </p>
            </div>

            <div
              className="navItemMain gapBetweenMenues"
              style={{ display: "none" }}
              onClick={() =>
                this.setState({ currentActiveDiv: 13 }, () => {
                  if (this.state.currentActiveDiv < 13) {
                    this.scrollToMyRefDown(this.safety3);
                  } else {
                    this.scrollToMyRefUp(this.safety3);
                  }
                })
              }
            >
              <p
                className="fontstyle2 hoverBorder"
                style={{
                  fontSize: "10px",
                  color: this.state.currentActiveDiv === 12 || this.state.currentActiveDiv === 13 || this.state.currentActiveDiv === 14 ? "red" : "black",
                  borderBottom:
                    this.state.currentActiveDiv === 12 || this.state.currentActiveDiv === 13 || this.state.currentActiveDiv === 14
                      ? "2px solid grey"
                      : "none",
                  cursor: "pointer",
                }}
                id={this.state.currentActiveDiv === 12 || this.state.currentActiveDiv === 13 || this.state.currentActiveDiv === 14 && "mobileBorder"}

              >
                ADAS2
              </p>
            </div>


            <div
              className="navItemMain gapBetweenMenues"
              style={{ display: "none" }}
              onClick={() =>
                this.setState({ currentActiveDiv: 14 }, () => {
                  if (this.state.currentActiveDiv < 14) {
                    this.scrollToMyRefDown(this.safety4);
                  } else {
                    this.scrollToMyRefUp(this.safety4);
                  }
                })
              }
            >
              <p
                className="fontstyle2 hoverBorder"
                style={{
                  fontSize: "10px",
                  color: this.state.currentActiveDiv === 12 || this.state.currentActiveDiv === 13 || this.state.currentActiveDiv === 14 ? "red" : "black",
                  borderBottom:
                    this.state.currentActiveDiv === 12 || this.state.currentActiveDiv === 13 || this.state.currentActiveDiv === 14
                      ? "2px solid grey"
                      : "none",
                  cursor: "pointer",
                }}
                id={this.state.currentActiveDiv === 12 || this.state.currentActiveDiv === 13 || this.state.currentActiveDiv === 14 && "mobileBorder"}

              >
                ADAS3
              </p>
            </div>
            {/* ADAS END */}

            <div
              className="navItemMain gapBetweenMenues"
              onClick={() =>
                this.setState({ currentActiveDiv: 15 }, () => {
                  if (this.state.currentActiveDiv < 15) {
                    this.scrollToMyRefDown(this.takeApeekDiv);
                  } else {
                    this.scrollToMyRefUp(this.takeApeekDiv);
                  }
                })
              }
            >
              <p
                className="fontstyle2 hoverBorder"
                style={{
                  fontSize: "10px",
                  color: this.state.currentActiveDiv === 15 ? "red" : "black",
                  borderBottom:
                    this.state.currentActiveDiv === 15
                      ? "2px solid grey"
                      : "none",
                  cursor: "pointer",
                }}
                id={this.state.currentActiveDiv === 15 && "mobileBorder"}

              >
                INTERIOR
              </p>
            </div>
            <div
              className="navItemMain customize gapBetweenMenues"
              onClick={() =>
                this.setState({ currentActiveDiv: 16 }, () => {
                  if (this.state.currentActiveDiv < 16) {
                    this.scrollToMyRefDown(this.modal);
                  } else {
                    this.scrollToMyRefUp(this.modal);
                  }
                })
              }
            >
              <p
                className="fontstyle2 hoverBorder"
                style={{
                  fontSize: "10px",
                  color: this.state.currentActiveDiv === 16 ? "red" : "black",
                  borderBottom:
                    this.state.currentActiveDiv === 16
                      ? "2px solid grey"
                      : "none",
                  cursor: "pointer",
                }}
                id={this.state.currentActiveDiv === 16 && "mobileBorder"}
              >
                CUSTOMIZE
              </p>
            </div>



            <div onClick={() => window.open(`https://drive.google.com/file/d/1bTdwdbgPVwIegcbbIbeEZbkYLefnf8F2/view?usp=sharing`)} >
              <p
                className="fontstyle2 hoverBorder"
                style={{ fontSize: "10px", color: "black", cursor: "pointer" }}
              >
                E-CATALOG
              </p>
            </div>
            <div onClick={() => window.open(`${Server}/X70-Booking`, '_blank')} className="bookNow-saga bookNow">
              BOOK NOW
             </div>
          </Navbar>
        </div>


        {/* design div with slider */}
        <div id="designX70Main" ref={this.designSliderDiv}>
          <DesignGrid />
        </div>
        {/* design div with slider end */}
           {/* video div start */}
           <div ref={this.videoDiv} className="videoX70" style={{
            // marginTop: "5%", marginBottom: "-6.3%"
            marginTop: "0%", marginBottom: "0%"

          }}>
            <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",

              paddingTop: 10,
              height: 0,

            }}
            >
            <iframe allowfullscreen loop="loop" id="video1" autoPlay allow="autoplay"
              style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              }}
              src={`${x70intro}`}
              onEnded={(e) => { e.target.currentTime = 0; e.target.play(); }}
            />

            </div>
          </div>
          {/* video div End */}

        {/* performance grid */}
        <div id="perfX70Main" ref={this.performanceDiv} >
          <Performance1
            onClickExperience={() =>
              this.setState({ expandPerformance: true }, () => {
                this.scrollToMyRefDown(this.performance2)
              })
            }
            isExpanded={this.state.expandPerformance}
            onClickMinimize={() =>
              this.setState({ expandPerformance: false }, () => {
                this.scrollToMyRefUp(this.performanceDiv)
              })
            }
          />
        </div>

        {this.state.expandPerformance &&
          <div>
            <div id="perf2X70Main" ref={this.performance2}>
              <Performance2 />
            </div>
            <div id="perf3X70Main" ref={this.performance3}>
              <Performance3
                onClickMinimize={() =>
                  this.setState({ expandPerformance: false }, () => {
                    this.scrollToMyRefUp(this.performanceDiv)
                  })
                }
              />
            </div>
          </div>
        }


        {/* performance grid end */}

        {/* Exterior 1 Start*/}
        <div id="extX70Main" ref={this.exteriorDiv}>
          <ExteriorGrid />
        </div>
        {/* Exterior 1 End */}

        {/* Exterior 2 Start*/}
        <div id="ext2X70Main" ref={this.exteriorDiv2}>
          <Exterior2 />
        </div>
        {/* Exterior 2 End */}

        {/* Exterior 3 Start*/}
        <div id="ext3X70Main" ref={this.exteriorDiv3}>
          <Exterior3 />
        </div>
      
        {/* Exterior 3 End */}

        {/* Interior Grid */}
        <div id="intX70Main" ref={this.interiorDiv}>
          <InteriorGrid />
        </div>
        {/* Interior Grid End */}

        {/* slicky slider Interior  */}

        <Grid
          className="slickySlider1"
          container
          ref={this.slickyslider11}
          style={{}}
        >
          <Grid id="slider1X70Main" item xs={12} sm={12} style={{ paddingBottom: "20%" }} className="slickysliderX70">
            <div className="sliderForOtherDevices">
              <Slickyslider slider1={true} X70Slider={true} />
            </div>
            <div className="sliderForMobileTablets">
              <CarousalSliderX70 X70Slider={true} />
            </div>
          </Grid>
        </Grid>


        {/* slicky slider Interior End  */}

        {/* Refined Connectivity */}
        <div id="rconnect1X70Main" ref={this.refinedConnectivity1}>
          <RefinedConnectivity
            isExpanded={this.state.expandRefined}
            onClickExperience={() => {
              this.setState({ expandRefined: true }, () => {
                this.scrollToMyRefDown(this.refinedConnectivity2)
              })
            }}
            onClickMinimize={() => {
              this.setState({ expandRefined: false }, () => {
                this.scrollToMyRefUp(this.refinedConnectivity1)
              })
            }}
          />
        </div>

        {this.state.expandRefined &&
          <div id="rconnect2X70Main" ref={this.refinedConnectivity2}>
            <RefinedConnectivity2
              onClickMinimize={() => {
                this.setState({ expandRefined: false }, () => {
                  this.scrollToMyRefUp(this.refinedConnectivity1)
                })
              }}
            />
          </div>
        }




        <div id="safety1X70Main" ref={this.safety} >
          <Safety1
            experienceMoreSafety={() => {
              this.setState({ expandSafety: true }, () => {
                this.scrollToMyRefDown(this.safety2);
              });
            }}
            minimizeExpandSafety={() => {
              this.setState({ expandSafety: false });
            }}
            expandSafety={this.state.expandSafety}
          />
        </div>


        <div id="safety2X70Main" ref={this.safety1}>
          <Safety2 />
        </div>


        <div>
          <div id="safety3X70Main" ref={this.safety2}>
            <SafetyMain />
          </div>

          <Grid
            className="slickySlider1"
            container
            ref={this.safety3}
            style={{ paddingTop: "12%" }}
          >
            <Grid id="slider2X70Main" item xs={12} sm={12} style={{ paddingBottom: "25%" }}>
              <div className="sliderForOtherDevices">
                <Slickyslider2 slider1={true} />
              </div>
              <div className="sliderForMobileTablets">
                <CarousalSliderX70 X70Slider2={true} />
              </div>
            </Grid>
          </Grid>


          <div id="safety4X70Main" ref={this.safety4}>
            <Safety4 />
          </div>
        </div>



        {/* Take a Peek Section Started */}

        <div id="takeApeekX70Main" ref={this.takeApeekDiv} >
          <TakeAPeek />
        </div>

        {/* X70 Modal */}
        <div id="ModelX70Main" ref={this.modal} className="X70ModelMAinIndex" style={{ marginTop: "30%", paddingBottom: "10%" }}>
          <X70Modal />
        </div>

        <div className="mobileVideoX70" style={{ display: "none" }} onClick={this.playPause.bind(this)}>
          <video
            style={{
              width: "100%",
              height: "auto",
            }}
            id="video2" autoPlay loop muted>
            <source src={x70intro} type="video/mp4" />
          </video>
        </div>

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      searchglobalvalue: state.AppReducer.searchglobalvalue,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      searchGlobal: (payload) => dispatch(AppActions.searchGlobal(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProtonSaga);