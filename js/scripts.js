$(document).ready(function() {
  $("form#food").submit(function(event) {
    event.preventDefault();

    var receipt = $("<input>").val();
    console.log("data is", receipt);
    // let bloodySundae;
    // if ($("#bSun").is(":checked")) bloodySundae = true;


      const desserts = new Array();
      desserts["bSun"]=4;
      desserts["yIce"]=2;
      desserts["cake"]=5;
      desserts["leTi"]=3;
      desserts["NeCo"]=3;
      // desserts["[value]"]=(number);
      // desserts["[value]"]=(number);
      // desserts["[value]"]=(number);

      function getDessertPrice() {
        let dessertPrice = 0;
        let myForm = document.forms["#food"];
        let selDessert = myForm.elements["food"];

        for (var i=0; i < receipt.length; i++)

        {
          if(dessertPrice[i].checked)

          let mealTotal = aPrice() + brPrice() + lunPrice() + bevPrice() + dinPrice() + spePrice() + desPrice();
          $("receipt") = "Your Total Is (*#*)" + mealTotal;


        }
      }





      $("input:checkbox[name=foods]:checked").each(function() {
      $("#output").append(receipt + "<br>");
    });


    });




  });
