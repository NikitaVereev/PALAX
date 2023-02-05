import { FC, useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import styles from './Header.module.scss'

import Basket from './basket/Basket'
import Search from '../../ui/search/Search'
import Menu from './mobile-menu/Menu'
import { mode } from '../../assets/icons'
import Messages from './Messages'

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
						<a href='' data-title='Shop'>
							Shop
						</a>
					</li>
					<li className='active'>
						<a href='' data-title='Discover'>
							Discover
						</a>
					</li>
				</ul>
				<ul>
					<li className={styles.logo}>
						<h1>COMPANY</h1>
					</li>
					<li className={styles.search}>
						<Search
							//@ts-ignore
							isImage={isImage}
						/>
					</li>

					<li className={styles.cart}>
						<Basket />
					</li>
				</ul>
				<ul>
					<Messages />

					<li onClick={isImage ? handleLightThemeClick : handleDarkThemeClick}>
						<svg
							width='25'
							height='25'
							viewBox='0 0 25 25'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d={mode} />{' '}
						</svg>
					</li>
					<li className={styles.menu}>
						<Menu />
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Header
