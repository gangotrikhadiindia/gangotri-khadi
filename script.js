let products = JSON.parse(localStorage.getItem("products")) || [];

function renderProducts(){

const container = document.getElementById("product-list");
container.innerHTML = "";

products.forEach((p,index)=>{

const card = document.createElement("div");
card.className="product";

card.innerHTML = `
<img src="${p.image}">
<h3>${p.name}</h3>
<p>${p.desc}</p>
<p class="price">${p.price}</p>
<a class="btn" href="https://wa.me/91XXXXXXXXXX">Order on WhatsApp</a>
`;

container.appendChild(card);

});

}

function addProduct(){

const name = document.getElementById("pname").value;
const price = document.getElementById("pprice").value;
const image = document.getElementById("pimage").value;
const desc = document.getElementById("pdesc").value;

const product = {name,price,image,desc};

products.push(product);

localStorage.setItem("products",JSON.stringify(products));

renderProducts();

}

renderProducts();
