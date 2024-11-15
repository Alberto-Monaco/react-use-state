import { useState } from 'react'
import languages from '../data/languages'

export default function AppMain() {
	const [language, setLanguage] = useState(null)
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
							<button onClick={handleLanguage} data-index={index} className={language == index ? 'active-button' : ''}>
								{languages.title}
							</button>

							<p className={language == index ? 'active' : 'hide'}>{languages.description}</p>
						</div>
					))}
				</div>
				{language === null && <p className='nothing'>Nessun linguaggio selezionato</p>}
			</div>
		</main>
	)
}
