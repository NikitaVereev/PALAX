import { useState } from 'react'
import cn from 'classnames'
import styles from './Carousel.module.scss'
import showLess from '../../../assets/images/showLess.svg'

const Carousel = (props: any) => {
	const [isImage, setIsImage] = useState(
		'	http://localhost:3000/static/media/item1.a7970a020aae2203abe5.png'
	)
	const [show, setShow] = useState(false)

	const handleClick = (event: any) => {
		setIsImage(event.target.src)
		console.log(event.target)
	}

	return (
		<div className={styles.wrapper}>
			<div className={cn(styles.sideImage)}>
				{!show
					? props.images
							.map((item: any, index: number) => (
								<div className={styles.items} key={index}>
									<img src={item} alt='product images' onClick={handleClick} />
								</div>
							))
							.slice(0, 2)
					: props.images.map((item: any, index: number) => (
							<div className={styles.left_content} key={index}>
								<img src={item} alt='product images' onClick={handleClick} />
							</div>
					  ))}
			</div>
			{show ? (
				<button className={styles.showLess}>
					<img src={showLess} onClick={() => setShow(!show)} alt='show less' />
				</button>
			) : (
				<button onClick={() => setShow(!show)} className={styles.showMore}>
					View
				</button>
			)}
			<div className={styles.item}>
				<img src={isImage} alt='product images' />
			</div>
		</div>
	)
}

export default Carousel
