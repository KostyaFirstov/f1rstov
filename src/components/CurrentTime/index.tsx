import React from 'react'
import moment from 'moment-timezone'

const CurrentTime = () => {
	const currentDate = moment.tz('Europe/Moscow')

	return <span>{currentDate.format('HH:mm')}</span>
}

export default CurrentTime
