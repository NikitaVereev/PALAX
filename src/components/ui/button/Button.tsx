import { FC } from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'

type IChildren = {
	children?: React.ReactNode
	className?: string
	//Не забыть исправить
	onClick?: any
}

const Button: FC<IChildren> = ({ className, children, onClick }) => {
	return (
		<button onClick={onClick} className={cn(className, styles.button)}>
			{children}
		</button>
	)
}

export default Button
