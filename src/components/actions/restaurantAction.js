const addRestaurant = (restaurant) => {
  return {
       type: "ADD_RESTAURANT",
       restaurant
   }
} 

const deleteRestaurant = id => {
    return {
        type: "DELETE_RESTAURANT",
        id
    }
}

const addReview = (payload) => {
    return {
        type: "ADD_REVIEW",
        payload
    }
}

const deleteReview = id => {
    return {
        type: "DELETE_REVIEW",
        id
    }
}
const editReview = review => {
    return {
        type: "EDIT_REVIEW",
        review
    }
}

const editRestaurant = restaurant => {
    return {
        type: "EDIT_RESTAURANT",
        restaurant
    }
}
export { addRestaurant, deleteRestaurant, addReview, deleteReview, editReview, editRestaurant}