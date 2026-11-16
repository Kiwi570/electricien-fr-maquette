/* Image de partage 1200×630 de chaque page (photo du client, logo, accroche, polices et couleurs du site).
   outils/images-partage.mjs photographie ces pages et écrit assets/partage/<page>-<langue>.jpg. */
import { html, brut } from '../../outils/gabarit.mjs';

export function page(c) {
  const cle = c.page.cle;
  const image = c.page.imagePartage || c.site.imagePartage;
  return html`<!doctype html>
<html lang="${c.l}"><head><meta charset="utf-8">
<link rel="stylesheet" href="/assets/css/socle.css"><link rel="stylesheet" href="/assets/css/site.css">
<style>${brut(`:root{--fond:${c.site.couleurs.fond};--texte:${c.site.couleurs.texte}}
html,body{margin:0;width:1200px;height:630px;overflow:hidden;background:var(--fond);color:var(--texte)}
.carte{display:grid;grid-template-columns:1fr 1fr;width:1200px;height:630px}
.carte-texte{display:flex;flex-direction:column;justify-content:space-between;padding:64px}
.carte-texte img{width:72px;height:72px}
.carte-titre{font-family:var(--police-titres);font-weight:800;font-stretch:125%;letter-spacing:-.02em;font-size:54px;line-height:1.05;margin:0;text-wrap:balance}
.carte-nom{font-family:var(--police-titres);font-weight:800;font-stretch:125%;font-size:28px;margin:0}.carte-nom b{color:#F07A3C}
.carte-image{background:center/cover no-repeat}`)}</style>
</head><body>
<div class="carte">
  <div class="carte-texte">
    <img src="/assets/images/logo.svg" alt="">
    <p class="carte-titre">${c.t(`pages.${cle}.accroche`)}</p>
    <p class="carte-nom">electricien<b>.fr</b></p>
  </div>
  <div class="carte-image" style="background-image:url('/assets/images/${image}')"></div>
</div>
</body></html>`;
}
