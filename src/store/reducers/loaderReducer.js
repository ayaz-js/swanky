const initialState = {
  isLoading: false
};

export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "isLoading":
      return { ...state, isLoading: true }

    case "resetLoading":
      return { ...state, ...initialState }

    default: return state
  }
}
