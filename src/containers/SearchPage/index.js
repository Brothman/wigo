import React from 'react'
import RestaurantSearchDatabase from '../../components/RestaurantSearchDatabase';

import './index.css';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { }
  }

  render () {
    return (
      <div className="body-container">
         <div className="body">
           <RestaurantSearchDatabase params={this.props.params}/>
         </div>
      </div>

      )
  }
}

export default SearchPage;
