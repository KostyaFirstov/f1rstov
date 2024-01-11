import React from 'react'

const useOutsideClick = (
	refs: React.RefObject<any>[],
	callback: () => void,
	overflow?: boolean
) => {
	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const _event = event.composedPath()

			const isEventClick = refs.some(ref => {
				return ref.current && _event.includes(ref.current)
			})

			if (!isEventClick) {
				return callback()
			}
		}

		document.addEventListener('click', handleClickOutside)
		return () => document.removeEventListener('click', handleClickOutside)
	}, [])
}

export default useOutsideClick
