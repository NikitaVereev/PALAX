import { FC } from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'

type IChildren = {
	children?: React.ReactNode
	className?: string
}

const Button: FC<IChildren> = ({ className, children }) => {
	return <button className={cn(className, styles.button)}>{children}</button>
}

export default Button
