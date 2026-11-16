# electricien.fr · maquette

Maquette de refonte de l'annuaire [electricien.fr](https://electricien.fr), direction « La France allumée ».
En ligne : https://electricien-fr-maquette.vercel.app (noindex : elle ne concurrence pas le site actuel dans Google).

## Pages de la v1

| Page | Adresse | Ouverture | Sections |
|---|---|---|---|
| Accueil | `/` | Carte des 96 départements qui s'allume, recherche, compteur 51 620 | Comment ça marche · photo plein écran « 51 620 électriciens » · 13 régions et outre-mer · rail des 10 derniers inscrits · 3 conseils · offre aux électriciens et témoignage · appel final |
| Trouver un électricien | `/trouver` | Grand titre, recherche, bandeau photo | Carte et régions en accordéon · résultats par département (adresse partageable `?d=38`) · trois réflexes · appel |
| Électriciens | `/electriciens` | Photo plein cadre, prix | Deux offres · mise en avant montrée (illustrative) · 3 témoignages · vérifier sa présence · inscription en 3 étapes (simulée) · appel |
| Conseils | `/conseils` | Scindée : titre et photo, sommaire | Diagnostic électrique · NF C 15-100 · choisir son électricien · panneaux solaires · sources officielles · appel |
| Contact | `/contact` | Scindée : photo et titre | Formulaire simulé (particulier ou électricien) · réponses rapides |
| 404 | `/404` | Prise débranchée | Retour à l'accueil |

Pages du site actuel non reprises (disponibles en v2) : fiche électricien, pages région et département dédiées, mise à jour de fiche, derniers inscrits (page à part), lettre de diffusion, qui sommes-nous, plan du site, carte de France (intégrée à Trouver).

## Fiche à fournir par le client (à compléter)

- **Mentions légales** : éditeur (raison sociale, forme, capital), SIRET, adresse du siège, directeur de la publication, contact. *À compléter* (absentes du site actuel).
- **Hébergeur** : Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis (adresse à vérifier au moment de la mise en ligne).
- **Politique de confidentialité** : usage des données des formulaires (contact, inscription), durée de conservation, droits RGPD. *À compléter*.
- **Coordonnées de l'équipe** : téléphone, e-mail, adresse (affichés en image sur le site actuel, illisibles en texte). Retirés de la maquette : la page Contact propose un formulaire.
- **Logo** : le logo actuel est découpé en petites images GIF, inutilisable. La maquette utilise un mot-symbole « electricien.fr » et une prise stylisée ; fournir le logo vectoriel s'il existe.
- **Troisième offre** : la page « Pourquoi s'inscrire ? » annonce trois possibilités mais n'en décrit que deux. Seules les deux décrites sont reprises (320 € HT une fois ; 750 € HT par département et par an).
- **Fax** : la fiche coordonnées mentionnait « téléphone et fax » ; la maquette parle de coordonnées, sans le fax.
- **Données de l'annuaire** : la maquette ne contient que les 10 « derniers inscrits » publiés sur le site actuel. Le nombre d'électriciens par département, les fiches complètes (téléphone, site) et les logos des entreprises mises en avant sont à brancher.
- **Statistiques de visite** : aucune n'est affichée faute de chiffres récents (l'argument « premier sur Google » date de 2011 et n'est pas repris).
- **Crédits des illustrations générées** : toutes les photos de la maquette sont des illustrations générées par IA (Grok), signalées « Illustration générée » à l'écran. Garder cette mention sur le site final, ou les remplacer par de vraies photos.

## À signaler au client (site actuel)

1. **Le site est piraté** : les titres des actualités et la page Infos pratiques affichent « zarrn is here ahah » et « EZ BY ZARNN ».
2. Les 22 régions d'avant la réforme de 2016 sont encore utilisées ; l'outre-mer est absent de la recherche.
3. Mentions légales vides (éditeur, hébergeur), obligation de la loi pour la confiance dans l'économie numérique.
4. Coordonnées affichées en image (illisibles par les lecteurs d'écran et les moteurs).
5. Les liens « devis » ne mènent à aucun formulaire ; les fiches des derniers inscrits ne sont pas cliquables.
6. Liens « Infos utiles » hors sujet (sièges de douche, vérins, suspensions, vidéo de 2015 sur les e-mails) : à retirer.
7. Accents cassés (« � ») sur plusieurs pages.

## À retirer à la mise en ligne définitive

- `noindex` : balise robots dans `source/gabarits/commun.mjs` et en-tête `X-Robots-Tag` dans `vercel.json`.
- Recherche limitée aux 10 derniers inscrits, vérification de présence et inscription simulées, formulaire de contact simulé, mention « Maquette de démonstration » du pied de page.
- Mentions « à compléter » du pied de page et des formulaires, à remplacer par les vraies pages.
- La démonstration de la mise en avant (fiches neutres) peut rester : elle est marquée « Illustration ».

À garder : la mention « Illustration générée » sur chaque image générée.

## Conseils : sources vérifiées (novembre 2026)

- Diagnostic électricité : obligatoire si l'installation a plus de 15 ans, valable 3 ans (vente) et 6 ans (location) — Service-Public.fr, fiche F18692.
- NF C 15-100 : nouvelle série publiée en août 2024, remplace la version de 2002, obligatoire depuis le 1er septembre 2025 (AFNOR, Consuel, CAPEB).
- Devis : arrêté du 24 janvier 2017, devis détaillé avant tout dépannage, réparation ou entretien à domicile, quel que soit le montant (INC, FFB).
- Solaire : obligation d'achat réservée aux installations posées par un professionnel RGE ; prime à l'autoconsommation supprimée en juin 2026.

## Travailler sur la maquette

```
node outils/generer.mjs        pages générées depuis donnees/ et source/ (ne jamais modifier les .html à la main)
node _audit/audit.mjs          audit standard
```

Textes : `donnees/textes/fr.json` · données : `donnees/*.json` (carte, régions, inscrits, témoignages, conseils) · styles : `assets/css/site.css` · effets : `assets/js/site.js` et `assets/js/annuaire.js`.
