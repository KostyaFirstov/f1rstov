import React from 'react'
import styles from './ProjectSlides.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const ProjectSlides = () => {
	const blockRef = React.useRef<HTMLDivElement>(null)
	const wrapperTopRef = React.useRef<HTMLDivElement>(null)
	const wrapperBottomRef = React.useRef<HTMLDivElement>(null)

	const qBlocks = gsap.utils.selector(blockRef)

	React.useEffect(() => {
		// let currentHeight = '100vh'
		// let mm = gsap.matchMedia()

		// mm.add('(max-width: 767px)', () => {
		// 	currentHeight = '100vh'
		// })

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: blockRef.current,
				start: 'top top',
				pin: true,
				pinSpacing: true,
				scrub: 1,
				invalidateOnRefresh: true
			}
		})

		tl.fromTo(
			qBlocks('div'),
			{ width: '100vw', height: '100vh' },
			{
				width: '46vw',
				height: '46vh'
			}
		)

		tl.to(
			wrapperTopRef.current,
			{
				x: '-150%'
			},
			'<'
		)

		tl.to(
			wrapperBottomRef.current,
			{
				x: '0'
			},
			'<'
		)
	}, [])

	return (
		<div ref={blockRef} className={styles.root}>
			<div ref={wrapperTopRef} className={styles.wrapper_top}>
				<div className={styles.item}>
					<img src='/images/project01.jpg' alt='' />
				</div>
				<div className={styles.item}>
					<img src='/images/project01.jpg' alt='' />
				</div>
				<div className={styles.item}>
					<img src='/images/project01.jpg' alt='' />
				</div>
				<div className={styles.item}>
					<img src='/images/project01.jpg' alt='' />
				</div>
				<div className={styles.item}>
					<img src='/images/project01.jpg' alt='' />
				</div>
				<div className={styles.item}>
					<img src='/images/project01.jpg' alt='' />
				</div>
				<div className={styles.item}>
					<img src='/images/project01.jpg' alt='' />
				</div>
				<div className={styles.item}>
					<img src='/images/project01.jpg' alt='' />
				</div>
				<div className={styles.item}>
					<img src='/images/project01.jpg' alt='' />
				</div>
				<div className={styles.item}>
					<img src='/images/project01.jpg' alt='' />
				</div>
			</div>
			<div ref={wrapperBottomRef} className={styles.wrapper_bottom}>
				<div className={styles.item}>
					<img src='/images/project01.jpg' alt='' />
				</div>
				<div className={styles.item}>
					<img src='/images/project01.jpg' alt='' />
				</div>
				<div className={styles.item}>
					<img src='/images/project01.jpg' alt='' />
				</div>
				<div className={styles.item}>
					<img src='/images/project01.jpg' alt='' />
				</div>
				<div className={styles.item}>
					<img src='/images/project01.jpg' alt='' />
				</div>
				<div className={styles.item}>
					<img src='/images/project01.jpg' alt='' />
				</div>
				<div className={styles.item}>
					<img src='/images/project01.jpg' alt='' />
				</div>
				<div className={styles.item}>
					<img src='/images/project01.jpg' alt='' />
				</div>
				<div className={styles.item}>
					<img src='/images/project01.jpg' alt='' />
				</div>
				<div className={styles.item}>
					<img src='/images/project01.jpg' alt='' />
				</div>
			</div>
		</div>
	)
}

export default ProjectSlides
