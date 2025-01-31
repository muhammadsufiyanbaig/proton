import React from 'react';
import LandingSection1 from "./landingSection1"
import LandingSection2 from "./landingSection2"
import LandingSection3 from "./landingSection3"
import LandingSection4 from "./landingSection4"
import LandingSection5 from "./landingSection5"


import LandingSection6 from "./landingSection6"
import LandingSection7 from "./landingSection7"
import LandingSection8 from "./landingSection8"
import LandingSection9 from "./landingSection9Map"

import "./landing.css"


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {

    return (
      <div className="landingPageMain">

        <div id="sec1">
          <LandingSection1 />
        </div>

        <div>
          <LandingSection2 history={this.props.history} />
        </div>

        <div>
          <LandingSection6 history={this.props.history} />
        </div>

        <div>
          <LandingSection7 history={this.props.history} />
        </div>

        <div>
          <LandingSection8 history={this.props.history} />
        </div>

        <div id="sec2">
          <LandingSection3 history={this.props.history} />
        </div>

        <div>
          <LandingSection4 history={this.props.history}/>
        </div>

        <div>
          <LandingSection5 history={this.props.history}  />
        </div>

        <div >
          <LandingSection9 history={this.props.history} />
        </div>
      </div>
    );
  }

}

export default Landing;
