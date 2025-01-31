import React, { Component } from "react";
import { Server } from "../../Services"
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import sitemaptopimage from "../../../assets/aboutProton/sitemaptopimage.png"
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./sitemap.css";

class Sitemap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expand1Icon: false,
        }
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render() {
        return (
            <div className="siteMapMain">
                <div className="sitemaptopImage">
                    <img src={sitemaptopimage} height="100%" width="100%" />
                </div>

                <div className="siteMapHeading fontstyle2" >
                 
                        Site Map
                  
                </div>

                <div className="siteMapPara fontstyle" >
                 
                 View ALHAJ Automotive Company's Website Sitemap.
           
         </div>

             <div className="expansionMain">
                 
                 <div className="expansionInner">
                 <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="fontstyle2 accordinHead" style={{fontSize:"25px"}}>Home</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div style={{width:"100%"}}>

             
            <div className="expansionFlexDivMain" style={{width:"100%",display:"flex",justifyContent:"space-between"}}>

                     
                <div   onClick={() => window.open(`${Server}/About`, '_blank')}>
                <Typography className="expansionFlexDivinner">
                About Alhaj
                </Typography>
               </div>

               <div  onClick={() => window.open(`${Server}/About-Proton`, '_blank')}>
               <Typography className="expansionFlexDivinner">
                 About Proton
                 </Typography>
               </div>

            <div  onClick={() => window.open(`https://www.proton.com`, '_blank')}>
            <Typography className="expansionFlexDivinner">
                  Proton Website Link
                  </Typography>
            </div>

           <div onClick={() => window.open(`${Server}/Warranty`, '_blank')}>
           <Typography className="expansionFlexDivinner">
                    Warranty
                    </Typography>
            </div>

              <div  onClick={() => window.open(`${Server}/dealerInfo?city=karachiApollo`, '_blank')}>
              <Typography className="expansionFlexDivinner">
                      Dealer Network
                      </Typography>
               </div>
           
               <div   onClick={() => window.open(`https://www.proton.com/en/corporate/press-release`, '_blank')}>
       <Typography className="expansionFlexDivinner">
          News
     </Typography>
       </div>

             
         </div>
         <div  style={{width:"100%",marginTop:"3%"}}>
         <div  onClick={() => window.open(`${Server}/Contact`, '_blank')}>
               <Typography className="expansionFlexDivinner">
                  Contact
             </Typography>
                </div>
         </div>
         <div className="internationalLineup" style={{width:"100%",marginTop:"3%",fontSize:"16px",color:"grey"}}>
         International line up
         </div>
         <div  style={{width:"100%",marginTop:"3%",display:"flex",justifyContent:"space-between"}}>
         {/* <div  > */}
       <Typography className="interinationallineup"   onClick={() => window.open(`https://www.proton.com/en/find-a-car/exora`, '_blank')}>
       Exora
     </Typography>
     <Typography className="interinationallineup"    onClick={() => window.open(`https://www.proton.com/en/find-a-car/perdana`, '_blank')}>
     Perdana
     </Typography>
     <Typography className="interinationallineup"      onClick={() => window.open(`https://www.proton.com/en/find-a-car/persona`, '_blank')}>
     Persona
     </Typography>
     <Typography className="interinationallineup" onClick={() => window.open(`https://www.proton.com/en/find-a-car/iriz`, '_blank')}>
     Iriz
     </Typography>
       {/* </div> */}
         </div>
    
        



            </div>

      
        
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="fontstyle2 accordinHead" style={{fontSize:"25px", boxShadow: "none"}}>Models</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div style={{width:"100%",display:"flex"}}>

             

                     
<div className="sagaPageandBooking" style={{width:"30%"}}  >
<Typography className="expansionFlexDivinner" onClick={() => window.open(`${Server}/proton-saga`, '_blank')}>
SAGA
</Typography>
<Typography className="expansionFlexDivinner" style={{marginTop:"3%"}} onClick={() => window.open(`${Server}/Saga-Booking`, '_blank')}>
  SAGA booking
  </Typography>
</div>

<div >
<Typography className="expansionFlexDivinner" onClick={() => window.open(`${Server}/x70`, '_blank')}>
 X70 
 </Typography>
 <Typography className="expansionFlexDivinner" style={{marginTop:"7%"}} onClick={() => window.open(`${Server}/X70-Booking`, '_blank')}>
    X70 booking
    </Typography>
</div>



</div>
       

        </AccordionDetails>
      </Accordion>

      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="fontstyle2 accordinHead" style={{fontSize:"25px"}}>Dealer Network</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="dealers" style={{width:"100%",justifyContent:"space-between",display:"flex"}}  >
        <Typography className="am" onClick={() => window.open(`${Server}/dealerInfo?city=karachiApollo`, '_blank')}>
       Apollo Motors
     </Typography>
     <Typography className="sm"  onClick={() => window.open(`${Server}/dealerInfo?city=karachiSouth`, '_blank')}>
       South Motors
     </Typography>
     <Typography className="lhr" onClick={() => window.open(`${Server}/dealerInfo?city=Lahore`, '_blank')}>
       Momemtum Motors
     </Typography>
       <Typography className="am"  onClick={() => window.open(`${Server}/dealerInfo?city=Islamabad`, '_blank')}>
       Islamabad Motors
     </Typography>
  
    
    
       </div>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="fontstyle2 accordinHead" style={{fontSize:"25px"}}>Footer</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div style={{width:"100%"}}>
            <div className="footer" style={{width:"100%",display:"flex",justifyContent:"space-between"}}  >

       <Typography className="expansionFlexDivinner" style={{fontSize:"15px"}} onClick={() => window.open(`${Server}/privacy`, '_blank')}>
          Privacy Policy
     </Typography>
     <Typography className="expansionFlexDivinner" style={{fontSize:"15px"}}  onClick={() => window.open(`${Server}/Disclaimer`, '_blank')}>
          Terms & Conditions
     </Typography>
     <Typography className="expansionFlexDivinner" style={{fontSize:"15px"}}>
          Site Map
     </Typography>
       </div>
 
        <div  style={{width:"100%",display:"flex",justifyContent:"space-between",marginTop:"3%"}}>
<div  onClick={() => window.open(`${Server}/Careers`, '_blank')}>
<Typography className="expansionFlexDivinner">
 Careers
 </Typography>
</div>

<div  onClick={() => window.open(`${Server}/Contact`, '_blank')}>
<Typography className="expansionFlexDivinner">
  Contact
  </Typography>
</div>

<div  onClick={() => window.open(`${Server}/About-Proton`, '_blank')}>
<Typography className="expansionFlexDivinner">
    Brand
    </Typography>
</div>


</div>
<div  style={{width:"100%",display:"flex",justifyContent:"space-between",marginTop:"3%"}}>
<div className="expansionFlexDivinner" >
<Typography style={{color:"grey"}}>
      Social Media
      </Typography>
</div>


</div>
            </div>

        </AccordionDetails>
      </Accordion>


   

                
                 </div>
         
             </div>
         

            </div>
        );
    }
}

export default Sitemap;
