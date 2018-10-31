import React from "react";
import Moment from "react-moment";

class MomentSpan extends React.Component {
  render() {
    return (
      <span>
        <Moment format="dddd, MMM DD, YYYY hh:mm a">{this.props.time}</Moment>
      </span>
    );
  }
}

export default MomentSpan;
