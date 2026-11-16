# Rapport d’audit

Projet : `electricien-fr-maquette` · 16/11/2026 16:49:30 · 1 min · 3 page(s) · audit standard ciblé sur /,/404,/conseils (étapes : fichiers, mesures)

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261116-154829-standard-cible-partiel` · version ?v=1
- Échecs : **2**
- À regarder : **2**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (33), balayage (2)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-144828-rapide-cible | rapide | / | toutes | 48 | 17 | 1 | échecs |
| 20261116-145513-rapide-cible | rapide | /,/trouver,/electriciens,/conseils,/contact | toutes | 13 | 25 | 1 | échecs |
| 20261116-153252-standard | standard | toutes | toutes | 13 | 12 | 1 | échecs |
| **20261116-154829-standard-cible-partiel** (celle-ci) | standard | /,/404,/conseils | fichiers, mesures | 2 | 2 | 0 | échecs |

## Échecs

### contraste sur image (2)

- **contraste sur image** — `/404` — section#debut > div.conteneur.introuvable-texte > p.surtitre:nth-of-type(1) « ERREUR 404 » — 4.35:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/404` — section#debut > div.conteneur.introuvable-texte > p.surtitre:nth-of-type(1) « ERREUR 404 » — 4.29:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `electriciens.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 72 min de travail pour 115 min de budget, 32 min d’attente de l’utilisateur.
- Journal : « aperçu de l’accueil en films » 11 min pour 5 prévues.
- Audit standard : étapes lourdes sur /, /conseils.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404 --seulement=fichiers,mesures
```
