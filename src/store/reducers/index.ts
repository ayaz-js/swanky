import { combineReducers } from "redux"
import { popupReducer } from "./popupReducer"
import { productReducer } from "./productsReducer"
import { loaderReducer } from "./loaderReducer"

export const rootReducer = combineReducers({
    popup: popupReducer,
    products: productReducer,
    loader: loaderReducer
})

export type RootState = ReturnType<typeof rootReducer>
