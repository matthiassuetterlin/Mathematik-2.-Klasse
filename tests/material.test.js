import test from 'node:test';
import assert from 'node:assert/strict';
import {newMaterial,chunks,cutMaterial,moveMaterial,materialTotals} from '../dist/material.js';
test('A five must be split before two of its beads can fill the ten',()=>{
  let state=newMaterial();
  assert.equal(moveMaterial(state,[0,1],'first'),state);
  assert.equal(moveMaterial(state,[0,1,2,3,4],'first'),state);
  state=cutMaterial(state,2);
  assert.deepEqual(chunks(state),[[0,1],[2,3,4]]);
  state=moveMaterial(state,[0,1],'first');
  assert.equal(state.phase,'rest');
  assert.deepEqual(materialTotals(state),{source:3,first:2,rest:0,total:13});
  state=moveMaterial(state,[2,3,4],'rest');
  assert.equal(state.phase,'answer');
  assert.deepEqual(materialTotals(state),{source:0,first:2,rest:3,total:13});
});
test('Either end can supply the missing part; every task conserves bead identity',()=>{
  for(let a=1;a<=9;a++)for(let b=2;b<=10;b++){
    if(a+b<=10)continue;
    const need=10-a;
    let state=cutMaterial(newMaterial(a,b),b-need);
    state=moveMaterial(state,Array.from({length:need},(_,i)=>b-need+i),'first');
    state=moveMaterial(state,Array.from({length:b-need},(_,i)=>i),'rest');
    assert.equal(state.phase,'answer');
    assert.equal(new Set([...state.first,...state.rest]).size,b);
    assert.equal(materialTotals(state).total,a+b);
  }
});
test('Repeated cuts allow partial groups but never duplicate beads or overfill',()=>{
  let state=cutMaterial(cutMaterial(newMaterial(),1),2);
  state=moveMaterial(state,[0],'first');
  assert.equal(moveMaterial(state,[0],'first'),state);
  assert.equal(moveMaterial(state,[2,3,4],'first'),state);
  state=moveMaterial(state,[1],'first');
  assert.equal(state.phase,'rest');
  assert.equal(cutMaterial(state,1),state);
  assert.equal(moveMaterial(state,[2,3,4],'first'),state);
});
test('Splitting uses the same material without adding an extra base amount',()=>{
  let state=cutMaterial(newMaterial(2,5,'split'),2);
  state=moveMaterial(state,[0,1],'first');
  state=moveMaterial(state,[2,3,4],'rest');
  assert.deepEqual(materialTotals(state),{source:0,first:2,rest:3,total:5});
});
