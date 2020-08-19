import React, { Component } from 'react';
import PropTypes from 'prop-types';
// MUI staff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import withStyles from '@material-ui/core/styles/withStyles';

import { connect } from 'react-redux';
import { selectCard } from '../redux/actions/dataActions';
import { deselectCard } from '../redux/actions/dataActions';

const styles = {
    
    image: {
        margin: '20px auto 20px auto'
    }
    
};
class FrontFlashCard extends Component {

    state = {
        isClicked: false
    }

    handleClick = (e) => {
        console.log("State ===BEFORE===> ", this.state);
        this.state.isClicked ? this.props.deselectCard(this.props.card.id) : this.props.selectCard(this.props.card.id);    
        this.setState({
            isClicked: !this.state.isClicked
        });
        console.log("State ===AFTER===> ", this.state);
   
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                {this.state.isClicked && (
                    <Card>
                        <div onClick={this.handleClick} className="card-clicked">
                            Question: {this.props.card.front}  <br/>
                            Answer: {this.props.card.back} <br/>                           
                        </div>                                              
                    </Card> 
                )}

                {!this.state.isClicked && (
                    <Card>
                        <div onClick={this.handleClick} className="card-unclicked">
                            Question: {this.props.card.front}  <br/>
                            Answer: {this.props.card.back}  <br/>
                        </div>
                    </Card>
                )}
            </div>           
        )
    }
}

FrontFlashCard.propTypes = {

    classes: PropTypes.object.isRequired,
    selectCard: PropTypes.func.isRequired,
    deselectCard: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,

}

const mapStateToProps = (state) => ({
    user: state.user
  });

const mapActionsToProps = {
    selectCard,
    deselectCard
  };

export default connect(
    mapStateToProps,
    mapActionsToProps
)(withStyles(styles)(FrontFlashCard));