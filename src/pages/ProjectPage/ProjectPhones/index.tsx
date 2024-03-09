import React from 'react'
import styles from './ProjectPhones.module.css'

interface IProjectPhones {
	images: string[]
}

const ProjectPhones: React.FC<IProjectPhones> = ({ images }) => {
	return (
		<div data-scroll-container className='content__area'>
			<div data-scroll-section className='content__container'>
				<div className={styles.root}>
					<div data-scroll data-scroll-speed='0.5' className={styles.phone}>
						<img src='/images/dv-iphone.png' alt='' />
						<div className={styles.phone__inner}>
							<img src={images[0]} alt='' />
						</div>
					</div>
					<div data-scroll data-scroll-speed='0.3' className={styles.phone}>
						<img src='/images/dv-iphone.png' alt='' />
						<div className={styles.phone__inner}>
							<img src={images[1]} alt='' />
						</div>
					</div>
					<div data-scroll data-scroll-speed='0.1' className={styles.phone}>
						<img src='/images/dv-iphone.png' alt='' />
						<div className={styles.phone__inner}>
							<img src={images[2]} alt='' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectPhones
