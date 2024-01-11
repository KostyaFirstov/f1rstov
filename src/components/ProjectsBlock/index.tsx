import React from 'react'
import styles from './ProjectsBlock.module.css'
import ProjectCard from '../ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'
import BorderArrow from '../BorderArrow'

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
				<ProjectCard
					name='ViteksStone'
					services={['Разработка', 'Дизайн', 'Наполнение']}
					imageSrc='/images/project01.jpg'
					date='2024'
					full={true}
				/>
				<ProjectCard
					name='ViteksStone'
					services={['Разработка', 'Дизайн', 'Наполнение']}
					imageSrc='/images/project01.jpg'
					date='2024'
					full={true}
				/>
				<ProjectCard
					name='ViteksStone'
					services={['Разработка', 'Дизайн', 'Наполнение']}
					imageSrc='/images/project01.jpg'
					date='2024'
					full={true}
				/>
				<Link to='/projects' className={styles.more}>
					<h2 className={styles.title}>
						Смотреть <br /> все проекты
					</h2>
					<BorderArrow />
				</Link>
			</div>
			<div className={styles.itemsMobile}>
				<ProjectCard
					name='ViteksStone'
					services={['Разработка', 'Дизайн', 'Наполнение']}
					imageSrc='/images/project01.jpg'
					date='2024'
					full={false}
				/>
				<ProjectCard
					name='ViteksStone'
					services={['Разработка', 'Дизайн', 'Наполнение']}
					imageSrc='/images/project01.jpg'
					date='2024'
					full={false}
				/>
				<ProjectCard
					name='ViteksStone'
					services={['Разработка', 'Дизайн', 'Наполнение']}
					imageSrc='/images/project01.jpg'
					date='2024'
					full={false}
				/>
			</div>
		</div>
	)
}

export default ProjectsBlock
