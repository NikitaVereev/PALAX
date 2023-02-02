import { FC } from 'react'

type IChildren = {
	children?: React.ReactNode
}

const Button: FC<IChildren> = ({ children }) => {
	return <button>{children}</button>
}

export default Button
