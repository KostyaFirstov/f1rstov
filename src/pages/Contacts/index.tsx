import React from 'react'
import styles from './Contacts.module.css'
import HeroSection from '../../components/HeroSection'
import TextBlock from '../../components/TextBlock'
import Transition from '../../transition'
import { SubmitHandler, useForm } from 'react-hook-form'
import Options from '../../components/Options'
import useLocoScroll from '../../hooks/useLocoScroll'
import usePageTitle from '../../hooks/usePageTitle'
import { sendMessage } from '../../api/telegram'

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

	const [isLoading, setIsLoading] = React.useState(false)
	const [isSended, setIsSended] = React.useState(false)
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
		reset,
		setValue,
		formState: { errors, isValid }
	} = useForm<RequestParams>({
		mode: 'onSubmit'
	})

	const onSubmit: SubmitHandler<RequestParams> = async ({
		name,
		company,
		contact
	}) => {
		try {
			const message = `Имя: ${name}%0AКомпания: ${company} %0AНужна помощь с - ${activeServices.name} %0AБюджет: ${activePrice.name} %0A%0AКонтакт: ${contact}`

			setIsLoading(true)
			await sendMessage(message)

			setIsSended(true)
			clearFields()
		} catch (e) {
			alert(e as string)
		} finally {
			setIsLoading(false)
		}
	}

	const clearFields = () => {
		reset()
		setActivePrice({
			active: 0,
			name: '< 50.000₽'
		})
		setActiveServices({
			active: 0,
			name: 'Дизайном'
		})
	}

	return (
		<Transition>
			<HeroSection
				title='КОНТАКТЫ'
				main='second'
				video='../images/contacts.mp4'
			/>
			<TextBlock
				title='
					<h2>
						Давайте <span>объединимся</span> и <span>сотворим</span> волшебство!
					</h2>
				'
				links={[
					{ path: 'https://wa.me/79150678017', name: 'Whatsapp', isNext: true },
					{ path: 'https://t.me/kostyannbl4', name: 'Telegram', isNext: true },
					{
						path: 'mailto:hello@f1rstov.ru',
						name: 'Почта',
						isNext: true
					}
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
						<button
							disabled={isSended ? true : false}
							className={styles.submit_btn}
						>
							{isLoading
								? 'Отправка'
								: isSended
								? 'Спасибо! Я скоро свяжусь с вами!'
								: 'Начнём работу'}
						</button>
					</form>
				</div>
			</div>
		</Transition>
	)
}

export default Contacts
