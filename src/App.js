import React from 'react';

import './App.css';
import {AffichageTouche} from "./Touche";

// Construction des 26 lettres de l'alphabet à partir des codes ASCII.
const alphabet = [];
for (let i = 65; i <= 90; i++) {
	alphabet.push(String.fromCharCode(i));
}


class App extends React.Component {
	constructor(props) {
		var lettres = new Set();
		super(props);
		this.state = {
			texteInitial: 'test'.toUpperCase(),
			usedLetters: lettres,
		}
		// Bind de handleClick pour conserver le this
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(index) {
		// Ajoute la lettre cliquée dans le set usedLetters
		this.setState({usedLetters: this.state.usedLetters.add(index)})
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
				Mot à trouver : {this.affichagePhrase(texteInitial, usedLetters)}
				<div>
					{/* Affichage d'un clavier avec les 26 lettres de l'alphabet. */}
					{alphabet.map((lettre, index,) => (
						<AffichageTouche key={index} touche={lettre} onClick={this.handleClick}/>)
					)}
				</div>
				< /div>
					);
					}
					}

					export default App;
			//todo : Déterminer si le jeu est fini
					//todo : score , différents mots.
//todo :	style
