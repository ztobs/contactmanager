import React, { Component } from "react";
import Contact from "./Contact";
import { Context } from "../../Context";

class Contacts extends Component {
  static contextType = Context;
  render() {
    const { contacts } = this.context;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
