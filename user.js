import { db } from './firebase.js';
import { collection, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const col = collection(db,'products');


onSnapshot(col, snap=>{
products.innerHTML='';
snap.forEach(d=>{
const p = d.data();
products.innerHTML += `
<div class="card">
<img src="${p.img}">
<h3>${p.name}</h3>
<p>${p.price} جنيه</p>
</div>`;
});
});
