import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: number;
    title: string;
}
  
interface UserState {
    user: User | null; // Change here to use User or null if it can be empty initially
}
  
const initialState: UserState = {
    user: null, // Use null or a default User object depending on your requirements
};

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //  Actions for adding items to the cart.
        register: (state, action: PayloadAction<User>) => {
            const {} = action.payload;
        },

        //  Action to remove an item from the cart.
        login: (state, action: PayloadAction<User>) => {
            const {} = action.payload;
        },
        
        // Action to increment Quantity an item from the cart.
        update: (state, action: PayloadAction<User>) => {
            const {} = action.payload;
        },

        // Action to decrement Quantity an item from the cart.
        changePassword: (state, action: PayloadAction<User>) => {
            const {} = action.payload;
        },
        cleanCart:(state) => {
            state.user = null;
        }
    },
});
  
  
export const {
    register,
    login,
    update,
    changePassword,
    cleanCart
} = UserSlice.actions;
export default UserSlice.reducer