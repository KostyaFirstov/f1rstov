import React from 'react'
import styles from './SquareLink.module.css'
import { Link } from 'react-router-dom'

interface SquareLinkProps {
	link: string
	name: string
	white?: true
}

const SquareLink: React.FC<SquareLinkProps> = ({ link, name, white }) => {
	return (
		<Link to={link} className={white ? styles.link : styles.link_black}>
			{name}
			<span>
				<svg
					width='13'
					height='12'
					viewBox='0 0 13 12'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M12.2028 1.16729L1.52929 11.8408L0.368164 10.6797L11.0417 0.00616082L12.2028 1.16729Z'
						fill='white'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M10.5121 1.69605L2.62475 1.69604L2.62475 0.0539593L12.1542 0.0539676L12.1542 9.00289L10.5122 9.00289L10.5121 1.69605Z'
						fill='white'
					/>
				</svg>
			</span>
		</Link>
	)
}

export default SquareLink
