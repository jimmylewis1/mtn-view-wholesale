import  React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input'

import productsList from '../../productsList';

const product = productsList;
const KEYS_TO_FILTERS = ['product.title'];
console.log('product: ', product);

class SearchApp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = () => this.searchUpdated.bind(this)
  }

  render () {
    const filteredProducts = product.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    console.log('searching for: ', this.state.searchTerm);
    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredProducts.map(product => {
          return (
            <div className="mail" key={product.title}></div>
          )
        })}
      </div>
    )
  }
}

export default SearchApp;
