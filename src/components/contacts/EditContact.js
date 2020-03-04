import React, { Component } from "react";
import { Context } from "../../Context";
import TextInputGroup from "../layout/TextInputGroup";
// import { v1 as uuid } from "uuid";
import axios from "axios";

export default class EditContact extends Component {
  static contextType = Context;

  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://my-json-server.typicode.com/ztobs/demo/users/${id}`
    );
    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    if (name === "") {
      this.setState({
        errors: { name: "Name is required" }
      });
      return;
    }
    if (email === "") {
      this.setState({
        errors: { email: "Email is required" }
      });
      return;
    }

    if (phone === "") {
      this.setState({
        errors: { phone: "Phone is required" }
      });
      return;
    }

    const { id } = this.props.match.params;
    const res = await axios.put(
      `https://my-json-server.typicode.com/ztobs/demo/users/${id}`,
      this.state
    );
    this.context.dispatch({ payload: res.data, type: "UPDATE_CONTACT" });

    this.setState({ name: "", email: "", phone: "", errors: {} });
    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <div>
        <div className="card mb-3">
          <div className="card-header">Edit Contact</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <TextInputGroup
                name="name"
                label="Name"
                placeholder="Enter Name..."
                value={name}
                onChange={this.onChange}
                error={errors.name}
              />
              <TextInputGroup
                name="email"
                label="Email"
                placeholder="Enter Email..."
                value={email}
                onChange={this.onChange}
                type="email"
                error={errors.email}
              />
              <TextInputGroup
                name="phone"
                label="Phone"
                placeholder="Enter Phone..."
                value={phone}
                onChange={this.onChange}
                error={errors.phone}
              />
              <input
                type="submit"
                value="Update Contact"
                className="btn btn-success btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
