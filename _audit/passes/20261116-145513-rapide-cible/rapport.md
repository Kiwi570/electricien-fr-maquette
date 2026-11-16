# Rapport d’audit

Projet : `electricien-fr-maquette` · 16/11/2026 16:11:41 · 16 min · 5 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/trouver,/electriciens,/conseils,/contact

## Résumé

- Statut : **13 échec(s)**
- Passe : `20261116-145513-rapide-cible` · version ?v=1
- Échecs : **13**
- À regarder : **25**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (30), films d’ouverture (10), films de transition (10), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (5), liens et boutons (5), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), tient dans l’écran (2), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (4), souris immobile (7), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | — dispensé | glisse voulue : le voile monte comme le courant dans une gaine, avec le logo-prise et le nom de la page ; la variété vient de l’intro et des ouvertures |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-144828-rapide-cible | rapide | / | toutes | 48 | 17 | 1 | échecs |
| **20261116-145513-rapide-cible** (celle-ci) | rapide | /,/trouver,/electriciens,/conseils,/contact | toutes | 13 | 25 | 1 | échecs |

## Échecs

### image de partage (5)

- **image de partage** — `conseils.html` — fichier introuvable : /assets/partage/conseils-fr.jpg
- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `electriciens.html` — fichier introuvable : /assets/partage/electriciens-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `trouver.html` — fichier introuvable : /assets/partage/trouver-fr.jpg

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/` — div.ouv-texte:nth-of-type(1) > div > form.recherche > button.bouton « Chercher » _(320×568 sansJs)_

### accessibilité (axe) : color-contrast (2)

- **accessibilité (axe) : color-contrast** — `/` — p[data-fx-rangee=""]:nth-child(1) > span:nth-child(1) ; p[data-fx-rangee=""]:nth-child(1) > span:nth-child(2) ; p[data-sens="-1"] > span:nth-child(5) — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/` — p[data-fx-rangee=""]:nth-child(1) > span:nth-child(1) ; p[data-sens="-1"] > span:nth-child(5) — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_

### premier écran : information clé hors de l’écran (4)

- **premier écran : information clé hors de l’écran** — `/conseils` — section#debut > div.ouv-conseils-texte:nth-of-type(1) > p.info-cle:nth-of-type(4) « 4 conseils · à jour en novembre 2026 » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.ouv-contact-texte > p.info-cle:nth-of-type(4) « Particuliers et électriciens » _(844×390 normal)_
- **premier écran : information clé hors de l’écran** — `/electriciens` — section#debut > div.conteneur.ouv-pros-texte > p.info-cle.info-cle--prix:nth-of-type(4) « Dès 320 € HT, une seule fois » _(390×844 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/trouver` — section#debut > div.conteneur.ouv-trouver-tete > p.info-cle:nth-of-type(2) « 51 620 électriciens référencés · recherche gratuit » _(320×568 sansJs)_

### texte coupé (1)

- **texte coupé** — `/electriciens` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere.est-actif:nth-of-type(1) > span.fpe__nom:nth-of-type(2) « Votre entreprise » — le contenu dépasse de son cadre _(844×390 normal)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `electriciens.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (3)

- **section sans visuel** — `/electriciens` — section#offres « LES OFFRES Deux façons d’être vu. Fiche coordonnée » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/electriciens` — section#inscription « INSCRIPTION Inscrire mon entreprise. Trois étapes  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/trouver` — section#choisir « BIEN CHOISIR Trois réflexes avant de signer. Tous  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### texte de contenu sous 13 px (ordinateur) (11)

