import React from "react";

function calculScore(phraseInitiale, lettresTrouvees) {
	let score = 0
	for (let lettre of phraseInitiale) {
		if (lettresTrouvees.has(lettre)) {
			score += 1
		}
	}
	return score
}

const phraseVictoire = "Bravo vous avez gagné !"

function phraseScore(phraseInitiale, lettresTrouvees) {
	return "Le score actuel est de " + calculScore(phraseInitiale, lettresTrouvees)
}

export const Score = ({phraseInitiale, lettresTrouvees}) => (
	<div>
		{calculScore(phraseInitiale, lettresTrouvees) == phraseInitiale.length ?
			phraseVictoire : phraseScore(phraseInitiale, lettresTrouvees)}
	</div>
)