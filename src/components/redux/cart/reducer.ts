import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		itemsInCart: [],
	},
	reducers: {
		setItemInCart: (state: any, action: any) => {
			state.itemsInCart.push(action.payload)
		},
		deleteItemFromCart: (state: any, action: any) => {
			state.itemsInCart = state.itemsInCart.filter(
				(item: any) => item.id !== action.payload
			)
		},
	},
})
export const { setItemInCart, deleteItemFromCart } = cartSlice.actions
export default cartSlice.reducer
