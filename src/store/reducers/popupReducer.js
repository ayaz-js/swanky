const initialState = {
  showImageModal: false,
  showOrderModal: false,
  cardData: null
}

export const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "showImageModal":
      return { ...state, showImageModal: true, cardData: action.payload }

    case "showOrderModal":
      return { ...state, showOrderModal: true, cardData: action.payload  }

    case "resetModals":
      return { ...state, ...initialState }

    default: return state
  }
}
