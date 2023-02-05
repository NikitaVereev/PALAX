import { FC } from 'react'
import styles from './ProductDescription.module.scss'
import { useState } from 'react'
import Select, { components } from 'react-select'
import '../../../../styles/react-select.scss'
import Image from '../../../assets/images/showLess.svg'

const ProductDescription: FC = () => {
	const DropdownIndicator = (props: any) => {
		return (
			<components.DropdownIndicator {...props}>
				<svg
					width='22'
					height='22'
					viewBox='0 0 22 22'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M2.10498 12.5757L1.021 11.4917C0.562011 11.0327 0.562011 10.2905 1.021 9.83642L10.5083 0.344237C10.9673 -0.114747 11.7095 -0.114747 12.1636 0.344237L21.6558 9.83643C22.1147 10.2954 22.1147 11.0376 21.6558 11.4917L20.5718 12.5757C20.1079 13.0396 19.3511 13.0298 18.897 12.5562L13.2915 6.67236L13.2915 20.7056C13.2915 21.355 12.769 21.8774 12.1196 21.8774L10.5571 21.8774C9.90771 21.8774 9.38525 21.355 9.38525 20.7056L9.38525 6.67236L3.77978 12.5562C3.32568 13.0347 2.56885 13.0444 2.10498 12.5757Z' />
				</svg>
			</components.DropdownIndicator>
		)
	}

	const options = [
		{ value: 'steel', label: 'Steel' },
		{ value: 'plastic', label: 'Plastic' },
		{ value: 'tree', label: 'Tree' },
	]
	return (
		<div className={styles.wrapper}>
			<Select
				components={{ DropdownIndicator }}
				className={styles.select}
				options={options}
				placeholder={'Material'}
			/>
			<Select
				className={styles.select}
				components={{ DropdownIndicator }}
				options={options}
				placeholder={'Dimensions'}
			/>
		</div>
	)
}

export default ProductDescription
