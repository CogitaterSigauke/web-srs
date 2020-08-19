import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FrontFlashCard from '../components/FrontFlashCard';
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

class addCard extends Component {

  constructor(){
    super();
    this.state = {

      front: "",
      back: "",
      cardIds: [],
      topic: "",
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
    this.getCards();
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

  getCards = () => {
    const userId  = this.props.userId;
    console.log("CuserId ", userId);

    axios.get(`/card/user/${userId}`)
      .then(res => {
        this.setState({
          cards: res.data
        })
        console.log("state: ", this.state);
      }).catch((err) => {
        console.log("Cards Error", err);
      })
  }
  
  handleCardSubmit = () => {
    const {front, back, userId} = this.state;

    axios.post("/card", {front, back, userId})
      .then(res => {
        console.log("Card Added", res.data);
        this.setState({
          front: "",
          back: ""
        })
        this.getCards();
      }).catch((err) => {
        console.log("Card Error", err);
      })

  }

  handleModuleSubmit = () => {
    console.log("state: ", this.state);
    const {topic, userId} = this.state;
    const cardIds = this.props.selectedCards;
    axios.post("/module", {topic, userId, cardIds})
      .then(res => {
        console.log("Module Added", res.data);
        this.setState({
          topic: "",
          cardIds: []
        })
        this.getModules();
      }).catch((err) => {
        console.log("Card Error", err);
      })

  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }
  handleDeleteModules = () => {

    axios.post(`modules/delete`,this.props.selectedModules).then(res => {

      console.log("Delete: ", res.data);
      this.getModules();

    } ).catch((err)=> {
      console.log("Error: ", err);
    })

  }
  handleDeleteCards = () => {

    let cardIds = this.props.selectedCards;

    console.log("cardIds <>==== : ====<> ", cardIds);
    axios.post(`cards/delete`, cardIds).then(res => {

      console.log("Delete: ", res.data);
      this.getCards();

    } ).catch((err)=> {
      console.log("Error: ", err);
    })

  }
  handleSelectedModule = (event) => {
    this.setState({
      moduleSelected: true,
      moduleIndex: event.target.key
    })   
    console.log("State ", this.state);
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
            
            MyModules
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
            MyFlashCards
          </Typography>
          {this.state.cards.map((card, i) => (
              <div onClick={this.handleSelectedCard} >
                <FrontFlashCard card={card} key={i}/> 
              </div>
            )  
          )}
        </Grid>
        <Grid item sm className="sm-grid-md">
      
          <Typography variant="h2" className={classes.pageTitle}>
            FlashCard
          </Typography>
          <form noValidate>
            <TextField
              id="front"
              name="front"
              type="text"
              label="Question"
              className={classes.textField}
              value={this.state.front}
              onChange={this.handleChange}
              multiline={true}
              fullWidth
            />
            <TextField
              id="back"
              name="back"
              type="text"
              label="Answer"
              className={classes.textField}
              value={this.state.back}
              onChange={this.handleChange}
              multiline={true}
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.handleCardSubmit}
            >
              Create New Card
            </Button>

            <br />
          </form>

          <form noValidate>
  
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.handleModuleSubmit}
            >
              Add Module With Selected Flushcards
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={this.handleDeleteCards}
            >
              Delete Selected Cards
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={this.handleDeleteModules}
            >
              Delete Selected Modules
            </Button>

            <br />
          </form>


        </Grid>

      </Grid>
          
        );
    }
}

addCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  userId: state.user.id,
  selectedCards: state.data.selectedCards,
  selectedModules: state.data.selectedModules
});


export default connect(mapStateToProps)(withStyles(styles)(addCard));

