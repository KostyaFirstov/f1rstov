import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NextProject.module.css'
import BorderArrow from '../../../components/BorderArrow'
import projects from '../../../assets/projects.json'

interface INextProject {
	id: number
}

const NextProject: React.FC<INextProject> = ({ id }) => {
	let project = projects.find(project => +project.id === id + 1)

	if (!project) {
		project = projects[0]
	}

	return (
		<div className='content__area'>
			<div className='content__container'>
				<div className={styles.headline}>
					<span className={styles.desc}>Следующий проект</span>
					<Link to={project.link} className={styles.name}>
						{project.name}
						<BorderArrow />
					</Link>
				</div>
				<Link to={`/projects/${project.pageLink}`} className={styles.link}>
					<img
						className={styles.image}
						src={project.preview}
						alt={project.name}
					/>
				</Link>
			</div>
		</div>
	)
}

export default NextProject
