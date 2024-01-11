import React from 'react'
import styles from './BorderArrow.module.css'

interface IBorderArrow {
	isSmall?: boolean
	isWhite?: boolean
}

const BorderArrow: React.FC<IBorderArrow> = ({
	isSmall = true,
	isWhite = false
}) => {
	return (
		<span className={isSmall ? styles.root__small : styles.root}>
			<svg
				className={isWhite ? styles.root__white : ''}
				viewBox='0 0 118 118'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M59 117C91.0325 117 117 91.0325 117 59C117 26.9675 91.0325 1 59 1C26.9675 1 1 26.9675 1 59C1 91.0325 26.9675 117 59 117ZM59 118C91.5848 118 118 91.5848 118 59C118 26.4152 91.5848 0 59 0C26.4152 0 0 26.4152 0 59C0 91.5848 26.4152 118 59 118Z'
					fill='#A2A2A9'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M71.3127 51.051L48.3127 74.051L46.1914 71.9297L69.1914 48.9297L71.3127 51.051Z'
					fill='black'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M69.3825 50.8672L51.0645 50.8672L51.0645 47.8672L72.3825 47.8672L72.3825 67.8641L69.3825 67.8641L69.3825 50.8672Z'
					fill='black'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M71.3127 51.051L48.3127 74.051L46.1914 71.9297L69.1914 48.9297L71.3127 51.051Z'
					fill='black'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M69.3825 50.8672L51.0645 50.8672L51.0645 47.8672L72.3825 47.8672L72.3825 67.8641L69.3825 67.8641L69.3825 50.8672Z'
					fill='black'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M71.3127 51.051L48.3127 74.051L46.1914 71.9297L69.1914 48.9297L71.3127 51.051Z'
					fill='black'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M69.3825 50.8672L51.0645 50.8672L51.0645 47.8672L72.3825 47.8672L72.3825 67.8641L69.3825 67.8641L69.3825 50.8672Z'
					fill='black'
				/>
			</svg>
		</span>
	)
}

export default BorderArrow
