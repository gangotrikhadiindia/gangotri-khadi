db.collection("orders").get()

.then(snapshot=>{

snapshot.forEach(doc=>{

orders.innerHTML+=`

<div>

${doc.data().email}

₹${doc.data().total}

</div>

`;

});

});
