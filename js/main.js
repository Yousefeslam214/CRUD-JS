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
//let result = (+price.value + +taxies.value + +ads.value ) - +discount.value;

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

//console.log(result)

// create product

let dataPro ;
if(localStorage.product != null) {
       dataPro = JSON.parse(localStorage.product)//converte json file to array to use it in js

}else{
       dataPro = [];
}


submit.onclick = function() {
       // save localstorage
       let newPro = {
              title:title.value,
              price:price.value,
              taxies:taxies.value,
              ads:ads.value,
              discount:discount.value,
              total:total.innerHTML,
              count:count.value,
              category:category.value,
       }
       dataPro.push(newPro)
       localStorage.setItem('product', JSON.stringify(dataPro)
       // because local storage take only json file
       )

       
       // clear inputs


       
       function clearData() {
              title.value = '';
              price.value = '';
              taxies.value = '';
              ads.value = '';
              discount.value = '';
              total.innerHTML = '';
              count.value ='';
              category.value ='';
       }
       
       clearData()
       showData()

}


// read

function showData() {
       let table = '';
       for(let i =0 ;i < dataPro.length;i++) {
              table +=`
              <tr>
                     <td>${i}</td>
                     <td>${dataPro[i].title}</td>
                     <td>${dataPro[i].price}</td>
                     <td>${dataPro[i].taxies}</td>
                     <td>${dataPro[i].ads}</td>
                     <td>${dataPro[i].discount}</td>
                     <td>${dataPro[i].total}</td>
                     <td>${dataPro[i].category}</td>
                     <td><button id="update">update</button></td>
                     <td><button id="delete">delete</button></td>
              </tr>
              `
       }
       document.getElementById('tbody').innerHTML = table;
}


showData()

// count
// delete
// update
// search 
// clean data