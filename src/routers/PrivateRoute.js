import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from "prop-types";

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
};


const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.token
});

export default connect(mapStateToProps)(PrivateRoute);
