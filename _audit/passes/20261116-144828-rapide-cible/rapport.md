# Rapport d’audit

Projet : `electricien-fr-maquette` · 16/11/2026 15:53:48 · 5 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /

## Résumé

- Statut : **48 échec(s)**
- Passe : `20261116-144828-rapide-cible` · version ?v=1
- Échecs : **48**
- À regarder : **17**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (6), films d’ouverture (2), films de transition (2), bords de l’écran (1), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (16), liens vers la page en cours (1), changements de hauteur (1), tient dans l’écran (2), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (4), souris immobile (2), vitesse (1), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ⚠ à regarder | voile par défaut (glisse) |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### image de partage (5)

- **image de partage** — `conseils.html` — fichier introuvable : /assets/partage/conseils-fr.jpg
- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `electriciens.html` — fichier introuvable : /assets/partage/electriciens-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `trouver.html` — fichier introuvable : /assets/partage/trouver-fr.jpg

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/` — div.ouv-texte:nth-of-type(1) > h1.titre-xl > span.ligne-masque:nth-of-type(1) > span.intro-ligne « Un électricien, » — avec h1.titre-xl > span.ligne-masque:nth-of-type(2) > span.intro-ligne > em « près de chez vous. » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs)_

### contraste insuffisant (35)

- **contraste insuffisant** — `/` — form.recherche > div.recherche-champ > span.recherche-fantome > span:nth-of-type(1) « Ville, code postal ou département » — 2.73:1 (minimum 4.5:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — ol.etapes-liste.fx-fini > li.etape:nth-of-type(1) > div.etape-corps > p.etape-num:nth-of-type(1) « 01 » — 2.46:1 (minimum 4.5:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — ol.etapes-liste.fx-fini > li.etape:nth-of-type(2) > div.etape-corps > p.etape-num:nth-of-type(1) « 02 » — 2.46:1 (minimum 4.5:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — ol.etapes-liste.fx-fini > li.etape:nth-of-type(3) > div.etape-corps > p.etape-num:nth-of-type(1) « 03 » — 2.46:1 (minimum 4.5:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(1) > span:nth-of-type(1) « Auvergne-Rhône-Alpes » — 1.24:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(1) > span:nth-of-type(2) « Bourgogne-Franche-Comté » — 1.24:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(1) > span:nth-of-type(3) « Bretagne » — 1.24:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(1) > span:nth-of-type(4) « Centre-Val de Loire » — 1.24:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(1) > span:nth-of-type(5) « Corse » — 1.24:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(1) > span:nth-of-type(6) « Grand Est » — 1.24:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(1) > span:nth-of-type(7) « Hauts-de-France » — 1.24:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(1) > span:nth-of-type(8) « Auvergne-Rhône-Alpes » — 1.24:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(1) > span:nth-of-type(9) « Bourgogne-Franche-Comté » — 1.24:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(1) > span:nth-of-type(10) « Bretagne » — 1.24:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(1) > span:nth-of-type(11) « Centre-Val de Loire » — 1.24:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(1) > span:nth-of-type(12) « Corse » — 1.24:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(1) > span:nth-of-type(13) « Grand Est » — 1.24:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(1) > span:nth-of-type(14) « Hauts-de-France » — 1.24:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(2) > span:nth-of-type(1) « Île-de-France » — 1.42:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(2) > span:nth-of-type(2) « Normandie » — 1.42:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(2) > span:nth-of-type(3) « Nouvelle-Aquitaine » — 1.42:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(2) > span:nth-of-type(4) « Occitanie » — 1.42:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(2) > span:nth-of-type(5) « Pays de la Loire » — 1.42:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(2) > span:nth-of-type(6) « Provence-Alpes-Côte d’Azur » — 1.42:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(2) > span:nth-of-type(7) « Outre-mer » — 1.42:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(2) > span:nth-of-type(8) « Île-de-France » — 1.42:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(2) > span:nth-of-type(9) « Normandie » — 1.42:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(2) > span:nth-of-type(10) « Nouvelle-Aquitaine » — 1.42:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(2) > span:nth-of-type(11) « Occitanie » — 1.42:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(2) > span:nth-of-type(12) « Pays de la Loire » — 1.42:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(2) > span:nth-of-type(13) « Provence-Alpes-Côte d’Azur » — 1.42:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#regions > div.regions-mots:nth-of-type(1) > p:nth-of-type(2) > span:nth-of-type(14) « Outre-mer » — 1.42:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — ol.etapes-liste > li.etape:nth-of-type(1) > div.etape-corps > p.etape-num:nth-of-type(1) « 01 » — 2.46:1 (minimum 4.5:1) _(390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — ol.etapes-liste > li.etape:nth-of-type(2) > div.etape-corps > p.etape-num:nth-of-type(1) « 02 » — 2.46:1 (minimum 4.5:1) _(390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — ol.etapes-liste > li.etape:nth-of-type(3) > div.etape-corps > p.etape-num:nth-of-type(1) « 03 » — 2.46:1 (minimum 4.5:1) _(390×844 sansJs, 320×568 sansJs)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-texte:nth-of-type(1) > p.compteur-cle:nth-of-type(3) « 51 620 électriciens référencés » _(320×568 sansJs)_

### texte coupé (1)

- **texte coupé** — `/` — form.recherche > div.recherche-champ > span.recherche-fantome > span:nth-of-type(1) « Ville, code postal ou département » — coupé par div > form.recherche > div.recherche-champ > span.recherche-fantome « Ville, code postal ou département » _(320×568 sansJs)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/` — .etape:nth-child(1) > .etape-corps[data-fx="vitesse"][data-fx-force="2"] > .etape-num[aria-hidden="true"] ; .etape:nth-child(2) > .etape-corps[data-fx="vitesse"][data-fx-force="2"] > .etape-num[aria-hidden="true"] ; .etape:nth-child(3) > .etape-corps[data-fx="vitesse"][data-fx-force="2"] > .etape-num[aria-hidden="true"] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal, 390×844 normal)_

