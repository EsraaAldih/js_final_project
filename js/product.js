let item = " "
let retrievedData= localStorage.getItem("product_view");
let details = JSON.parse(retrievedData);
console.log(details);
;

item += ` 
<div class="product-holder d-flex justify-content-between py-md-4" id="${details.ProductId}">
      <div id='left-side' class=" prod_img col-md-4 col-sm-12 float-left"><img src="${details.ProductPicUrl}" ></div>
      <div id="center" class="class= col-md-4 col-sm-12 text-left">
          <p  class="my-md-3 font-weight-bold text-secondary">${details.Category}</p>
          <p  class=" my-md-1 font-weight-bold text-secondary">${details.Name}</p>
          <p  class="my-md-1 font-weight-bold text-secondary">${details.Description}</p>
          </div >
         <div id="right-side" class="col-md-3 col-sm-12 border border-secondary text-left py-md-4 align-items-center"> 
          <p class="text-secondary my-md-2">${details.Status} : <span class="text-success">in stock</span></p>
          <h2 class="cu_code my-md-3">${details.CurrencyCode} ${details.Price} </h2>
          <p class="my-md-1 text-secondary">Quantity: </p>
          <div class="quantity col-md-7 border border-secondary py-md-2 px-md-3 my-md-3" >${details.Quantity}</div>
          <div class="butn col-md-10 border border-secondary py-md-2 px-md-3 bg-secondary ">
              <a href='#' class="py-md-2 px-md-3 text-light text-decoration-none"> <i class="fas fa-cart-arrow-down"></i> 
                add to cart
              </a>
              </div>
      </div>
                
</div>`;
document.querySelector(".container").innerHTML = item;