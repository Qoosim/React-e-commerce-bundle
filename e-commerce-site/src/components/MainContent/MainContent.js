import React, { Component } from 'react';

class MainContent extends Component {

  state = {
    title: "Customers",
    count: 5,
    customers: [
      { id: 1, name: "James", photo: "https://picsum.photos/id/1010/60", phone: "123-456", address: { city: "Eleyele" } },
      { id: 2, name: "John", photo: "https://picsum.photos/id/1011/60", phone: null, address: { city: "Sango" } },
      { id: 3, name: "Peter", photo: "https://picsum.photos/id/1012/60", phone: "113-152", address: { city: "Ojoo" } },
      { id: 4, name: "Jonas", photo: "https://picsum.photos/id/1013/60", phone: "143-401", address: { city: "UI" } },
      { id: 5, name: "Mark", photo: "https://picsum.photos/id/1014/60", phone: null, address: { city: "Ogunpa" } },
    ]
  }

  onRefreshClick = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1
    })
  }

  getPhoneNumber = (phone) => {
    return !phone ? (
      <div className="bg-warning p-2 text-center">No Phone Number</div>
    ) : (
      phone
    )
  }

  getCustomerRow = () => {
    return (this.state.customers.map((customer) => {
        const { id, name, photo, phone, address } = customer;
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td><img src={photo} alt="customer" /></td>
            <td>{this.getPhoneNumber(phone)}</td>
            <td>{address.city}</td>
          </tr>
        )
      })
    )
  }
  
  render() {
    
    return (
      <>
        <h3
          className="m-1 p-1"
        >
          {this.state.title}
          <span className="badge bg-secondary m-2">{this.state.count}</span>
          <button
            className="btn btn-info"
            onClick={this.onRefreshClick}
          >
            Refresh
          </button>
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Photo</th>
              <th>Phone Number</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </>
    )
  }
}

export default MainContent;
