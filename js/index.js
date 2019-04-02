$(document).ready(function(){

  // Charts

    $('.chart').easyPieChart({
      barColor: "#FFFFFF",
      trackColor: "#7b6c63",
      size: 180
    });

  
  // Projects

  $('.projects__thumbnails-item').on('mouseleave', function(){
    var $this = $(this);
    $this.blur();
  });

});