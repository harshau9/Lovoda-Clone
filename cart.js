let cartLS=JSON.parse(localStorage.getItem("cart-page"))||[];
let totalPrice=document.getElementById("total-price");

// let addArr=JSON.parse(localStorage.getItem("priority-list")) || [];
// let totalTask=document.getElementById("task-count");
displayTable(cartLS);


function displayTable(cartLS) {
document.querySelector("tbody").innerHTML="";
let total=0;
cartLS.forEach(function(elem,index) {
total+=Number(elem.prc);
let tr=document.createElement('tr');
let td1=document.createElement('td');
let image=document.createElement("img");
image.src=elem.img;
let td2=document.createElement('td');
td2.innerText=elem.name;
let td3=document.createElement('td');
td3.innerText=elem.price;
let td4=document.createElement('td');
td4.innerText=1;
// let td5=document.createElement('td');
// td5.innerText=elem.priority;
let td5=document.createElement('td');
let deleteBtn=document.createElement("button");
deleteBtn.textContent="Remove";
deleteBtn.addEventListener('click',function(){
  DeleteCart(elem,index);
});
td5.append(deleteBtn);
td1.append(image);
tr.append(td1, td2, td4, td5, td3);
document.querySelector("tbody").append(tr);

});
totalPrice.textContent=total;
}
function DeleteCart(elem,index) {
// addArr.push(elem);
// localStorage.setItem('priority-list',JSON.stringify(addArr));
cartLS.splice(index, 1);
localStorage.setItem('cart-page',JSON.stringify(cartLS));
displayTable(cartLS);
}