import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserState {
    value: number
}

const initialState: UserState = {
    value: 0
}

export const userSlice = createSlice({
    name: "user",
    initialState, // initialState: initialState
    reducers: {
        change: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        }
    }
})

export const { change } = userSlice.actions


// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user.value
export default userSlice.reducer