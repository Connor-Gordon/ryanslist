
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getListing} from '../actions/listings'

class Listing extends Component {
    componentDidMount(){
        getListing(this.props.match.params.id)
    }

    componentWillReceiveProps(newProps) {
        if(newProps.match.params.id !== this.props.match.params.id){
            getListing(newProps.match.params.id)
        }
    }

  render() 
  {
    return (
      <div>
          <Link to={"/"}>Go Home</Link>
          <div>{this.props.name}</div>
          <div>{this.props.descript}</div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
    return {
        name: appState.listingsReducer.currentListing.name,
        descript: appState.listingsReducer.currentListing.descript
    }
}

export default connect(mapStateToProps)(Listing)
