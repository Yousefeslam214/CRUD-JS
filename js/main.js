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
// save localstorage
// clear inputs
// read
// count
// delete
// update
// search 
// clean data