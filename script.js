var sound;

window.onload = function(){
sound = new Audio("ding.mp3");

  $("#ding").click(function() {
      sound.play();
  });


}
