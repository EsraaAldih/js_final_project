

  let item = " "
        let retrievedData= localStorage.getItem("product_view");
        let details = JSON.parse(retrievedData);
        console.log(details);
        let allDataCart =JSON.parse(localStorage.getItem("product_in_cart"));
        let price =Number(details.price)

  

        item += ` 
        <div class="product-holder d-flex justify-content-between py-md-4" id="${details.ProductId}">
              <div id='left-side' class=" prod_img col-md-4 col-sm-12 float-left"><img width="300" height="300" src="${details.ProductPicUrl}" ></div>
              <div id="center" class="class= col-md-4 col-sm-12 text-left">
                  <p  class="my-md-3 font-weight-bold text-secondary">${details.Category}</p>
                  <p  class=" my-md-1 font-weight-bold text-secondary">${details.Name}</p>
                  <p  class="my-md-1 font-weight-bold text-secondary">${details.Description}</p>
                  </div >
                 <div id="right-side" style="height:55vh" class="col-md-3 col-sm-12 border border-secondary text-left py-md-4 align-items-center"> 
                  <p class="text-secondary my-md-2">${details.Status} : <span class="text-success">in stock</span></p>
                  <h2 class="cu_code my-md-3">${details.CurrencyCode} ${details.Price} </h2>
                  <p class="my-md-1 text-secondary">Quantity: </p>
                  <div class="quantity col-md-7 border border-secondary py-md-2 px-md-3 my-md-3" >${details.Quantity}</div>
                  <div class="butn col-md-10 border border-secondary py-md-2 px-md-3 mt-4 bg-secondary ">
                      <a href='#' id="add" class="py-md-2 px-md-3 text-light text-decoration-none"> <i class="fas fa-cart-arrow-down"></i> 
                        add to cart
                      </a>
                      </div>
              </div>
                        
       </div>`;
     

       document.querySelector(".container").innerHTML = item;

        document.querySelector("#add").addEventListener('click', ev => {

          let id = details.ProductId;

          var IsIncluded = false;
          if(allDataCart){
          for (var i = 1; i < allDataCart.length; i++) {
            if (allDataCart[i].ProductId == id) {
              IsIncluded = true;
              break;
            }
          }
            if (!IsIncluded) {
            allDataCart.push(details);
            total = Number(localStorage.getItem('total')) + price;
          }

        }

       else{
      // now let's check if the stored value is an array
      if (!(allDataCart instanceof Array))
         allDataCart= [allDataCart]
          allDataCart.push(details);
           total = Number(localStorage.getItem('total')) + price;
        

      
       }
       localStorage.setItem('total', total);

       localStorage.setItem("product_in_cart", JSON.stringify(allDataCart));


        })

