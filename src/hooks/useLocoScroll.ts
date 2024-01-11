import { useEffect } from 'react'

export default function useLocoScroll() {
	useEffect(() => {
		let scroll: any

		import('locomotive-scroll').then(locomotiveModule => {
			scroll = new locomotiveModule.default({
				// @ts-ignore
				el: document.querySelector('[data-scroll-container]'),
				smooth: true,
				smoothMobile: true,
				resetNativeScroll: true,
				lerp: 0.12
			})
		})
		return () => {
			if (scroll) {
				scroll.destroy()
			}
		}
	}, [])
}
