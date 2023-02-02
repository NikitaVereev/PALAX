import { FC } from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import styles from './Layout.module.scss'
import cn from 'classnames'

type TChildren = {
	children?: React.ReactNode
}

const Layout: FC<TChildren> = ({ children }) => {
	return (
		<>
			<Header />
			<div className={styles.content}>{children}</div>
			<Footer />
		</>
	)
}

export default Layout
