import React from 'react';
//import '../../public/css/main.css';
import * as actions from '../actions';
import { connect } from 'react-redux';

export function CompanyCard (props) {
  const toggleCompany = props.toggled ? 'card-toggled' : '';
  function toggler(){
    props.dispatch(actions.toggleCompany(props.index));
  };

  return (
      <div className={`btn results-btn ${toggleCompany}`} onClick={toggler}>
        <div className='card-text'>
          {props.name}<br />
        </div>
      </div>
  )
}

export default connect()(CompanyCard);
