let title    = document.getElementById('title');
let price    = document.getElementById('price') ;
let taxies   = document.getElementById('taxies') ;
let ads      = document.getElementById('ads') ;
let discount = document.getElementById('discount'); 
let total    = document.getElementById('total') ;
let count    = document.getElementById('count') ;
let category = document.getElementById('category'); 
let submit   = document.getElementById('create') ;
let mood = 'create';
let tmp;

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
              title:title.value.toLowerCase(),
              price:price.value,
              taxies:taxies.value,
              ads:ads.value,
              discount:discount.value,
              total:total.innerHTML,
              count:count.value,
              category:category.value.toLowerCase(),
       }
       // count
       if(mood=="create"){
              if (newPro.count > 1) {
                     for(let i =0; i < newPro.count;i++) {
                            dataPro.push(newPro)
                     }
              } else{
                     dataPro.push(newPro)
              }
       } else {
              dataPro[tmp]=newPro;
              mood = 'create'
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

       getTotal()

       let table = '';
       for(let i =0 ;i < dataPro.length;i++) {
              tmp =i
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
                     <td><button onclick="updateData(${i})" id="update">update</button></td>
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

// update
function updateData(i) {
       title.value = dataPro[i].title
       price.value = dataPro[i].price
       taxies.value = dataPro[i].taxies
       ads.value = dataPro[i].ads
       discount.value = dataPro[i].discount
       category.value = dataPro[i].category 

       getTotal()
       count.style.display='none';
       submit.innerHTML="update";
       mood= 'update'
       tmp=i

       scroll({
              top:0,
              behavior:'smooth'
       })      
}
// search 
let searchMood 
//= 'title' ;

function getSearchMood(id) {
       let search = document.getElementById('search')
       if(id == 'searchTitle') {
              searchMood = 'title';
       }else if (id == 'searchCategory'){
              searchMood = 'category';
       }
       search.placeholder = 'Search By ' + searchMood;
       search.focus()
       console.log(searchMood)
       search.value='';
       showData()


}

function searchData(value) {
       let table = '';
       if(searchMood == 'title') {
              for(let i = 0; i <dataPro.length;i++){
                     if(dataPro[i].title.includes(value.toLowerCase())){
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
                            <td><button onclick="updateData(${i})" id="update">update</button></td>
                            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                     </tr>
                     `

                     }
              }
       }
       
       
       
       
       else if(searchMood == 'category'){
              for(let i = 0; i <dataPro.length;i++){
                     if(dataPro[i].category.includes(value.toLowerCase())){
                     console.log(i)
                     
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
                            <td><button onclick="updateData(${i})" id="update">update</button></td>
                            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                     </tr>
                     `

                     }
              }      
       }
       document.getElementById('tbody').innerHTML = table;

}


// clean data


