// since we are going two levels deep, need to set variables beforehand
// in order to getCategory, need categories populated []
const initialState = {
  categories: [],
  currentCategory: {
    category: {},
    listings: []
  },
  currentListing: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return {...state, categories: action.payload}
    case 'GET_CATEGORY':
      return {...state, currentCategory: {
        // based on slug given to me, grab the one category and put into category (currentCategory)
        // and listings is from database
        category: state.categories.find(category => category.slug === action.payload.slug),
        listings: action.payload.listings
      }}
    case "GET_LISTING":
      return {...state, currentListing: action.payload}
    default:
      return state
  }
}
