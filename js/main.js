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
       if (newPro.count > 1) {
              for(let i =0; i < newPro.count;i++) {
                     dataPro.push(newPro)
              }
       }
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
                     <td><button onclick="deleteData(${i})" id="update">update</button></td>
                     <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
              </tr>
              `
       }
       document.getElementById('tbody').innerHTML = table;
       let btnDelete = document.getElementById('deleteAll')
       if (dataPro.length > 0) {
              btnDelete.innerHTML = `
              <button onclick="deleteAll()">delete All</button>
              `
       }else {
              btnDelete.innerHTML= '';
       }
}


showData()

//delete
function deleteData(i) {
       dataPro.splice(i,1);
       localStorage.product =JSON.stringify(dataPro);
       showData()
}

//deleteAll
function deleteAll() {
       localStorage.clear()
       dataPro.splice(0)
       showData()
}

// count



// update
// search 
// clean data


