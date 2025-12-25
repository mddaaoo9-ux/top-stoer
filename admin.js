// admin.js
import { db } from "./firebase.js";
import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

async function addProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image").value;

  if (!name || !price || !image) {
    alert("املأ كل البيانات");
    return;
  }

  try {
    await addDoc(collection(db, "products"), {
      name: name,
      price: price,
      image: image
    });

    alert("تم إضافة المنتج ✅");
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// عشان الزرار في HTML يشوف الفنكشن
window.addProduct = addProduct;
