import React from "react";

// TODO: Class Component
class Onclick extends React.Component {
  // # State
  state = {
    pet: "Dog",
    age: 2,
    nation: "USA",
  };

  handleClick(e) {
    alert("Button is clicked!...");
    console.log("Pet name is: ", this.state?.pet ?? "Not found");

    // # setState -> skill: merge state => "react class"
    this.setState({
      pet: "Cat",
      age: Math.floor(Math.random() * 100 + 1),
    });
  }

  render() {
    return (
      <>
        Pet name is: {this.state.pet} and your old pet is: {this.state.age}
        <button
          onClick={(e) => {
            this.handleClick(e);
          }}
        >
          Click me
        </button>
      </>
    );
  }
}

export default Onclick;
