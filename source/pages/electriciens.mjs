/* Électriciens : photo plein cadre et prix, les deux offres, la mise en avant montrée, témoignages,
   vérification de présence, inscription en trois étapes (simulée). */
import { cad } from '../gabarits/images.mjs';
import { html, brut } from '../../outils/gabarit.mjs';
import { donneesNavigateur } from '../gabarits/annuaire.mjs';

export const page = { cle: 'electriciens', fichier: 'electriciens', imagePartage: 'grok/electriciens-chantier-1280.webp' };

const coche = html`<svg class="coche" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5 10 17l9-10"/></svg>`;

export default (c) => html`
${donneesNavigateur(c)}
<section class="ouv ouv--pros" id="debut">
  ${c.media({ ...cad(c, 'grok/electriciens-chantier'), nom: 'grok/electriciens-chantier', alt: c.donnees.alts['grok/electriciens-chantier'], priorite: true, classe: 'ouv-pros-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="10" data-iris-centre' })}
  <div class="conteneur ouv-pros-texte">
    <p class="surtitre" data-anime="gsap" data-entree>${c.t('electriciens.ouverture.surtitre')}</p>
    <h1 class="titre-xxl"><span class="ligne-masque"><span class="intro-ligne" data-anime="gsap">${c.t('electriciens.ouverture.titre1')}</span></span><span class="ligne-masque"><span class="intro-ligne" data-anime="gsap"><em>${c.t('electriciens.ouverture.titre2')}</em></span></span></h1>
    <p class="ouv-chapo masque-ecran-bas" data-anime="gsap" data-entree>${c.t('electriciens.ouverture.texte')}</p>
    <p class="actions" data-anime="gsap" data-entree>
      <a class="bouton" href="#inscription" data-action-principale data-survol="magnetique">${c.t('electriciens.ouverture.action')}</a>
      <a class="bouton bouton--contour bouton--clair" href="#presence">${c.t('electriciens.ouverture.presence')}</a>
    </p>
    <p class="info-cle info-cle--prix" data-info-cle data-anime="gsap" data-entree data-prix><span class="pastille" aria-hidden="true"></span>${c.t('electriciens.ouverture.info')}</p>
  </div>
</section>

<section class="section clair offres" id="offres">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('electriciens.offres.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('electriciens.offres.titre')}</h2>
    </div>
    <ul class="offres-grille" data-anime="cascade">
      ${[['o1', 'fiche'], ['o2', 'avant']].map(([k, v]) => html`<li class="offre offre--${v}"><div class="offre-corps" data-survol="incline" data-survol-force="3">
        <h3>${c.t(`electriciens.offres.${k}nom`)}</h3>
        <p class="offre-prix" data-prix><strong class="chiffre" data-compteur="${c.s(`electriciens.offres.${k}prix`)}">${c.t(`electriciens.offres.${k}prix`)}</strong> <span>${c.t(`electriciens.offres.${k}unite`)}</span></p>
        <p class="offre-rythme">${c.t(`electriciens.offres.${k}rythme`)}</p>
        <ul class="offre-liste">${['a', 'b', 'c'].map((x) => html`<li>${coche}${c.t(`electriciens.offres.${k}${x}`)}</li>`)}</ul>
        <a class="bouton${v === 'fiche' ? ' bouton--contour' : ''}" href="?offre=${v}#inscription" data-offre-lien="${v}" data-sans-transition>${c.t('electriciens.offres.choisir')}</a>
      </div></li>`)}
    </ul>
  </div>
</section>

<section class="section demo" id="mise-en-avant">
  <div class="conteneur demo-grille">
    <div class="demo-texte">
      <p class="surtitre" data-anime>${c.t('electriciens.demo.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('electriciens.demo.titre')}</h2>
      <p data-anime>${c.t('electriciens.demo.texte')}</p>
      <p class="mention-demo" data-anime>${c.t('electriciens.demo.illustratif')}</p>
    </div>
    <div class="demo-ecran" data-visuel data-demo>
      <div class="demo-barre" aria-hidden="true"><span></span><span></span><span></span><p>electricien.fr · 38 Isère</p></div>
      <ol class="demo-liste" aria-label="${c.s('electriciens.demo.illustratif')}">
        ${[1, 2, 3].map(() => html`<li class="demo-fiche demo-fiche--neutre" aria-hidden="true"><span class="demo-rond"></span><span class="demo-lignes"><span></span><span></span></span></li>`)}
        <li class="demo-fiche demo-fiche--vous" data-effet="mise-en-avant" data-superpose>
          <span class="demo-logo">${c.t('electriciens.demo.logo')}</span>
          <span class="demo-vous"><strong>${c.t('electriciens.demo.votre')}</strong><span>${c.t('electriciens.demo.ville')}</span></span>
          <span class="demo-site">${c.t('electriciens.demo.site')} <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg></span>
        </li>
        ${[1, 2].map(() => html`<li class="demo-fiche demo-fiche--neutre" aria-hidden="true"><span class="demo-rond"></span><span class="demo-lignes"><span></span><span></span></span></li>`)}
      </ol>
    </div>
  </div>
</section>

<section class="section clair temoignages" id="temoignages">
  <div class="conteneur temoignages-grille">
    <div class="temoignages-tete">
      <p class="surtitre" data-anime>${c.t('electriciens.temoignages.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('electriciens.temoignages.titre')}</h2>
      ${c.media({ ...cad(c, 'grok/electriciens-atelier'), nom: 'grok/electriciens-atelier', alt: c.s('electriciens.temoignages.alt'), classe: 'temoignages-media', sizes: '(max-width: 760px) 88vw, 36vw', attrs: 'data-fx="parallaxe" data-fx-force="10"' })}
    </div>
    <ul class="temoignages-liste" data-anime="cascade">
      ${c.donnees.temoignages.map((t) => html`<li><figure class="temoignage">
        <blockquote><p>${t.texte}</p></blockquote>
        <figcaption><span class="temoignage-initiale" aria-hidden="true">${t.entreprise.slice(0, 1)}</span><span><strong>${t.auteur}</strong><br>${t.entreprise}</span></figcaption>
      </figure></li>`)}
    </ul>
  </div>
</section>

<section class="section presence" id="presence">
  <div class="conteneur presence-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('electriciens.presence.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('electriciens.presence.titre')}</h2>
      <p data-anime>${c.t('electriciens.presence.texte')}</p>
    </div>
    <div class="presence-outil" data-anime data-visuel>
      <form class="presence-form" data-presence novalidate>
        <label for="presence-champ">${c.t('electriciens.presence.libelle')}</label>
        <div class="presence-ligne">
          <input id="presence-champ" type="search" autocomplete="organization" required>
          <button class="bouton" type="submit">${c.t('electriciens.presence.bouton')}</button>
        </div>
      </form>
      <div class="presence-reponse" data-presence-reponse aria-live="polite"><p class="mention-demo">${c.t('electriciens.presence.demo')}</p></div>
      <template data-presence-textes data-trouve="${c.s('electriciens.presence.trouve')}" data-absent="${c.s('electriciens.presence.absent')}"></template>
    </div>
  </div>
</section>

<section class="section clair inscription fpe" id="inscription" data-module="formulaire-par-etapes">
  <div class="conteneur inscription-grille">
    <div class="fpe__tete">
      <p class="surtitre" data-anime>${c.t('electriciens.inscription.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('electriciens.inscription.titre')}</h2>
      <p data-anime>${c.t('electriciens.inscription.texte')}</p>
      <div class="inscription-total" data-total data-anime data-prix>
        <p class="inscription-total-libelle">${c.t('electriciens.inscription.total')}</p>
        <p class="inscription-total-valeur"><strong class="chiffre" data-total-valeur>320</strong> <span>€ HT</span> <span data-total-rythme>${c.t('electriciens.inscription.uneFois')}</span></p>
      </div>
    </div>
    <div class="fpe__carton" data-anime>
      <form class="fpe__form" novalidate data-inscription>
        <fieldset class="fpe__etape" data-etape="${c.s('electriciens.inscription.e1court')}">
          <legend class="fpe__legende"><h3 class="fpe__titre" tabindex="-1">${c.t('electriciens.inscription.e1')}</h3></legend>
          <div class="fpe__champ"><label for="i-nom">${c.t('electriciens.inscription.nom')}</label><input id="i-nom" name="nom" required autocomplete="organization" data-libelle="${c.s('electriciens.inscription.nom')}" data-message="${c.s('electriciens.inscription.erreurNom')}"></div>
          <div class="fpe__champ"><label for="i-cp">${c.t('electriciens.inscription.cp')}</label><input id="i-cp" name="cp" required inputmode="numeric" pattern="[0-9]{5}" maxlength="5" autocomplete="postal-code" data-libelle="${c.s('electriciens.inscription.cp')}" data-message="${c.s('electriciens.inscription.erreurCp')}"></div>
          <div class="fpe__champ"><label for="i-tel">${c.t('electriciens.inscription.telephone')}</label><input id="i-tel" name="telephone" type="tel" required pattern="[0-9 .+]{10,17}" autocomplete="tel" data-libelle="${c.s('electriciens.inscription.telephone')}" data-message="${c.s('electriciens.inscription.erreurTel')}"></div>
          <div class="fpe__champ"><label for="i-email">${c.t('electriciens.inscription.email')}</label><input id="i-email" name="email" type="email" required autocomplete="email" data-libelle="${c.s('electriciens.inscription.email')}" data-message="${c.s('electriciens.inscription.erreurEmail')}"></div>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="${c.s('electriciens.inscription.e2court')}">
          <legend class="fpe__legende"><h3 class="fpe__titre" tabindex="-1">${c.t('electriciens.inscription.e2')}</h3></legend>
          <div class="fpe__groupe fpe__cartes" data-libelle="${c.s('electriciens.inscription.offre')}">
            <label class="fpe__carte"><input type="radio" name="offre" value="fiche" checked required>
              <svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true"><rect x="6" y="5" width="20" height="22" rx="3"/><path d="M11 12h10M11 17h10M11 22h6"/></svg>
              <span class="fpe__carte-titre">${c.t('electriciens.offres.o1nom')}</span><span class="fpe__carte-texte">320 € HT, ${c.t('electriciens.offres.o1rythme')}</span></label>
            <label class="fpe__carte"><input type="radio" name="offre" value="avant">
              <svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4l3.5 7.4 8 1-5.9 5.5 1.5 8L16 22l-7.1 3.9 1.5-8L4.5 12.4l8-1z"/></svg>
              <span class="fpe__carte-titre">${c.t('electriciens.offres.o2nom')}</span><span class="fpe__carte-texte">750 € HT ${c.t('electriciens.offres.o2rythme')}</span></label>
          </div>
          <div class="fpe__champ" data-champ-deps hidden><label for="i-deps">${c.t('electriciens.inscription.departements')}</label><input id="i-deps" name="departements" inputmode="numeric" aria-describedby="i-deps-aide" pattern="\\s*(\\d{2,3}|2[ABab])(\\s*,\\s*(\\d{2,3}|2[ABab]))*\\s*" data-libelle="${c.s('electriciens.inscription.departements')}" data-message="${c.s('electriciens.inscription.erreurDeps')}"><p class="fpe__aide" id="i-deps-aide">${c.t('electriciens.inscription.departementsAide')}</p></div>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="${c.s('electriciens.inscription.e3court')}" data-recap>
          <legend class="fpe__legende"><h3 class="fpe__titre" tabindex="-1">${c.t('electriciens.inscription.e3')}</h3></legend>
          <div class="fpe__recap"></div>
          <p class="mention-donnees">${c.t('electriciens.inscription.mention')}</p>
        </fieldset>
        <div class="fpe__nav"><button type="button" class="bouton bouton--contour" data-precedent>${c.t('electriciens.inscription.precedent')}</button><button type="button" class="bouton" data-suivant>${c.t('electriciens.inscription.suivant')}</button><button type="submit" class="bouton">${c.t('electriciens.inscription.envoyer')}</button></div>
      </form>
      <div class="fpe__fin" hidden tabindex="-1"><h3>${c.t('electriciens.inscription.titre')}</h3><p data-resume></p><p class="mention-demo">${c.t('electriciens.inscription.simule')}</p><button type="button" class="bouton bouton--contour" data-recommencer>${c.t('electriciens.inscription.precedent')}</button></div>
    </div>
  </div>
</section>

<section class="section appel" id="fin">
  <div class="conteneur appel-corps">
    <h2 class="titre-l" data-anime="lignes">${c.t('electriciens.fin.titre')}</h2>
    <p data-anime>${c.t('electriciens.fin.texte')}</p>
    <p class="actions" data-anime>${c.lien('contact', { params: 'sujet=inscription', ancre: 'formulaire', classe: 'bouton', texte: c.t('electriciens.fin.contact'), attrs: 'data-survol="magnetique"' })}</p>
  </div>
  <svg class="appel-trait" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M0 40 C 240 40 300 100 480 100 S 760 20 920 50 S 1100 90 1200 80" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
</section>
`;
