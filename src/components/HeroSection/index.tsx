import React from 'react'
import styles from './HeroSection.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

interface HeroSectionProps {
	main?: 'main' | 'second' | 'third'
	title: string
	img?: string
}

const HeroSection: React.FC<HeroSectionProps> = ({
	main = 'main',
	title,
	img
}) => {
	const blockRef = React.useRef<HTMLDivElement>(null)
	const qBlocks = gsap.utils.selector(blockRef)

	React.useEffect(() => {
		const block = blockRef.current
		let resTop =
			main === 'main' ? '24.58vw' : main === 'second' ? '19.2vw' : '17.2vw'

		let mm = gsap.matchMedia()

		mm.add('(max-width: 767px)', () => {
			resTop =
				main === 'main' ? '32.58vw' : main === 'second' ? '27.2vw' : '25.2vw'
		})

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: block,
				start: 'top top',
				scrub: 1,
				pin: true,
				pinSpacing: true,
				invalidateOnRefresh: true
			}
		})

		tl.to(qBlocks('h1'), {
			opacity: 0,
			y: -100,
			duration: 1.6,
			ease: 'expo.inOut'
		})

		tl.fromTo(
			qBlocks('.hero__image'),
			{ top: resTop },
			{
				top: 0,
				duration: 4
			},
			'-0.05'
		)

		tl.fromTo(
			qBlocks('.hero__image img'),
			{ width: '92vw' },
			{
				width: '100vw',
				borderRadius: 0,
				duration: 4
			},
			'-0.05'
		)
	}, [])

	return (
		<>
			<div ref={blockRef} className={styles.root}>
				<div className='hero__wrapper'>
					<div className={styles.title__wrapper}>
						<h1
							className={
								main === 'main'
									? styles.title
									: main === 'second'
									? styles.title_small
									: styles.title_smaller
							}
						>
							{title}
						</h1>
					</div>
					<div className='hero__image'>
						<img src='../images/herosection-bg.jpg' alt='#' />
					</div>
				</div>
			</div>
		</>
	)
}

export default HeroSection