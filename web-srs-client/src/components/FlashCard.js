import React, { Component } from 'react';
import PropTypes from 'prop-types';
// MUI staff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

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


class FlashCard extends Component {

    state = {
        isFront: true,
        editMode: false,
        front: "",
        back: "",
        edited: false,
        deleted: false
    }

    componentDidMount(){

        if(this.props.editMode){
            this.setState({
                editMode: true,
                front: this.props.card.front,
                back: this.props.card.back
            })

        }
    }

    handleFChange = (e) => {

        this.setState({
            front: e.target.value
        })
        this.props.card.front = e.target.value;

    }
    handleBChange = (e) => {

        this.setState({
            back: e.target.value
        })
        this.props.card.back = e.target.value;
    }

    handleSave = (e) => {

        const card = {
            id: this.props.card.id,
            front: this.state.front,
            back: this.state.back,
            userId: this.props.card.userId
        }
        
        axios.post(`card/${card.id}`, card).then(res =>{

            // console.log("res.data", res.data);
            // this.props.card = res.data;
            this.setState({
                editMode: !this.state.editMode,
                edited: !this.state.edited
            })

        })
    }

    handleEdit = (e) =>{
        this.setState({
            editMode: !this.state.editMode,
            edited: !this.state.edited
        })
    }

    handleDelete = (e) => {
        this.setState({
            deleted: true
        })
        axios.delete(`card/${this.props.card.id}`).then((res) => {
            console.log("Delete: ", res.data);
        }).then((err) => {
            console.log("err", err);
        })
    }


    handleClick = (e) => {

        this.setState({
            isFront: !this.state.isFront
        })
        if(e.target.innerHTML == "Again"){
            console.log("AGAIN");
        }else if(e.target.innerHTML == "Good"){
            console.log("GOOD");
        }else if(e.target.innerHTML == "Easy"){
            console.log("EASY");
        }

    }

    render() {
        const { classes } = this.props;
        return (

            <div>

                {
                    !this.state.deleted && this.state.editMode && (
                        <Card className="card-front">
                            <div className="card-front-inner root">
                            {/* <TextField onChange={this.handleFChange} type="text" value={this.props.card.front} name="mnumber" placeholder="Question"/> */}
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
                                value={this.props.card.front}
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
                                value={this.props.card.back}
                                onChange={this.handleBChange}
                                multiline={true}
                                fullWidth
                                margin="dense"
                                />
                            </form>
                            </div>
                            <Button onClick={this.handleSave} variant="contained" color="primary" className="card-button-f">
                                Save
                            </Button>
                            <Button onClick={this.handleDelete} variant="contained" color="secondary" className="card-button-f">
                                Delete
                            </Button>
                            
                            
                        </Card>
                        
                    )
                }
                
                {
                    !this.state.deleted && this.state.edited && (
                        <Card className="card-front">
                            <div className="card-front-inner">
                                
                            {this.props.card.front}
                            <hr />
                            
                            {this.props.card.back}
                            <br/>
                            
                            </div>
                            
                            <Button onClick={this.handleEdit} variant="contained" color="primary" className="card-button-f">
                                Edit
                            </Button>
                            <Button onClick={this.handleDelete} variant="contained" color="secondary" className="card-button-f">
                                Delete
                            </Button>
                        </Card>
                        
                    )
                }

                {
                    !this.state.deleted && this.state.isFront && !this.state.editMode && !this.state.edited && (
                        <Card className="card-front">
                            <div className="card-front-inner">
                                
                            {this.props.card.front}
                            <hr />
                            
                            </div>
                            <Button onClick={this.handleClick} variant="contained" color="primary" className="card-button-f">
                                Show Answer
                            </Button>
                            

                            
                        </Card>
                        
                    )
                }

                {
                    !this.state.deleted && !this.state.isFront && !this.state.editMode && !this.state.edited && (
                        <Card className="card-front">
                             <div className="card-front-inner">
                             {this.props.card.front}
                                <hr/>
                                {this.props.card.back}
                            <br/>
                            
                            </div>
                            
                            <Button onClick={this.handleClick} value="tata" variant="contained" color="primary" className="card-button-b">
                                Again
                            </Button>
                            <Button onClick={this.handleClick} variant="contained" color="primary" className="card-button-b">
                                Good
                            </Button>
                            <Button onClick={this.handleClick} variant="contained" color="primary" className="card-button-b">
                                Easy
                            </Button>
                        </Card>
                       
                    ) 
                }
                <br/>
          </div>
        )
    }
}

FlashCard.propTypes = {

    classes: PropTypes.object.isRequired

}

export default withStyles(styles)(FlashCard);