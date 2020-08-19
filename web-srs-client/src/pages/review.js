import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlashCard from '../components/FlashCard';
import Module from '../components/Module';

// MATERIAL UI

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// REDUX

import { connect } from 'react-redux';
import { selectModule } from '../redux/actions/dataActions';
import { deselectModule } from '../redux/actions/dataActions';

// import store from './../redux/store';
// import { SET_ERRORS } from './../redux/types';

import axios from 'axios';


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
    margin: '100px auto 10px auto'
  },
  pageTitle2: {
    margin: '30px auto 10px auto'
  },
  textField: {
    margin: '10px auto 10px auto'
  },
  button: {
    marginTop: 20,
    position: 'relative'
  },
}

class review extends Component {

  constructor(){
    super();
    this.state = {

      front: "",
      back: "",
      cardIds: [],
      userId: "",
      modules: [],
      cards: []

    }
    
  };

  componentDidMount(){
    if(!this.props.authenticated || !this.props.userId){
      this.props.history.push("/login");
    }
    this.setState({
      userId: this.props.userId
    })
    this.getModules();
  }

  getModules = () => {
    const userId  = this.props.userId;
    console.log("MuserId ", userId);
    axios.get(`/module/user/${userId}`)
      .then(res => {
        this.setState({
          modules: res.data
        })
      }).catch((err) => {
        console.log("Module Error", err);
      })
  }

  handleSelectedModule = (event) => {
  
    console.log("selected Modules <>", this.props.selectedModules);
    let cardIds = [];
    let mod;
    for( mod of this.props.selectedModules){
      // const aa = mod.cardIds;
      console.log("cardIds ==> ", cardIds);
      cardIds = cardIds.concat(mod.cardIds);
      console.log("mod.cardIds ==> ", mod.cardIds);
      console.log("cardIds ==> ", cardIds);

    }
    console.log("cardIds: ", cardIds);
    axios.post("/card/cardIds", {cardIds})
    .then(res => {
      console.log("cards fetched", res.data);
      this.setState({
        cards: res.data
      })
     
    }).catch((err) => {
      console.log("Card Error", err);
    })
    
  }

  handleSelectedCard = (event) => {
    console.log("selectedCards  ==> ", this.props.selectedCards);
  }

    render() {
        const {classes} = this.props;
       return (
                         
        <Grid container className={classes.form}>
          <Grid item sm className="sm-grid-right">
          <Typography variant="h2" className={classes.pageTitle}>
            
            Modules
          </Typography>
            {this.state.modules.map((module, i) => (
              <div key={i} onClick={this.handleSelectedModule}>
                <Module module={module} /> 
              </div>
              )  
            )}
        </Grid>

        <Grid item sm className="sm-grid-left">
          <Typography variant="h2" className={classes.pageTitle}>
            FlashCards
          </Typography>
          {this.state.cards.map((card, i) => (
              <div onClick={this.handleSelectedCard} >
                <FlashCard card={card} key={i}/> 
                <br/>
              </div>
              
            )  
          )}
        </Grid>

        
      </Grid>
          
        );
    }
}

review.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  userId: state.user.id,
  selectedModules: state.data.selectedModules
});


export default connect(mapStateToProps)(withStyles(styles)(review));

