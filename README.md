# Création d'une Appli de choix de couleur avec REACT
#démarrage du projet: <br>
npm create vite@latest colorPicker <br>
#Se positionner sur le Projet: <br>
cd colorPicker<br>
#installation des dépendances: <br>
npm install<br>
#exécution du projet sur navigateur:<br>
npm run dev<br>


# Approche Technique
Etant un petit projet pour s'entrainer à utiliser le useState, les formulaires dans React et le 2 way data baiding <br>
J'ai tout mis dans le meme fichier en separant le rendu et le CSS.<br>
création du state (color) et du setstate (setcolor)<br>
utilisation du Input avec le type Color<br>
creation d'une fonction handleChange pour récupérer la valeur du Input<br>
récupération du e.target.value pour l'afficher dans dans l'attribut style avec le backgroundColor<br>
