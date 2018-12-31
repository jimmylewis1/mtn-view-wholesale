import React, { Component } from 'react';

class MobileNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  render() {
    return (
      <div>
        <div>State is true.</div>
        <div>State is false.</div>
      </div>
    )
  }
}

export default MobileNav;
