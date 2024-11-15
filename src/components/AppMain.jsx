import { useState } from 'react'
import languages from '../data/languages'

export default function AppMain() {
	return (
		<main>
			<div className='container'>
				<div className='buttons'>
					{languages.map((language) => (
						<button key={language.id}>{language.title}</button>
					))}
				</div>
			</div>
		</main>
	)
}
