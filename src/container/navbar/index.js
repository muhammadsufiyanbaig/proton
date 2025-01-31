import React from "react";
import NavbarComponentcopy from "../../Components/Navbar"

class NavBarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
 
    render() {
        return (
            <div>
                <NavbarComponentcopy history={this.props.history} />
            </div>
        )
    }
}


export default NavBarContainer;
