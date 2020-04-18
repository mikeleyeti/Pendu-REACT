import React from 'react';

import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			texteInitial: 'test',
			usedLetters: 't',
		}
	}

	affichage() {
		const phraseDevinette = this.state.texteInitial
		const usedLetters = this.state.usedLetters

		// return phraseDevinette.replace(usedLetters,'_')
		function computeDisplay(phrase, usedLetters) {
			return phrase.replace(/\w/g, (letter) => (usedLetters.has(letter) ? letter : '_'))
		}

		return computeDisplay(phraseDevinette,usedLetters)

	}

	render() {
		return (
			<div>
				Ceci est un {this.affichage()}
			</div>
		);
	}
}

export default App;
