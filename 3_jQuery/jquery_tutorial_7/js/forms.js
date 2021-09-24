$("form").on("submit", function(){
  var enteredWord = $("input#entered_word").val();
  alert(enteredWord);
});

$("button#loc_button").on("dblclick click", function(){
  var enteredZip = $("input#entered_zip").val();
  $("input#entered_city_state").val(enteredZip + " is for NJ");
});

$("input#entered_zip").on("focus", function(){
  $("h2#city_display").text("About to type:");
});
