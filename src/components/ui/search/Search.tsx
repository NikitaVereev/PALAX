import { FC, useEffect, useState } from 'react'
import searchLight from '../../assets/images/searchLight.svg'
import searchDark from '../../assets/images/searchDark.svg'

const Search: FC = ({ isImage }: any) => {
	const [value, setValue] = useState('')
	useEffect(() => {
		localStorage.setItem('Search', JSON.stringify(value))
	}, [value])
	console.log(value)
	return (
		<form onSubmit={e => e.preventDefault()}>
			<input
				value={value}
				onChange={e => setValue(e.target.value)}
				type='text'
				placeholder='Search'
			/>

			<button onSubmit={e => e.preventDefault}>
				<img src={isImage ? searchDark : searchLight} alt='search' />
			</button>
		</form>
	)
}

export default Search
