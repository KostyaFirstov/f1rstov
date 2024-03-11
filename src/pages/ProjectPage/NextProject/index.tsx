import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NextProject.module.css'
import BorderArrow from '../../../components/BorderArrow'

interface INextProject {
	name: string
	image: string
	link: string
}

const NextProject: React.FC<INextProject> = ({ image, name, link }) => {
	return (
		<div className='content__area'>
			<div className='content__container'>
				<div className={styles.headline}>
					<span className={styles.desc}>Следующий проект</span>
					<Link to={link} className={styles.name}>
						{name}
						<BorderArrow />
					</Link>
				</div>
				<Link to={link} className={styles.link}>
					<img className={styles.image} src={image} alt={name} />
				</Link>
			</div>
		</div>
	)
}

export default NextProject
