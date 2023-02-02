import { FC } from 'react'
import { footerData } from './footer.data'
import styles from './Footer.module.scss'

const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			<nav className={styles.wrapper}>
				<ul>
					{footerData.map((item: any, idx: number) => (
						<li key={idx} className='active'>
							<a href=''>{item.name}</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default Footer
