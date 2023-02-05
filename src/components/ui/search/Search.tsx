import React, { useState, useEffect, useRef } from 'react'
import useOutsideAlerter from '../../hooks/useOutsideAlert'
import styles from './Search.module.scss'
import cn from 'classnames'
import { search } from '../../assets/icons'

export default function App({ isImage }: never) {
	const [value, setValue] = useState<string>('')
	const [active, setActive] = useState<string>('')
	const [isData, setIsData] = useState<
		//@ts-ignore
		Array[]
	>(() => {
		const data = localStorage.getItem('isData')
		// Что бы typeScript не ругался, проверим на тип
		if (typeof data === 'string') {
			return JSON.parse(data)
		} else {
			return []
		}
	})
	const { ref, isShow, setIsShow } = useOutsideAlerter(false)
	const inputRef = useRef<HTMLInputElement>(null)

	const handleEvent: React.ChangeEventHandler<HTMLInputElement> = e => {
		setValue(e.target.value)
	}

	const addTodo = () => {
		setIsData([
			...isData,
			{
				data: value,
			},
		])
		setValue('')
	}

	useEffect(() => {
		const data = localStorage.getItem('isData')
		if (typeof data === 'string') {
			setIsData(JSON.parse(data))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('isData', JSON.stringify(isData))
	}, [isData])

	return (
		<div className={styles.search} ref={ref} onClick={() => setActive('')}>
			<div className={styles.searchInside}>
				<div
					onClick={() => setActive('active')}
					className={cn({ [styles.active]: active === 'active' })}
				>
					<input
						placeholder='Search...'
						value={value}
						onChange={handleEvent}
						ref={inputRef}
						onClick={() => setIsShow(!isShow)}
					/>
					<button onClick={addTodo}>
						<svg
							width='19'
							height='19'
							viewBox='0 0 19 19'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d={search} />
						</svg>
					</button>
				</div>
			</div>
			{isShow && (
				<div className={styles.menu}>
					{isData.map((i, idx) => (
						<p className='menu' onClick={() => setValue(i.data)} key={idx}>
							{i.data}
						</p>
					))}
				</div>
			)}
		</div>
	)
}
