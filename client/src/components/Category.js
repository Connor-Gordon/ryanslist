
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategory } from '../actions/listings'

class Category extends Component {
    componentDidMount(){
        getCategory(this.props.match.params.slug)
    }

    componentWillReceiveProps(newProps) {
        if(newProps.match.params.slug !== this.props.match.params.slug){
            getCategory(newProps.match.params.slug)
        }
    }

  render() 
  {
    return (
      <div>
          {this.props.categoryName}
          <Link to={"/create/" + this.props.slug}>Create New Post</Link>
          <div>
              <ul>
                {this.props.listings.map(listing => (
                    <li key={'listing' + listing.id}><Link to={'/listing/'+ listing.id}>{listing.name}</Link></li>
                ))}
              </ul>
          </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
    return {
        categoryName: appState.listingsReducer.currentCategory.category.name,
        slug: appState.listingsReducer.currentCategory.category.slug,
        listings: appState.listingsReducer.currentCategory.listings
    }
}

export default connect(mapStateToProps)(Category)
