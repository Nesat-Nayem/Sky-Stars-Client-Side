import axios from "axios"

export const ADD_SERVICE = "ADD_SERVICE"
export const ADD_REVIEW = "ADD_REVIEW"

export const addService = (payload) => {
  return {
    type: ADD_SERVICE,
    payload
  }
}
export const addReview = (payload) => {
  return {
    type: ADD_REVIEW,
    payload
  }
}

export const getAddedService = (service) => {
  return (dispatch) => {
    axios.post('http://localhost:5000/addService', service)
      .then(res => {
        dispatch(addService(res.data))
      })
      .catch(error => {
        console.log(error.message)
      })
  }
}
export const getAddedReview = (review) => {
  return (dispatch) => {
    axios.post('http://localhost:5000/addReview', review)
      .then(res => {
        dispatch(addReview(res.data))
      })
      .catch(error => {
        console.log(error.message)
      })
  }
}