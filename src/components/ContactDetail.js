import React from 'react';
import { Link } from 'react-router-dom';
import card from '../images/card.png';

const ContactDetail = props => {
  const { name, email, phone } = props.location.state.contact;
  return (
    <div style={{ marginTop: '4rem' }}>
      <h1 style={{ color: 'blue' }}>Contact Info</h1>
      <div className="ui card centered">
        <div className="image">
          <img src={card} alt="user" />
        </div>
        <div className="content">
          <div className="header">{`Name :- ${name}`}</div>
          <div className="description">{`email :-- ${email}`}</div>
          <h3 className="description">{`Number :- ${phone}`}</h3>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">Back to ContactList</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
