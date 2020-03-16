import React from "react";
import Typed from "react-typed";

class TypedText extends React.Component {
  render() {
    return (
      <div>
        <Typed className="title" strings={this.props.String} typeSpeed={40} backSpeed={50} />
      </div>
    );
  }
}

export default TypedText;
