import React from 'react'
import styles from './ProjectSlides.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

interface IProjectSlides {
	images: string[]
}

const ProjectSlides: React.FC<IProjectSlides> = ({ images }) => {
	const blockRef = React.useRef<HTMLDivElement>(null)
	const wrapperTopRef = React.useRef<HTMLDivElement>(null)
	const wrapperBottomRef = React.useRef<HTMLDivElement>(null)

	const qBlocks = gsap.utils.selector(blockRef)

	React.useEffect(() => {
		let mm = gsap.matchMedia()

		let height = '100vh'
		let resHeight = '46vh'
		mm.add('(max-width: 768px)', () => {
			height = '28vh'
			resHeight = '28vh'
		})

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
			{ width: '100vw', height: height },
			{
				width: '46vw',
				height: resHeight
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
				{images.map((image, i) => {
					if (i > 4) return null

					return (
						<div key={i} className={styles.item}>
							<img src={image} alt='' />
						</div>
					)
				})}
			</div>
			<div ref={wrapperBottomRef} className={styles.wrapper_bottom}>
				{images.map((image, i) => {
					if (i < 4) return null

					return (
						<div key={i} className={styles.item}>
							<img src={image} alt='' />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default ProjectSlides
