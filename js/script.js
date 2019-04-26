$(document).ready(function() {
  $('form#list').submit(function(event){
    event.preventDefault();

    var input = $("#Grocery").val()
    var inputArray = input.split(" ")
    inputArray.sort()
    var newArray = inputArray.map(function(item) {
      return item.toUpperCase()
    });
    newArray.forEach(function(item){
      $("#output").append("<li>"+ item + "</li>");
        console.log(item)
    });
    console.log(inputArray);


  });
});
