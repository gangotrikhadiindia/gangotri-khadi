let cart=[];

function renderProducts(){

productList.innerHTML="";

products.forEach((p,i)=>{

productList.innerHTML+=`

<div class="product">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>${p.desc}</p>

<p>₹${p.price}</p>

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

cartItems.innerHTML="";

cart.forEach(p=>{

cartItems.innerHTML+=p.name+" ₹"+p.price+"<br>";

});

}

function orderWhatsApp(){

let msg="Order:%0A";

cart.forEach(p=>{

msg+=p.name+" ₹"+p.price+"%0A";

});

window.open("https://wa.me/91XXXXXXXXXX?text="+msg);

}

function payUPI(){

window.open("upi://pay?pa=yourupi@upi");

}

function searchProduct(){

let s=search.value.toLowerCase();

productList.innerHTML="";

products.filter(p=>p.name.toLowerCase().includes(s)).forEach((p,i)=>{

productList.innerHTML+=`

<div class="product">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<button onclick="addCart(${i})">Add</button>

</div>

`;

});

}

renderProducts();
