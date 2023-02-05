import { FC } from 'react'
import { facebook, favorites, instagram } from '../../assets/icons'
import styles from './Header.module.scss'

const Messages: FC = () => {
	return (
		<>
			<li className={styles.message}>
				<svg
					width='22'
					height='22'
					viewBox='0 0 22 22'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d={facebook} />
				</svg>
			</li>
			<li className={styles.message}>
				<svg
					width='22'
					height='22'
					viewBox='0 0 22 22'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d={instagram} />
				</svg>
			</li>
			<li className={styles.message}>
				<svg
					width='25'
					height='22'
					viewBox='0 0 25 22'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d={favorites} />{' '}
				</svg>
			</li>
		</>
	)
}

export default Messages
