import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <div className="col-lg-9">
        <h4 className="m-1 p-2 border-bottom">Login</h4>

        <div className="form-group form-row">
          <label className="col-lg-4" htmlFor="email">Email:</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group form-row">
          <label className="col-lg-4" htmlFor="password">Password:</label>
          <input type="password" className="form-control" />
        </div>

      </div>
    )
  }
}

export default Form;
