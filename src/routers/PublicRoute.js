import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.token
});

export default connect(mapStateToProps)(PublicRoute);
