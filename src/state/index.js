import { proxy } from "valtio";

// Using a Valtio state model to bridge reactivity between
// the canvas and the dom, both can write to it and/or react to it.
const state = proxy({
  current: null,
  items: {
    laces: "#ffffff",
    mesh: "#ffffff",
    caps: "#ffffff",
    inner: "#ffffff",
    sole: "#ffffff",
    stripes: "#ffffff",
    band: "#ffffff",
    patch: "#ffffff",
    ['Glass Basic White #2']:"#ffffff",
    showPanel:false,
    showVideoCart:true,
    showMotherBoard:true,
    pinPointIndex:0
  },
});

export default state