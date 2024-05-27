import { useEffect, useState } from 'react'

function MouseTracker() {
	const [myClientX, setClientX] = useState(0)
	const [myClientY, setClientY] = useState(0)

	useEffect(() => {
		function updateMouse(event: MouseEvent) {
			setClientX(event.clientX)
			setClientY(event.clientY)
		}
		window.addEventListener('mousemove', updateMouse)

		return () => {
			window.removeEventListener('mousemove', updateMouse)
		}
	}, [])

	return <output>{myClientX + ' , ' + myClientY}</output>
}

export default MouseTracker
