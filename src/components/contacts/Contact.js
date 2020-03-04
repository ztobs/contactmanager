import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faTimes,
  faPencilAlt
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";

import { Context } from "../../Context";

class Contact extends Component {
  static contextType = Context;
  state = {
    showContactInfo: false
  };

  onDeleteClick = async id => {
    await axios.delete(
      `https://my-json-server.typicode.com/ztobs/demo/users/${id}`
    );
    this.context.dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <FontAwesomeIcon
            icon={faSortDown}
            onClick={() => {
              this.setState({ showContactInfo: !this.state.showContactInfo });
            }}
            style={{ cursor: "pointer" }}
          />
          <FontAwesomeIcon
            icon={faTimes}
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`contact/edit/${id}`}>
            <FontAwesomeIcon
              icon={faPencilAlt}
              style={{
                cursor: "pointer",
                float: "right",
                color: "black",
                marginRight: "1rem"
              }}
            />
          </Link>
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
