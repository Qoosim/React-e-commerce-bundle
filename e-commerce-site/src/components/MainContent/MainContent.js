import React, { Component } from 'react';

class MainContent extends Component {

  state = {
    title: "Customers",
    count: 5
  }

  onRefreshClick = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1
    })
  }
  
  render() {
    
    return (
      <>
        <h3
          className="border-bottom m-1 p-1"
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
      </>
    )
  }
}

export default MainContent;
