const baseUrl =
	'https://api.telegram.org/bot7014897006:AAFn_knSfymtJjAsCQpCUpRuk9YquGE8UZc/'

export const sendMessage = async (message: string): Promise<void> => {
	const url = `${baseUrl}sendMessage?chat_id=-1002096797517&text=${message}`

	const response = await fetch(url)

	if (!response.ok) {
		const error = await response.json()

		await Promise.reject(
			error.description || 'Что-то пошло не так... Попробуйте снова.'
		)
	}
}
