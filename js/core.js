jQuery(document).ready(function() {

   var $hero = jQuery('#hero'),
       $laser = $hero.find('.laser');
  
    function scan () 
    {
    $hero.removeClass('idle').addClass('attack');
     
     setTimeout(function() {
  $hero.removeClass('attack').addClass('idle');
     }, 3000);
    }

    

   

   setInterval(scan, 10000);
});