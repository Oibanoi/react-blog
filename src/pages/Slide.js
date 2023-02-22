import React, { Component } from "react";
import SwipeableViews from "react-swipeable-views";
import { bindKeyboard } from "react-swipeable-views-utils";
const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

class DemoKeyboard extends Component {
  sendIndex = index => {
    this.props.outputIndex(index);
  };
  render() {
    return (
      <BindKeyboardSwipeableViews
        index={this.props.inputIndex}
        onChangeIndex={index => {
          this.sendIndex(index);
        }}
        enableMouseEvents
      >
        <div className="slide1">slide n°1</div>
        <div className="slide2">slide n°2</div>
        <div className="slide3">slide n°3</div>
      </BindKeyboardSwipeableViews>
    );
  }
}

export default DemoKeyboard;
