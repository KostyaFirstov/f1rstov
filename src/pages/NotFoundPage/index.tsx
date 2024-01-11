import React from 'react'
import styles from './NotFoundPage.module.css'
import ArrowLink from '../../components/ArrowLink'
import { useNavigate } from 'react-router-dom'
import Transition from '../../transition'
import useLocoScroll from '../../hooks/useLocoScroll'
import AnimatedLink from '../../components/AnimatedLink'

const NotFoundPage = () => {
	const [timeTick, setTimeTick] = React.useState(7)
	const navigate = useNavigate()

	useLocoScroll()

	React.useEffect(() => {
		if (timeTick === 0) {
			navigate('/')
		}
	}, [timeTick])
	;(function onHanldeRedirect() {
		setInterval(() => setTimeTick(prev => timeTick - 1), 1000)
	})()

	return (
		<Transition>
			<div className={styles.root}>
				<h1 className={styles.title}>
					404
					<span className={styles.currentTime}>{timeTick}</span>
				</h1>
				<p className={styles.desc}>
					Такой страницы <br /> не найдено
				</p>
				<AnimatedLink name='На главную' path='/' arrow={true} />
				<div className={styles.bg}></div>
			</div>
		</Transition>
	)
}

export default NotFoundPage
