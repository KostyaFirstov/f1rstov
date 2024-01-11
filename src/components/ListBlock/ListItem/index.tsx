import React from 'react'
import styles from './ListItem.module.css'
import { ListModal } from '..'

interface IListItem {
	index: number
	desc?: string
	str: string
	text: string
	img?: string
	setModal?: (obj: ListModal) => void
}

const ListItem: React.FC<IListItem> = ({
	index,
	desc,
	text,
	str,
	img,
	setModal
}) => {
	return (
		<>
			{setModal && (
				<li
					onMouseEnter={() => setModal({ active: true, index: index })}
					onMouseLeave={() => setModal({ active: false, index: index })}
					className={styles.item}
				>
					<div className={styles.item__left}>
						{desc && <span className={styles.desc}>{desc}</span>}
						{str}
					</div>
					<div className={styles.item__right}>{text}</div>
				</li>
			)}
		</>
	)
}

export default ListItem
