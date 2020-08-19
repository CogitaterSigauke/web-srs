import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/icon.png';
import GoogleLogin from "react-google-login";
import { Link } from 'react-router-dom';
//MUI 

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';

const styles = {
  typography: {
    useNextVariants: true
  },
  form: {
    textAlign: 'center'
  },
  image: {
    margin: '20px auto 20px auto'
  },
  pageTitle: {
    margin: '10px auto 10px auto'
  },
  textField: {
    margin: '10px auto 10px auto'
  },
  button: {
    marginTop: 20,
    position: 'relative'
  },
}
class login extends Component {

    constructor(){
        super();
        this.setState({
            authenticated: false
        })
         
    };
    componentWillReceiveProps(nextProps) {
      if (nextProps.UI.errors) {
        this.setState({ errors: nextProps.UI.errors });
      }
    }

    handleGoogleFailure = (res) => {
      console.log("Error ",res.data);
    }
    handleGoogleResponse = (res) => {
        
        const { name, email, familyName, imageUrl} = res.profileObj;
        const userData = {
          name,
          email,
          familyName,
          profileUrl: imageUrl
        }
        this.props.loginUser(userData, this.props.history, res.tokenId);
    
               
    };

    render() {
        const { classes,  UI: { loading } } = this.props;
        return(
            <Grid container >
                <Grid item sm/>
              
                <Grid item sm>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                  <Card>
                  
                    <img src={AppIcon} alt="RealiseApp icon" className={classes.image}/>
                    <Typography variant="h3" className={classes.pageTitle}>
                        Sign In
                    </Typography>

                    <form noValidate onSubmit={this.handleSubmit}>
                      <GoogleLogin
                          clientId="181796502496-jop5gvuieb2kkc0mijivmnocegukl17c.apps.googleusercontent.com"
                          buttonText="Sign in with Google"
                          scope='profile email'
                          width='240'
                          height='50'
                          longtitle='true'
                          theme='dark'
                          onSuccess={this.handleGoogleResponse}
                          onFailure={this.handleGoogleFailure}
                          cookiePolicy={"single_host_origin"}
                        />
                        <br />
                        <br />

                        <small >
                              dont have an account ? <br /> 
                              sign up <Link to="/signup">here</Link>
                              <br />
                              <br/>
                             <br/>
                              
                        </small>                        
                    </form>
                    
                  </Card>
                </Grid>
                <Grid item sm/>
            </Grid>
        );
    };

};

login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(login));