import React from 'react'
import HeroSection from '../../components/HeroSection'
import TextBlock from '../../components/TextBlock'
import ImageBlock from '../../components/ImageBlock'
import ListBlock from '../../components/ListBlock'
import Transition from '../../transition'
import useLocoScroll from '../../hooks/useLocoScroll'
import usePageTitle from '../../hooks/usePageTitle'

const About = () => {
	usePageTitle('Обо мне')
	useLocoScroll()

	return (
		<Transition>
			<HeroSection
				title='ОБО МНЕ'
				main='second'
				video='../images/herosection-bg.jpg'
			/>
			<TextBlock
				text='В IT с 2019-го года, а к разработке сайтов пришёл в 2021 и занимаюсь этим по сей день.'
				title='
					<h2>
						Меня зовут <span>Константин Фирстов</span>, родился и живу
						в&nbsp;Москве
					</h2>
				'
				subText='20 лет'
			/>
			<ImageBlock src='/images/imgBlock.jpg' alt='#' />
			<ListBlock
				desc='Мои навыки'
				list={[
					{
						desc: 'Дизайн:',
						str: 'Figma / Photoshop ',
						text: 'В IT с 2019-го года, а к разработке сайтов пришёл в 2021 и занимаюсь этим по сей день.'
					},
					{
						desc: 'Разработка:',
						str: 'Html / Css / Js / React / Ts / Node.js',
						text: 'Больше всего меня вдохновляют промо-сайты с необычными анимациями.'
					},
					{
						desc: 'Анимация:',
						str: 'Gsap / FramerMotion',
						text: 'В IT с 2019-го года, а к разработке сайтов пришёл в 2021 и занимаюсь этим по сей день.'
					},
					{
						desc: 'Системы управления сайтом::',
						str: 'WordPress / Sanity / Самописная',
						text: 'Помогаю компаниям выделяться среди конкурентов, повышать количество клиентов, интерес и стоимость к своему продукту.'
					}
				]}
			/>
		</Transition>
	)
}

export default About
