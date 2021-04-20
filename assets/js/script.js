$(function () {


  $("a").click(function(event){
     if (this.hash !== "") {
         event.preventDefault();

         var gato = this.hash;

         $("html, body").animate({
             scrollTop: $(gato).offset().top
         }, 800, function(){
             window.location.hash = gato;
         });
     }
 });




$('[data-toggle="tooltip"]').tooltip()

$("#enviocorreo").click(function(){
 alert('El correo fue enviado correctamente')
});



$("h4").dblclick(function(){
$(this).hide('click');
});
$("h4").click(function(){
$(this).css({
"color": "red",

});
});

$("#textouno").click(function(){
  $("#textodos").fadeToggle("fast");
});

$("#textotres").click(function(){
  $("#textocuatro").fadeToggle("fast");
});

$("#textocinco").click(function(){
  $("#textoseis").fadeToggle("fast");
});




})
