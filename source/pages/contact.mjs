/* Contact : ouverture scindée, formulaire simulé (particulier ou électricien), réponses rapides. */
import { cad } from '../gabarits/images.mjs';
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'grok/contact-lampe-1280.webp' };

export default (c) => html`
<section class="ouv ouv--contact" id="debut">
  ${c.media({ ...cad(c, 'grok/contact-lampe'), nom: 'grok/contact-lampe', alt: c.s('contact.alt'), priorite: true, classe: 'ouv-contact-media', sizes: '(max-width: 760px) 100vw, 46vw', attrs: 'data-fx="parallaxe" data-fx-force="8" data-iris-centre' })}
  <div class="ouv-contact-texte">
    <p class="surtitre" data-anime="gsap" data-entree>${c.t('contact.ouverture.surtitre')}</p>
    <h1 class="titre-xxl"><span class="ligne-masque"><span class="intro-ligne" data-anime="gsap">${c.t('contact.ouverture.titre1')}</span></span><span class="ligne-masque"><span class="intro-ligne" data-anime="gsap"><em>${c.t('contact.ouverture.titre2')}</em></span></span></h1>
    <p class="ouv-chapo masque-ecran-tres-bas" data-anime="gsap" data-entree>${c.t('contact.ouverture.texte')}</p>
    <p class="actions" data-anime="gsap" data-entree><a class="bouton" href="#formulaire" data-action-principale data-survol="magnetique">${c.t('contact.ouverture.action')}</a></p>
    <p class="info-cle" data-info-cle data-anime="gsap" data-entree><span class="pastille" aria-hidden="true"></span>${c.t('contact.ouverture.info')}</p>
  </div>
</section>

<section class="section clair contact-corps" id="formulaire">
  <div class="conteneur contact-grille">
    <form class="formulaire" data-formulaire novalidate data-anime>
      <h2 class="titre-m">${c.t('contact.formulaire.titre')}</h2>
      <fieldset class="choix-profil">
        <legend>${c.t('contact.formulaire.profil')}</legend>
        <label class="puce-choix"><input type="radio" name="profil" value="particulier" checked> <span>${c.t('contact.formulaire.particulier')}</span></label>
        <label class="puce-choix"><input type="radio" name="profil" value="electricien"> <span>${c.t('contact.formulaire.electricien')}</span></label>
      </fieldset>
      <div class="champ"><label for="c-nom">${c.t('contact.formulaire.nom')}</label><input id="c-nom" name="nom" required autocomplete="name" data-erreur="${c.s('contact.formulaire.erreurNom')}"></div>
      <div class="champ"><label for="c-email">${c.t('contact.formulaire.email')}</label><input id="c-email" name="email" type="email" required autocomplete="email" data-erreur="${c.s('contact.formulaire.erreurEmail')}"></div>
      <div class="champ"><label for="c-sujet">${c.t('contact.formulaire.sujet')}</label>
        <select id="c-sujet" name="sujet">
          <option value="trouver">${c.t('contact.formulaire.sTrouver')}</option>
          <option value="inscription">${c.t('contact.formulaire.sInscription')}</option>
          <option value="fiche">${c.t('contact.formulaire.sFiche')}</option>
          <option value="autre">${c.t('contact.formulaire.sAutre')}</option>
        </select></div>
      <div class="champ"><label for="c-message">${c.t('contact.formulaire.message')}</label><textarea id="c-message" name="message" rows="5" required data-erreur="${c.s('contact.formulaire.erreurMessage')}"></textarea></div>
      <p class="mention-donnees">${c.t('contact.formulaire.mention')}</p>
      <button class="bouton" type="submit">${c.t('contact.formulaire.envoyer')}</button>
      <p data-message-envoi data-texte="${c.s('contact.formulaire.simule')}" tabindex="-1" hidden>${c.t('contact.formulaire.simule')}</p>
    </form>
    <aside class="rapide" data-visuel>
      <h2 class="titre-m" data-anime="lignes">${c.t('contact.rapide.titre')}</h2>
      <ul class="rapide-liste" data-anime="cascade">
        <li>${c.lien('trouver', { classe: 'lien-carte lien-carte--clair', texte: c.t('contact.rapide.r1') })}</li>
        <li>${c.lien('electriciens', { ancre: 'presence', classe: 'lien-carte lien-carte--clair', texte: c.t('contact.rapide.r2') })}</li>
        <li>${c.lien('electriciens', { ancre: 'offres', classe: 'lien-carte lien-carte--clair', texte: c.t('contact.rapide.r3') })}</li>
        <li>${c.lien('conseils', { classe: 'lien-carte lien-carte--clair', texte: c.t('contact.rapide.r4') })}</li>
      </ul>
    </aside>
  </div>
</section>
`;
