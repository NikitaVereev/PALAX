import { FC, useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { messenger } from './header.data'
import styles from './Header.module.scss'
import themeLight from '../../assets/images/theme.svg'
import themeDark from '../../assets/images/themeDark.svg'
import searchLight from '../../assets/images/searchLight.svg'
import searchDark from '../../assets/images/searchDark.svg'

import Basket from './basket/Basket'

const Header: FC = () => {
	const { theme, setTheme } = useTheme()

	const [isImage, setIsImage] = useState(false)

	const handleLightThemeClick = () => {
		setTheme('light')
		setIsImage(false)
	}
	const handleDarkThemeClick = () => {
		setTheme('dark')
		setIsImage(true)
	}

	return (
		<div className={styles.header}>
			<nav className={styles.wrapper}>
				<ul>
					<li className='active'>
						<a href=''>Shop</a>
					</li>
					<li className='active'>
						<a href=''>Discover</a>
					</li>
				</ul>
				<ul>
					<li className={styles.logo}>
						<h1>COMPANY</h1>
					</li>
					<li className={styles.search}>
						<div>
							<input type='text' placeholder='Search' />

							<img src={isImage ? searchDark : searchLight} alt='search' />
						</div>
					</li>

					<li className={styles.cart}>
						<Basket />
					</li>
				</ul>
				<ul>
					{messenger.map((item: any, idx: number) => (
						<li key={idx} className={styles.message}>
							<img src={isImage ? item.hover : item.image} alt='item.name' />
						</li>
					))}

					<li onClick={isImage ? handleLightThemeClick : handleDarkThemeClick}>
						<img src={isImage ? themeDark : themeLight} alt='dark' />
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Header
