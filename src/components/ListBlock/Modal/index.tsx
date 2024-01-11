import React from 'react'
import styles from './Modal.module.css'
import { ListModal } from '..'
import { motion } from 'framer-motion'
import gsap from 'gsap'

interface IModal {
	list: { desc?: string; str: string; text: string; img?: string }[]
	modal: ListModal
}

const scaleAnim = {
	initial: { scale: 0, x: '-50%', y: '-50%' },
	open: {
		scale: 1,
		x: '-50%',
		y: '-50%',
		transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
	},
	closed: {
		scale: 0,
		x: '-50%',
		y: '-50%',
		transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] }
	}
}

const Modal: React.FC<IModal> = ({ modal, list }) => {
	const { active, index } = modal
	const modalContainer = React.useRef(null)

	React.useEffect(() => {
		let xMoveContainer = gsap.quickTo(modalContainer.current, 'left', {
			duration: 0.8,
			ease: 'power3'
		})
		let yMoveContainer = gsap.quickTo(modalContainer.current, 'top', {
			duration: 0.8,
			ease: 'power3'
		})

		window.addEventListener('mousemove', e => {
			const { pageX, pageY } = e

			xMoveContainer(pageX)
			yMoveContainer(pageY)
		})
	}, [])

	return (
		<motion.div
			ref={modalContainer}
			variants={scaleAnim}
			initial={'initial'}
			animate={active ? 'open' : 'closed'}
			className={styles.modalContainer}
		>
			<div style={{ top: index * -100 + '%' }} className={styles.modalSlider}>
				{list.map((item, i) => (
					<div key={i} className={styles.modal}>
						<img src={item.img} alt={item.text} />
					</div>
				))}
			</div>
		</motion.div>
	)
}

export default Modal
