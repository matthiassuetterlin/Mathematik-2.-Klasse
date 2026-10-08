export function newMaterial(a = 8, b = 5, mode = 'bridge') {
  if (!['bridge', 'split'].includes(mode) || !Number.isInteger(a) || !Number.isInteger(b) || a < 1 || a > 9 || b < 1 || b > 10 || (mode === 'bridge' && a + b <= 10) || (mode === 'split' && a >= b)) throw new Error('Invalid material');
  return { mode, a, b, cuts: [], first: [], rest: [], phase: 'first' };
}
export function chunks(state) {
  const edges = [0, ...state.cuts, state.b];
  return edges.slice(0, -1).map((start, i) => Array.from({ length: edges[i + 1] - start }, (_, j) => start + j)).filter(ids => ids.every(id => !state.first.includes(id) && !state.rest.includes(id)));
}
export function cutMaterial(state, after) {
  if (!Number.isInteger(after) || after < 1 || after >= state.b || state.cuts.includes(after)) return state;
  if (!chunks(state).some(ids => ids.includes(after - 1) && ids.includes(after))) return state;
  return { ...state, cuts: [...state.cuts, after].sort((a, b) => a - b) };
}
export function moveMaterial(state, ids, destination) {
  if (!Array.isArray(ids) || !chunks(state).some(chunk => chunk.length === ids.length && chunk.every((id, i) => id === ids[i]))) return state;
  if (destination !== state.phase || !['first', 'rest'].includes(destination)) return state;
  const capacity = destination === 'first' ? (state.mode === 'bridge' ? 10 - state.a : state.a) : state.b - state.first.length;
  if (ids.length > capacity - state[destination].length) return state;
  const next = { ...state, [destination]: [...state[destination], ...ids] };
  if (next[destination].length === capacity) next.phase = destination === 'first' ? 'rest' : 'answer';
  return next;
}
export function materialTotals(state) {
  const remaining = state.b - state.first.length - state.rest.length;
  return { source: remaining, first: state.first.length, rest: state.rest.length, total: (state.mode === 'bridge' ? state.a : 0) + state.b };
}
