import React from 'react';
// import * as actions from '../actions';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

function mapStateToProps(state, props) {
    return {
      companies: state.companies,
      username: state.username,
    }
}

export class WatchlistPage extends React.Component {
  constructor(props) {
    super(props);
    this.submitCards = this.submitCards.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(actions.fetchUserCompanies()); //TODO Action doesn't exist yet
  }

  submitCards(){
    function isToggled(company){
      return company.toggled===true;
    }
    //filter for only companies which have been toggled (selected by user)
    const filteredCompanies = this.props.companies.filter(isToggled);
    //remove toggled key before adding to DB
    filteredCompanies.forEach(company => {delete company.toggled});
    const formData = {
      username: this.props.username,
      companies: filteredCompanies
    }
    this.props.dispatch(actions.addUserCompanies(formData));
  }

  render() {
    return (
      <div>
        <h4>Please select the companies you'd like to receive alerts for</h4>
          {/* Should there be a drop down menu here or some other way to present companies? */}
        <button className='btn submit-cards' onClick={this.submitCards}>Submit</button>
      </div>
    )
  }
}

export default connect(mapStateToProps)(WatchlistPage);