import React, { Component } from "react";
import Contact from "./Contact";
import { Context } from "../Context";

class Contacts extends Component {
  static contextType = Context;
  render() {
    const { contacts } = this.context;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
