(function($){
  console.log("execute my custom script");
  $(".main-container").prepend($("<div>").addClass("alert alert-info").attr("role", "alert").text("execute my custom script"));
})(jQuery);