### clavier (1)

- **clavier** — `/` — input#q-accueil «  » — focus invisible (aucun contour) _(1366×768)_

### ne tient pas dans l’écran (3)

- **ne tient pas dans l’écran** — `/` — section#france-entiere > div > p.plein-mots:nth-of-type(1) « 51 620 électriciens » — coupé en bas de 4 px (à 4 % de la scène) _(1000×560 épinglé, 1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — section#france-entiere > div > p.plein-mots:nth-of-type(1) « 51 620 électriciens » — coupé en bas de 4 px (à 50 % de la scène) _(1000×560 épinglé, 1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — section#france-entiere > div > p.plein-mots:nth-of-type(1) « 51 620 électriciens » — coupé en bas de 4 px (à 96 % de la scène) _(1000×560 épinglé, 1366×768 épinglé)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `electriciens.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : voile par défaut (point 3) (1)

- **grille : voile par défaut (point 3)** — formeVoile « glisse » : la grille demande la forme du monde du client (iris, vague, rideau dans le socle, ou une forme propre). Si la glisse est voulue (page qu’on tourne, store qui descend), le déclarer dans config.json (grille.dispenses.voile)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### texte de contenu sous 13 px (ordinateur) (8)

- **texte de contenu sous 13 px (ordinateur)** — `/` — li.etape:nth-of-type(1) > div.etape-corps > figure.media.etape-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.etape:nth-of-type(2) > div.etape-corps > figure.media.etape-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.etape:nth-of-type(3) > div.etape-corps > figure.media.etape-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#france-entiere > div > figure.media.plein-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-conseil:nth-of-type(1) > div.carte-conseil-corps > figure.media.carte-conseil-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-conseil:nth-of-type(2) > div.carte-conseil-corps > figure.media.carte-conseil-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-conseil:nth-of-type(3) > div.carte-conseil-corps > figure.media.carte-conseil-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#fin > figure.media.fin-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### typographie française (1)

- **typographie française** — `/` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) « Mentions légales : à compléter · Politique de conf » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/trouver` — à 53 ms (différence 23 %) (films/retour-avant-390.png) _(390×844 retour avant)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 2 étape(s) notée(s), 10 min de travail pour 30 min de budget, 1 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2715 ms depuis le premier octet
- Ouverture / (390×844) : 2709 ms depuis le premier octet
- Bords de l’écran : 95 images d’intro, 2 de voile et 27 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 384, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1419, tâche la plus longue 0 ms
- Vitesse / : 0.76 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,parcours,ecran
```
