# Rapport d’audit

Projet : `electricien-fr-maquette` · 16/11/2026 16:56:47 · 6 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **4 échec(s)**
- Passe : `20261116-155023-complet-partiel` · version ?v=1
- Échecs : **4**
- À regarder : **2**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5), tient dans l’écran (8)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-144828-rapide-cible | rapide | / | toutes | 48 | 17 | 1 | échecs |
| 20261116-145513-rapide-cible | rapide | /,/trouver,/electriciens,/conseils,/contact | toutes | 13 | 25 | 1 | échecs |
| 20261116-153252-standard | standard | toutes | toutes | 13 | 12 | 1 | échecs |
| 20261116-154829-standard-cible-partiel | standard | /,/404,/conseils | fichiers, mesures | 2 | 2 | 0 | échecs |
| 20261116-154936-standard-cible-partiel | standard | /,/404 | fichiers, mesures | 0 | 2 | 0 | complet |
| **20261116-155023-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 4 | 2 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-texte:nth-of-type(1) > p.compteur-cle:nth-of-type(3) « 51 620 électriciens référencés » _(844×390 sansJs, 1000×560 sansJs, 1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte > p.actions:nth-of-type(3) « Retour à l’accueil Trouver un électricien » _(844×390 sansJs)_
- **premier écran : information clé hors de l’écran** — `/conseils` — section#debut > div.ouv-conseils-texte:nth-of-type(1) > p.info-cle:nth-of-type(4) « 4 conseils · à jour en novembre 2026 » _(1000×560 sansJs)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte > p.actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Retour à l’accueil » _(844×390 sansJs)_

## À regarder

### section sans visuel (2)

- **section sans visuel** — `/electriciens` — section#offres « LES OFFRES Deux façons d’être vu. Fiche coordonnée » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/electriciens` — section#inscription « INSCRIPTION Inscrire mon entreprise. Trois étapes  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /conseils : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /electriciens : aucune section épinglée ou plein écran.
- Tient dans l'écran /trouver : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/404,/conseils --seulement=fichiers,mesures
```
