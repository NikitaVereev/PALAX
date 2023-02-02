import { FC } from 'react'
import styles from './ProductDescription.module.scss'
import React from 'react'
import Select from 'react-select'
import '../../../../styles/react-select.scss'

const options = [
	{ value: 'steel', label: 'Steel' },
	{ value: 'plastic', label: 'Plastic' },
	{ value: 'tree', label: 'Tree' },
]

const ProductDescription: FC = () => {
	return (
		<div>
			<Select
				className={styles.select}
				options={options}
				placeholder={'Material'}
			/>
			<Select
				className={styles.select}
				options={options}
				placeholder={'Dimensions'}
			/>
		</div>
	)
}

export default ProductDescription
