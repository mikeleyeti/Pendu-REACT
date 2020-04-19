import React from "react";
// Créer un bouton de props lettre et onClick
// onClick est une fonction qui sera un gestionnaire de click prenant en paramètre la prop lettre

export const AffichageTouche = ({touche: lettre, onClick}) => (
	<button onClick={() => onClick(lettre)}>{lettre}</button>
)


