





const url = "http://afternoon-falls-30227.herokuapp.com/api/v1/contact_us";





const contactForm = document.getElementById("contact-form");



contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    var request = new XMLHttpRequest();

    request.open("POST", url, true);

    request.setRequestHeader("Content-Type", "application/json");

  

    request.onreadystatechange = function() {

      if (request.readyState == XMLHttpRequest.DONE) {

        // request end.

        if (request.status == 200) {

          // success START

          console.log(request.response);

          // success END

        } else {

          // error START

          console.log("error");

          // error END

        }

      }

    };

  

    var data = {

      name: document.getElementById("name").value,

      email: document.getElementById("email").value,

      subject: document.getElementById("subject").value,

      message: document.getElementById("message").value

    };

    request.send(JSON.stringify(data));

  }); 
