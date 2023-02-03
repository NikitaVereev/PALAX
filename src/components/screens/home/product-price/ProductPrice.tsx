import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../ui/button/Button'
import styles from './ProductPrice.module.scss'
import Plus from '../../../assets/images/plus.svg'
import { deleteItemFromCart, setItemInCart } from '../../../redux/cart/reducer'

const ProductPrice: FC = ({ products }: any) => {
	const dispatch = useDispatch()
	const items = useSelector((state: any) => state.cart.itemsInCart)
	const isItemInCart = items.some((item: any) => item.id === products.id)

	const handleClick = (e: any) => {
		e.stopPropagation()
		if (isItemInCart) {
			dispatch(deleteItemFromCart(products.id))
		} else {
			dispatch(setItemInCart(products))
		}
	}
	const handleCount = (e: any) => {
		e.stopPropagation()

		dispatch(setItemInCart(products))
	}
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<p>ITEM NAME</p>
				<p>${products.price}.00</p>
			</div>
			<div className={styles.buttons}>
				<Button className={styles.personalise}>Personalise</Button>
				<Button className={styles.add} onClick={handleClick}>
					{isItemInCart ? 'Remove from the Cart' : 'Add to Cart'}
					<span onClick={handleCount}>
						<img src={Plus} alt='add to cart' />
					</span>
				</Button>
			</div>
			<div className={styles.description}>
				<p>*Free delivery on all orders over USD $50</p>
				<p>*Check availability in boutiques</p>
			</div>
		</div>
	)
}

export default ProductPrice
