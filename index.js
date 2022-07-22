let product_data = [
  {
    name: "Ripple Ring",
    price: "$14.00",
    prc: "14",
    productID: "1",
    img: "images/all/1.png",
    bestselling: false,
  },
  {
    name: "Round and Round Ring",
    price: "$14.00",
    prc: "14",
    productID: "2",
    img: "images/all/2.png",
    bestselling: true,
  },
  {
    name: "Dreamer Ring",
    price: "$14.00",
    prc: "14",
    productID: "3",
    img: "images/all/3.png",
    bestselling: true,
  },
  {
    name: "Lucky 3's Ring",
    price: "$14.00",
    prc: "14",
    productID: "4",
    img: "images/all/4.png",
    bestselling: false,
  },
  {
    name: "Ambition Stone Ring | Pine",
    price: "$20.00",
    prc: "20",
    productID: "5",
    img: "images/all/5.png",
    bestselling: true,
  },
  {
    name: "Initial Ring | Size 7",
    price: "$14.00",
    prc: "14",
    productID: "6",
    img: "images/all/6.png",
    bestselling: false,
  },
  {
    name: "Ambition Stone Ring | Dusty Rose",
    price: "$20.00",
    prc: "20",
    productID: "7",
    img: "images/all/8.png",
    bestselling: true,
  },
  {
    name: "Rays Of Light Hoops",
    price: "$16.00",
    prc: "16",
    productID: "8",
    img: "images/all/8.png",
    bestselling: false,
  },
  {
    name: "Bubbly Ring",
    price: "$18.00",
    prc: "18",
    productID: "9",
    img: "images/all/9.png",
    bestselling: true,
  },
  {
    name: "All Smiles Ring",
    price: "$14.00",
    prc: "14",
    productID: "10",
    img: "images/all/10.png",
    bestselling: false,
  },
  {
    name: "Dimensions Ring",
    price: "$12.00",
    prc: "12",
    productID: "11",
    img: "images/all/11.png",
    bestselling: true,
  },
  {
    name: "Ophelia Ring",
    price: "$14.00",
    prc: "14",
    productID: "12",
    img: "images/all/12.png",
    bestselling: false,
  },
  {
    name: "Plate Oval Chain Necklace",
    price: "$16.00",
    prc: "16",
    productID: "13",
    img: "images/all/13.png",
    bestselling: true,
  },
  {
    name: "Solitary Simplicity Gem Stone Ring",
    price: "$14.00",
    prc: "14",
    productID: "14",
    img: "images/all/14.png",
    bestselling: false,
  },
  {
    name: "Ambition Stone Ring | Haze",
    price: "$20.00",
    prc: "20",
    productID: "15",
    img: "images/all/15.png",
    bestselling: true,
  },
  {
    name: "Braided Ring",
    price: "$14.00",
    prc: "14",
    productID: "16",
    img: "images/all/16.png",
    bestselling: false,
  },
];
let alll=document.querySelector(".all-prd");

document.querySelector("#sortName").addEventListener("change", handleNameSort);
let cartLS=JSON.parse(localStorage.getItem("cart-page"))||[];


function handleNameSort() {
  let selected = document.querySelector("#sortName").value;

  if(selected =="all"){
    product_data.sort((a,b) => {
    return a.productID - b.productID;
    });
    Display(product_data);
    }

  if (selected == "Ascending") {
    product_data.sort(function(a,b){
      let x= a.name.toUpperCase();
      let y= b.name.toUpperCase();
      if(x > y) return 1;
      if(x < y) return -1;
      return 0;
    });
    // console.log(appliedJobs);
    Display(product_data)
  }
  if (selected == "Descending") {
    product_data.sort(function(a,b){
      let x= a.name.toUpperCase();
      let y= b.name.toUpperCase();
      if(x > y) return -1;
      if(x < y) return 1;
      return 0;
    });
    // console.log(appliedJobs);
    Display(product_data);
  }
  if(selected == "low"){
    product_data.sort((a,b) => {
      return a.prc - b.prc;
      });
      Display(product_data);
  }
  if(selected == "high"){
    product_data.sort((a,b) => {
      return b.prc - a.prc;
      });
      Display(product_data);
  }
  if(selected == "best"){
    let filtered=product_data.filter(function(elem){
      return elem.bestselling==true;
    });
    Display(filtered);
  }

  }



function Display(product_data){
  alll.innerHTML = null;

  product_data.forEach(function(ele){

    let product=document.createElement("div");
    let img=document.createElement("img");
    img.src=ele.img;
    let name=document.createElement("h5");
    name.textContent=ele.name;
    let price=document.createElement("h4");
    price.textContent=ele.price;
    // let icon=document.createElement("i");
    // icon.setAttribute("class","fa-solid fa-heart");
    let cart=document.createElement("button");
    cart.textContent="Add To Cart";
    cart.addEventListener("click", function(){
      AddToCart(ele);
    });
    // cart.append(icon);
    product.append(img, name, price, cart);
    alll.append(product);
  
  });
}
Display(product_data);




function AddToCart(product){

  for(let i=0;i<cartLS.length;i++){
    if(cartLS[i].productID===product.productID){
      alert("product already in the cart");
      return;
    }
  }
  
 
  cartLS.push(product);
  alert("product added to cart");
  localStorage.setItem("cart-page",JSON.stringify(cartLS));
}


//   let signinLS=JSON.parse(localStorage.getItem("signin"));
//   let nav=document.getElementById("nav");
//   let username=document.createElement("h1")
//   if(signinLS != null){
//   nav.innerHTML = null;
//   username.innerText=signinLS.name;
//   let cartBTN=document.createElement("a");
//   cartBTN.setAttribute("href","cart.html");
//   cartBTN.innerText="CART";
//   nav.append(username,cartBTN);
//   }
