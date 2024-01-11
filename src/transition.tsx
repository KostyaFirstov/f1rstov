import { motion } from 'framer-motion'
import React from 'react'

interface ITransition {
	children: React.ReactNode
}

const Transition: React.FC<ITransition> = ({ children }) => {
	const anim = (variants: any, custom: number) => {
		return {
			initial: 'initial',
			animate: 'enter',
			exit: 'exit',
			variants,
			custom
		}
	}

	const expand = {
		initial: {
			top: 0
		},
		enter: (i: number) => ({
			top: '100%',
			transition: {
				duration: 0.34,
				delay: 0.05 * i
			},
			transitionEnd: {
				height: 0,
				top: 0
			}
		}),
		exit: (i: number) => ({
			height: '100%',
			transition: {
				duration: 0.34,
				delay: 0.05 * i
			}
		})
	}

	const nbOfColumns = 5

	return (
		<motion.div className='page__stairs'>
			<div className='transition__container'>
				{[...Array(nbOfColumns)].map((_, i) => (
					<motion.div
						{...anim(expand, nbOfColumns - i)}
						className='transition__item'
						key={i}
					></motion.div>
				))}
			</div>
			{children}
		</motion.div>
	)
}

export default Transition
