import React, { Component } from 'react';
import PropTypes from 'prop-types';
// MUI staff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import withStyles from '@material-ui/core/styles/withStyles';

import { connect } from 'react-redux';
import { selectModule } from '../redux/actions/dataActions';
import { deselectModule } from '../redux/actions/dataActions';


const styles = {
    
    image: {
        margin: '20px auto 20px auto'
    }
    
};
class Module extends Component {
    state = {
        isClicked: false
    }

    handleClick = (e) => {
        // this.setState({
        //     isClicked: !this.state.isClicked
        // })
        console.log("State ===BEFORE===M> ", this.state);
        this.state.isClicked ? this.props.deselectModule(this.props.module) : this.props.selectModule(this.props.module);    
        this.setState({
            isClicked: !this.state.isClicked
        });
        console.log("State ===AFTER===M> ", this.state);
   
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                {this.state.isClicked && (
                    <Card>
                        <div onClick={this.handleClick} className="module-clicked">
                            Module {this.props.module.id}
                                <br/>
                            {this.props.module.topic} 
                        </div>                                              
                    </Card>
                )}

                {!this.state.isClicked && (
                    <Card>
                        <div onClick={this.handleClick} className="module-unclicked">
                            Module {this.props.module.id}
                            <br/>
                            {this.props.module.topic} 
                        </div>
                    </Card>
                )}


            </div>
            
        )
    }
}

// Module.propTypes = {

//     classes: PropTypes.object.isRequired

// }

// export default withStyles(styles)(Module);

Module.propTypes = {

    classes: PropTypes.object.isRequired,
    selectModule: PropTypes.func.isRequired,
    deselectModule: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,

}

const mapStateToProps = (state) => ({
    user: state.user
  });

const mapActionsToProps = {
    selectModule,
    deselectModule
  };

export default connect(
    mapStateToProps,
    mapActionsToProps
)(withStyles(styles)(Module));