/* Pièces propres à l'annuaire : carte des départements, recherche, données pour le navigateur. */
import { html, brut } from '../../outils/gabarit.mjs';

const norm = (s) => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();

/* Départements qui ont au moins un des 10 derniers inscrits (en cuivre sur la carte). */
export const depsInscrits = (c) => new Set(c.donnees.inscrits.map((i) => i.dep));

/* Données compactes lues par assets/js/annuaire.js (sans les tracés). */
export function donneesNavigateur(c) {
  const d = {
    departements: c.donnees.carte.departements.map((x) => ({ code: x.code, nom: x.nom, region: x.region, c: x.c })),
    outremer: c.donnees.regions.find((r) => r.id === 'outre-mer').departements,
    regions: c.donnees.regions.map((r) => ({ id: r.id, nom: r.nom })),
    inscrits: c.donnees.inscrits,
    largeur: c.donnees.carte.largeur, hauteur: c.donnees.carte.hauteur,
  };
  return html`<script type="application/json" id="donnees-annuaire">${brut(JSON.stringify(d).replace(/</g, '\\u003c'))}</script>`;
}

/* Carte des 96 départements. Les tracés ne sont pas des liens (trop petits au doigt) : la liste des régions
   reste le chemin au clavier ; un toucher ouvre une bulle avec un vrai lien de 44 px. */
export function carte(c, { id = 'carte', iris = false, lienBulle = true, classe = '' } = {}) {
  const { largeur, hauteur, departements } = c.donnees.carte;
  const on = depsInscrits(c);
  const paris = departements.find((x) => x.code === '75').c;
  return html`<div class="carte ${classe}" id="${id}" data-carte${lienBulle ? brut(' data-carte-lien') : ''} data-visuel${iris ? brut(' data-iris-centre') : ''}>
  <svg class="carte-svg" viewBox="0 0 ${largeur} ${hauteur}" role="img" aria-label="${c.s('commun.carteLibelle')}" data-effet="carte-allumee">
    <g class="carte-deps">${departements.map((x) => {
      const dist = Math.round(Math.hypot(x.c[0] - paris[0], x.c[1] - paris[1]));
      return html`<path d="${brut(x.d)}" class="dep${on.has(x.code) ? ' dep--on' : ''}" data-dep="${x.code}" data-region="${x.region}" style="--d:${dist}"/>`;
    })}</g>
    <g class="carte-points" aria-hidden="true">${departements.filter((x) => on.has(x.code)).map((x) => html`<circle cx="${x.c[0]}" cy="${x.c[1]}" r="7" class="point"/><circle cx="${x.c[0]}" cy="${x.c[1]}" r="7" class="point-halo"/>`)}</g>
  </svg>
  <div class="carte-bulle" data-carte-bulle hidden><p class="carte-bulle-nom"><strong data-bulle-nom></strong> <span data-bulle-code></span></p>${lienBulle ? html`<a class="bouton bouton--petit" href="${c.url('trouver')}" data-bulle-lien>${c.t('commun.carteBulle')}</a>` : ''}</div>
</div>`;
}

/* Symbole du contour de la France, réutilisé par les mini-cartes du rail des inscrits. */
export function symboleContour(c) {
  const { largeur, hauteur, contour } = c.donnees.carte;
  return html`<svg width="0" height="0" class="symboles" aria-hidden="true" focusable="false"><symbol id="france" viewBox="0 0 ${largeur} ${hauteur}"><path d="${brut(contour)}"/></symbol></svg>`;
}

export function miniCarte(c, dep) {
  const { largeur, hauteur, departements } = c.donnees.carte;
  const x = departements.find((d) => d.code === dep);
  return html`<svg class="mini-carte" viewBox="0 0 ${largeur} ${hauteur}" aria-hidden="true" focusable="false"><use href="#france"/>${x ? html`<circle cx="${x.c[0]}" cy="${x.c[1]}" r="34" class="mini-halo"/><circle cx="${x.c[0]}" cy="${x.c[1]}" r="20" class="mini-point"/>` : ''}</svg>`;
}

/* Champ de recherche : envoyé vers la page Trouver (sans JavaScript aussi). Sur la page Trouver, le script le traite sur place. */
export function recherche(c, { id, action = true, classe = '' } = {}) {
  const exemples = ['38690', 'Vichy', 'Gironde', 'Seysses', '74', 'Lugrin', 'Doubs'];
  return html`<form class="recherche ${classe}" action="${c.url('trouver')}" method="get" role="search" data-recherche>
  <label class="visuellement-cache" for="${id}">${c.t('commun.rechercheLibelleLong')}</label>
  <div class="recherche-champ">
    <svg class="recherche-icone" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/></svg>
    <input id="${id}" name="q" type="search" autocomplete="off" enterkeyhint="search" aria-describedby="${id}-indice" data-recherche-champ>
    <span class="recherche-fantome" aria-hidden="true" data-fantome data-exemples="${exemples.join('|')}"><span data-fantome-texte>${c.t('commun.rechercheLibelle')}</span><span class="recherche-curseur" data-effet="saisie"></span></span>
  </div>
  <button class="bouton" type="submit"${action ? brut(' data-action-principale') : ''} data-survol="magnetique">${c.t('commun.chercher')}</button>
  <p class="recherche-indice" id="${id}-indice">${c.t('commun.rechercheIndice')}</p>
</form>`;
}

export const nombre = (n) => new Intl.NumberFormat('fr-FR').format(n).replace(/[\u202f\u00a0]/g, ' ');
export { norm };
