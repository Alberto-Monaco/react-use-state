import { useState } from 'react'
import languages from '../data/languages'

export default function AppMain() {
	const [language, setLanguage] = useState(0)
	function handleLanguage(e) {
		const newLanguage = Number(e.target.getAttribute('data-index'))
		setLanguage(newLanguage)
	}

	return (
		<main>
			<div className='container'>
				<div className='row'>
					{languages.map((languages, index) => (
						<div className='buttons' key={languages.id}>
							<button onClick={handleLanguage} data-index={index}>
								{languages.title}
							</button>

							<p className={language == index ? 'active' : 'hide'}>{languages.description}</p>
						</div>
					))}
				</div>
			</div>
		</main>
	)
}
