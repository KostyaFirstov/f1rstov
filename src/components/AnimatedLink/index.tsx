import React from 'react'
import styles from './AnimatedLink.module.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export interface ILinkProps {
	path: string
	name: string
	arrow?: boolean
	big?: boolean
}

const AnimatedLink: React.FC<ILinkProps> = ({
	path,
	name,
	arrow = false,
	big = false
}) => {
	const [isHovered, setHovered] = React.useState(false)

	const titleAnimation = {
		rest: {
			transition: {
				staggerChildren: !big ? 0.0054 : 0.01
			}
		},
		hover: {
			transition: {
				staggerChildren: !big ? 0.0054 : 0.01
			}
		}
	}

	const letterAnim = {
		rest: {
			y: 0
		},
		hover: {
			y: '-120%',
			transition: {
				duration: 0.46,
				ease: [0.6, 0.01, 0.05, 0.95],
				type: 'tween'
			}
		}
	}

	const letterAnimTwo = {
		rest: {
			y: '120%'
		},
		hover: {
			y: 0,
			transition: {
				duration: 0.46,
				ease: [0.6, 0.01, 0.05, 0.95],
				type: 'tween'
			}
		}
	}

	return (
		<motion.div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className={styles.link}
		>
			<Link
				to={path}
				className={big ? styles.link__wrapper : styles.link__wrapper_small}
			>
				<motion.span
					variants={titleAnimation}
					initial='rest'
					animate={isHovered ? 'hover' : 'rest'}
					className={styles.wrapper}
				>
					<span>
						{name.split('').map((character, i) =>
							character === ' ' ? (
								<span key={i}>&nbsp;</span>
							) : (
								<motion.span
									key={i}
									variants={letterAnim}
									className={styles.word}
								>
									{character}
								</motion.span>
							)
						)}
					</span>
					<span className={styles.word__bottom}>
						{name.split('').map((character, i) =>
							character === ' ' ? (
								<span key={i}>&nbsp;</span>
							) : (
								<motion.span
									key={i}
									variants={letterAnimTwo}
									className={styles.word}
								>
									{character}
								</motion.span>
							)
						)}
					</span>
				</motion.span>
				{arrow && (
					<span className={styles.arrow}>
						<span className={styles.arrow__top}>
							<svg
								viewBox='0 0 13 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M12.203 1.15947L1.52947 11.833L0.368347 10.6719L11.0419 -0.00165168L12.203 1.15947Z'
									fill='black'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M10.5115 1.68823L2.62414 1.68823L2.62414 0.0461468L12.1536 0.0461551L12.1536 8.99507L10.5116 8.99508L10.5115 1.68823Z'
									fill='black'
								/>
							</svg>
						</span>
						<span className={styles.arrow__bottom}>
							<svg
								viewBox='0 0 13 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M12.203 1.15947L1.52947 11.833L0.368347 10.6719L11.0419 -0.00165168L12.203 1.15947Z'
									fill='black'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M10.5115 1.68823L2.62414 1.68823L2.62414 0.0461468L12.1536 0.0461551L12.1536 8.99507L10.5116 8.99508L10.5115 1.68823Z'
									fill='black'
								/>
							</svg>
						</span>
					</span>
				)}
			</Link>
		</motion.div>
	)
}

export default AnimatedLink
