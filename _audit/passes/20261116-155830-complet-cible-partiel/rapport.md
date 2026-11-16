# Rapport d’audit

Projet : `electricien-fr-maquette` · 16/11/2026 17:01:17 · 3 min · 3 page(s) · audit complet ciblé sur /,/404,/conseils (étapes : fichiers, mesures)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261116-155830-complet-cible-partiel` · version ?v=1
- Échecs : **1**
- À regarder : **2**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (117), balayage (2)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-144828-rapide-cible | rapide | / | toutes | 48 | 17 | 1 | échecs |
| 20261116-145513-rapide-cible | rapide | /,/trouver,/electriciens,/conseils,/contact | toutes | 13 | 25 | 1 | échecs |
| 20261116-153252-standard | standard | toutes | toutes | 13 | 12 | 1 | échecs |
| 20261116-154829-standard-cible-partiel | standard | /,/404,/conseils | fichiers, mesures | 2 | 2 | 0 | échecs |
| 20261116-154936-standard-cible-partiel | standard | /,/404 | fichiers, mesures | 0 | 2 | 0 | complet |
| 20261116-155023-complet-partiel | complet | toutes | mesures, ecran | 4 | 2 | 0 | échecs |
| **20261116-155830-complet-cible-partiel** (celle-ci) | complet | /,/404,/conseils | fichiers, mesures | 1 | 2 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-texte:nth-of-type(1) > p.compteur-cle:nth-of-type(3) « 51 620 électriciens référencés » _(1000×560 sansJs)_

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
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/ --seulement=fichiers,mesures
```
