/* Accueil : la carte allumée et la recherche, puis le parcours du particulier, la France entière,
   les derniers inscrits, les conseils, l'offre aux électriciens et l'appel final. */
import { cad } from '../gabarits/images.mjs';
import { html, brut } from '../../outils/gabarit.mjs';
import { carte, recherche, donneesNavigateur, symboleContour, miniCarte, nombre } from '../gabarits/annuaire.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'grok/accueil-local-technique-1280.webp' };

const regionsSansOutremer = (c) => c.donnees.regions.filter((r) => r.id !== 'outre-mer');

export default (c) => html`
${donneesNavigateur(c)}
${symboleContour(c)}
<section class="ouv ouv--accueil" id="debut">
  <div class="ouv-texte">
    <p class="surtitre" data-anime="gsap" data-entree>${c.t('accueil.ouverture.surtitre')}</p>
    <h1 class="titre-xl"><span class="ligne-masque"><span class="intro-ligne" data-anime="gsap">${c.t('accueil.ouverture.titre1')}</span></span><span class="ligne-masque"><span class="intro-ligne" data-anime="gsap"><em>${c.t('accueil.ouverture.titre2')}</em></span></span></h1>
    <p class="ouv-chapo masque-ecran-bas" data-anime="gsap" data-entree>${c.t('accueil.ouverture.texte')}</p>
    <div data-anime="gsap" data-entree>${recherche(c, { id: 'q-accueil' })}</div>
    <p class="compteur-cle" data-info-cle data-anime="gsap" data-entree><strong class="chiffre" data-compteur="51620">${nombre(51620)}</strong> <span>${c.t('commun.compteur')}</span></p>
  </div>
  <div class="ouv-carte">
    ${carte(c, { id: 'carte-accueil', iris: true })}
    <p class="carte-legende masque-ecran-tres-bas" data-anime="gsap" data-entree><span class="pastille" aria-hidden="true"></span>${c.t('commun.carteLegende')}</p>
  </div>
</section>

<section class="section clair etapes" id="comment">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('accueil.etapes.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('accueil.etapes.titre')}</h2>
    </div>
    <ol class="etapes-liste" data-anime="cascade">
      ${[['grok/accueil-maison-soir', 'e1'], ['grok/accueil-tableau', 'e2'], ['grok/accueil-interieur', 'e3']].map(([img, k], i) => html`<li class="etape"><div class="etape-corps" data-fx="vitesse" data-fx-force="2">
        ${c.media({ ...cad(c, img), nom: img, alt: c.donnees.alts[img], classe: 'etape-media', sizes: '(max-width: 760px) 88vw, 30vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
        <p class="etape-num" aria-hidden="true">0${i + 1}</p>
        <h3>${c.t(`accueil.etapes.${k}t`)}</h3>
        <p>${c.t(`accueil.etapes.${k}`)}</p>
      </div></li>`)}
    </ol>
  </div>
</section>

<section class="plein" id="france-entiere" data-fx="plein-ecran" data-fx-depart="inset(22% 26% 22% 26% round 28px)">
  <h2 class="visuellement-cache">${c.t('accueil.plein.titre')}</h2>
  <div data-collant>
    ${c.media({ ...cad(c, 'grok/accueil-local-technique'), nom: 'grok/accueil-local-technique', alt: c.donnees.alts['grok/accueil-local-technique'], classe: 'plein-media', sizes: '100vw', attrs: 'data-fx-cible' })}
    <p class="plein-mots" aria-hidden="true"><span data-fx-ecarte="g" class="chiffre">${c.t('accueil.plein.mot1')}</span><span data-fx-ecarte="d">${c.t('accueil.plein.mot2')}</span></p>
    <p class="plein-legende" data-fx-apres>${c.t('accueil.plein.legende')}</p>
  </div>
</section>

<section class="section regions" id="regions">
  <div class="regions-mots" data-fx="mots-geants" aria-hidden="true" data-ruban data-visuel data-audit-ignorer>
    <p data-fx-rangee>${regionsSansOutremer(c).slice(0, 7).map((r) => html`<span>${r.nom}</span> `)}${regionsSansOutremer(c).slice(0, 7).map((r) => html`<span>${r.nom}</span> `)}</p>
    <p data-fx-rangee data-sens="-1">${regionsSansOutremer(c).slice(7).map((r) => html`<span>${r.nom}</span> `)}<span>Outre-mer</span> ${regionsSansOutremer(c).slice(7).map((r) => html`<span>${r.nom}</span> `)}<span>Outre-mer</span></p>
  </div>
  <div class="conteneur regions-corps">
    <div>
      <p class="surtitre" data-anime>${c.t('accueil.regions.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('accueil.regions.titre')}</h2>
      <p data-anime>${c.t('accueil.regions.texte')}</p>
    </div>
    <ul class="regions-liste" data-anime="cascade">
      ${c.donnees.regions.map((r) => html`<li>${c.lien('trouver', { params: `r=${r.id}`, ancre: 'carte', classe: 'puce-region', texte: html`<span>${r.nom}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>` })}</li>`)}
    </ul>
  </div>
</section>

<section class="section clair inscrits" id="inscrits">
  <div class="conteneur tete-section tete-section--ligne">
    <div>
      <p class="surtitre" data-anime>${c.t('accueil.inscrits.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('accueil.inscrits.titre')}</h2>
    </div>
    <p class="tete-texte" data-anime>${c.t('accueil.inscrits.texte')}</p>
  </div>
  <div class="rail" data-visuel>
    <div class="rail-piste" id="rail-inscrits" data-boucle-css data-ruban data-effet="rail-inscrits" role="region" aria-label="${c.s('accueil.inscrits.region')}">
      ${[0, 1].map((n) => html`<ul class="rail-liste"${n ? brut(' aria-hidden="true"') : ''}>${c.donnees.inscrits.map((i) => html`<li class="fiche-inscrit">
        ${miniCarte(c, i.dep)}
        <p class="fiche-nom">${i.nom}</p>
        <p class="fiche-ville">${i.cp} ${i.ville}</p>
      </li>`)}</ul>`)}
    </div>
    <button type="button" class="rail-pause" data-pause-pour="rail-inscrits" data-libelle-pause="${c.s('commun.pause')}" data-libelle-lecture="${c.s('commun.lecture')}"><span data-libelle-bouton>${c.t('commun.pause')}</span></button>
  </div>
</section>

<section class="section conseils-accueil" id="conseils">
  <div class="conteneur">
    <div class="tete-section tete-section--ligne">
      <div>
        <p class="surtitre" data-anime>${c.t('accueil.conseils.surtitre')}</p>
        <h2 class="titre-l" data-anime="lignes">${c.t('accueil.conseils.titre')}</h2>
      </div>
      <p data-anime>${c.lien('conseils', { classe: 'lien-fleche', texte: c.t('accueil.conseils.tous') })}</p>
    </div>
    <ul class="cartes-conseils" data-anime="cascade">
      ${c.donnees.guides.slice(0, 3).map((g) => html`<li class="carte-conseil"><div class="carte-conseil-corps" data-survol="incline" data-survol-force="4">
        ${c.media({ ...cad(c, g.image), nom: g.image, alt: g.alt, classe: 'carte-conseil-media', sizes: '(max-width: 760px) 88vw, 30vw', attrs: 'data-fx="zoom" data-fx-force="14"' })}
        <p class="surtitre">${g.surtitre}</p>
        <h3>${g.titre}</h3>
        <p>${g.court}</p>
        ${c.lien('conseils', { ancre: g.id, classe: 'lien-fleche', texte: c.t('accueil.conseils.lire'), attrs: `aria-label="${c.s('accueil.conseils.lire')} : ${g.titre}"` })}
      </div></li>`)}
    </ul>
  </div>
</section>

<section class="section clair pros" id="electriciens">
  <div class="conteneur pros-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('accueil.pros.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('accueil.pros.titre1')} <em>${c.t('accueil.pros.titre2')}</em></h2>
      <ul class="prix-liste" data-anime="cascade">
        <li><p class="prix" data-prix><strong class="chiffre" data-compteur="320">320</strong> <span>${c.t('accueil.pros.o1unite')}</span></p><p>${c.t('accueil.pros.o1')}</p></li>
        <li><p class="prix" data-prix><strong class="chiffre" data-compteur="750">750</strong> <span>${c.t('accueil.pros.o2unite')}</span></p><p>${c.t('accueil.pros.o2')}</p></li>
      </ul>
      <p class="actions" data-anime>
        ${c.lien('electriciens', { ancre: 'offres', classe: 'bouton', texte: c.t('accueil.pros.offres'), attrs: 'data-survol="magnetique"' })}
        ${c.lien('electriciens', { ancre: 'presence', classe: 'bouton bouton--contour', texte: c.t('accueil.pros.presence') })}
      </p>
    </div>
    <figure class="citation" data-anime="cascade" data-visuel>
      <svg class="citation-guillemet" viewBox="0 0 64 48" aria-hidden="true"><path d="M0 48V28C0 12 8 3 24 0l3 6C17 9 13 15 13 22h11v26zm37 0V28c0-16 8-25 24-28l3 6c-10 3-14 9-14 16h11v26z"/></svg>
      <blockquote><p>${c.donnees.temoignages[0].court}</p></blockquote>
      <figcaption><strong>${c.donnees.temoignages[0].auteur}</strong>, ${c.donnees.temoignages[0].entreprise}</figcaption>
    </figure>
  </div>
</section>

<section class="section fin" id="fin">
  ${c.media({ ...cad(c, 'grok/accueil-cuivre'), nom: 'grok/accueil-cuivre', alt: c.s('accueil.altCuivre'), classe: 'fin-fond', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="12"' })}
  <div class="conteneur fin-corps">
    <h2 class="titre-xl" data-anime="lignes">${c.t('accueil.fin.titre1')} <em>${c.t('accueil.fin.titre2')}</em></h2>
    <p data-anime>${c.t('accueil.fin.texte')}</p>
    <p class="actions" data-anime>
      ${c.lien('trouver', { ancre: 'carte', classe: 'bouton', texte: c.t('accueil.fin.trouver'), attrs: 'data-survol="magnetique"' })}
      ${c.lien('electriciens', { ancre: 'inscription', classe: 'bouton bouton--contour', texte: c.t('accueil.fin.pro') })}
    </p>
  </div>
</section>
`;
