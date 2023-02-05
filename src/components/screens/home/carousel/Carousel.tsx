import { useState } from 'react'
import cn from 'classnames'
import styles from './Carousel.module.scss'
import showLess from '../../../assets/images/showLess.svg'

const Carousel = (props: any) => {
	const [isImage, setIsImage] = useState(
		'/static/media/item1.be728c53d8d7e65732b8.png'
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
				{show ? (
					<button className={styles.showLess}>
						<svg
							onClick={() => setShow(!show)}
							width='22'
							height='22'
							viewBox='0 0 22 22'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M2.10498 12.5757L1.021 11.4917C0.562011 11.0327 0.562011 10.2905 1.021 9.83642L10.5083 0.344237C10.9673 -0.114747 11.7095 -0.114747 12.1636 0.344237L21.6558 9.83643C22.1147 10.2954 22.1147 11.0376 21.6558 11.4917L20.5718 12.5757C20.1079 13.0396 19.3511 13.0298 18.897 12.5562L13.2915 6.67236L13.2915 20.7056C13.2915 21.355 12.769 21.8774 12.1196 21.8774L10.5571 21.8774C9.90771 21.8774 9.38525 21.355 9.38525 20.7056L9.38525 6.67236L3.77978 12.5562C3.32568 13.0347 2.56885 13.0444 2.10498 12.5757Z' />
						</svg>
					</button>
				) : (
					<button onClick={() => setShow(!show)} className={styles.showMore}>
						View
					</button>
				)}
			</div>

			<div className={styles.item}>
				<img src={isImage} alt='product images' />
			</div>
		</div>
	)
}

export default Carousel
