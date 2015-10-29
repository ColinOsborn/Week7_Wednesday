$("docuement").ready(function() {

  var message = $('<span class=\"2016\"> 2016 Projection</span>');

  $('.badge-info').hover(function() {
      $(this).css('background-color', '#b20000');
  });

$(".panel:odd").css("background-color", "#cccccc");

$(".progress-bar-success").mouseenter(function() {
  $(this).append(message);
}).mouseleave(function() {
  $(".2016").remove();
});

$(".table-striped tr:nth-child(3)").nextAll().remove();

$(".btn-primary").click(function() {
  $(this).find(".glyphicon").hide();
  $(this).css("color", "grey");
});

$(".btn-primary, .col-sm3").dblclick(function() {
  $(this).remove();
});

$(".close").click(function() {
  alert("YOU CAN NEVER GET THIS BACK AHOLE!!!!");
  alert("FINE... FUCKING DELETE ME")
  $(".alert-info").remove();
});

$()

});
