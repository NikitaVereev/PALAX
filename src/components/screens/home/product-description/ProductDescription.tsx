import { FC } from 'react'
import styles from './ProductDescription.module.scss'
import { useState } from 'react'
import cn from 'classnames'
import '../../../../styles/react-select.scss'
import { dimensionsData, optionsData } from '../../../data/options.data'
import { arrow } from '../../../assets/icons'

const ProductDescription: FC = () => {
	const [isThrow, setIsThrow] = useState('')
	const [isDimensions, setIsDimensions] = useState('')
	const [isActiveThrow, setActiveThrow] = useState(0)
	const [isActiveDimensions, setIsActiveDimensions] = useState(0)

	const [isShowThrow, setIsShowThrow] = useState(false)
	const [isShowDimensions, setIsShowDimensions] = useState(false)

	return (
		<div className={styles.wrapper}>
			<div>
				<button
					className={cn(isShowThrow ? styles.active : styles.select)}
					onClick={() => setIsShowThrow(!isShowThrow)}
				>
					{isThrow ? optionsData[isActiveThrow] : 'Throw'}
					<svg
						width='22'
						height='22'
						viewBox='0 0 22 22'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d={arrow} />
					</svg>
				</button>
				{isShowThrow &&
					optionsData.map((option, idx) => (
						<button
							className={styles.select}
							onClick={() => {
								setIsThrow(`${option}`)
								setActiveThrow(idx)
								setIsShowThrow(false)
							}}
							key={idx}
						>
							{option}
						</button>
					))}
			</div>
			<div>
				<button
					className={cn(isShowDimensions ? styles.active : styles.select)}
					onClick={() => setIsShowDimensions(!isShowDimensions)}
				>
					{isDimensions ? dimensionsData[isActiveDimensions] : 'Dimensions'}
					<svg
						width='22'
						height='22'
						viewBox='0 0 22 22'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d={arrow} />
					</svg>
				</button>
				{isShowDimensions &&
					dimensionsData.map((option, idx) => (
						<button
							className={styles.select}
							onClick={() => {
								setIsDimensions(`${option}`)
								setIsActiveDimensions(idx)
								setIsShowDimensions(false)
							}}
							key={idx}
						>
							{option}
						</button>
					))}
			</div>
		</div>
	)
}

export default ProductDescription
