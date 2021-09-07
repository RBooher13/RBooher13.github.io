$(document).ready(function(){
  $("#Askbutton").click(function(){
$.ajax({
  url:"https://dog.ceo/api/breeds/image/random",
  datatype:"json",
  success: function(results){
  console.log(results["message"]);
  $("#photo").attr("src",results["message"]);
},
error: function(xhr,status,error){
  console.log(error);
}
});
$.ajax({
  url:"https://api.quotable.io/random",
  datatype:"json",
  success: function(results){
    $(".advice").text(results["content"]+".");
},
error: function(xhr,status,error){
  console.log(error);
}
});
});
$("#catbutton").click(function(){
  $("#photo").attr("src","https://www.litter-robot.com/blog/wp-content/uploads/2018/07/american-shorthair-494x510.jpg")
$(".advice").text("Go Away.");
});

});
