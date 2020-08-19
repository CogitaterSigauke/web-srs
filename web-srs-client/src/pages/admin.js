import React, { Component } from 'react';
import Content from '../components/Content';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class admin extends Component {

  constructor(){
    
    super();

  };

  componentDidMount(){
    if(!this.props.authenticated){
      this.props.history.push("/login");
    }
  }

    render() {
        
       return (
          <Content admin={true} user={this.props.user}/>                      
        )
                     
    }
}

admin.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  user: state.user
});


export default connect(mapStateToProps)(admin);
