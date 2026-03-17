let products = JSON.parse(localStorage.getItem("products")) || [];
let contact = JSON.parse(localStorage.getItem("contact")) || {};
let orders = JSON.parse(localStorage.getItem("orders")) || [];
let cart = [];

function renderProducts(){

let list=document.getElementById("productList");
list.innerHTML="";

products.forEach((p,i)=>{

list.innerHTML+=`

<div class="product">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>${p.desc}</p>

<p><b>Price:</b> ₹${p.price}</p>

<p><b>Color:</b> ${p.color}</p>

<p><b>Size:</b> ${p.size}</p>

<button onclick="addCart(${i})">Add to Cart</button>

</div>

`;

});

}

function addCart(i){

cart.push(products[i]);
renderCart();

}

function renderCart(){

let cartBox=document.getElementById("cartItems");

cartBox.innerHTML="";

let total=0;

cart.forEach(p=>{

total+=Number(p.price);

cartBox.innerHTML+=`

<div>

${p.name} - ₹${p.price}

</div>

`;

});

cartBox.innerHTML+=`<h3>Total: ₹${total}</h3>`;

}

function orderWhatsApp(){

let msg="*Gangotri Khadi Order*%0A";

let total=0;

cart.forEach(p=>{

msg+=`${p.name} - ₹${p.price}%0A`;

total+=Number(p.price);

});

msg+=`%0ATotal: ₹${total}`;

window.open(`https://wa.me/${contact.whatsapp}?text=${msg}`);

saveOrder(total);

}

function payUPI(){

let total=0;

cart.forEach(p=>{

total+=Number(p.price);

});

window.open(`upi://pay?pa=${contact.upi}&pn=GangotriKhadi&am=${total}`);

saveOrder(total);

}

function saveOrder(total){

let order={

items:cart,
total:total,
date:new Date().toLocaleString()

};

orders.push(order);

localStorage.setItem("orders",JSON.stringify(orders));

cart=[];

renderCart();

}

function renderOrders(){

let box=document.getElementById("orderHistory");

if(!box) return;

box.innerHTML="";

orders.forEach(o=>{

box.innerHTML+=`

<div>

<b>Date:</b> ${o.date}<br>
<b>Total:</b> ₹${o.total}

</div>

<hr>

`;

});

}

function renderContact(){

phone.innerText="Phone: "+(contact.phone||"");

whatsapp.innerText="WhatsApp: "+(contact.whatsapp||"");

instagram.innerText="Instagram: "+(contact.instagram||"");

facebook.innerText="Facebook: "+(contact.facebook||"");

upi.innerText="UPI: "+(contact.upi||"");

}

renderProducts();
renderContact();
renderOrders();
