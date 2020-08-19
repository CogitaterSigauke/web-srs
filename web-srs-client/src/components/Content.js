import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import FlashCard from './FlashCard';
import { InputAdornment } from '@material-ui/core';
import index from './../index.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Module from './Module';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import PropTypes from 'prop-types';
// MUI staff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';


const styles = {
  textField: {
      // margin: '4px auto 4px auto',
      textAlign: 'center'
  },
  input: {
      textAlign: 'center',
    color: "black",
    borderRight: "black",
    backgroundColor: "white",
    marginLeft: '4px',
    marginRight: '50px',
    paddingLeft: '3px'
  }
};


class Content extends Component {

  constructor(){
    super();
    this.state = {
      cards: [],
      name: "",
      modules: [],
      index: 0,
      loaded: false,
      isSelecting: false,
      editMode: false,
      front: "",
      back:""
    }
    
};

  componentDidMount(){
    
    if(this.props.admin){
      const userId  = this.props.user.id;
      console.log("Id Admin MuserId ", userId);
      axios.get(`/module/user/${userId}`)
        .then(res => {
          this.setState({
            modules: res.data
          })

          if(this.state.modules.length > 0){
            this.setState({
              loaded: true
            })
          }
          const cardIds = this.state.modules[0].cardIds;
          axios.post("/card/cardIds", {cardIds})
          .then(res => {
            console.log("cards fetched", res.data);
            this.setState({
              cards: res.data
            })
           
          }).catch((err) => {
            console.log("Card Error", err);
          });


        }).catch((err) => {
          console.log("Module Error", err);
        })

    }else{


      axios.get(`/module`)
      .then(res => {
        this.setState({
          modules: res.data
        })
        if(this.state.modules.length > 0){
          this.setState({
            loaded: true
          })
        }
        const cardIds = this.state.modules[0].cardIds;
        axios.post("/card/cardIds", {cardIds})
        .then(res => {
          console.log("cards fetched", res.data);
          this.setState({
            cards: res.data
          })
        
        }).catch((err) => {
          console.log("Card Error", err);
        });

      }).catch((err) => {
        console.log("Module Error", err);
      })
    }

  }

  getModules = () => {
    
    if(this.props.admin){
      const userId  = this.props.user.id;
      console.log("Admin MuserId ", userId);
      axios.get(`/module/user/${userId}`)
        .then(res => {
          this.setState({
            modules: res.data
          })
        }).catch((err) => {
          console.log("Module Error", err);
        })
    }else{
      console.log("not admin");
      axios.get(`/module`)
      .then(res => {
        this.setState({
          modules: res.data
        })
      }).catch((err) => {
        console.log("Module Error", err);
      })

    }
    
  }

  getCards = (index) => {

    const cardIds = this.state.modules[index].cardIds;
      axios.post("/card/cardIds", {cardIds})
      .then(res => {
        console.log("cards fetched", res.data);
        this.setState({
          cards: res.data
        })
       
      }).catch((err) => {
        console.log("Card Error", err);
      });

  }

  handleSave = (e) => {

    const card = {

        front: this.state.front,
        back: this.state.back,
        userId:  this.props.user.id

    }
    
    axios.post("/card", card).then(res =>{

      console.log("res: ", res.data);
      this.setState({
        front: "",
        back: ""
      });

      const cardId = res.data.id;
      const index = this.state.index;
      const moduleId = this.state.modules[index].id;

      axios.get(`/${moduleId}/module/${cardId}`).then(res => {

        console.log("res", res.data);
        this.state.modules[index].cardIds.push(cardId);
        this.getCards(index);

      }).catch((err) => {
        console.log((err) => {
          console.log("Error: ", err);
        })
      })
      
    }).catch((err) => {
      console.log("Error", err);
    });
}
  
  handleForwardClick = () => {

    this.setState({
      index: (this.state.index + 1) % this.state.modules.length
    });
    this.getCards(this.state.index);

  }
  modulo(n, m){
    return ((n % m) + m) % m ;
  }
  handleBackwardClick = () => {

    this.setState({
      index: this.modulo((this.state.index - 1), this.state.modules.length)
    });
    this.getCards(this.state.index);

  }

  handleSelectModule =  () => {
    this.setState({
      isSelecting: !this.state.isSelecting
    })
  }

  getCards = (index) => {

    if(this.state.modules.length > index){

      const cardIds = this.state.modules[index].cardIds;
      console.log("cardIds ===<> :", cardIds);
      axios.post("/card/cardIds", {cardIds})
      .then(res => {
        console.log("cards fetched", res.data);
        this.setState({
          cards: res.data
        })
        console.log("State ", this.state)
       
      }).catch((err) => {
        console.log("Card Error", err);
      });
    }

  }

  chooseModule = (e) => {

    this.setState({
      index: e
    }); 
    this.handleSelectModule();
    this.getCards(e);
    
  }

