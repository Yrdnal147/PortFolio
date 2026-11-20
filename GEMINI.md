# Règles de collaboration et conventions — PortFolio

## 1. Règles strictes de collaboration
- **Toujours proposer un plan avant d'agir :** Avant toute modification de code ou de configuration, présenter un plan d'implémentation clair et attendre la validation explicite de l'utilisateur.
- **Aucune action sans approbation :** Ne jamais modifier, supprimer ou pousser des fichiers sans accord préalable.
- **Explications détaillées et simples :** Après chaque modification validée, expliquer de façon détaillée, claire et accessible (sans jargon inutile) tout ce qui a été fait.
- **Commandes GitHub systématiques :** Après chaque série de modifications, fournir les commandes Git prêtes à copier (`git add`, `git commit`, `git push`) accompagnées d'une explication simple ligne par ligne (ne pas exécuter `git push` automatiquement sauf demande explicite).

## 2. Direction produit & design du portfolio
- **Accessibilité universelle :** Le site doit rester immédiatement compréhensible et facile à manipuler par tout le monde, y compris les personnes non techniques (français naturel, zéro jargon intimidant, gros boutons tactiles ≥ 44px, contrastes élevés).
- **Identité visuelle :**
  - Nom de marque : `Samuel Ndedy.dev`
  - Mode **clair par défaut** avec bouton pour basculer en mode sombre.
  - Couleur primaire : `#04E762` (utiliser du texte foncé `#061A0E` sur les boutons pleins verts et `#028538` pour les textes verts sur fond clair afin de garantir un contraste élevé).
  - Couleur secondaire : `#454955`.
- **Architecture des données :** Toutes les données personnelles, projets, services, expériences et formations restent centralisées dans `src/data/portfolioData.js`. Ne jamais écraser les textes personnalisés existants de l'utilisateur sans son accord.

## 3. Environnement Windows / PowerShell
- Sur cette machine, la politique d'exécution PowerShell bloque `npm.ps1` : utiliser **`npm.cmd`** (ex. : `npm.cmd run build`, `npm.cmd install`) pour exécuter les commandes npm.
- Toujours vérifier que `npm.cmd run build` passe sans erreur ni avertissement critique après une modification validée.
