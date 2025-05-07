import React from 'react'
import styles from './Projects.module.css'
import HeroSection from '../../components/HeroSection'
import TextBlock from '../../components/TextBlock'
import ProjectCard from '../../components/ProjectCard'
import Transition from '../../transition'
import useLocoScroll from '../../hooks/useLocoScroll'
import projects from '../../assets/projects.json'
import gsap from 'gsap'
import usePageTitle from '../../hooks/usePageTitle'

const Projects = () => {
	usePageTitle('Выполненные проекты')
	useLocoScroll()

	let mm = gsap.matchMedia()
	let isMobile = false

	mm.add('(max-width: 800px)', () => {
		isMobile = true
	})

	return (
		<Transition>
			<HeroSection
				title='ПРОЕКТЫ'
				main='second'
				video='../images/showreel.mp4'
			/>
			<TextBlock
				text='Помогаю компаниям выделяться среди конкурентов, повышать количество клиентов, интерес и стоимость к своему продукту.'
				title='
					<h2>
						Каждый проект <span>уникален</span> по-своему и создан под <span>целевую</span> аудиторию
					</h2>
				'
				subText='10 проектов за 2023 год'
			/>
			<div className={styles.projects}>
				{projects.map((project, i) => {
					let isOdd = projects.length % 2 === 0 ? false : true

					return (
						<ProjectCard
							key={project.id}
							pageLink={project.pageLink}
							name={project.name}
							services={project.services}
							imageSrc={project.preview}
							date={project.date}
							full={
								isOdd && !isMobile && projects.length - 1 === i ? true : false
							}
						/>
					)
				})}
			</div>
		</Transition>
	)
}

export default Projects
