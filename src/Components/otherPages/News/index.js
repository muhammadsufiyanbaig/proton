import React, { Component } from "react";

import "./news.css";

class News extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render() {
        return (
            <div style={{ marginTop: "5%" }}>
                 News page
            </div>
        );
    }
}

export default  News;
