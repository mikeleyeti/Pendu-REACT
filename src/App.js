import React from 'react';

import './App.css';
import {AffichageTouche} from "./Touche";
import {Score} from "./Score";

// Construction des 26 lettres de l'alphabet à partir des codes ASCII.
const alphabet = [];
for (let i = 65; i <= 90; i++) {
	alphabet.push(String.fromCharCode(i));
}

const nombreMaximumTentatve = 10


class App extends React.Component {
	constructor(props) {
		var lettres = new Set();
		super(props);
		this.state = {
			texteInitial: 'test'.toUpperCase(),
			usedLetters: lettres,
			nombreTentatives: 0,
			jouer: true,
		}
		// Bind de handleClick pour conserver le this
		this.handleClick = this.handleClick.bind(this)
	}

	calculScore(phraseInitiale, lettresTrouvees) {
		let score = 0
		for (let lettre of phraseInitiale) {
			if (lettresTrouvees.has(lettre)) {
				score += 1
			}
		}
		return score
	}

	handleClick(index) {
		// Ajoute la lettre cliquée dans le set usedLetters
		this.state.jouer && this.setState({usedLetters: this.state.usedLetters.add(index)})
		if (!this.state.texteInitial.includes(index)) {
			this.state.jouer && this.setState({nombreTentatives: this.state.nombreTentatives + 1})
			this.state.nombreTentatives == nombreMaximumTentatve - 1 && this.setState({jouer: false})
		}
	}

	affichagePhrase(phraseDevinette, usedLetters) {
		// Produit une représentation textuelle de l’état de la partie,
		// chaque lettre non découverte étant représentée par un _underscore_.
		// (CSS assurera de l’espacement entre les lettres pour mieux// visualiser le tout).
		function computeDisplay(phraseDevinette, usedLetters) {
			return phraseDevinette.replace(/\w/g, (letter) => (usedLetters.has(letter) ? letter : '_'))
		}

		return computeDisplay(phraseDevinette, usedLetters)
	}


	render() {
		// Récupération de l'état local.
		const {texteInitial, usedLetters} = this.state

		return (
			<div>
				Nombre de tentatives : {this.state.nombreTentatives} <br/>
				Mot à trouver : {this.affichagePhrase(texteInitial, usedLetters)} <br/>
				{/*{checkEndGame() ? "C'est fini" : "C'est pas encore fini."}*/}
				{this.state.jouer ? false : "C'est perdu !"}
				<div>
					{/* Affichage d'un clavier avec les 26 lettres de l'alphabet. */}
					{alphabet.map((lettre, index,) => (
						<AffichageTouche key={index} touche={lettre} onClick={this.handleClick}/>)
					)}
				</div>
			</div>
		);
	}
}


export default App;
//todo : Déterminer si le jeu est fini
//todo : score , différents mots.
//todo :	style
