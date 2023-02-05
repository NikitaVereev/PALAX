import { createSlice } from '@reduxjs/toolkit'

interface IState {
	id: number
	name: string
	price: number
}
interface IStateParams {
	itemsInCart: IState[]
}

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		itemsInCart: [],
	} as IStateParams,
	reducers: {
		setItemInCart: (state, action) => {
			state.itemsInCart.push(action.payload)
		},
		deleteItemFromCart: (state, action) => {
			state.itemsInCart = state.itemsInCart.filter(
				item => item.id !== action.payload
			)
		},
	},
})
export const { setItemInCart, deleteItemFromCart } = cartSlice.actions
export default cartSlice.reducer
