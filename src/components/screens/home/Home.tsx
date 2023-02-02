import { FC } from 'react'
import { productImages } from '../../assets/slides'
import Carousel from './carousel/Carousel'
import styles from './Home.module.scss'
import ProductDescription from './product-description/ProductDescription'
import ProductPrice from './product-price/ProductPrice'

const Home: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Carousel images={productImages} />
			<div className={styles.flexCol}>
				<ProductPrice />
				<ProductDescription />
			</div>
		</div>
	)
}

export default Home
