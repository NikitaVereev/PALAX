import { FC } from 'react'
import Button from '../../../ui/button/Button'
import styles from './ProductPrice.module.scss'

const ProductPrice: FC = () => {
	return (
		<div>
			<div className={styles.title}>
				<p>ITEM NAME</p>
				<p>$235.00</p>
			</div>
			<div className={styles.buttons}>
				<Button>Personalise</Button>
				<Button>Add to Cart</Button>
			</div>
			<div className={styles.description}>
				<p>*Free delivery on all orders over USD $50</p>
				<p>*Check availability in boutiques</p>
			</div>
		</div>
	)
}

export default ProductPrice
