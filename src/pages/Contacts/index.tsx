import React from 'react'
import styles from './Contacts.module.css'
import HeroSection from '../../components/HeroSection'
import TextBlock from '../../components/TextBlock'
import Transition from '../../transition'
import { SubmitHandler, useForm } from 'react-hook-form'
import Options from '../../components/Options'
import useLocoScroll from '../../hooks/useLocoScroll'
import usePageTitle from '../../hooks/usePageTitle'

type RequestParams = {
	name: string
	company: string
	services: string
	price: string
	contact: string
}

const Contacts = () => {
	usePageTitle('Контакты')
	useLocoScroll()

	const [activeServices, setActiveServices] = React.useState({
		active: 0,
		name: 'Дизайном'
	})
	const [activePrice, setActivePrice] = React.useState({
		active: 0,
		name: '< 50.000₽'
	})

	const {
		register,
		handleSubmit,
		setError,
		setValue,
		formState: { errors, isValid }
	} = useForm<RequestParams>({
		mode: 'onSubmit'
	})

	const onSubmit: SubmitHandler<RequestParams> = async data => {
		const resultData = {
			name: data.name,
			company: data.company,
			services: activeServices.name,
			price: activePrice.name,
			contact: data.contact
		}
	}

	return (
		<Transition>
			<HeroSection
				title='КОНТАКТЫ'
				main='second'
				video='../images/herosection-bg.jpg'
			/>
			<TextBlock
				title='
					<h2>
						Давайте <span>объединимся</span> и <span>сотворим</span> волшебство!
					</h2>
				'
				links={[
					{ path: '/Whatsapp', name: 'Whatsapp' },
					{ path: '/Telegram', name: 'Telegram' },
					{ path: '/Почта', name: 'Почта' }
				]}
				desc='Напишите мне сюда:'
				subText='Или оставьте заявку ниже'
			/>
			<div className='content__area'>
				<div className='content__container'>
					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<div className={styles.input}>
							<label htmlFor='name' className={styles.label}>
								Привет, меня зовут
							</label>
							<input
								type='text'
								id='name'
								className={errors.name && styles.error}
								placeholder='Ваше имя'
								{...register('name', {
									required: true
								})}
							/>
						</div>
						<div className={styles.input}>
							<label htmlFor='company' className={styles.label}>
								Я работаю в компании:
							</label>
							<input
								type='text'
								id='company'
								className={errors.company && styles.error}
								placeholder='Название компании'
								{...register('company', {
									required: true
								})}
							/>
						</div>
						<div className={styles.input}>
							<span className={styles.label}>Мне нужна помощь с</span>
							<Options
								list={['Дизайном', 'Сайтом под ключ', 'Мобильным приложением']}
								active={activeServices.active}
								setActive={setActiveServices}
							/>
						</div>
						<div className={styles.input}>
							<span className={styles.label}>Комфортный бюджет:</span>
							<Options
								list={['< 50.000₽', '50.000 - 100.000₽', '>100.000₽']}
								active={activePrice.active}
								setActive={setActivePrice}
							/>
						</div>
						<div className={styles.input}>
							<label htmlFor='contact' className={styles.label}>
								Мой контакт для связи:
							</label>
							<input
								type='text'
								id='contact'
								className={errors.contact && styles.error}
								placeholder='Почта / Телеграм / Ватсап'
								{...register('contact', {
									required: true
								})}
							/>
						</div>
						<button className={styles.submit_btn}>Начнём работу</button>
					</form>
				</div>
			</div>
		</Transition>
	)
}

export default Contacts
