import React from 'react'
import styles from './ProjectCard.module.css'
import { Link } from 'react-router-dom'

interface IProjectCard {
	name: string
	services: string[]
	date: string
	imageSrc: string
	full: boolean
}

const ProjectCard: React.FC<IProjectCard> = ({
	name,
	services,
	date,
	imageSrc,
	full
}) => {
	return (
		<Link
			to={'/projects/123'}
			className={full ? styles.root : styles.root_small}
		>
			{full ? (
				<div className={styles.wrapper}>
					<div className={styles.leftside}>
						<h2 className={styles.name}>{name}</h2>
					</div>
					<div className={styles.rightside}>
						<span className={styles.date}>{date}</span>
						<ul className={styles.services}>
							{services.map((item, index) => (
								<li key={index} className={styles.service__item}>
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
			) : (
				<div className={styles.wrapper_notFull}>
					<div className={styles.top}>
						<ul className={styles.services}>
							{services.map((item, index) => (
								<li key={index} className={styles.service__item}>
									{item}
								</li>
							))}
						</ul>
					</div>
					<div className={styles.bottom}>
						<h2 className={styles.name}>{name}</h2>
						<span className={styles.date}>{date}</span>
					</div>
				</div>
			)}
			<div className={styles.image}>
				<img src={imageSrc} alt={name} />
			</div>
		</Link>
	)
}

export default ProjectCard
