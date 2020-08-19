import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

// MUI staff

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import store from './../redux/store';
import { logoutUser } from './../redux/actions/userActions';

class Navbar extends Component {

  handleClick = (e) => {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }

    render() {
      const { user } = this.props;
        return (
            <AppBar>
                <Toolbar className="nav-container">
                
                    <Button color="inherit" component={Link} to="/"       > Home   </Button>
                    <Button color="inherit" component={Link} to="/admin" > Admin </Button>
                    <Button color="inherit" component={Link} to="/addCard"> AddCard</Button>
                    <Button color="inherit" component={Link} to="/review" > Review </Button>
                    <Button color="inherit" component={Link} to="/login"  > Login  </Button>
                    <Button color="inherit" onClick={this.handleClick}> logout</Button>
                    <Button color="inherit" > {user.name} </Button>
                                        
                </Toolbar>
                
            </AppBar>
        )
    }
}

Navbar.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
)(Navbar);

// export default Navbar;