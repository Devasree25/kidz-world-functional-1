var cartPrice = document.getElementById("cart-value");
var cartBtn = document.getElementById("cart");

var addBtn = document.getElementsByClassName("button");

var items = [
    {
        name: "This was our pact",
        quantity: 0,
        dollars: 7,
        cents: 49,
    },
    {
        name: "The famous five",
        quantity: 0,
        dollars: 4,
        cents: 59,
    },
    {
        name: "Matilda",
        quantity: 0,
        dollars: 6,
        cents: 80,
    },
    {
        name:"Harry potter",
        quantity: 0,
        dollars: 10,
        cents: 0,
    },
    {
        name:"Wimpy kid - DIY",
        quantity: 0,
        dollars: 4,
        cents: 99,

    },
    {
        name:"Dart Board",
        quantity: 0,
        dollars: 17,
        cents: 49,

    },
    {
        name:"connect Four",
        quantity: 0,
        dollars: 19,
        cents: 99,

    },
    {  
        name:"Jenga",
        quantity: 0,
        dollars: 20,
        cents: 99,
    },
    {
        name:"Monopoly",
        quantity: 0,
        dollars: 19,
        cents: 49,
    },
    {
        name:"Bookmarks",
        quantity: 0,
        dollars: 12,
        cents: 49
    },
    {
        name:"Birthday Card",
        quantity: 0,
        dollars: 12,
        cents: 49,
    },
    {
        name:"Stuffed toys",
        quantity: 0,
        dollars: 15,
        cents: 99,
    },
    {
        name:"Dream catcher drawing",
        quantity: 0,
        dollars: 19,
        cents: 99,
    },
];
function submitCart() {
    let cart = 0;
    for (index=0; index < items.length; index++) {
        cart = cart + items[index].quantity;
    }
    cartPrice.innerHTML = cart;

}
for (let i = 0; i < addBtn.length;i++){
    addBtn[i].onclick = (e) => {
        items[i].quantity++;
        submitCart();
    };
}
var finalDollars = 0;
var finalCents = 0;

function updateCart(){
    let totalPriceInCents =0;

    for (index = 0; index < items.length; index++){
        totalPriceInCents = 
        totalPriceInCents +
        items[index].quantity * (items[index].dollars * 100 + items[index].cents);
    }
    finalDollars = Math.floor(totalPriceInCents/100);
    finalCents = totalPriceInCents % 100;
}
var whatsappLink =
  "https://api.whatsapp.com/send?phone=919000000000&text=Order%20details";

function updateWhatsappLink() {
  for (let index = 0; index < items.length; index++) {
    if (items[index].quantity != 0) {
      whatsappLink += "%0A" + items[index].name + "%20" + items[index].quantity;
    }
  }
  whatsappLink +=
    "%0A" + "Total%20Price:%20$" + finalDollars + "%20" + finalCents + "c";
}


cartBtn.onclick = () => {
    updateCart();
    updateWhatsappLink();
    window.open(whatsappLink, "_blank");
  

    
    for (let index = 0; index < items.length; index++) {
        if (items[index].quantity != 0) {
          console.log(
            "Item name: " +
              items[index].name +
              " - Quantity: " +
              items[index].quantity
          );
        }
}

console.log(
    "The total amount is " + finalDollars + "$ and " + finalCents + " cents"
  );
};