import React from 'react'
import styles from './Header.module.css'
import Logo from '../Logo'
import Menu from '../Menu'
import AnimatedLink from '../AnimatedLink'

const Header = () => {
	return (
		<div className={styles.root}>
			<div className={styles.header__item}>
				<AnimatedLink name='Начнём работу' path='/contacts' arrow={true} />
			</div>
			<div className={styles.header__item}>
				<Logo />
			</div>
			<div className={styles.header__item}>
				<Menu />
			</div>
		</div>
	)
}

export default Header
