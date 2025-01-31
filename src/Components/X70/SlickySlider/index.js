import React, { Component } from "react";
import Card from "./card2";
import data from "./data";
import "./slickslider.css";
import Nexticon from "../../../assets/images/nexticon.png";
import Previousicon from "../../../assets/images/previousicon.png";
class Slickyslider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0],
      slider: "slider1",
    };
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState(
      {
        property: data.properties[newIndex],
      },
      () => {
      }
    );
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex],
    });
  };

  render() {
    const { properties, property } = this.state;
    return (
      <div className="App">
        <div
          className={
            this.props.slider1
              ? `cards-slider active-slide-${property.index}`
              : `cards-slider active-slide2-${property.index}`
          }
        >
          <div
            className="cards-slider-wrapper"
            style={{
              transform: `translateX(-${
                property.index *
                ((this.props.slider1 ? 75 : 50) / properties.length)
              }%)`,
            }}
          >
            {properties.map((property) => (
              <Card
                slider={this.state.slider}
                key={property._id}
                property={property}
              />
            ))}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
         
          <div style={{ height: "100px", width: "100px" }}>
            {property.index === 0 ? (
              <span></span>
            ) : (
              <span onClick={() => this.prevProperty()}>
                <img
                  src={Previousicon}
                  alt="error"
                  height="50px"
                  width="50px"
                  style={{cursor:"pointer"}}
                />
              </span>
            )}
          </div>
          <div style={{ height: "100px", width: "100px" }}>
            {property.index === properties.length - 1 ? (
              <span></span>
            ) : (
              <span onClick={() => this.nextProperty()}>
                <img src={Nexticon} alt="error" height="50px" width="50px" style={{cursor:"pointer"}}/>
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Slickyslider;
