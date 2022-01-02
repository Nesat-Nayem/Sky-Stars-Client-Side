import { ADD_REVIEW, ADD_SERVICE } from "./serviceAction"

const initialState = {
  loading: false,
  services: []
}

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERVICE:
    case ADD_REVIEW: return {
      ...state,
      loading: false
    }
    default: return {
      ...state
    }
  }
}

export default serviceReducer;