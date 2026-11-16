/* Recherche de l'annuaire : code postal, numéro ou nom de département, région, ville d'un inscrit.
   Les accents, les majuscules et les tirets sont ignorés. */
export const normaliser = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();

export function lireDonnees() {
  const el = document.getElementById('donnees-annuaire');
  if (!el) return null;
  try { return JSON.parse(el.textContent); } catch (e) { return null; }
}

const tous = (D) => [...D.departements, ...D.outremer.map((d) => ({ ...d, region: 'outre-mer' }))];

export function depuisCode(code, D) {
  if (!D) return null;
  let c = String(code || '').toUpperCase().trim();
  if (/^\d$/.test(c)) c = '0' + c;
  return tous(D).find((d) => d.code === c) || null;
}

/* Code postal → département (Corse : 200 et 201 en Corse-du-Sud, 202 à 206 en Haute-Corse ; outre-mer sur 3 chiffres). */
function depuisCodePostal(cp) {
  if (cp.startsWith('97')) return cp.slice(0, 3);
  if (cp.startsWith('20')) return +cp.slice(0, 3) < 202 ? '2A' : '2B';
  return cp.slice(0, 2);
}

export function resoudre(q, D) {
  if (!D) return null;
  const brut = String(q || '').trim();
  if (!brut) return null;
  const n = normaliser(brut), compact = n.replace(/\s/g, '');
  if (/^\d{5}$/.test(compact)) { const d = depuisCode(depuisCodePostal(compact), D); return d ? { type: 'dep', code: d.code } : null; }
  if (/^(\d{1,3}|2a|2b)$/.test(compact)) { const d = depuisCode(compact, D); return d ? { type: 'dep', code: d.code } : null; }
  const deps = tous(D);
  const exact = deps.find((d) => normaliser(d.nom) === n);
  if (exact) return { type: 'dep', code: exact.code };
  const region = D.regions.find((r) => normaliser(r.nom) === n) || D.regions.find((r) => n.length > 3 && normaliser(r.nom).startsWith(n));
  if (region) return { type: 'region', id: region.id };
  const debut = deps.find((d) => n.length > 2 && normaliser(d.nom).startsWith(n));
  if (debut) return { type: 'dep', code: debut.code };
  const ville = D.inscrits.find((i) => normaliser(i.ville) === n || (n.length > 3 && normaliser(i.ville).startsWith(n)));
  if (ville) return { type: 'dep', code: ville.dep };
  return null;
}
