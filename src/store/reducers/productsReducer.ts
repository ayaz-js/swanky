const initialState: {}[] = [];

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "products":
      return { ...state, products: action.payload }

    case "resetProducts":
      return { ...state, products: [] }

    default: return state
  }
}
