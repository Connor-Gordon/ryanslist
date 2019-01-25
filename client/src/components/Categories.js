

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategories } from '../actions/listings';

import '../styles/styles.css'


class Categories extends Component {
    componentDidMount() {
        getCategories()
    }

  render() {
    return (
        <Fragment>
            <div className="main">
                <div id="leftSideBar">
                    <h3>Ryan's List</h3>
                    <p><a href="/">my account</a></p>
                    <input type='text' placeholder="search ryanslist"></input>
                    <div>event calender</div>
                    <div >
                        <ul id="calender">
                            <li className="calender">M</li> <li className="calender">T</li> <li className="calender">W</li> <li className="calender">T</li> <li className="calender">F</li> <li className="calender">S</li> <li className="calender">S</li>
                            <li className="calender">1</li> <li className="calender">2</li> <li className="calender">3</li> <li className="calender">4</li> <li className="calender">5</li> <li className="calender">6</li> <li className="calender">7</li>
                            <li className="calender">8</li> <li className="calender">9</li> <li className="calender">10</li> <li className="calender">11</li> <li className="calender">12</li> <li className="calender">13</li> <li className="calender">14</li>
                            <li className="calender">15</li> <li className="calender">16</li> <li className="calender">17</li> <li className="calender">18</li> <li className="calender">19</li> <li className="calender">20</li> <li className="calender">21</li>
                            <li className="calender">22</li> <li className="calender">23</li> <li className="calender">24</li> <li className="calender">25</li> <li className="calender">26</li> <li className="calender">27</li> <li className="calender">28</li>

                        </ul>
                    </div>
                    <ul className="leftLinks">
                        <li><a href="/">help,faq,abuse,legal</a></li>
                        <li><a href="/">avoid scams & fraud</a></li>
                        <li><a href="/">personal safety tips</a></li>
                        <li><a href="/">terms of use</a></li>
                        <li><a href="/">privacy policy</a></li>
                        <li><a href="/">system status</a></li>
                    </ul>
                    <ul className="lefLinks">
                        <li><a href="/">about ryanslist</a></li>
                        <li><a href="/">ryanslist is hiring in sf</a></li>
                        <li><a href="/">ryanslist open source</a></li>
                        <li><a href="/">ryanslist blog</a></li>
                        <li><a href="/">best-of-ryanslist</a></li>
                        <li><a href="/">ryanslist TV</a></li>
                        <li><a href="/">"ryanslist joe"</a></li>
                        <li><a href="/">ryan connects</a></li>
                    </ul>
                </div>
                <div className="mainDisplay">
                    <div id="cityName">las vegas</div>
                    <div className="categoryDisplay">
                    {this.props.categories.map(category => (
                        // for the results that passed filter, list the categories, and grab their children and list them too
                        <div className="parent_cat" key={'category' + category.id}>
                            <h3><Link to={'/' + category.slug}>{category.name}</Link></h3>
                            <ul>
                                {category.children.map(cat => (
                                    <li key={'category' + cat.id}><Link to={"/" + cat.slug}>{cat.name}</Link></li>
                                ))}
                            </ul>
                        </div>    
                    ))}
                    </div>
                </div>
                <div id="rightSideBar">
                    <div id="selectBox">
                        <select name="language">
                            <option>dansk</option>
                            <option>deutsch</option>
                            <option>english</option>
                            <option>francais</option>
                            <option>italiano</option>
                            <option>portugues</option>
                        </select>
                    </div>
                    <div>nearby cl</div>
                    <div className="cities">
                        <ul>
                            <li><a href="/">bakersfield</a></li>
                            <li><a href="/">elko</a></li>
                            <li><a href="/">flagstaff</a></li>
                            <li><a href="/">fresno</a></li>
                            <li><a href="/">gold country</a></li>
                            <li><a href="/">hanford</a></li>
                            <li><a href="/">imperial co</a></li>
                            <li><a href="/">inland empire</a></li>
                            <li><a href="/">los angeles</a></li>
                            <li><a href="/">merced</a></li>
                            <li><a href="/">modesto</a></li>
                            <li><a href="/">mohave co</a></li>
                            <li><a href="/">orange co</a></li>
                            <li><a href="/">palm springs</a></li>
                            <li><a href="/">phoenix</a></li>
                            <li><a href="/">prescott</a></li>
                            <li><a href="/">provo</a></li>
                            <li><a href="/">reno</a></li>
                            <li><a href="/">salt lake</a></li>
                            <li><a href="/">san diego</a></li>
                            <li><a href="/">san luis obispo</a></li>
                            <li><a href="/">santa barbara</a></li>
                            <li><a href="/">santa maria</a></li>
                            <li><a href="/">show low</a></li>
                            <li><a href="/">st george</a></li>
                            <li><a href="/">stockton</a></li>
                            <li><a href="/">tijuana</a></li>
                            <li><a href="/">venture</a></li>
                            <li><a href="/">visalia-tulare</a></li>
                            <li><a href="/">yuma</a></li>
                        </ul>
                        <ul>
                            <li><a href="/">us cities</a></li>
                            <li><a href="/">us states</a></li>
                            <li><a href="/">canada</a></li>
                            <li><a href="/">cl worldwide</a></li>
                        </ul>
                    </div>             
                    
                </div>
            </div>
        </Fragment>
    )
  }
}

function mapStateToProps(appState) {
    return {
        // only grab categories for this particular page, that dont have a parent id, if no parent id set to categories
        categories: appState.listingsReducer.categories.filter(category => {
            return category.parent_id == null
        })
    }
}

export default connect(mapStateToProps)(Categories)
