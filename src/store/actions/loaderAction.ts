import { Types } from "../types"
export const handleLoading = ():Types => ({
  type: "IS_LOADING",
})

export const resetLoading = ():Types => ({
  type: "RESET_LOADING",
})
