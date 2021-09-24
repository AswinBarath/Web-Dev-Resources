
$("h4").css("color", "red");

$("h4").css({
  "color": "white",
  "background-color": "grey",
  "font-family": "arial, helvetica, sans-serif",
  "text-align": "center",
  "padding": "10px",
  "line-height": "2em"
});

$("button").on("click", function(){
  $("p").addClass("beautify");
  $(this).addClass("beautify");
  $(this).on("dblclick", function(){
      $(this).addClass("blue_border");
  });
});

$("p").on("click", function(){
  $(this).css({
    "color": "white",
    "background-color": "grey",
    "font-family": "arial, helvetica, sans-serif",
    "text-align": "center",
    "padding": "10px",
    "line-height": "2em"
  })
});
