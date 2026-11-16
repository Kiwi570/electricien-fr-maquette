/* electricien.fr · effets propres au projet (le socle gère l'ouverture, les transitions, l'en-tête, la bibliothèque d'effets).
   Effets du plan, chacun marqué data-effet : carte-allumee, saisie, rail-inscrits, mise-en-avant. */
import { demarrer, versObjet, etat, quand, partir, allerAncre } from './socle/index.js?v=1';
import { lireDonnees, resoudre, normaliser, depuisCode } from './annuaire.js?v=1';
import { init as initEtapes } from './modules/formulaire-par-etapes.js?v=1';

const gsap = window.gsap;
const D = lireDonnees();
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const page = location.pathname.replace(/\.html$/, '').replace(/\/index$/, '/') || '/';
const surTrouver = /\/trouver\/?$/.test(page);

/* ---------- Carte allumée ---------- */
function vague() {
  $$('[data-carte]').forEach((carte) => {
    carte.classList.remove('vague'); void carte.offsetWidth; carte.classList.add('vague');
    setTimeout(() => carte.classList.remove('vague'), 2600);
  });
}

function initCartes() {
  $$('[data-carte]').forEach((carte) => {
    const svg = $('svg', carte), bulle = $('[data-carte-bulle]', carte);
    const nom = $('[data-bulle-nom]', carte), code = $('[data-bulle-code]', carte), lien = $('[data-bulle-lien]', carte);
    const avecLien = carte.hasAttribute('data-carte-lien');
    let actif = null;
    const montrer = (path, fixe) => {
      if (!D || !path) return;
      const dep = D.departements.find((d) => d.code === path.dataset.dep);
      if (!dep) return;
      if (actif && actif !== path) actif.classList.remove('dep--actif');
      actif = path; path.classList.add('dep--actif');
      nom.textContent = dep.nom; code.textContent = `(${dep.code})`;
      if (lien) lien.href = `/trouver?d=${encodeURIComponent(dep.code)}#resultats`;
      bulle.style.left = `${(dep.c[0] / D.largeur) * 100}%`;
      bulle.style.top = `${(dep.c[1] / D.hauteur) * 100}%`;
      bulle.hidden = false;
      bulle.dataset.fixe = fixe ? '1' : '';
    };
    const cacher = () => { if (bulle.dataset.fixe) return; bulle.hidden = true; if (actif) actif.classList.remove('dep--actif'); actif = null; };
    svg.addEventListener('pointerover', (e) => { if (e.pointerType === 'mouse' && e.target.matches('.dep')) montrer(e.target, false); });
    svg.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') cacher(); });
    svg.addEventListener('click', (e) => {
      const p = e.target.closest('.dep');
      if (!p) return;
      if (!avecLien) { choisirDepartement(p.dataset.dep, { defiler: true }); return; }
      montrer(p, true);
    });
    document.addEventListener('pointerdown', (e) => { if (bulle.dataset.fixe && !carte.contains(e.target)) { bulle.dataset.fixe = ''; cacher(); } });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !bulle.hidden) { bulle.dataset.fixe = ''; cacher(); } });
    if (lien) lien.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); partir(new URL(lien.href), 'Trouver un électricien'); });
    /* Le dessin glisse doucement au défilement : il compte comme effet de la section. */
    if (gsap && window.ScrollTrigger) {
      gsap.fromTo(svg, { y: 0 }, { y: -36, ease: 'none', scrollTrigger: { trigger: carte, start: 'top top', end: 'bottom top', scrub: 0.6 } });
    }
  });
}

/* Étincelles : de temps en temps, un département s'allume puis s'éteint, comme une ligne qu'on met sous tension.
   La carte bouge seule et invite à la toucher ; arrêtée hors écran et onglet caché. */
