import { FC } from 'react'
import useOutsideAlerter from '../../../hooks/useOutsideAlert'
import { useSelector } from 'react-redux'

import styles from './Basket.module.scss'
import cn from 'classnames'
import BasketMenu from './BasketMenu'

const Basket: FC = () => {
	const { ref, isShow, setIsShow } = useOutsideAlerter(false)
	const items = useSelector((state: any) => state.cart.itemsInCart)
	const totalPrice = items.reduce(
		(acc: any, products: any) => (acc += products.price),
		0
	)
	let quantity = items.length
	return (
		<>
			<p onClick={() => setIsShow(!isShow)}>
				Cart <span>{quantity}</span>
			</p>
			{isShow && (
				<div ref={ref} className={cn(styles.basket, isShow ? 'open' : '')}>
					<BasketMenu
						//@ts-ignore

						items={items}
					/>
				</div>
			)}
		</>
	)
}

export default Basket
