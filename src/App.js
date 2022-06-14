import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import EncComponent from "./components/Encrypt";
import DecComponent from "./components/Decrypt";
import KeyGenComponent from "./components/KeyGen";

class App extends Component {
  state = {
    //Connstring with backend
    connString: "http://localhost:5000",
    //Encryption
    encMessage: 0,
    encN: 0,
    encE: 0,
    encEncMessage: 0,
    //Decryption
    decMessage: 0,
    decN: 0,
    decD: 0,
    decDecMessage: 0,
    //Key Generator
    keyGenBottom: 3,
    keyGenTop: 5,
    keyGenP: 0,
    keyGenQ: 0,
    keyGenN: 0,
    keyGenE: 0,
    keyGenD: 0,
  };

  //Helper methods for state changing
  setEncState = (encType, encValue) => {
    if (encType === "encMessage") {
      this.setState({ encMessage: encValue });
    }
    if (encType === "encN") {
      this.setState({ encN: encValue });
    }
    if (encType === "encE") {
      this.setState({ encE: encValue });
    }
  };
  setDecState = (decType, decValue) => {
    if (decType === "decMessage") {
      this.setState({ decMessage: decValue });
    }
    if (decType === "decN") {
      this.setState({ decN: decValue });
    }
    if (decType === "decD") {
      this.setState({ decD: decValue });
    }
  };
  setKeyGenState = (keyGenType, keyGenValue) => {
    if (keyGenType === "keyGenBottom") {
      this.setState({ keyGenBottom: keyGenValue });
    }
    if (keyGenType === "keyGenTop") {
      this.setState({ keyGenTop: keyGenValue });
    }
  };

  //Button handlers (Encrypt, Decrypt, Generate Key)
  encryptButtonHandler = () => {
    if (
      this.state.encMessage === 0 ||
      this.state.encN === 0 ||
      this.state.encE === 0
    ) {
      return;
    }
    axios
      .get(
        `${this.state.connString}/encrypt/${this.state.encMessage}/${this.state.encN}/${this.state.encE}`
      )
      .then((res) => {
        this.setState({ encEncMessage: res.data["result"] });
      });
  };
  decryptButtonHandler = () => {
    if (
      this.state.encMessage === 0 ||
      this.state.encN === 0 ||
      this.state.encE === 0
    ) {
      return;
    }
    axios
      .get(
        `${this.state.connString}/decrypt/${this.state.decMessage}/${this.state.decN}/${this.state.decD}`
      )
      .then((res) => {
        this.setState({ decDecMessage: res.data["result"] });
      });
  };
  keyGenButtonHandler = () => {
    if (
      this.state.keyGenBottom > 1000 ||
      this.state.keyGenTop > 1000 ||
      this.state.keyGenBottom < 3 ||
      this.state.keyGenTop < 5
    ) {
      console.log("KOK");
      return;
    }
    axios
      .get(
        `${this.state.connString}/keyGene/${this.state.keyGenBottom}/${this.state.keyGenTop}`
      )
      .then((res) => {
        this.setState({
          keyGenP: res.data["keyGenP"],
          keyGenQ: res.data["keyGenQ"],
          keyGenN: res.data["keyGenN"],
          keyGenE: res.data["keyGenE"],
          keyGenD: res.data["keyGenD"],
        });
      });
  };

  render() {
    return (
      <>
        <div class="container" style={{ textAlign: "center" }}>
          <h1>RSA Application</h1>
          <h5>Jiri Vanicek</h5>
          <br />
          <div class="row">
            <div title="Encryption" class="col-sm">
              <EncComponent
                encMessage={this.state.encMessage}
                encN={this.state.encN}
                encE={this.state.encE}
                encEncMessage={this.state.encEncMessage}
                setEncState={this.setEncState}
                encryptButtonHandler={this.encryptButtonHandler}
              />
            </div>
            <div title="Decryption" class="col-sm">
              <DecComponent
                decMessage={this.state.decMessage}
                decN={this.state.decN}
                decD={this.state.decD}
                decDecMessage={this.state.decDecMessage}
                setDecState={this.setDecState}
                decryptButtonHandler={this.decryptButtonHandler}
              />
            </div>
            <div title="Key Generator" class="col-sm">
              <KeyGenComponent
                keyGenBottom={this.state.keyGenBottom}
                keyGenTop={this.state.keyGenTop}
                keyGenP={this.state.keyGenP}
                keyGenQ={this.state.keyGenQ}
                keyGenN={this.state.keyGenN}
                keyGenE={this.state.keyGenE}
                keyGenD={this.state.keyGenD}
                setKeyGenState={this.setKeyGenState}
                keyGenButtonHandler={this.keyGenButtonHandler}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
