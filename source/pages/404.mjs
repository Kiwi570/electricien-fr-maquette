/* Page 404 : une prise débranchée. */
import { cad } from '../gabarits/images.mjs';
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="ouv ouv--introuvable" id="debut">
  ${c.media({ ...cad(c, 'grok/page-404'), nom: 'grok/page-404', alt: c.s('introuvable.alt'), priorite: true, classe: 'introuvable-media', sizes: '100vw', attrs: 'data-fx="zoom" data-fx-force="10" data-iris-centre' })}
  <div class="conteneur introuvable-texte">
    <p class="surtitre" data-anime="gsap" data-entree>${c.t('introuvable.surtitre')}</p>
    <h1 class="titre-xl"><span class="ligne-masque"><span class="intro-ligne" data-anime="gsap">${c.t('introuvable.titre')}</span></span></h1>
    <p class="ouv-chapo" data-anime="gsap" data-entree>${c.t('introuvable.texte')}</p>
    <p class="actions" data-anime="gsap" data-entree data-info-cle>
      ${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}
      ${c.lien('trouver', { classe: 'bouton bouton--contour', texte: c.t('introuvable.trouver') })}
    </p>
  </div>
</section>
`;
