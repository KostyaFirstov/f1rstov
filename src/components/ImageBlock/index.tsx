import React, { useEffect } from 'react'
import styles from './ImageBlock.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

interface IImageBlock {
	src: string
	alt: string
}

const ImageBlock: React.FC<IImageBlock> = ({ src, alt }) => {
	const blockRef = React.useRef<HTMLDivElement>(null)
	const imageRef = React.useRef<HTMLImageElement>(null)

	useEffect(() => {
		let mm = gsap.matchMedia()

		mm.add('(min-width: 768px)', () => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: blockRef.current,
						start: 'top top+=60',
						end: 'bottom',
						pin: true,
						pinSpacing: true,
						scrub: 1
					}
				})
				.to(imageRef.current, { width: '100%', height: '100%' })
		})
	}, [])

	return (
		<div className='content__container'>
			<div ref={blockRef} className={styles.root}>
				<img ref={imageRef} className={styles.image} src={src} alt={alt} />
			</div>
		</div>
	)
}

export default ImageBlock
