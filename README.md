# AngryWaifuReact

Projet disponible affichant une waifu en colère. N'hésitez pas à cloner le projet afin de custom l'app ! 

## Introduction

**AngryWaifuReact** est une application React qui affiche des images de waifus en colère. 

## Structure de l'application

L'application est structurée de la manière suivante :

- [**App.jsx**](https://github.com/GuiFraV/AngryWaifuReact/blob/master/src/App.jsx) : C'est le composant principal de l'application. Il importe et utilise le composant `List`.
- [**Characters.jsx**](https://github.com/GuiFraV/AngryWaifuReact/blob/master/src/components/Characters.jsx) : Ce composant affiche une image de waifu en colère. Il prend une source d'image en tant que prop et l'affiche.
- [**List.jsx**](https://github.com/GuiFraV/AngryWaifuReact/blob/master/src/components/List.jsx) : Ce composant est responsable de la récupération des données depuis l'API `waifu.it`. Il utilise le hook `useEffect` pour effectuer une requête GET à l'API et mettre à jour l'état local avec les données reçues. Une fois les données chargées, il utilise le composant `Characters` pour afficher l'image.
- [**main.jsx**](https://github.com/GuiFraV/AngryWaifuReact/blob/master/src/main.jsx) : C'est le point d'entrée de l'application. Il utilise `ReactDOM` pour rendre le composant `App` dans l'élément racine du DOM.

## Comment ça marche ?

Lorsque vous lancez l'application, elle effectue une requête à l'API `waifu.it` pour obtenir une image de waifu en colère. Une fois les données reçues, l'image est affichée à l'écran grâce au composant `Characters`.

## Conclusion

J'espère que vous apprécierez d'utiliser **AngryWaifuReact** autant que j'ai aimé le créer. N'hésitez pas à contribuer ou à donner vos retours !

