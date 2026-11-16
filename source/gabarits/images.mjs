/* Cadrages calculés par le pipeline d'images (donnees/images.json) : ordinateur et téléphone. */
export function cad(c, nom) {
  const e = c.donnees.images && c.donnees.images[nom];
  if (!e) return {};
  const o = {};
  if (e.cadrage) o.cadrage = e.cadrage;
  if (e.mobile && e.mobile.cadrage) o.cadrageMobile = e.mobile.cadrage;
  return o;
}
