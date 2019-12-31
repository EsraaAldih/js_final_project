let total = 0;
let loaded = document.getElementsByClassName('cart')[0]
window.onload = function () {
  if(!localStorage.getItem('total')){
    loaded.innerHTML = 'No selected items'
  }
  else{
  loaded.innerHTML = 'Total Price :' +' '+ localStorage.getItem('total')
  }
}




let URL =
  "https://gist.githubusercontent.com/a7med-hussien/7fc3e1cba6abf92460d69c0437ce8460/raw/da46abcedf99a3d2bef93a322641926ff60db3c3/products.json";
let product_view = [];

wrapper = "";
let cartArray = [];


fetch(URL)
  .then(Response => Response.json())
  .then(data => {
    let page_size = 9;
    let page_nums = 0;
    let allData = [];
    let pagedData = [];
    let pagger_wrapper = "";
    data = data.ProductCollection;
    allData = data;
    // console.log(allData);


    pagedData = allData.slice(0, 9);
    // console.log(pagedData);

    page_nums = Math.ceil(allData.length / page_size);
    //pagging
    for (let i = 1; i <= page_nums; i++) {
      pagger_wrapper += `<li class='border border-secondary '> <a page-index ='${i}'>${i}</a></li>`;
    }
    document.querySelector(".pagging").innerHTML = pagger_wrapper;
    //
    document.querySelector("#content").innerHTML = bindingpages(pagedData);

    document.querySelector(".pagging li a").classList.add("paggingActive");





    document.querySelector(".pagging").addEventListener("click", ev => {

      if (ev.target && ev.target.nodeName == "A") {
        ev.preventDefault()
        let links = document.querySelectorAll(".pagging li a");
        links.forEach(link => {
          link.classList.remove("paggingActive");
        });
        ev.target.classList.add("paggingActive");

        // console.log(ev.target.getAttribute("page-index"));
        let index = Number(ev.target.getAttribute("page-index")) - 1;
        let start = index * page_size;
        let end = start + page_size;


        document.querySelector("#content").innerHTML = bindingpages(allData.slice(start, end));
      }
    });


    document.querySelector("#content").addEventListener("click", ev => {
      ev.preventDefault();
      if (ev.target && ev.target.nodeName == "IMG") { details(ev.target) }
      else if (ev.target && ev.target.parentElement.nodeName == "BUTTON") {
        bttn = ev.target.parentElement;
        storeCart(bttn)
      }
      console.log(ev.target.parentElement.nodeName)
    })

    function details(el) {
      let id = el.getAttribute('id-prod')
      let index = allData.findIndex(item => item.ProductId == id);
      console.log(allData[index])
      product_view = allData[index]
      localStorage.setItem('product_view', JSON.stringify(product_view));
      // window.open('viewProduct.html')
      window.location.href = `viewProduct.html?${product_view.ProductId}`
    }


    function storeCart(el) {

      let id = el.getAttribute('prod')
      let price = Number(el.getAttribute('price'))
      let index = allData.findIndex(item => item.ProductId == id);
      console.log(allData[index])
      pro = allData[index]
      cartArray = JSON.parse(localStorage.getItem("product_in_cart"));
      // now let's check if the stored value is an array
      if (!(cartArray instanceof Array))
        cartArray = [cartArray]
         // if not, create one
        
         var IsIncluded = false;
         for(var i=1; i< cartArray.length; i++) {
           if(cartArray[i].ProductId == pro.ProductId ) {
             IsIncluded = true;
             break;
           }
         }
         if(!IsIncluded) {
           cartArray.push(pro);
           total = Number(localStorage.getItem('total')) + price;
           }
    
        localStorage.setItem("product_in_cart", JSON.stringify(cartArray ));

        localStorage.setItem('total', total);
        if(!localStorage.getItem('total')){
          loaded.innerHTML = 'No selected items'
        }
        else{
        loaded.innerHTML = 'Total Price :' +' '+ localStorage.getItem('total')
        }
    }


  })

  .catch(err => document.write(err));
function bindingpages(dataArr) {

  for (element of dataArr) {
    wrapper += `
              <div class="product-holder col-md-4 my-4 px-md-4 py-md-1 " id="${element.ProductId}">
                     <div><h5 class="pro_name col-md-12 text-primary"> ${element.Name} </h5></div>
                      <div class="prod_img">
                           <img class="" src="${element.ProductPicUrl}" id-prod="${element.ProductId}">
                      </div>
                      <div class="cart_hold col-12 d-flex "> 
                          <div class="cu_code text-danger col-9">${element.CurrencyCode} ${element.Price}</div>
                         <div class="cart_logo  py-md-1 col-3 "> <button price="${element.Price}" prod="${element.ProductId}"><i class="fas fa-cart-arrow-down"></i></button></div>
                        </div>
                                
               </div>`;
  }
  return wrapper;

}

document.getElementsByClassName('cart')[0].addEventListener('click', ev => {
  window.location.href = 'cart.html'
})







