import { FC, useState } from 'react'
import Messages from '../Messages'

import styles from './Menu.module.scss'

const Menu: FC = () => {
	const [open, setOpen] = useState(false)
	return (
		<div>
			<button onClick={() => setOpen(!open)}>x</button>
			<ul className={styles.menu}>
				{open && <Messages />}
				{open && (
					<>
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
					</>
				)}
			</ul>
		</div>
	)
}

export default Menu
