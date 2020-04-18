import React from 'react';

import './App.css';

class App extends React.Component {
	constructor(props) {
		var test = new Set(["t",]);
		super(props);
		this.state = {
			texteInitial: 'test',
			usedLetters: test,
		}
	}

	affichage() {
		const phraseDevinette = this.state.texteInitial
		const usedLetters = this.state.usedLetters

		// Produit une représentation textuelle de l’état de la partie,
		// chaque lettre non découverte étant représentée par un _underscore_.
		// (CSS assurera de l’espacement entre les lettres pour mieux// visualiser le tout).
		function computeDisplay(phrase, usedLetters) {
			return phrase.replace(/\w/g, (letter) => (usedLetters.has(letter) ? letter : '_'))
		}

		return computeDisplay(phraseDevinette, usedLetters)
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

