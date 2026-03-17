function payRazorpay(){

var options = {

"key":"YOUR_RAZORPAY_KEY",

"amount":50000,

"currency":"INR",

"name":"Gangotri Khadi",

"description":"Product Payment",

"handler":function(response){

alert("Payment Successful");

}

};

var rzp = new Razorpay(options);

rzp.open();

}
