let title    = document.getElementById('title')
let price    = document.getElementById('price') 
let taxies   = document.getElementById('taxies') 
let ads      = document.getElementById('ads') 
let discount = document.getElementById('discount') 
let total    = document.getElementById('total') 
let count    = document.getElementById('count') 
let category = document.getElementById('category') 
let submit   = document.getElementById('create') 


// get total
let result = (+price.value + +taxies.value + +ads.value ) - +discount.value;
function getTotal() {
       if (price.value != '') {
              let result = (+price.value + +taxies.value + +ads.value ) - +discount.value;
              total.innerHTML= result
              total.style.background = '#040';

       }else {
              total.innerHTML= ''
              total.style.background = '#a00d02';
       }
}

// create product


let dataPro ;
if(localStorage.product != null) {
       dataPro = JSON.parse(localStorage.product)//converte json file to array to use it in js

}else{
       dataPro = [];
}


submit.onclick = function() {
       let newPro = {
              title:title.value,
              price:price.value,
              taxies:taxies.value,
              ads:ads.value,
              discount:discount.value,
              total:total.value,
              count:count.value,
              category:category.value,
       }
       dataPro.push(newPro)
       localStorage.setItem('product', JSON.stringify(dataPro)
       // because local storage take only json file
       )
       console.log(newPro)
       console.log(dataPro)
}

// save localstorage
// clear inputs
// read
// count
// delete
// update
// search 
// clean data