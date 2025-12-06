// ===============================
// المنتجات (من LocalStorage)
// ===============================
let products = JSON.parse(localStorage.getItem("products")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];


// حفظ
function saveProducts() {
localStorage.setItem("products", JSON.stringify(products));
}
function saveCart() {
localStorage.setItem("cart", JSON.stringify(cart));
}


// ===============================
// إضافة منتج (الإدارة)
// ===============================
function addProduct() {
const name = document.getElementById("pname").value;
const price = Number(document.getElementById("pprice").value);
const image = document.getElementById("pimage").value;


if (!name || !price || !image) return alert("اكتب البيانات كاملة");


const id = Date.now().toString();


products.push({ id, name, price, image });
saveProducts();
loadAdmin();
}


// ===============================
// عرض المنتجات (الإدارة)
// ===============================
function loadAdmin() {
const box = document.getElementById("admin-products");
if (!box) return;


box.innerHTML = "";
products.forEach(p => {
box.innerHTML += `
<div class="product">
<img src="${p.image}">
<h3>${p.name}</h3>
<p>${p.price} جنيه</p>
<button onclick="deleteProduct('${p.id}')">حذف</button>
</div>`;
});
}


function deleteProduct(id) {
products = products.filter(p => p.id !== id);
saveProducts();
loadAdmin();
}


}
