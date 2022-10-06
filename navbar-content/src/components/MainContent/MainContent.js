import React, { Component } from 'react';

class MainContent extends Component {

  state = {
    title: "Customers",
    count: 4,
    customers: [
      { id: 1, name: "James", phone: "123-987", address: { city: "Ojoo" } },
      { id: 2, name: "Mark", phone: null, address: { city: "Sango" } },
      { id: 3, name: "Peter", phone: "123-665", address: { city: "Eleyele" } },
      { id: 4, name: "Jonas", phone: null, address: { city: "Dugbe" } },
      { id: 5, name: "John", phone: "123-553", address: { city: "Bodija" } },
    ]
  }

  handleRefresh = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  getPhoneNumber = (phone) => {
    return !phone ? (
      <div className="bg-warning text-center">No Phone Number</div>
    ) : (
      phone
    )
  }

  getCustomersInfo = () => {
    return this.state.customers.map((customer) => {
      const { id, name, phone, address } = customer;
      return (
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{this.getPhoneNumber(phone)}</td>
          <td>{address.city}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <>
        <h3 className="m-2">
          {this.state.title}
          <span className="badge bg-secondary m-2">{this.state.count}</span>
          <button className="btn btn-info" onClick={this.handleRefresh}>Refresh</button>
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Customer Phone Number</th>
              <th>Customer Address</th>
            </tr>
          </thead>
          <tbody>{this.getCustomersInfo()}</tbody>
        </table>
      </>
    )
  }
}

export default MainContent;