function etincelles() {
  $$('[data-carte]').forEach((carte) => {
    const deps = $$('.dep:not(.dep--on)', carte);
    let visible = false, minuteur = null;
    const tic = () => {
      minuteur = null;
      if (!visible || document.hidden) return;
      for (let n = 0; n < 4; n++) {
        const p = deps[Math.floor(Math.random() * deps.length)];
        if (!p || p.classList.contains('dep--actif')) continue;
        p.classList.add('dep--etincelle');
        setTimeout(() => p.classList.remove('dep--etincelle'), 1300);
      }
      minuteur = setTimeout(tic, 700 + Math.random() * 500);
    };
    let premier = 3200;
    new IntersectionObserver((es) => { visible = es[0].isIntersecting; if (visible && !minuteur) { minuteur = setTimeout(tic, premier); premier = 400; } }).observe(carte);
    document.addEventListener('visibilitychange', () => { if (!document.hidden && visible && !minuteur) minuteur = setTimeout(tic, 400); });
  });
}

/* ---------- Recherche : texte qui s'écrit tout seul, envoi vers la page Trouver ---------- */
function initRecherche() {
  $$('[data-recherche]').forEach((form) => {
    const champ = $('[data-recherche-champ]', form), boite = champ.closest('.recherche-champ');
    const fantome = $('[data-fantome]', form), texte = $('[data-fantome-texte]', form);
    const exemples = (fantome.dataset.exemples || '').split('|').filter(Boolean);
    const base = texte.textContent;
    const majRempli = () => boite.classList.toggle('rempli', !!champ.value);
    champ.addEventListener('input', majRempli);
    majRempli();
    /* Saisie : un exemple s'écrit lettre par lettre, s'efface, puis le suivant. Arrêtée hors écran et onglet caché. */
    let i = 0, visible = false, minuteur = null;
    const ecrire = (mot, n, sens) => {
      if (!visible || document.hidden) { minuteur = null; return; }
      texte.textContent = mot.slice(0, n);
      let suite;
      if (sens > 0 && n < mot.length) suite = () => ecrire(mot, n + 1, 1);
      else if (sens > 0) suite = () => ecrire(mot, n, -1);
      else if (n > 0) suite = () => ecrire(mot, n - 1, -1);
      else { i = (i + 1) % exemples.length; suite = () => ecrire(exemples[i], 0, 1); }
      const delai = sens > 0 ? (n < mot.length ? 95 : 1500) : (n > 0 ? 45 : 380);
      minuteur = setTimeout(suite, delai);
    };
    const lancer = () => { if (!minuteur && visible && exemples.length) minuteur = setTimeout(() => ecrire(exemples[i], 0, 1), 1400); };
    new IntersectionObserver((es) => { visible = es[0].isIntersecting; if (!visible) { clearTimeout(minuteur); minuteur = null; texte.textContent = base; } else lancer(); }).observe(form);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) lancer(); });
    form.addEventListener('submit', (e) => {
      const q = champ.value.trim();
      e.preventDefault();
      if (surTrouver) { appliquerRecherche(q, { defiler: true }); return; }
      const r = resoudre(q, D);
      const params = r && r.type === 'dep' ? `d=${encodeURIComponent(r.code)}` : r && r.type === 'region' ? `r=${encodeURIComponent(r.id)}` : q ? `q=${encodeURIComponent(q)}` : '';
      partir(new URL(`/trouver${params ? '?' + params : ''}#${r && r.type === 'region' ? 'carte' : 'resultats'}`, location.href), 'Trouver un électricien');
    });
  });
}

/* ---------- Page Trouver : région, département, résultats (filtres gardés dans l'adresse) ---------- */
function ouvrirRegion(id) {
  $$('[data-region-bloc]').forEach((d) => { d.open = d.dataset.regionBloc === id; });
  $$('#carte-trouver .dep').forEach((p) => p.classList.toggle('dep--region', p.dataset.region === id));
}

