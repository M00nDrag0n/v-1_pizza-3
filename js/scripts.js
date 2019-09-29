$(document).ready(function() {
  $("form#food").submit(function(event) {
    event.preventDefault();

    // let bloodySundae;
    // if ($("#bSun").is(":checked")) bloodySundae = true;






  var receipt = $("<input>").val();
  console.log("data is", receipt);

  for (var i=0; i < receipt; i++)
  ("#output").append( "<li>" + receipt + "</li>" );





  });
});
