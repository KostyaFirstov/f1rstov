import React from 'react'
import styles from './Options.module.css'

interface IOptions {
	list: string[]
	active: number
	setActive: (param: ActiveParams) => void
}

type ActiveParams = {
	active: number
	name: string
}

const Options: React.FC<IOptions> = ({ active, list, setActive }) => {
	const onSetActive = (item: string, i: number) => {
		setActive({ active: i, name: item })
	}

	return (
		<ul className={styles.options}>
			{list.map((item, i) => (
				<li
					key={i}
					onClick={() => onSetActive(item, i)}
					className={active === i ? styles.option_active : styles.option}
				>
					{item}
				</li>
			))}
		</ul>
	)
}

export default Options
