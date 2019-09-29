$(document).ready(function() {
  $("form#food").submit(function(event) {
    event.preventDefault();

    // let bloodySundae;
    // if ($("#bSun").is(":checked")) bloodySundae = true;



    $("input:checkbox[name=foods]:checked").each(function() {

      var receipt = $(this).val();
      console.log("data is", receipt);

      // for (var i=0; i < receipt; i++)
      ("#output").append(receipt + "<br>");

    });




  });
});
