import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    type: [
      "potsticker",
      "crispy wonton",
      "siu mai classic",
      "har gau",
      "potsticker",
    ],
    dispType: "",
    filling: [
      "courgette and wood ear mushroom",
      "prawn",
      "pork and prawn",
      "prawn",
      "lamb and coriander",
    ],
    dispFilling: "",
    image: [
      "https://steamykitchen.com/wp-content/uploads/2015/10/how-to-make-potsticker-dumpling-wrappers-5373-640x800.jpg",
      "https://rasamalaysia.com/wp-content/uploads/2015/01/chicken_wontons4.jpg",
      "https://healthynibblesandbits.com/wp-content/uploads/2019/05/Cantonese-Shumai-1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9c/Shrimp_dumplings.jpg",
      "https://www.recipetineats.com/wp-content/uploads/2018/03/Potstickers_6.jpg",
    ],
    dispImage: "",
    index: 0,
  };

  componentDidMount() {
    this.setState({
      dispType: this.state.type[this.state.index],
      dispFilling: this.state.filling[this.state.index],
      dispImage: this.state.image[this.state.index],
    });
  }

  anotherDumpling = () => {
    var newIndex = Math.floor(Math.random() * this.state.type.length) + 0;
    //this.state.index + 1;

    var nextDumplingType = this.state.type[newIndex];
    var nextDumplingFilling = this.state.filling[newIndex];
    var nextDumplingImage = this.state.image[newIndex];

    console.log(newIndex);

    this.setState({
      index: newIndex,
      dispType: nextDumplingType,
      dispFilling: nextDumplingFilling,
      dispImage: nextDumplingImage,
    });
  };

  render() {
    return (
      <div className="mainBlock">
        <h1>Dumplings for Days</h1>
        <div className="buttonBlock">
          <button onClick={this.anotherDumpling} className="button">
            Give me another dumpling!
          </button>
        </div>
        <div className="image">
          <img src={this.state.dispImage} alt="tasty dumpling"></img>
        </div>
        <div className="caption">
          I am a {this.state.dispType} dumpling and I am filled with{" "}
          {this.state.dispFilling}
        </div>
        <div className="footer">&copy; Kim Gray 2019</div>
        <div></div>
      </div>
    );
  }
}

export default App;