  handleFChange = (e) => {

    this.setState({
        front: e.target.value
    })
  }

  handleBChange = (e) => {

      this.setState({
          back: e.target.value
      })
  }

  handleChange = (e) => {
    this.setState({
      moduleNumber: e.target.value
    })
    console.log('Module Number', this.state.moduleNumber);
    let i = 0;
    for( i; i < this.state.modules.length; i ++){
      if( this.state.modules[i].id ==  e.target.value){
        let x = this.state.modules.indexOf( this.state.modules[i] );
        this.setState({
          index: x
        }); 
        this.getCards(x );
          

    }
   }
  }

  handleEditMode = (e) => {
    this.setState({
      editMode: !this.state.editMode
    })
    this.getCards(this.state.index);
  }
  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('Module Number', this.state.moduleNumber);
    }
  }
    render() {

      const{ classes } = this.props;
        
       return (
                            
              <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>  
                  {this.state.name}

                </h1>
                
                <Grid container className="card-container">                  
                    <Grid item sm>
                    
                    {
                      this.state.isSelecting && (

                        <div className="module-selector-active" onClick={this.handleSelectModule}>
                          <span>
                          Select Module  
                          </span> 
                          
                        </div>
                      )
                    }

                    {
                      !this.state.isSelecting && (
                        <div className="module-selector" onClick={this.handleSelectModule}>
                          <span>
                          Select Module  
                          </span> 

                      </div>
                      )
                    }
                
                        <div className="module-selector-num">
                          
                         <form>
                            <input onChange={this.handleChange} onKeyPress={this.handleKeyDown} type="text" id="mnumber" name="mnumber" placeholder="Module Number"/>
                          </form>     
                    
                        </div>

                      {
                        this.state.editMode && (
                          <div className="edit-mode-active" onClick={this.handleEditMode}>
                            <span>
                              Edit Mode  
                            </span> 
                            
                           </div>
                        )
                      }

                      {
                        !this.state.editMode && (
                          <div className="edit-mode" onClick={this.handleEditMode}>
                            <span>
                              Edit Mode  
                            </span> 
                            
                           </div>
                        )
                      }

                      
                        <div className="module-sticker" onClick={this.handleSelectModule}>
                            Module {this.state.loaded && 
                            (
                              <span>
                                {this.state.modules[this.state.index].id}                                                            
                              </span>
                            )} 
                          
                        </div>
                        <div className="module-pop-up">
                          {
                            this.state.isSelecting && (
                              <span>
                                
                                {this.state.modules.map((module, i) => (
                                  <span onClick={() => this.chooseModule(i)} key={i}>
                                    <Module module={module}/>                                                                  
                                  </span>
                                          
                                  ))}
                                
                                
                              </span>
                            )
                          }
                        
                        </div>  


                        
                
                      <ArrowBackIosIcon onClick={this.handleBackwardClick} className="arrow-a"/>
                    </Grid>
                    <Grid item sm>
                      
                      {
                        !this.state.editMode && (

                          this.state.cards.map((card, i) =>(                        
                            <FlashCard card={card} key={i} />                      
                          )  
                          )
                        )
                      }
                      
                      {
                        this.state.editMode && (

                          this.state.cards.map((card, i) =>(                        
                            <FlashCard card={card} key={i} editMode={true} user={this.props.user}/>                      
                          )  
                          )
                        )

                      } 
                    </Grid>  
                      <Grid item sm>

                        { this.state.editMode && this.props.admin && (

                          <span>
                            <Card className="new-card-front">
                            <div className="card-front-inner root">
                            <form noValidate>                            
                            <TextField
                                id="front"
                                name="front"
                                type="text"
                                placeholder="Question"
                                InputProps={{
                                    className: classes.input
                                  }}
                                className={classes.TextField}
                                value={this.state.front}
                                onChange={this.handleFChange}
                                multiline={true}
                                margin="dense"
                                fullWidth
                                />
                            <hr />

                            {/* <TextField onChange={this.handleBChange} type="text" value={this.props.card.back} name="mnumber" placeholder="Answer"/> */}
                            <TextField
                                id="front"
                                name="front"
                                type="text"
                                placeholder="Answer"
                                InputProps={{
                                    className: classes.input
                                  }}
                                className={classes.TextField}
                                value={this.state.back}
                                onChange={this.handleBChange}
                                multiline={true}
                                fullWidth
                                margin="dense"
                                />
                            </form>
                            </div>
                            <Button onClick={this.handleSave} variant="contained" color="primary" className="card-button-f">
                                Add New Card To Module
                            </Button>                            
                            </Card>
                          </span>

                        )}
                        
                        <ArrowForwardIosIcon onClick={this.handleForwardClick} className="arrow-b"/>
                      </Grid>
                </Grid>
             </div>
          
        );
    }
}
Content.propTypes = {

  classes: PropTypes.object.isRequired

}

export default withStyles(styles)(Content);


