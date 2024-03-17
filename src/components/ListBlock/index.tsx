import React from 'react'
import styles from './ListBlock.module.css'
import ListItem from './ListItem'
import Modal from './Modal'

export type IList = {
	desc?: string
	str: string
	text?: string
	img?: string
}[]

interface IListBlock {
	desc: string
	list: IList
}

export type ListModal = { active: boolean; index: number }

const ListBlock: React.FC<IListBlock> = ({ desc, list }) => {
	const [modal, setModal] = React.useState<ListModal>({
		active: false,
		index: 0
	})

	return (
		<div className={styles.listWrapper}>
			<div className='content__area'>
				<div className='content__container'>
					<div className='container__grid'>
						<div className='container__item'>
							<span className={styles.desc}>{desc}</span>
						</div>
						<div className='container__item'>
							<ul className={styles.list}>
								{list.map((item, i) => (
									<ListItem key={i} index={i} {...item} setModal={setModal} />
								))}
								{list[0].img && <Modal modal={modal} list={list} />}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ListBlock
