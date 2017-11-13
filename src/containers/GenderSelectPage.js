import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/genderSelectActions';

export class GenderSelectPage extends React.Component {


  handleSubmit = (e) =>  {
      e.preventDefault();
    
      let query = document.querySelector('input[name="gender"]:checked');
      if (query == null)
      {
          console.log("Query could not find checked radio button.");
          return;
      }

      this.props.actions.selectGender(query.value);
  }

  render = () => {
    if (typeof this.props.gender != 'undefined' &&
        this.props.gender != null)
    {
        return (<h1>Selected gender: {this.props.gender}</h1>);
    }
    else
    {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <p>Please select a gender:</p>
            <p><input type="radio" name="gender" value="male" defaultChecked="checked" />Male</p>
            <p><input type="radio" name="gender" value="female" />Female</p>
            <p><input type="submit" value="Submit" /></p>
            </form>
            </div>
        );
    }
  }
}

GenderSelectPage.propTypes = {
  actions: PropTypes.object.isRequired,
  gender: PropTypes.string
};

function mapStateToProps(state) {
  // console.log('mapStateToProps:', state);
  return {
      gender: state.genderSelect.gender
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenderSelectPage);
