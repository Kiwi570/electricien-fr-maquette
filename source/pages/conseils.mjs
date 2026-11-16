/* Conseils : ouverture scindée, quatre conseils en grands blocs photo et texte, sources officielles, appel. */
import { cad } from '../gabarits/images.mjs';
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'conseils', fichier: 'conseils', imagePartage: 'grok/conseils-tableau-1280.webp' };

export default (c) => html`
<section class="ouv ouv--conseils" id="debut">
  <div class="ouv-conseils-texte">
    <p class="surtitre" data-anime="gsap" data-entree>${c.t('conseils.ouverture.surtitre')}</p>
    <h1 class="titre-xxl"><span class="ligne-masque"><span class="intro-ligne" data-anime="gsap">${c.t('conseils.ouverture.titre1')}</span></span><span class="ligne-masque"><span class="intro-ligne" data-anime="gsap"><em>${c.t('conseils.ouverture.titre2')}</em></span></span></h1>
    <p class="ouv-chapo masque-ecran-bas" data-anime="gsap" data-entree>${c.t('conseils.ouverture.texte')}</p>
    <p class="actions" data-anime="gsap" data-entree><a class="bouton" href="#guides" data-action-principale data-survol="magnetique">${c.t('conseils.ouverture.action')}</a></p>
    <p class="info-cle" data-info-cle data-anime="gsap" data-entree><span class="pastille" aria-hidden="true"></span>${c.t('conseils.ouverture.info')}</p>
  </div>
  <div class="ouv-conseils-visuel">
    ${c.media({ ...cad(c, 'grok/conseils-tableau'), nom: 'grok/conseils-tableau', alt: c.s('conseils.altTableau'), priorite: true, classe: 'ouv-conseils-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="zoom" data-fx-force="12" data-iris-centre' })}
    <ol class="sommaire-guides" aria-label="Sommaire">${c.donnees.guides.map((g, i) => html`<li><a href="#${g.id}"><span class="chiffre">0${i + 1}</span> ${g.titre}</a></li>`)}</ol>
  </div>
</section>

<div id="guides">
${c.donnees.guides.map((g, i) => html`<section class="section guide${i % 2 ? ' guide--inverse clair' : ''}" id="${g.id}">
  <div class="conteneur guide-grille">
    ${c.media({ ...cad(c, g.image), nom: g.image, alt: g.alt, classe: 'guide-media', sizes: '(max-width: 760px) 88vw, 42vw', attrs: 'data-anime="rideau"' })}
    <div class="guide-texte">
      <p class="guide-num chiffre" aria-hidden="true">0${i + 1}</p>
      <p class="surtitre" data-anime>${g.surtitre}</p>
      <h2 class="titre-l" data-anime="lignes">${g.titre}</h2>
      <p class="guide-court" data-anime>${g.court}</p>
      <ul class="guide-points" data-anime="cascade">${g.points.map((p) => html`<li>${p}</li>`)}</ul>
      ${g.lien ? html`<p data-anime><a class="lien-fleche" href="${g.lien.url}" target="_blank" rel="noopener">${g.lien.texte}<span class="visuellement-cache"> (nouvel onglet)</span></a></p>` : ''}
    </div>
  </div>
</section>`)}
</div>

<section class="section liens" id="sources">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('conseils.liens.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('conseils.liens.titre')}</h2>
    </div>
    <ul class="liens-grille" data-anime="cascade" data-visuel>
      ${c.donnees.liens.map((l) => html`<li><a class="lien-carte" href="${l.url}" target="_blank" rel="noopener"><strong>${l.nom}</strong><span>${l.texte}</span><span class="lien-carte-fleche" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></span><span class="visuellement-cache"> (nouvel onglet)</span></a></li>`)}
    </ul>
  </div>
</section>

<section class="section clair appel" id="fin">
  <div class="conteneur appel-corps">
    <h2 class="titre-l" data-anime="lignes">${c.t('conseils.fin.titre')}</h2>
    <p data-anime>${c.t('conseils.fin.texte')}</p>
    <p class="actions" data-anime>${c.lien('trouver', { classe: 'bouton', texte: c.t('conseils.fin.trouver'), attrs: 'data-survol="magnetique"' })}</p>
  </div>
  <svg class="appel-trait" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M0 70 C 180 20 360 20 520 70 S 860 110 1000 50 S 1150 30 1200 40" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
</section>
`;
