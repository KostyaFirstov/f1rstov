import React from 'react'
import styles from './ProjectPhones.module.css'

const ProjectPhones = () => {
	return (
		<div data-scroll-container className='content__area'>
			<div data-scroll-section className='content__container'>
				<div className={styles.root}>
					<div data-scroll data-scroll-speed='0.5' className={styles.phone}>
						<img src='/images/dv-iphone.png' alt='' />
					</div>
					<div data-scroll data-scroll-speed='0.3' className={styles.phone}>
						<img src='/images/dv-iphone.png' alt='' />
					</div>
					<div data-scroll data-scroll-speed='0.1' className={styles.phone}>
						<img src='/images/dv-iphone.png' alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectPhones
