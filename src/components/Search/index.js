import React, { Component } from 'react';

import productsList from '../../productsList';

const product = productsList;

class SearchApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = () => this.searchUpdated.bind(this)
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
  render() {
    console.log('searching for: ', this.state.searchTerm);
    return (
      <div>
        {product.map(product => {
          return (
            <div className="product" key={product.title}></div>
          )
        })}
      </div>
    )
  }
}

export default SearchApp;
