# Rapport d’audit

Projet : `electricien-fr-maquette` · 16/11/2026 16:47:09 · 14 min · 6 page(s) · audit standard

## Résumé

- Statut : **13 échec(s)**
- Passe : `20261116-153252-standard` · version ?v=1
- Échecs : **13**
- À regarder : **12**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (66), balayage (5), films d’ouverture (6), films de transition (6), bords de l’écran (4), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (3), tient dans l’écran (5), fluidité (6), défilement selon l’appareil (5), mouvement (6), effets du plan (4), souris immobile (5), vitesse (5), captures (1)

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
| 20261116-145513-rapide-cible | rapide | /,/trouver,/electriciens,/conseils,/contact | toutes | 13 | 25 | 1 | échecs |
| **20261116-153252-standard** (celle-ci) | standard | toutes | toutes | 13 | 12 | 1 | échecs |

## Échecs

### texte coupé (1)

- **texte coupé** — `/` — form.recherche > div.recherche-champ > span.recherche-fantome > span:nth-of-type(1) « Ville ou code postal » — coupé par div > form.recherche > div.recherche-champ > span.recherche-fantome « Ville ou code postal » _(768×1024 normal)_

### photo faible affichée en grand (7)

- **photo faible affichée en grand** — `/` — div.etape-corps > figure.media.etape-media > picture > img « Maison de ville à la tombée du jour, fenêtres écla » — grok/accueil-maison-soir (5/5, faible, 26 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/` — div.etape-corps > figure.media.etape-media > picture > img « Mains gantées d’électricien devant un tableau élec » — grok/accueil-tableau (4/5, faible, 26 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/` — div.etape-corps > figure.media.etape-media > picture > img « Salon rénové éclairé le soir par des suspensions c » — grok/accueil-interieur (4/5, faible, 26 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/conseils` — div.conteneur.guide-grille > figure.media.guide-media > picture > img « Testeur électrique posé sur un tableau électrique » — grok/conseil-diagnostic (4/5, faible, 27 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/conseils` — div.conteneur.guide-grille > figure.media.guide-media > picture > img « Prises électriques au-dessus du plan de travail d’ » — grok/conseil-norme (4/5, faible, 27 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/conseils` — div.conteneur.guide-grille > figure.media.guide-media > picture > img « Outils d’électricien rangés sur un établi » — grok/conseil-pro (4/5, faible, 27 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/conseils` — div.conteneur.guide-grille > figure.media.guide-media > picture > img « Panneaux solaires sur un toit de tuiles à la tombé » — grok/conseil-solaire (4/5, faible, 27 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### contraste sur image (3)

- **contraste sur image** — `/404` — section#debut > div.conteneur.introuvable-texte > p.surtitre:nth-of-type(1) « ERREUR 404 » — 2.13:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/404` — section#debut > div.conteneur.introuvable-texte > p.ouv-chapo:nth-of-type(2) « Le lien est peut-être ancien, ou l’adresse mal tap » — 4.38:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/404` — section#debut > div.conteneur.introuvable-texte > p.surtitre:nth-of-type(1) « ERREUR 404 » — 1.87:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte > p.actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Retour à l’accueil » _(1366×768 sansJs)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte > p.actions:nth-of-type(3) « Retour à l’accueil Trouver un électricien » _(1366×768 sansJs, 320×568 sansJs)_

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

### section sans visuel (2)

- **section sans visuel** — `/electriciens` — section#offres « LES OFFRES Deux façons d’être vu. Fiche coordonnée » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/electriciens` — section#inscription « INSCRIPTION Inscrire mon entreprise. Trois étapes  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 83 ms (différence 24 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/trouver` — à 54 ms (différence 23 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/electriciens` — écran différent à la même position après rechargement (7.0 %), voir comparaisons/rechargement-electriciens-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/trouver` — écran différent à la même position après rechargement (24.8 %), voir comparaisons/rechargement-trouver-*.png _(1366×768)_

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
- Journal v1 : 5 étape(s) notée(s), 72 min de travail pour 115 min de budget, 32 min d’attente de l’utilisateur.
- Journal : « aperçu de l’accueil en films » 11 min pour 5 prévues.
- Audit standard : étapes lourdes sur /, /electriciens, /trouver.
- Grille wouahou : point « 3. La transition reprend le motif » dispensé (config.json) : glisse voulue : le voile monte comme le courant dans une gaine, avec le logo-prise et le nom de la page ; la variété vient de l’intro et des ouvertures.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2750 ms depuis le premier octet
- Ouverture /electriciens (1366×768) : 2728 ms depuis le premier octet
- Ouverture /trouver (1366×768) : 2681 ms depuis le premier octet
- Ouverture / (390×844) : 2761 ms depuis le premier octet
- Ouverture /electriciens (390×844) : 2703 ms depuis le premier octet
- Ouverture /trouver (390×844) : 2621 ms depuis le premier octet
- film de l'ouverture /trouver 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 259 images d’intro, 10 de voile et 83 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /conseils : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /electriciens : aucune section épinglée ou plein écran.
- Tient dans l'écran /trouver : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 353, tâche la plus longue 56 ms
- Fluidité /electriciens 1366×768 (molette) : 0 % d'images lentes sur 302, tâche la plus longue 0 ms
- Fluidité /trouver 1366×768 (molette) : 0 % d'images lentes sur 233, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1369, tâche la plus longue 0 ms
- Fluidité /electriciens 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 0 ms
- Fluidité /trouver 390×844 (doigt) : 0 % d'images lentes sur 1440, tâche la plus longue 0 ms
- Vitesse / : 1.04 s de calcul au chargement (téléphone ralenti).
- Vitesse /conseils : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /electriciens : 0.37 s de calcul au chargement (téléphone ralenti).
- Vitesse /trouver : 0.80 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/conseils --seulement=fichiers,mesures
```
