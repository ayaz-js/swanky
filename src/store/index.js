import { createStore, combineReducers } from 'redux'
import { popupReducer } from "./reducers/popupReducer"
import { productReducer } from "./reducers/productsReducer"
import { loaderReducer } from "./reducers/loaderReducer"

const rootReducer = combineReducers({
  popup: popupReducer,
  products: productReducer,
  loader: loaderReducer
})
export const store = createStore(rootReducer)
