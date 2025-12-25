import { db } from './firebase.js';
import {
collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const col = collection(db, 'products');


window.addProduct = async function(){
await addDoc(col, {
name: name.value,
price: price.value,
img: img.value
});
}


onSnapshot(col, snap =>{
adminProducts.innerHTML='';
snap.forEach(d=>{
const p = d.data();
adminProducts.innerHTML += `
<div>
<b>${p.name}</b> - ${p.price}
<button onclick="del('${d.id}')">حذف</button>
<button onclick="edit('${d.id}','${p.name}','${p.price}','${p.img}')">تعديل</button>
</div>`;
});
});


window.del = async id => await deleteDoc(doc(db,'products',id));


window.edit = async (id,n,p,i)=>{
const nn = prompt('اسم المنتج',n);
const pp = prompt('السعر',p);
await updateDoc(doc(db,'products',id),{name:nn,price:pp,img:i});
}
