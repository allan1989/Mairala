$(document).ready(function(){

    /*
    * Description:
      * All the scripts
    * Sections:
      * $. Charts
      * $. Projects
      * $. Slider Testimonials
  */




  /* $. Charts
  \*----------------------------------------------------------------*/

    $('.chart').easyPieChart({
      barColor: "#FFFFFF",
      trackColor: "#7b6c63",
      size: 180
    });


    


  /* $. Projects
  \*----------------------------------------------------------------*/

  $('.projects__thumbnails-item').on('mouseleave', function(){
    var $this = $(this);
    $this.blur();
  });





 /* $. Slider Testimonials
  \*----------------------------------------------------------------*/

  var $wrapper  =  $('.testimonials__wrapper');
  var $content  =  $('.testimonials__content');
  var $inner    =  $('.testimonials__inner');
  var $controls =  $('.testimonials__button');

  var $innerHeight =  $inner.outerHeight(true);
  var $width       =  $content.children().width() * $content.children().length * $content.children().length;

  $wrapper.height($innerHeight + 'px');
  $content.width($width);
  $inner.width($width / 3);


  $controls.on('click', function(){

    var $this   =  $(this);
    var $choice =  Number($(this).attr('data-number'));
    var $length =  Math.round($width);
    var $val    =  $length / 3 * $choice + 'px';

    $controls.not($this).removeClass('active');
    $this.addClass('active');

    $content.css({
      "transform": "translateX(-" + $val +")"
    });

  });

});