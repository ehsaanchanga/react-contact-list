import React from 'react';

class AddContact extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
  };

  add = e => {
    e.preventDefault();
    if (
      this.state.name === '' ||
      this.state.email === '' ||
      this.state.phone === ''
    ) {
      alert('all the fields are mandatory');
      return;
    }
    this.props.addConatctHandler(this.state);
    this.setState({ name: '', email: '', phone: '' });
    this.props.history.push('/');
  };
  render() {
    return (
      <div style={{ marginTop: '5rem' }}>
        <form className="ui form" onSubmit={this.add}>
          <h2>Add Contact</h2>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="name"
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="phone"
              value={this.state.phone}
              onChange={e => this.setState({ phone: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
