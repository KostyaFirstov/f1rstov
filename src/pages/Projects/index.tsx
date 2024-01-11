import React from 'react'
import styles from './Projects.module.css'
import HeroSection from '../../components/HeroSection'
import TextBlock from '../../components/TextBlock'
import ProjectCard from '../../components/ProjectCard'
import Transition from '../../transition'
import useLocoScroll from '../../hooks/useLocoScroll'

const Projects = () => {
	useLocoScroll()

	return (
		<Transition>
			<HeroSection title='ПРОЕКТЫ' main='second' />
			<TextBlock
				text='Помогаю компаниям выделяться среди конкурентов, повышать количество клиентов, интерес и стоимость к своему продукту.'
				title={
					<h2>
						Каждый проект <span>уникален</span> по-своему и создан под{' '}
						<span>целевую</span> аудиторию
					</h2>
				}
				subText='10 проектов за 2023 год'
			/>
			<div className={styles.projects}>
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
		</Transition>
	)
}

export default Projects
