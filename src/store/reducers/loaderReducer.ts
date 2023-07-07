import { ILoaderActionType, ILoaderTypes } from "../types"

const initialState: ILoaderTypes = {
  isLoading: false
};

const IS_LOADING = "IS_LOADING"
const RESET_LOADING = "RESET_LOADING"

export const loaderReducer = (state = initialState, action: ILoaderActionType): ILoaderTypes => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: true }

    case RESET_LOADING:
      return { ...state, ...initialState }

    default: return state
  }
}
