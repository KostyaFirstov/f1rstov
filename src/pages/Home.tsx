import React from 'react'
import HeroSection from '../components/HeroSection'
import TextBlock from '../components/TextBlock'
import ProjectsBlock from '../components/ProjectsBlock'
import ImageBlock from '../components/ImageBlock'
import ListBlock from '../components/ListBlock'
import Transition from '../transition'
import useLocoScroll from '../hooks/useLocoScroll'

const Home = () => {
	useLocoScroll()

	return (
		<Transition>
			<HeroSection title='FIRSTOV' />
			<TextBlock
				text='Помогаю компаниям выделяться среди конкурентов, повышать количество клиентов, интерес и стоимость к своему продукту.'
				title={
					<h2>
						UI/UX-<span>дизайнер</span> и Web-<span>разработчик</span>, создаю
						креативные сайты
					</h2>
				}
				links={[{ path: '/about', name: 'Узнать больше' }]}
			/>
			<ProjectsBlock />
			<TextBlock
				desc='Некоторые из клиентов:'
				list={['ViteksStone', 'Эмеральд', 'ПрофМед', 'Останкино', 'Rockstar']}
				title={
					<h2>
						Более <span>40 созданных сайтов</span> с нуля, от&nbsp;идеи — до
						реализации, каждый из&nbsp;проектов <span>уникальный</span>
					</h2>
				}
				main={false}
			/>
			<ImageBlock src='/images/imgBlock.jpg' alt='#' />
			<ListBlock
				desc='Услуги'
				list={[
					{
						str: 'Дизайн-макет',
						text: 'В IT с 2019-го года, а к разработке сайтов пришёл в 2021 и занимаюсь этим по сей день.',
						img: '/images/listImage.jpg'
					},
					{
						str: 'Разработка сайта',
						text: 'Больше всего меня вдохновляют промо-сайты с необычными анимациями.',
						img: '/images/listImage2.jpg'
					},
					{
						str: 'Поддержка и продвижение',
						text: 'Помогаю компаниям выделяться среди конкурентов, повышать количество клиентов, интерес и стоимость к своему продукту.',
						img: '/images/listImage3.jpg'
					}
				]}
			/>
		</Transition>
	)
}

export default Home
