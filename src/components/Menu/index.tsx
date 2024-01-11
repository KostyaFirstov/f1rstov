import React from 'react'
import styles from './Menu.module.css'
import useOutsideClick from '../../hooks/useOutsideClick'
import ArrowLink from '../ArrowLink'
import AnimatedLink from '../AnimatedLink'
import CurrentTime from '../CurrentTime'

export const links = [
	{ name: 'Главная', link: '/' },
	{ name: 'Проекты', link: '/projects' },
	// { name: 'Галлерея', link: '/gallery' },
	{ name: 'Обо мне', link: '/about' },
	{ name: 'Контакты', link: '/contacts' }
]

export const socials = [
	{ name: 'Telegram', link: 'tg' },
	{ name: 'Behance', link: 'behance' },
	{ name: 'Whatsapp', link: 'whatsapp' }
]

const Menu = () => {
	const [menu, setMenu] = React.useState(false)
	const openModalRef = React.useRef<HTMLButtonElement>(null)
	const modalRef = React.useRef<HTMLDivElement>(null)

	useOutsideClick([openModalRef, modalRef], () => {
		setMenu(false)
	})

	const onSetMenu = () => {
		setMenu(prev => !prev)
	}

	return (
		<div className={styles.root}>
			<button
				ref={openModalRef}
				onClick={onSetMenu}
				className={!menu ? styles.menu__btn : styles.menu__btn_active}
			>
				{!menu ? 'Меню' : 'Закрыть'}
				<span className={styles.menu__btn_icon}>
					<svg
						viewBox='0 0 44 44'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22Z'
							fill='#F5F5F5'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M22 43C33.598 43 43 33.598 43 22C43 10.402 33.598 1 22 1C10.402 1 1 10.402 1 22C1 33.598 10.402 43 22 43ZM22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z'
							fill='#D9D9D9'
						/>
						<path
							d='M15 17C15 15.8954 15.8954 15 17 15C18.1046 15 19 15.8954 19 17C19 18.1046 18.1046 19 17 19C15.8954 19 15 18.1046 15 17Z'
							fill='#0A0A0A'
						/>
						<path
							d='M25 17C25 15.8954 25.8954 15 27 15C28.1046 15 29 15.8954 29 17C29 18.1046 28.1046 19 27 19C25.8954 19 25 18.1046 25 17Z'
							fill='#0A0A0A'
						/>
						<path
							d='M15 27C15 25.8954 15.8954 25 17 25C18.1046 25 19 25.8954 19 27C19 28.1046 18.1046 29 17 29C15.8954 29 15 28.1046 15 27Z'
							fill='#0A0A0A'
						/>
						<path
							d='M25 27C25 25.8954 25.8954 25 27 25C28.1046 25 29 25.8954 29 27C29 28.1046 28.1046 29 27 29C25.8954 29 25 28.1046 25 27Z'
							fill='#0A0A0A'
						/>
					</svg>
				</span>
			</button>
			<div className={!menu ? styles.menu : styles.menu_usage}>
				<div className={styles.menu__bg}></div>
				<div ref={modalRef} className={styles.menu__container}>
					<span className={styles.menu__place}>
						Москва, <CurrentTime />
					</span>
					<ul className={styles.menu__links}>
						{links.map((link, i) => (
							<li onClick={onSetMenu} key={i} className={styles.menu__link}>
								<AnimatedLink name={link.name} path={link.link} big={true} />
							</li>
						))}
					</ul>
					<div className={styles.menu__footer}>
						<AnimatedLink
							name='hello@f1rstov.ru'
							path='mailto:hello@f1rstov.ru'
							arrow={true}
						/>
						<ul className={styles.social__links}>
							{socials.map((social, i) => (
								<li key={i}>
									<AnimatedLink
										name={social.name}
										path={social.link}
										arrow={true}
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Menu
