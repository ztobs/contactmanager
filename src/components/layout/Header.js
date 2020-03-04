import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <div className="navbar navbar-expand navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {branding}
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li className="navbar-nav">
              <Link to="/contact/add" className="nav-link">
                <FontAwesomeIcon icon={faPlus} /> Add
              </Link>
            </li>
            <li className="navbar-nav">
              <Link to="/about" className="nav-link">
                <FontAwesomeIcon icon={faQuestion} /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.prototype = {
  branding: PropTypes.string.isRequireds
};

export default Header;
