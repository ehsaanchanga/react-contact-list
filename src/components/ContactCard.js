import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/profile.jpg';

const ContactCard = props => {
  const { id, name, email, phone } = props.contact;
  return (
    <div className="item" style={{ padding: '1rem 0' }}>
      <div className="right floated content">
        <i
          className="trash alternate outline icon"
          style={{ color: 'red', marginTop: '7px' }}
          onClick={() => props.clickHandler(id)}
        ></i>
      </div>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <Link
        to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
      >
        <h5
          className="right floated content"
          style={{ paddingRight: '20rem', paddingTop: '0.5rem' }}
        >
          {phone}
        </h5>
      </Link>
    </div>
  );
};

export default ContactCard;
