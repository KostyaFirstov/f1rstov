import React from 'react'
import styles from './ProjectLaptop.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const ProjectLaptop = () => {
	const blockRef = React.useRef<HTMLDivElement>(null)
	const laptopRef = React.useRef<HTMLDivElement>(null)
	const contentRef = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
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

		tl.to(contentRef.current, {
			scale: 0.8
		})

		tl.to(laptopRef.current, {
			opacity: 1
		})
	}, [])

	return (
		<div ref={blockRef} className={styles.root}>
			<div ref={laptopRef} className={styles.laptop}>
				<img src='/images/device-mbp.png' alt='' />
			</div>
			<div ref={contentRef} className={styles.content}>
				<img src='/images/project01.jpg' alt='' />
			</div>
		</div>
	)
}

export default ProjectLaptop
