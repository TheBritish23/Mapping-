$(document).ready(function() {
  $('form#list').submit(function(event){
    event.preventDefault();

    var input = $("#Grocery").val()
    console.log(input);

    
  });
});
