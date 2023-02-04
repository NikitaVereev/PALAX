import React from 'react'
import searchLight from '../../assets/images/searchLight.svg'
import searchDark from '../../assets/images/searchDark.svg'
import styles from './Search.module.scss'

export default function App() {
	const [value, setValue] = React.useState('')
	return (
		<div className={styles.search}>
			<form
				onSubmit={e => {
					console.log('SUBMIT')
					e.preventDefault()
				}}
			>
				<input
					value={value}
					onChange={e => {
						setValue(e.target.value)
					}}
					type='text'
					name='hash'
				/>
				<button type='submit'>submit</button>
			</form>
		</div>
	)
}
