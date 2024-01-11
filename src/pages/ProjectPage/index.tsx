import React from 'react'
import styles from './ProjectPage.module.css'
import HeroSection from '../../components/HeroSection'
import TextBlock from '../../components/TextBlock'
import ImageBlock from '../../components/ImageBlock'
import ListBlock, { IList } from '../../components/ListBlock'
import NextProject from './NextProject'
import ProjectPhones from './ProjectPhones'
import ProjectSlides from './ProjectSlides'
import Transition from '../../transition'
import useLocoScroll from '../../hooks/useLocoScroll'

interface IProjectPage {
	name: string
	desc: string
	about: string
	reels: string
	link: string
	details: IList
	slidesImages: string[]
	phonesImages: string[]
}

// const ProjectPage: React.FC<IProjectPage> = () => {
const ProjectPage = () => {
	useLocoScroll()

	return (
		<Transition>
			<div className={styles.root}>
				<HeroSection title='VITEKSSTONE' main='third' />
				<TextBlock
					text='Студия камня Viteks Stone занимается: 
				искусственным и натуральным камнем.
				Помимо продажи предоставляет услyги по облицовке.'
					title={
						<h2>
							<span>Корпоративный сайт</span> для компании, по работе
							с&nbsp;камнем.
						</h2>
					}
					links={[{ path: '/site', name: 'Смотреть сайт' }]}
				/>
				<ImageBlock src='/images/imgBlock.jpg' alt='#' />
				<ListBlock
					desc='Детали проекта'
					list={[
						{
							desc: 'Клиент:',
							str: 'VITEKS STONE',
							text: 'В IT с 2019-го года, а к разработке сайтов пришёл в 2021 и занимаюсь этим по сей день.'
						},
						{
							desc: 'Индустрия: ',
							str: 'Строительство',
							text: 'Больше всего меня вдохновляют промо-сайты с необычными анимациями.'
						},
						{
							desc: 'Длительность:',
							str: '3 недели',
							text: 'В IT с 2019-го года, а к разработке сайтов пришёл в 2021 и занимаюсь этим по сей день.'
						},
						{
							desc: 'Услуги:',
							str: 'Дизайн / Разработка',
							text: 'Помогаю компаниям выделяться среди конкурентов, повышать количество клиентов, интерес и стоимость к своему продукту.'
						}
					]}
				/>
				<ProjectSlides />
				<ProjectPhones />
				<NextProject
					image='/images/nextProject.jpg'
					link='/chernomorskiy__promisel'
					name='Черноморский промысел'
				/>
			</div>
		</Transition>
	)
}

export default ProjectPage
