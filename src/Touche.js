import React from "react";

export const AffichageTouche = (
	// Créer un bouton de props lettre et onClick
	// onClick est une fonction qui sera un gestionnaire de click prenant en paramètre la prop lettre
	{touche: lettre,onClick}) => (
		<button onClick={() => onClick(lettre)}>{lettre}</button>
)


