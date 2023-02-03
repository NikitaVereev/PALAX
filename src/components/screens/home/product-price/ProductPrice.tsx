import { FC } from 'react'
import Button from '../../../ui/button/Button'
import styles from './ProductPrice.module.scss'
import Plus from '../../../assets/images/plus.svg'

const ProductPrice: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<p>ITEM NAME</p>
				<p>$235.00</p>
			</div>
			<div className={styles.buttons}>
				<Button className={styles.personalise}>Personalise</Button>
				<Button className={styles.add}>
					Add to Cart{' '}
					<span>
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
