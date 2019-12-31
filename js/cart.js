let wrapper='';
let total_pro;
let arr=[];
let  totalSum;
startArr=[]
window.onload = function() {
  document.querySelectorAll('input[type=number]').forEach(el=> {

    price= Number(el.getAttribute("pr_pro"))
    start=startArr.push(price) 

   console.log(price);
   let total_wrapper = el.parentElement.nextElementSibling
   total_wrapper.innerHTML=  price;
  })

  Sum=sumArray(startArr);
  document.querySelector('.allSum').innerHTML= Sum;
  
}



    
let selectedProduct = JSON.parse(localStorage.getItem("product_in_cart"));
console.log("product_in_cart " + selectedProduct);
for (i = 1; i < selectedProduct.length; i++) {
  
    wrapper +=

      `
      <div class="content row my-5 py-2 text-center">
      <div class="img-holder col-md-5 row">
      <img src="${selectedProduct[i].ProductPicUrl}" class='col-md-4' width='80' height='80' alt="">
        <p class='col-md-6 mt-3'>${selectedProduct[i].Name}</p>
      </div>
      <div class="price col-md-2"><p class='mt-4'>${selectedProduct[i].Price}</p></div>
    
      <div class="quantity col-md-3">
        <input type="number" name="" class='mt-4' value="1" pr_pro='${selectedProduct[i].Price}' >
      </div>
      <div class="total col-md-2 mt-4"></div>
    </div>
     
     `


};
document.querySelector('.view').innerHTML= wrapper;

document.querySelectorAll('input[type=number]').forEach(el=> {
  
el.addEventListener('change' , ev =>{
   price= el.getAttribute("pr_pro")
  console.log(price);
  let total_wrapper = el.parentElement.nextElementSibling
  console.log(total_wrapper);
  x = el.value;
  total_pro=Number(price) * Number(x) ;
  el.setAttribute('tPPRO' , total_pro)
  total_wrapper.innerHTML= total_pro
   arr.push(total_pro);
   arr= getUnique(arr);
   totalSum = sumArray(arr);
   document.querySelector('.allSum').innerHTML= totalSum;
  
})

})


function sumArray(arr){
  var sum =0;
  for(i=0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}


function getUnique(array){
        
  var uniqueArray = [];
        // Loop through array values
        for(i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        console.log(uniqueArray);
        

        return uniqueArray;
          }


          