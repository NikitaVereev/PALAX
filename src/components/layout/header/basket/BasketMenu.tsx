import { FC } from 'react'
import { calcTotalPrice } from '../../../utils/calcPrice'
import styles from './Basket.module.scss'

const BasketMenu: FC = ({ items }: any) => {
	return (
		<div>
			<div className={styles.head}>Basket</div>
			<div className={styles.items}>
				{items.length > 0 ? items.map((item: any) => item.name) : 'Go to shop!'}
			</div>
			{items.length > 0 ? (
				<div>
					<div>
						<span>Total:</span>
						<span>${calcTotalPrice(items)}</span>
					</div>
				</div>
			) : null}
		</div>
	)
}

export default BasketMenu
