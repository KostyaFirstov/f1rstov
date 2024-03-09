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
	about: React.ReactNode
	reels: string
	link: string
	details: IList
	imageBlock: string
	slidesImages: string[]
	phonesImages: string[]
}

const ProjectPage: React.FC<IProjectPage> = ({
	name,
	desc,
	about,
	details,
	link,
	reels,
	imageBlock,
	phonesImages,
	slidesImages
}) => {
	useLocoScroll()

	return (
		<Transition>
			<div className={styles.root}>
				<HeroSection title={name} main='third' img={reels} />
				<TextBlock
					text={desc}
					title={about}
					links={[{ path: link, name: 'Смотреть сайт' }]}
				/>
				<ImageBlock src={imageBlock} alt={name} />
				<ListBlock desc='Детали проекта' list={details} />
				<ProjectSlides images={slidesImages} />
				<ProjectPhones images={phonesImages} />
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