function choisirDepartement(code, { defiler = false, pousser = true } = {}) {
  const dep = depuisCode(code, D);
  if (!dep) return;
  const titre = $('[data-resultats-titre]'), message = $('[data-resultats-message]');
  const fiches = $$('[data-fiche-dep]');
  let n = 0;
  fiches.forEach((f) => { const ok = f.dataset.ficheDep === dep.code; f.hidden = !ok; if (ok) n++; });
  titre.textContent = `${dep.nom} (${dep.code})`;
  message.textContent = n ? document.documentElement.dataset.txtTrouves || 'Derniers inscrits dans ce département. La maquette ne contient que les 10 dernières inscriptions.'
    : 'La maquette ne contient que les 10 derniers inscrits. Sur le site, ce département affichera tous ses électriciens référencés, avec leurs coordonnées.';
  $$('[data-dep-lien]').forEach((a) => { if (a.dataset.depLien === dep.code) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
  $$('#carte-trouver .dep').forEach((p) => p.classList.toggle('dep--actif', p.dataset.dep === dep.code));
  if (dep.region) ouvrirRegion(dep.region);
  const url = new URL(location.href); url.search = `?d=${dep.code}`; url.hash = 'resultats';
  if (pousser) history.replaceState(null, '', url);
  window.ScrollTrigger && window.ScrollTrigger.refresh();
  if (defiler) allerAncre('#resultats', { pousser: false });
}

function appliquerRecherche(q, { defiler = false } = {}) {
  const r = resoudre(q, D);
  if (r && r.type === 'dep') { choisirDepartement(r.code, { defiler }); return; }
  if (r && r.type === 'region') { ouvrirRegion(r.id); const url = new URL(location.href); url.search = `?r=${r.id}`; url.hash = 'carte'; history.replaceState(null, '', url); if (defiler) allerAncre('#carte', { pousser: false }); return; }
  if (q) { $('[data-resultats-titre]').textContent = `« ${q} »`; $('[data-resultats-message]').textContent = 'Nous ne reconnaissons pas cette recherche. Essayez un code postal à 5 chiffres, un numéro ou un nom de département.'; $$('[data-fiche-dep]').forEach((f) => { f.hidden = true; }); if (defiler) allerAncre('#resultats', { pousser: false }); }
}

function initTrouver() {
  if (!surTrouver) return;
  $$('[data-dep-lien]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); choisirDepartement(a.dataset.depLien, { defiler: true }); }));
  const p = new URLSearchParams(location.search);
  if (p.get('d')) choisirDepartement(p.get('d'), { pousser: false });
  else if (p.get('r')) ouvrirRegion(p.get('r'));
  else if (p.get('q')) { const champ = $('#q-trouver'); champ.value = p.get('q'); champ.dispatchEvent(new Event('input')); appliquerRecherche(p.get('q')); }
}

/* ---------- Électriciens : mise en avant, présence, inscription ---------- */
function initMiseEnAvant() {
  const vous = $('[data-effet="mise-en-avant"]');
  if (!vous || !gsap || !window.ScrollTrigger) return;
  const liste = vous.parentElement, autres = $$('.demo-fiche--neutre', liste).slice(0, 3);
  /* La fiche part de la 4e place et passe en tête ; les trois fiches neutres descendent d'une place. */
  const tl = gsap.timeline({ scrollTrigger: { trigger: liste, start: 'top 80%', end: 'top 25%', scrub: 0.8, invalidateOnRefresh: true } });
  const pas = () => vous.offsetHeight + parseFloat(getComputedStyle(liste).rowGap || 10);
  tl.fromTo(vous, { y: 0, scale: 0.97 }, { y: () => -3 * pas(), scale: 1.03, ease: 'power2.inOut' }, 0)
    .fromTo(autres, { y: 0 }, { y: () => pas(), ease: 'power2.inOut' }, 0);
}

function initPresence() {
  const form = $('[data-presence]');
  if (!form) return;
  const rep = $('[data-presence-reponse]'), t = $('[data-presence-textes]');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = normaliser($('#presence-champ').value);
    if (!q) { $('#presence-champ').focus(); return; }
    const trouves = (D?.inscrits || []).filter((i) => normaliser(i.nom).includes(q) || i.cp === q.replace(/\s/g, ''));
    rep.innerHTML = '';
    if (trouves.length) {
      const p = document.createElement('p'); p.className = 'ok';
      p.textContent = `${t.dataset.trouve} ${trouves.map((i) => `${i.nom}, ${i.cp} ${i.ville}`).join(' · ')}`;
      rep.append(p);
    } else {
      const p = document.createElement('p'); p.className = 'non'; p.textContent = t.dataset.absent; rep.append(p);
      const a = document.createElement('a'); a.className = 'lien-fleche'; a.href = '#inscription'; a.textContent = 'Inscrire mon entreprise'; rep.append(a);
    }
    window.ScrollTrigger && window.ScrollTrigger.refresh();
  });
}

function initInscription() {
  const racine = $('[data-module="formulaire-par-etapes"]');
  if (!racine) return;
  const form = $('[data-inscription]', racine), deps = $('[data-champ-deps]', racine), champDeps = $('#i-deps');
  const total = $('[data-total-valeur]'), rythme = $('[data-total-rythme]');
  const maj = () => {
    const offre = (form.querySelector('[name="offre"]:checked') || {}).value || 'fiche';
    const avant = offre === 'avant';
    deps.hidden = !avant; champDeps.required = avant; champDeps.disabled = !avant;
    const n = avant ? Math.max(1, (champDeps.value.match(/(\d{2,3}|2[ab])/gi) || []).length) : 1;
    total.textContent = new Intl.NumberFormat('fr-FR').format(avant ? 750 * n : 320).replace(/ /g, ' ');
    rythme.textContent = avant ? `${n > 1 ? `pour ${n} départements, ` : ''}par an` : 'une seule fois';
  };
  form.addEventListener('input', maj); form.addEventListener('change', maj);
  const choisir = (v) => { const r = form.querySelector(`[name="offre"][value="${v}"]`); if (r) { r.checked = true; maj(); } };
  const p = new URLSearchParams(location.search).get('offre');
  if (p) choisir(p);
  maj();
  $$('[data-offre-lien]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); choisir(a.dataset.offreLien); allerAncre('#inscription', { pousser: false }); }));
  initEtapes(racine, { messages: { etape: 'Étape {n} sur {total}' } }).catch((err) => console.error('[inscription]', err));
  racine.addEventListener('formulaire:envoye', () => { const fin = $('.fpe__fin', racine); setTimeout(() => { if (fin) { fin.focus({ preventScroll: true }); allerAncre('#inscription', { pousser: false }); } }, 60); });
}

/* ---------- Intro et arrivée ---------- */
const lignes = () => $$('.intro-ligne');
const blocsIntro = () => $$('[data-entree]');

function arriveePage(tl, t0) {
  if (lignes().length) tl.fromTo(lignes(), { yPercent: 135, opacity: 1 }, { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power4.out' }, t0);
  if (blocsIntro().length) tl.fromTo(blocsIntro(), { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.07, ease: 'power3.out' }, t0 + 0.15);
  if ($('[data-carte]')) tl.call(vague, null, Math.max(0, t0 - 0.2));
}

demarrer({
  preparer() {
    initCartes();
    etincelles();
    initRecherche();
    initTrouver();
    initMiseEnAvant();
    initPresence();
    initInscription();
  },
  /* Intro (2,3 s) : le mot-symbole se pose, le logo glisse jusqu'à l'objet d'ouverture de la page (la carte sur l'accueil),
     le panneau s'ouvre en cercle depuis lui ; puis les titres montent et la carte s'allume en vague (lancée à part). */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-nom', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, 0.1)
      .fromTo('.ouverture-trait', { scaleX: 0 }, { scaleX: 1, duration: 0.55 }, 0.25)
      .fromTo('.ouverture-ligne', { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.4)
      .to('.ouverture-nom, .ouverture-ligne, .ouverture-trait', { opacity: 0, duration: 0.25 }, 0.85);
    versObjet(tl, { a: 1.0 });
    arriveePage(tl, 1.45);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set([...lignes(), ...blocsIntro()], { clearProps: 'transform,opacity' });
  },
  arrivee() {
    if (!gsap) return;
    const tl = gsap.timeline();
    arriveePage(tl, 0.12);
  },
});
