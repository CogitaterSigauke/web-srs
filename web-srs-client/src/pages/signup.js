import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/icon.png';
import axios from 'axios';
import GoogleLogin from "react-google-login";
import { Link } from 'react-router-dom';
//MUI Stuff

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

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
class signup extends Component {

    constructor(){
        super();
        this.setState({
            authenticated: false
        })
        
    };

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
        const { classes } = this.props;
        return(
            <Grid container className={classes.form}>
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
                        Sign Up
                    </Typography>

                    <form noValidate onSubmit={this.handleSubmit}>
                      <GoogleLogin
                          clientId="181796502496-jop5gvuieb2kkc0mijivmnocegukl17c.apps.googleusercontent.com"
                          buttonText="Sign up with Google"
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

                        <small className={classes.small}>
                              already have an account ? <br /> 
                              sign in <Link to="/login">here</Link>
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

signup.propTypes = {

    classes: PropTypes.object.isRequired

}

export default withStyles(styles)(signup);