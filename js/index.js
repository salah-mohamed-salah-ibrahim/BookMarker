

var productName = document.getElementById('productName');
var productList=[];

if(localStorage.getItem('productList')!= null );
{
    productList = JSON.parse (localStorage.getItem('productList'));
    displayData(productList);
    
}





function addproduct(){

    var product = {
        name : productName.value
        
    }
    
    clearform();

    
    productList.push(product);
    localStorage.setItem('productList' , JSON. stringify(productList) );
     displayLastIndex();
     
     
     
     
}



function clearform(){
    productName.value = null;
    
}


function displayLastIndex(){
    
    
        var container =  `<tr>
        <td>${productList.length}</td>
        <td>${productList[productList.length -1].name}</td>
        <td>
            <button id="button-table-two" class="btn  px-3 text-white"> <i class="fa-solid fa-eye"></i> visit</button>
        </td>
        <td>
        <button onclick="deleteProduct()" id="button-table-one" class="btn  px-3 text-white"><i class="fa-solid fa-trash-can"></i> delete</button>
        </td>
    </tr>`

    document.getElementById('tbody').innerHTML += container;
    }


    function displayData(dataList){
        var container = '';
        for(var i =0 ; i < dataList.length ; i++){

         container +=  `<tr>
        <td>${i + 1}</td>
        <td>${dataList[i].name}</td>
        <td>
            <button id="button-table-two" class="btn  px-3 text-white"> <i class="fa-solid fa-eye"></i> visit</button>
        </td>
        <td>
        <button onclick="deleteProduct(${i})" id="button-table-one" class="btn  px-3 text-white"><i class="fa-solid fa-trash-can"></i> delete</button>
        </td>
    </tr>`
    }
    document.getElementById('tbody').innerHTML = container;

    }


    function deleteProduct(index){

        productList.splice(index,1);

        console.log(localStorage.getItem("productList") );
        localStorage.setItem('productList' , JSON.stringify(productList))
        
        displayData(productList)

    }







    
    

    