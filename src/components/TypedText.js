import React from "react";
import Typed from "react-typed";

class TypedText extends React.Component {
  render() {
    return (
      <div>
        <Typed 
        backSpeed={50}
        className="title" 
        strings={this.props.String} 
        typeSpeed={40}  />
      </div>
    );
  }
}

export default TypedText;
