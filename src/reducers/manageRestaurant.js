import cuid from 'cuid';

export default function manageRestaurants(state= {restaurants: [], reviews: []}, action) {
    let idx
    let restaurantId
    let reviewId 
    switch(action.type) {
        case "ADD_RESTAURANT":
            const restaurant = {
                id: cuid(),
                text: action.restaurant.text
            }
            return {...state, restaurants: [...state.restaurants, restaurant]}
        case "DELETE_RESTAURANT":
            idx = state.restaurants.findIndex(restaurant => restaurant.id === action.id)
            return {...state, restaurants: [...state.restaurants.slice(0, idx), ...state.restaurants.slice(idx + 1)]}
        case "EDIT_RESTAURANT":
            const restaurants = [...state.restaurants] 
            idx = restaurants.findIndex(restaurant => restaurant.id === action.restaurant.id)
            restaurants[idx] = action.restaurant 
            return {...state, restaurants} 
            
        case "ADD_REVIEW":
            restaurantId = action.payload.restaurantId 
            const text = action.payload.text 
            const review = {
                id: cuid(),
                restaurantId,
                text
            }
            return {...state, reviews: [...state.reviews, review]}
        case "DELETE_REVIEW":
            idx = state.reviews.findIndex(review => review.id === action.id)
            return {...state, reviews: [...state.reviews.slice(0, idx), ...state.reviews.slice(idx + 1)]}
        case "EDIT_REVIEW":
            
            const reviews = [...state.reviews] 
            idx = reviews.findIndex(review => review.id === action.review.id)
            reviews[idx] = action.review 
            return {...state, reviews} 
        default:
            return state 
    }
}
