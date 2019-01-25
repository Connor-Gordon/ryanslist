

import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = '/api'

//
// get categories
//

export function getCategories() {
  var promise = new Promise((resolve, reject) => {
     axios.get('/categories').then(resp => {
      store.dispatch({
        type: 'GET_CATEGORIES',
        payload: resp.data
      })
      resolve()
    })
  })
  return promise
}

//
// post to a listing
//

export function createPost(post) {
  return axios.post('/listings', post)
}

//
// get individual category
// if i decide to load page (or refresh) double check to see if I have categories to make sure my actions runs in order
// if i dont have categories, go get categories first then run getCat and if we do then just run getCat
//

export function getCategory(slug) {
  if (store.getState().listingsReducer.categories.length === 0) {
    getCategories().then(() => getCat(slug))
  } else {
    getCat(slug)
  }
}



function getCat(slug){
  axios.get('/listings/' + slug).then(resp => {
    store.dispatch({
      type: "GET_CATEGORY",
      payload: {
        slug: slug,
        listings: resp.data
      }
    })
  })
}

export function getListing(id) {
  axios.get('/listing/' + id).then(resp => {
    store.dispatch({
      type: "GET_LISTING",
      payload: resp.data[0]
    })
  })
}