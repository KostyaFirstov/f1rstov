import React from 'react'
import styles from './Footer.module.css'
import Logo from '../Logo'
import { links } from '../Menu'
import { Link, useLocation } from 'react-router-dom'
import SquareLink from '../SquareLink'
import AnimatedLink from '../AnimatedLink'
import { motion } from 'framer-motion'
import { MouseMoveContext } from '../../App'
import BorderArrow from '../BorderArrow'
import CurrentTime from '../CurrentTime'

const Footer = () => {
	const { pathname } = useLocation()
	const blockRef = React.useRef<HTMLDivElement>(null)
	const [hover, setHover] = React.useState(false)
	const { mousePosition, mouseMove } = React.useContext(MouseMoveContext)
	const { x } = mousePosition

	const onChangePage = () => {
		let squareLinkPath = { squareLinkName: '', squareLinkPath: '' }

		if (pathname === '/') {
			squareLinkPath = {
				squareLinkName: 'Проекты',
				squareLinkPath: '/projects'
			}
		} else if (pathname.startsWith('/projects')) {
			squareLinkPath = { squareLinkName: 'Обо мне', squareLinkPath: '/about' }
		} else if (pathname === '/about') {
			squareLinkPath = {
				squareLinkName: 'Контакты',
				squareLinkPath: '/contacts'
			}
		} else if (pathname === '/contacts') {
			squareLinkPath = {
				squareLinkName: 'Главная',
				squareLinkPath: '/'
			}
		} else {
			squareLinkPath = {
				squareLinkName: 'Главная',
				squareLinkPath: '/'
			}
		}

		return squareLinkPath
	}

	const { squareLinkName, squareLinkPath } = onChangePage()

	React.useEffect(() => {
		onChangePage()
	}, [pathname])

	const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		mouseMove(e)

		if (blockRef.current) {
			const blockWidth = blockRef.current.getBoundingClientRect()
			const blockSides = (14 / 100) * blockWidth.width
			const lCoord = e.clientX - blockWidth.left
			const rCoord = blockWidth.right - e.clientX

			if (rCoord < blockSides) {
				mousePosition.x.set(blockWidth.right - blockSides * 2)
			} else if (lCoord < blockWidth.left + blockSides) {
				mousePosition.x.set(blockWidth.left - 1)
			}
		}
	}

	return (
		<div className={styles.root}>
			<div className={styles.footer__wrapper}>
				<div className='content__container'>
					<div className={styles.footer__container}>
						<div className={styles.footer__item}>
							<div className='container__grid'>
								<div className='container__item'>
									<div className={styles.footer__item_header}>
										<div className={styles.footer__logo}>
											<Logo />
										</div>
										<ul className={styles.footer__links}>
											{links.map((link, i) => (
												<li key={i} className={styles.footer__link}>
													<AnimatedLink name={link.name} path={link.link} />
												</li>
											))}
										</ul>
									</div>
								</div>
								<div className='container__item'>
									<div className={styles.footer__item_header}>
										<Link to='/contacts' className={styles.footer__btn}>
											Начнём работу
											<span>
												вместе
												<BorderArrow isWhite={true} isSmall={false} />
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.footer__item}>
							<div className='container__grid'>
								<div className='container__item'>
									<div className={styles.footer__item_footer}>
										<div className={styles.footer__time}>
											<CurrentTime /> UTC +3, Moscow
										</div>
									</div>
								</div>
								<div className='container__item'>
									<div className={styles.footer__item_footer}>
										<div className={styles.footer__squarelinks}>
											<SquareLink
												link='https://t.me/kostyannbl4'
												name='Telegram'
											/>
											<SquareLink
												link='https://wa.me/79150678017'
												name='Whatsapp'
											/>
											<SquareLink link='mailto:hello@f1rstov.ru' name='Почта' />
											<SquareLink
												link='https://www.behance.net/firstov1'
												name='Behance'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.footer__wrapper_mobile}>
				<div className='content__container'>
					<div className={styles.footer__item_header}>
						<Link to='/contacts' className={styles.footer__btn}>
							Начнём работу
							<span>
								вместе
								<BorderArrow isWhite={true} isSmall={false} />
							</span>
						</Link>
					</div>
					<div className={styles.footer__item_footer}>
						<ul className={styles.footer__links}>
							{links.map((link, i) => (
								<li key={i} className={styles.footer__link}>
									<AnimatedLink name={link.name} path={link.link} />
								</li>
							))}
						</ul>
						<div className={styles.footer__squarelinks}>
							<SquareLink link='https://t.me/kostyannbl4' name='Telegram' />
							<SquareLink link='https://wa.me/79150678017' name='Whatsapp' />
							<SquareLink link='mailto:hello@f1rstov.ru' name='Почта' />
							<SquareLink
								link='https://www.behance.net/firstov1'
								name='Behance'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.footer__bottom}>
				<div
					ref={blockRef}
					onMouseMove={onMouseMove}
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					className={styles.footer__bottom_inner}
				>
					<svg
						width='1760'
						height='342'
						viewBox='0 0 1760 342'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M1594.09 334.799L1484.55 7.53125H1526.59L1621.82 291.845L1717.96 7.53125H1760L1650.46 334.799H1594.09Z'
							fill='#0A0A0A'
						/>
						<path
							d='M1329.48 341.615C1296.91 341.615 1269.26 334.418 1246.53 320.025C1223.8 305.631 1206.46 285.631 1194.49 260.025C1182.67 234.42 1176.76 204.799 1176.76 171.163C1176.76 137.527 1182.67 107.906 1194.49 82.3007C1206.46 56.695 1223.8 36.6953 1246.53 22.3015C1269.26 7.9078 1296.91 0.710938 1329.48 0.710938C1362.21 0.710938 1389.94 7.9078 1412.66 22.3015C1435.39 36.6953 1452.66 56.695 1464.48 82.3007C1476.3 107.906 1482.21 137.527 1482.21 171.163C1482.21 204.799 1476.3 234.42 1464.48 260.025C1452.66 285.631 1435.39 305.631 1412.66 320.025C1389.94 334.418 1362.21 341.615 1329.48 341.615ZM1329.48 302.979C1353.88 303.131 1374.18 297.676 1390.39 286.616C1406.76 275.404 1418.95 259.874 1426.98 240.026C1435.16 220.178 1439.26 197.223 1439.26 171.163C1439.26 144.951 1435.16 121.997 1426.98 102.3C1418.95 82.6037 1406.76 67.2252 1390.39 56.1647C1374.18 45.1042 1353.88 39.4983 1329.48 39.3467C1305.09 39.1952 1284.79 44.6497 1268.58 55.7102C1252.52 66.7706 1240.39 82.2249 1232.21 102.073C1224.03 121.921 1219.86 144.951 1219.71 171.163C1219.56 197.223 1223.58 220.102 1231.76 239.798C1239.94 259.495 1252.14 274.949 1268.35 286.161C1284.71 297.222 1305.09 302.828 1329.48 302.979Z'
							fill='#0A0A0A'
						/>
						<path
							d='M1006.71 334.799V45.9398H895.122V7.53125H1158.75V45.9398H1047.17V334.799H1006.71Z'
							fill='#0A0A0A'
						/>
						<path
							d='M752.223 341.619C729.042 341.619 708.133 337.68 689.497 329.801C671.012 321.922 655.709 310.711 643.588 296.165C631.619 281.469 623.816 264.12 620.179 244.121L661.997 237.53C667.3 258.135 678.285 274.272 694.951 285.938C711.769 297.453 731.542 303.211 754.269 303.211C768.965 303.211 782.223 300.938 794.041 296.393C806.01 291.696 815.48 285.029 822.449 276.393C829.419 267.757 832.904 257.529 832.904 245.711C832.904 238.439 831.616 232.227 829.04 227.075C826.616 221.772 823.207 217.303 818.813 213.666C814.571 209.879 809.722 206.697 804.268 204.121C798.813 201.545 793.132 199.424 787.223 197.758L703.815 172.985C694.724 170.258 685.936 166.849 677.451 162.758C668.967 158.516 661.391 153.288 654.724 147.076C648.058 140.713 642.755 133.137 638.816 124.349C634.876 115.41 632.907 104.88 632.907 92.759C632.907 73.3653 637.907 56.8504 647.906 43.2143C658.058 29.4266 671.77 18.8964 689.042 11.6238C706.315 4.3512 725.784 0.790635 747.45 0.942137C769.42 1.09366 789.041 5.033 806.313 12.7602C823.737 20.3358 838.131 31.2447 849.494 45.487C861.009 59.7292 868.737 76.7744 872.676 96.6226L829.722 104.122C827.449 90.7894 822.374 79.3501 814.495 69.8048C806.768 60.108 797.071 52.6838 785.404 47.5324C773.738 42.2295 760.935 39.5022 746.996 39.3507C733.663 39.1992 721.617 41.3204 710.86 45.7142C700.103 50.1081 691.542 56.2444 685.179 64.1231C678.815 71.8502 675.633 80.7895 675.633 90.9409C675.633 100.941 678.512 109.047 684.269 115.259C690.027 121.319 697.072 126.168 705.406 129.804C713.89 133.289 722.148 136.168 730.178 138.44L792.45 156.395C799.571 158.364 807.753 161.091 816.995 164.576C826.389 168.061 835.479 172.985 844.267 179.349C853.055 185.561 860.328 193.894 866.085 204.348C871.843 214.651 874.721 227.681 874.721 243.439C874.721 259.196 871.54 273.211 865.176 285.484C858.964 297.756 850.252 308.059 839.04 316.392C827.828 324.574 814.798 330.786 799.95 335.028C785.101 339.422 769.193 341.619 752.223 341.619Z'
							fill='#0A0A0A'
						/>
						<path
							d='M344.899 334.799V7.53125H474.216C477.397 7.53125 481.185 7.68276 485.579 7.98578C489.973 8.1373 494.215 8.59184 498.306 9.34941C516.033 12.0766 530.881 18.1372 542.851 27.531C554.972 36.9248 564.063 48.8185 570.123 63.2123C576.184 77.4545 579.214 93.2876 579.214 110.712C579.214 136.014 572.623 157.984 559.442 176.62C546.26 195.104 526.942 206.695 501.488 211.392L486.034 213.892H385.353V334.799H344.899ZM539.669 334.799L475.125 201.619L515.124 189.347L586.032 334.799H539.669ZM385.353 175.483H472.852C475.731 175.483 478.988 175.332 482.625 175.029C486.412 174.726 489.973 174.196 493.306 173.438C503.761 171.014 512.245 166.62 518.76 160.256C525.427 153.741 530.275 146.166 533.306 137.529C536.336 128.742 537.851 119.802 537.851 110.712C537.851 101.621 536.336 92.7573 533.306 84.1211C530.275 75.3333 525.427 67.6819 518.76 61.1668C512.245 54.6518 503.761 50.2579 493.306 47.9852C489.973 47.0762 486.412 46.5459 482.625 46.3943C478.988 46.0913 475.731 45.9398 472.852 45.9398H385.353V175.483Z'
							fill='#0A0A0A'
						/>
						<path
							d='M236.254 334.799V7.53125H276.708V334.799H236.254Z'
							fill='#0A0A0A'
						/>
						<path
							d='M0 334.799V7.53125H190.906V47.9852H40.454V150.938H163.634V191.392H40.454V334.799H0Z'
							fill='#0A0A0A'
						/>
					</svg>
					<motion.span
						style={hover ? { x } : { x: '70vw' }}
						className={styles.footer__squarelink}
					>
						<SquareLink
							link={squareLinkPath}
							name={squareLinkName}
							white={true}
						/>
					</motion.span>
				</div>
			</div>
			<div className={styles.footer__privacy}>
				<div className={styles.footer__privacy_item}>
					<AnimatedLink name='© FIRSTOV / 2023' path='/' />
				</div>
				<div className={styles.footer__privacy_item}>
					<AnimatedLink name='Политика конфиденциальности' path='/privacy' />
				</div>
				<div className={styles.footer__privacy_item}>
					<AnimatedLink name='Контакты' path='/contacts' />
				</div>
			</div>
		</div>
	)
}

export default Footer
