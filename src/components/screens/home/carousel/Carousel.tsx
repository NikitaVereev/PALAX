import { useRef, useState } from 'react'

import styles from './Carousel.module.scss'

const Carousel = (props: any) => {
	const [isImage, setIsImage] = useState(
		'http://localhost:3000/static/media/slider01.195daa5490fe96157df1.jpg'
	)
	const handleClick = (event: any) => {
		setIsImage(event.target.src)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.item}>
				<img src={isImage} alt='' />
			</div>
			<div className={styles.left}>
				{props.images.map((item: any, index: number) => (
					<div className={styles.left_content} key={index}>
						<img src={item} alt='product images' onClick={handleClick} />
					</div>
				))}

				<button onClick={() => props.images.slice(0, 3)}>View</button>
			</div>
			LLLl
		</div>
	)
}

export default Carousel
