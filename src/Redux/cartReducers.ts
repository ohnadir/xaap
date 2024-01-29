import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: number;
    quantity: number;
}
  
interface CartState {
    cart: CartItem[];
}
  
const initialState: CartState = {
    cart: [],
};


export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        //  Actions for adding items to the cart.
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const itemPresent = state.cart.find(
            (item) => item.id === action.payload.id
            );
            if (itemPresent) {
                itemPresent.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },

        //  Action to remove an item from the cart.
        removeFromCart: (state, action: PayloadAction<CartItem>) => {
            const removeItem = state.cart.filter(
            (item) => item.id !== action.payload.id
            );
            state.cart = removeItem;
        },
        
        // Action to increment Quantity an item from the cart.
        incrementQuantity: (state, action: PayloadAction<CartItem>) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            if (itemPresent) {
                itemPresent.quantity++;
            }
        },

        // Action to decrement Quantity an item from the cart.
        decrementQuantity: (state, action: PayloadAction<CartItem>) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            if (itemPresent) {
                if (itemPresent.quantity === 1) {
                    const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
                    state.cart = removeItem;
                } else {
                    itemPresent.quantity--;
                }
            }
        },
        cleanCart:(state) => {
            state.cart = [];
        }
    },
});
  
  
export const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    cleanCart
} = CartSlice.actions;
export default CartSlice.reducer