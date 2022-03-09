import { useEffect, useState } from "react"

export const useFetch = <T,>(url: string) => {
	const [data, setData] = useState<undefined | T>(undefined)

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(url)
			const json = await response.json()
			setData(json)
		}

		fetchData()
	}, [url])

	return data
}
