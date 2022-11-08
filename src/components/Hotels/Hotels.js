import React, { Component } from "react";
import Hotel from "./Hotel/Hotel";

<Hotel />;

class Hotels extends Component {
  render() {
    return (
      <div className="bg-white">
        {this.props.hotels.map((hotel) => (
          <Hotel key={hotel.id} {...hotel} />
        ))}
      </div>
    );
  }
}

export default Hotels;
