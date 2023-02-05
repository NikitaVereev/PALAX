import React, { useRef } from 'react'
import searchLight from '../../assets/images/searchLight.svg'
import searchDark from '../../assets/images/searchDark.svg'
import styles from './Search.module.scss'

export default function Search({ isImage }: never) {
	const [value, setValue] = React.useState('')
	const handleSubmit = (e: any) => {
		// Prevent the browser from reloading the page
		e.preventDefault()

		// Read the form data
		const form = e.target
		const formData = new FormData(form)

		// You can pass formData as a fetch body directly:
		fetch('/some-api', { method: form.method, body: formData })

		// Or you can work with it as a plain object:
		const formJson = Object.fromEntries(formData.entries())
		console.log(formJson)
	}

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
					id='dfd'
					onChange={e => {
						setValue(e.target.value)
					}}
					placeholder='Search...'
					type='text'
					name='search'
				/>
				<button type='submit'>
					<img src={isImage ? searchDark : searchLight} alt='search' />
				</button>
			</form>
		</div>
	)
}
