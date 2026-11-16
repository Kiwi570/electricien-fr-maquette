/* Trouver un électricien : grand titre et recherche, bandeau photo, carte et régions, résultats, bien choisir. */
import { cad } from '../gabarits/images.mjs';
import { html, brut } from '../../outils/gabarit.mjs';
import { carte, recherche, donneesNavigateur, symboleContour, miniCarte } from '../gabarits/annuaire.mjs';

export const page = { cle: 'trouver', fichier: 'trouver', imagePartage: 'grok/trouver-rue-1280.webp' };

export default (c) => {
  const deps = c.donnees.carte.departements;
  const om = c.donnees.regions.find((r) => r.id === 'outre-mer').departements;
  const depsDe = (r) => (r.id === 'outre-mer' ? om : deps.filter((d) => d.region === r.id).sort((a, b) => a.code.localeCompare(b.code)));
  return html`
${donneesNavigateur(c)}
${symboleContour(c)}
<section class="ouv ouv--trouver" id="debut">
  <div class="conteneur ouv-trouver-tete">
    <p class="surtitre" data-anime="gsap" data-entree>${c.t('trouver.ouverture.surtitre')}</p>
    <h1 class="titre-xxl"><span class="ligne-masque"><span class="intro-ligne" data-anime="gsap">${c.t('trouver.ouverture.titre1')}</span></span> <span class="ligne-masque"><span class="intro-ligne" data-anime="gsap"><em>${c.t('trouver.ouverture.titre2')}</em></span></span></h1>
    <div class="ouv-trouver-ligne" data-anime="gsap" data-entree>
      ${recherche(c, { id: 'q-trouver', classe: 'recherche--large' })}
      <p class="ouv-chapo masque-ecran-bas">${c.t('trouver.ouverture.texte')}</p>
    </div>
    <p class="info-cle" data-info-cle data-anime="gsap" data-entree><span class="pastille" aria-hidden="true"></span>${c.t('trouver.ouverture.info')}</p>
  </div>
  ${c.media({ ...cad(c, 'grok/trouver-rue'), nom: 'grok/trouver-rue', alt: c.donnees.alts['grok/trouver-rue'], priorite: true, classe: 'bandeau-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="14" data-iris-centre' })}
</section>

<section class="section annuaire" id="carte">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('trouver.carte.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('trouver.carte.titre')}</h2>
    </div>
    <div class="annuaire-grille">
      <div class="annuaire-carte">
        ${carte(c, { id: 'carte-trouver', lienBulle: false, classe: 'carte--grande' })}
        <ul class="outremer" aria-label="Outre-mer">${om.map((d) => html`<li><a class="puce-dep" href="${c.url('trouver', 'resultats', `d=${d.code}`)}" data-dep-lien="${d.code}" data-sans-transition><span class="puce-code">${d.code}</span> ${d.nom}</a></li>`)}</ul>
      </div>
      <div class="annuaire-panneau">
        <h3 class="panneau-titre">${c.t('trouver.carte.regions')}</h3>
        <div class="regions-accordeon" data-anime="cascade">
          ${c.donnees.regions.map((r) => html`<details class="region" data-region-bloc="${r.id}" id="region-${r.id}">
            <summary><span>${r.nom}</span><span class="region-nb">${depsDe(r).length}</span></summary>
            <ul class="deps-liste">${depsDe(r).map((d) => html`<li><a class="puce-dep" href="${c.url('trouver', 'resultats', `d=${d.code}`)}" data-dep-lien="${d.code}" data-sans-transition><span class="puce-code">${d.code}</span> ${d.nom}</a></li>`)}</ul>
          </details>`)}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section clair resultats" id="resultats" aria-live="polite">
  <div class="conteneur resultats-grille">
    <div class="resultats-tete">
      <p class="surtitre" data-anime>${c.t('trouver.resultats.titre')}</p>
      <h2 class="titre-l" data-resultats-titre data-anime="lignes">${c.t('trouver.resultats.trouves')}</h2>
      <p class="resultats-message" data-resultats-message>${c.t('trouver.resultats.demo')}</p>
    </div>
    <ul class="resultats-liste" data-resultats data-anime="cascade">
      ${c.donnees.inscrits.map((i) => {
        const d = deps.find((x) => x.code === i.dep);
        return html`<li class="fiche" data-fiche-dep="${i.dep}">
          ${miniCarte(c, i.dep)}
          <div class="fiche-texte">
            <p class="fiche-etiquette">${c.t('trouver.resultats.inscrit')}</p>
            <h3 class="fiche-nom">${i.nom}</h3>
            <p class="fiche-ville">${i.cp} ${i.ville}</p>
            <p class="fiche-dep">${d ? d.nom : ''} (${i.dep})</p>
          </div>
        </li>`;
      })}
    </ul>
  </div>
</section>

<section class="section choisir" id="choisir">
  <div class="conteneur choisir-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('trouver.choisir.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('trouver.choisir.titre')}</h2>
      <p data-anime>${c.lien('conseils', { ancre: 'choisir', classe: 'lien-fleche', texte: c.t('trouver.choisir.lien') })}</p>
    </div>
    <ol class="reflexes" data-anime="cascade">
      ${['c1', 'c2', 'c3'].map((k, i) => html`<li><p class="reflexe-num chiffre" aria-hidden="true">0${i + 1}</p><h3>${c.t(`trouver.choisir.${k}t`)}</h3><p>${c.t(`trouver.choisir.${k}`)}</p></li>`)}
    </ol>
    ${c.media({ ...cad(c, 'grok/conseil-pro'), nom: 'grok/conseil-pro', alt: c.donnees.alts['grok/conseil-pro'], classe: 'choisir-media', sizes: '(max-width: 760px) 88vw, 28vw', attrs: 'data-anime="rideau"' })}
  </div>
</section>

<section class="section clair appel" id="fin">
  <div class="conteneur appel-corps">
    <h2 class="titre-l" data-anime="lignes">${c.t('trouver.fin.titre')}</h2>
    <p data-anime>${c.t('trouver.fin.texte')}</p>
    <p class="actions" data-anime>
      ${c.lien('electriciens', { ancre: 'presence', classe: 'bouton', texte: c.t('trouver.fin.presence'), attrs: 'data-survol="magnetique"' })}
      ${c.lien('electriciens', { ancre: 'inscription', classe: 'bouton bouton--contour', texte: c.t('trouver.fin.inscription') })}
    </p>
  </div>
  <svg class="appel-trait" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M0 90 C 200 90 260 30 420 30 S 640 100 800 70 S 1040 20 1200 40" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
</section>
`;
};
