import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { branding } = props;
  return (
    <div className="navbar navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
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
