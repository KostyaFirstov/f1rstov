import React from 'react'
import styles from './ArrowLink.module.css'
import AnimatedLink, { ILinkProps } from '../AnimatedLink'
import { Link } from 'react-router-dom'

const ArrowLink: React.FC<ILinkProps> = ({ path, name }) => {
	return (
		<span className={styles.social__link}>
			<AnimatedLink name={name} path={path} />
			<Link to={path} className={styles.arrow}>
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
			</Link>
		</span>
	)
}

export default ArrowLink
