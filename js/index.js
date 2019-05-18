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

  var Slider = (function(){

    // DOM Elements
    var $content      =  $('.testimonials__content');
    var $inner        =  $('.testimonials__inner');
    var $wrapper      =  $('.testimonials__wrapper');
    var $currentWidth = null;
    
    // Resize on load/window resize
    function setLayout(){
      var $wrapperWidth = $wrapper.width();
      var $width = $wrapperWidth * $content.children().length;
      $content.width($width);
      $inner.width($wrapperWidth);
      $currentWidth = $width;

    }

    // Change quote
    function changeQuote(){
      var $this   =  $(this);
      var $choice =  Number($(this).attr('data-number'));
      var $length =  Math.round($currentWidth);
      var $val    =  $length / 3 * $choice + 'px';

      $controls.not($this).removeClass('active');
      $this.addClass('active');

      $content.css({
        "transform": "translateX(-" + $val + ")"
      });
    }

    // Attack function changeQuote on buttons
    function init($el){
      $el.on('click', changeQuote);
    }
   

    return{
      setLayout: setLayout,
      changeQuote: init
    }

  })();


  var $controls =  $('.testimonials__button');

  // Set the correct widths on page load
  Slider.setLayout();

  // Set the correct widths when window resizes
  $(window).resize(Slider.setLayout);

  // Change the quote when clicking the buttons
  Slider.changeQuote($controls);

});