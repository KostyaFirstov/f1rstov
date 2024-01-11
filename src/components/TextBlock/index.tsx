import React from 'react'
import styles from './TextBlock.module.css'
import AnimatedLink from '../AnimatedLink'

interface TextBlockProps {
	title: React.ReactNode
	desc?: string
	text?: string
	subText?: string
	list?: string[]
	links?: { name: string; path: string }[]
	main?: boolean
}

const TextBlock: React.FC<TextBlockProps> = ({
	title,
	desc,
	links,
	subText,
	text,
	list,
	main = true
}) => {
	return (
		<div className='content__area'>
			<div className='content__container'>
				<div className={styles.root}>
					<div className='container__grid'>
						<div className='container__item'>
							<div className={styles.leftside}>
								{desc && <span className={styles.desc}>{desc}</span>}
								{list && (
									<ul className={styles.list}>
										{list.map((item, i) => (
											<li key={i} className={styles.list__item}>
												{item}
											</li>
										))}
									</ul>
								)}
								{text && <p className={styles.text}>{text}</p>}
								{links && (
									<ul>
										{links.map((item, index) => (
											<li className={styles.item__link} key={index}>
												<AnimatedLink
													name={item.name}
													path={item.path}
													arrow={true}
												/>
											</li>
										))}
									</ul>
								)}
								{subText && <span className={styles.subText}>{subText}</span>}
							</div>
						</div>
						<div className='container__item'>
							<div className={main ? styles.title : styles.title_small}>
								{title}
							</div>
						</div>
					</div>
				</div>
				<div className={styles.rootMobile}>
					<div className='container__item'>
						<div className={main ? styles.title : styles.title_small}>
							{title}
						</div>
					</div>
					<div className={styles.leftsideMobile}>
						{desc && <span className={styles.desc}>{desc}</span>}
						{list && (
							<ul className={styles.list}>
								{list.map((item, i) => (
									<li key={i} className={styles.list__item}>
										{item}
									</li>
								))}
							</ul>
						)}
						{text && <p className={styles.text}>{text}</p>}
						{links && (
							<ul className={styles.links}>
								{links.map((item, index) => (
									<li className={styles.item__link} key={index}>
										<AnimatedLink
											name={item.name}
											path={item.path}
											arrow={true}
										/>
									</li>
								))}
							</ul>
						)}
						{subText && <span className={styles.subText}>{subText}</span>}
					</div>
				</div>
			</div>
		</div>
	)
}

export default TextBlock
