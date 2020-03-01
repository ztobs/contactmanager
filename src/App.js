import React, { Component } from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import { MyProvider } from "./Context";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </MyProvider>
    );
  }
}