- **texte de contenu sous 13 px (ordinateur)** — `/electriciens` — div.fpe__carton:nth-of-type(2) > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 3 · VOTRE ENTREPRISE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/trouver` — ul.resultats-liste.fx-fini > li.fiche:nth-of-type(1) > div.fiche-texte > p.fiche-etiquette:nth-of-type(1) « INSCRIT RÉCEMMENT » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/trouver` — ul.resultats-liste.fx-fini > li.fiche:nth-of-type(2) > div.fiche-texte > p.fiche-etiquette:nth-of-type(1) « INSCRIT RÉCEMMENT » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/trouver` — ul.resultats-liste.fx-fini > li.fiche:nth-of-type(3) > div.fiche-texte > p.fiche-etiquette:nth-of-type(1) « INSCRIT RÉCEMMENT » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/trouver` — ul.resultats-liste.fx-fini > li.fiche:nth-of-type(4) > div.fiche-texte > p.fiche-etiquette:nth-of-type(1) « INSCRIT RÉCEMMENT » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/trouver` — ul.resultats-liste.fx-fini > li.fiche:nth-of-type(5) > div.fiche-texte > p.fiche-etiquette:nth-of-type(1) « INSCRIT RÉCEMMENT » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/trouver` — ul.resultats-liste.fx-fini > li.fiche:nth-of-type(6) > div.fiche-texte > p.fiche-etiquette:nth-of-type(1) « INSCRIT RÉCEMMENT » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/trouver` — ul.resultats-liste.fx-fini > li.fiche:nth-of-type(7) > div.fiche-texte > p.fiche-etiquette:nth-of-type(1) « INSCRIT RÉCEMMENT » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/trouver` — ul.resultats-liste.fx-fini > li.fiche:nth-of-type(8) > div.fiche-texte > p.fiche-etiquette:nth-of-type(1) « INSCRIT RÉCEMMENT » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/trouver` — ul.resultats-liste.fx-fini > li.fiche:nth-of-type(9) > div.fiche-texte > p.fiche-etiquette:nth-of-type(1) « INSCRIT RÉCEMMENT » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/trouver` — ul.resultats-liste.fx-fini > li.fiche:nth-of-type(10) > div.fiche-texte > p.fiche-etiquette:nth-of-type(1) « INSCRIT RÉCEMMENT » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 76 ms (différence 24 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/trouver` — à 54 ms (différence 24 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (3)

- **rechargement au milieu de la page** — `/contact` — écran différent à la même position après rechargement (6.9 %), voir comparaisons/rechargement-contact-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/electriciens` — écran différent à la même position après rechargement (7.0 %), voir comparaisons/rechargement-electriciens-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/trouver` — écran différent à la même position après rechargement (22.0 %), voir comparaisons/rechargement-trouver-*.png _(1366×768)_

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
- Audit rapide : étapes lourdes sur /, /conseils, /contact, /electriciens, /trouver.
- Grille wouahou : point « 3. La transition reprend le motif » dispensé (config.json) : glisse voulue : le voile monte comme le courant dans une gaine, avec le logo-prise et le nom de la page ; la variété vient de l’intro et des ouvertures.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2785 ms depuis le premier octet
- Ouverture /conseils (1366×768) : 2655 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2654 ms depuis le premier octet
- film de l'ouverture /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /electriciens (1366×768) : 2655 ms depuis le premier octet
- Ouverture /trouver (1366×768) : 2586 ms depuis le premier octet
- Ouverture / (390×844) : 2701 ms depuis le premier octet
- Ouverture /conseils (390×844) : 2669 ms depuis le premier octet
- Ouverture /contact (390×844) : 2637 ms depuis le premier octet
- Ouverture /electriciens (390×844) : 2664 ms depuis le premier octet
- Ouverture /trouver (390×844) : 2597 ms depuis le premier octet
- bords de l’écran /conseils 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 443 images d’intro, 15 de voile et 122 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /conseils : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /electriciens : aucune section épinglée ou plein écran.
- Tient dans l'écran /trouver : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 384, tâche la plus longue 0 ms
- Fluidité /conseils 1366×768 (molette) : 0 % d'images lentes sur 282, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 115, tâche la plus longue 0 ms
- Fluidité /electriciens 1366×768 (molette) : 0 % d'images lentes sur 284, tâche la plus longue 0 ms
- Fluidité /trouver 1366×768 (molette) : 0 % d'images lentes sur 237, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1415, tâche la plus longue 0 ms
- Fluidité /conseils 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1332, tâche la plus longue 0 ms
- Fluidité /electriciens 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /trouver 390×844 (doigt) : 0 % d'images lentes sur 1420, tâche la plus longue 0 ms
- Vitesse / : 0.74 s de calcul au chargement (téléphone ralenti).
- Vitesse /conseils : 0.27 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /electriciens : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /trouver : 0.66 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures
```
