import React, { Component } from "react";
import ReactDOM from "react-dom";
import HorizontalTimeline from "react-horizontal-timeline";
import DemoKeyboard from "./Slide.js";

const VALUES = ["2001", "2000", "2009"];

class TimeLine extends Component {
  state = { value: 0, previous: 0 };

  changeIndexFromSlide = index => {
    this.setState({ value: index });
  };
  render() {
    return (
      <div>
        {/* Bounding box for the Timeline */}
        <div style={{ width: "100%", height: "100px", margin: "0 auto" }}>
          <HorizontalTimeline
            styles={{
              background: "white",
              foreground: "lightgreen",
              outline: "green"
            }}
            index={this.state.value}
            indexClick={index => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values={VALUES}
          />
        </div>
        <div className="text-center">
          <DemoKeyboard
            inputIndex={this.state.value}
            outputIndex={this.changeIndexFromSlide}
          />
        </div>
      </div>
    );
  }
}

export default TimeLine;






