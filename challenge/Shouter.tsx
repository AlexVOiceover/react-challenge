import {useState} from 'react'

function Shouter() {
	const [myText, setMyText] = useState('')

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setMyText(event.target.value)
	}

	return (
		<div>
			<input name='yourtext' onChange={handleChange} />
			<output> {myText.toUpperCase()} </output>
		</div>
	)
}

export default Shouter
