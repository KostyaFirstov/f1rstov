import React from 'react'
import styles from './ProjectsBlock.module.css'
import ProjectCard from '../ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'
import BorderArrow from '../BorderArrow'
import projects from '../../assets/projects.json'

gsap.registerPlugin(ScrollTrigger)

const ProjectsBlock = () => {
	const projectsRef = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		function getScrollAmount() {
			if (projectsRef.current) {
				return -(projectsRef.current.scrollWidth - window.innerWidth)
			} else {
				return 0
			}
		}

		const tween = gsap.to(projectsRef.current, {
			x: getScrollAmount,
			duration: 13,
			ease: 'none'
		})

		ScrollTrigger.create({
			trigger: projectsRef.current,
			start: 'top top',
			end: () => `+=${getScrollAmount() * -1}`,
			pin: true,
			animation: tween,
			scrub: 1,
			invalidateOnRefresh: true
		})
	}, [])

	return (
		<div className={styles.root}>
			<div className={styles.items} ref={projectsRef}>
				{projects.map((project, i) => {
					if (i > 3) return null

					return (
						<ProjectCard
							key={project.id}
							pageLink={project.pageLink}
							name={project.name}
							services={project.services}
							imageSrc={project.preview}
							date={project.date}
							full={true}
						/>
					)
				})}
				<Link to='/projects' className={styles.more}>
					<h2 className={styles.title}>
						Смотреть <br /> все проекты
					</h2>
					<BorderArrow />
				</Link>
			</div>
			<div className={styles.itemsMobile}>
				{projects.map((project, i) => {
					if (i > 3) return null

					return (
						<ProjectCard
							key={project.id}
							pageLink={project.pageLink}
							name={project.name}
							services={project.services}
							imageSrc={project.preview}
							date={project.date}
							full={false}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default ProjectsBlock
