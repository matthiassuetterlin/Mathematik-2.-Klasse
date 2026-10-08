export const BRIDGES = [[8,5],[9,4],[7,5],[8,4],[6,7],[9,6],[7,6],[8,7],[6,5],[9,3],[7,4],[5,8]];
export const SPLITS = [[5,2],[6,2],[7,3],[5,3],[8,3],[6,4],[9,4],[8,5],[10,6]];
export function bridge(a=8,b=5){if(!Number.isInteger(a)||!Number.isInteger(b)||a<1||a>9||b<1||b>10||a+b<10)throw new Error('Ungültige Aufgabe');return {a,b,moved:[],phase:'place'};}
export function moveBridge(state,ids){const next=[...new Set(ids)];if(state.phase!=='place'||!next.length||next.some(i=>!Number.isInteger(i)||i<0||i>=state.b||state.moved.includes(i))||next.length>10-state.a-state.moved.length)return state;const moved=[...state.moved,...next];return {...state,moved,phase:moved.length===10-state.a?'rest':'place'};}
export function split(n=5,take=2){return {n,take,moved:[],phase:'place'};}
export function moveSplit(state,ids){const next=[...new Set(ids)];if(state.phase!=='place'||!next.length||next.some(i=>!Number.isInteger(i)||i<0||i>=state.n||state.moved.includes(i))||next.length>state.take-state.moved.length)return state;const moved=[...state.moved,...next];return {...state,moved,phase:moved.length===state.take?'rest':'place'};}
export function exchange(state,direction){const {tens,units}=state;if(direction==='bundle'&&units>=10)return {tens:tens+1,units:units-10};if(direction==='open'&&tens>0)return {tens:tens-1,units:units+10};return state;}
export function fromNumber(n){if(!Number.isInteger(n)||n<0||n>100)throw new Error('Bitte eine ganze Zahl von 0 bis 100 wählen.');return {tens:Math.floor(n/10),units:n%10};}
export function value(state){return state.tens*10+state.units;}
