import { FC } from 'react'
import { productImages } from '../../assets/slides'
import { product } from '../../data/product.data'
import Carousel from './carousel/Carousel'
import styles from './Home.module.scss'
import ProductDescription from './product-description/ProductDescription'
import ProductPrice from './product-price/ProductPrice'

const Home: FC = () => {
	return (
		<>
			{product.map(products => (
				<div className={styles.wrapper} key={products.id}>
					<Carousel images={productImages} />
					<div className={styles.flexCol}>
						<ProductPrice
							//@ts-ignore
							products={products}
						/>
						<ProductDescription />
					</div>
				</div>
			))}
		</>
	)
}

export default Home
