import React from 'react'
import styles from './Loader.module.css'
import HeroSection from '../HeroSection'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

interface ILoader {
	pageFrom: number
	currentPage: number
}

const Loader: React.FC<ILoader> = ({ pageFrom, currentPage }) => {
	const blockRef = React.useRef<HTMLDivElement>(null)
	const qBlocks = gsap.utils.selector(blockRef)

	React.useEffect(() => {
		const whichPage = (num: number) => {
			return `-${num}00vw`
		}

		const animOnstart = () => {
			window.scrollTo(0, 0)

			let tl = gsap.timeline({})

			tl.to(qBlocks('h1'), { transform: `translateY(100%)` })
			tl.to(document.body, {
				overflow: 'hidden'
			})
			tl.fromTo(
				blockRef.current,
				{ transform: `scale(1) translateX(${whichPage(0)})` },
				{
					transform: `scale(0.5) translateX(${whichPage(0)})`,
					duration: 0.7
				}
			)
		}

		const animOnLoad = () => {
			let tl = gsap.timeline({})

			tl.fromTo(
				blockRef.current,
				{ transform: `scale(0.5) translateX(${whichPage(0)})` },
				{
					transform: `scale(0.5) translateX(${whichPage(2)})`,
					duration: 1
				}
			)
			tl.to(blockRef.current, {
				transform: `scale(1) translateX(${whichPage(2)})`
			})
			tl.to(qBlocks('h1'), { transform: `translateY(0%)` })
			tl.to(document.body, {
				overflow: 'auto'
			})
		}

		animOnstart()

		setTimeout(() => {
			animOnLoad()
		}, 2000)
	}, [])

	return (
		<div className={styles.outer}>
			{/* <div ref={blockRef} className={styles.wrapper}>
				<div className={styles.item}>
					<HeroSection title='FIRSTOV' />
				</div>
				<div className={styles.item}>
					<HeroSection title='ПРОЕКТЫ' main='second' />
				</div>
				<div className={styles.item}>
					<HeroSection title='ОБО МНЕ' main='second' />
				</div>
			</div> */}
		</div>
	)
}

export default Loader
