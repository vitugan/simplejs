$(document).ready(function() {

    /* Init Slick slider */
    $('.promo-slider').slick({
      centerMode: true,        
      centerPadding: '0px',
      prevArrow: '.control-left',
      nextArrow: '.control-right',
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {              
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1
          }
        }
      ]
    });     
     
    /**
     * Init category tabs 
     */    
    $( "#category-tablist" ).tabs({
      active: 0,
      create: function(e, ui) {                
                initSlider(ui.panel.selector);
              },
      activate: function(e, ui){                
                  var selector = ui.oldPanel.selector;
                  if(!$(ui.newPanel.selector).hasClass('slick-initialized')){          
                    initSlider(ui.newPanel.selector);        
                  } 
                }      
    });

    /* Init Slick slider tile-list */
    $('.tile-list').slick({
      centerMode: true,        
      centerPadding: '0px',
      prevArrow: '<button class="control-left slick-arrow"><img src="assets/images/arrow-left.svg" alt=""></button>',
      nextArrow: '<button class="control-right slick-arrow"><img src="assets/images/arrow-right.svg" alt=""></button>',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1126,
          settings: {              
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 2
        }
        },        
        {
          breakpoint: 800,
          settings: {              
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 565,
          centerMode: true,
          centerPadding: '10px',          
          settings: {           
            slidesToShow: 1
          }
        }        
      ]
    });       

    /* Initialization function for slick slider. Fired on tab activation  */
    function initSlider($slider){
      $($slider).slick({
        slidesToShow: 5,
        initialSlide: 0,
        
        prevArrow: '<button class="control-left slick-arrow"><img src="assets/images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="control-right slick-arrow"><img src="assets/images/arrow-right.svg" alt=""></button>',
        responsive: [
          {
            breakpoint: 1125,
            centerMode: true,        
            centerPadding: '5%',                
            settings: {                            
              slidesToShow: 4
            }
          },          
          {
            breakpoint: 800,
            centerMode: true,        
            centerPadding: '5%',                
            settings: {                            
              slidesToShow: 3
            }
          },
          {
            breakpoint: 565,
            centerMode: true,        
            centerPadding: '5%',                 
            settings: {                            
              slidesToShow: 1
            }
          }
        ]
      }); 
    }

    /* Toggle footer menu on mobile devices  */
    $(document).on('click', '.menu-toggle', function(e){
      e.preventDefault();
      $(this).toggleClass('hide').closest('h5').next('ul').toggle("slow");
    });

    /* Show shopping cart on click */
    $(document).on('click', '.minicart a', function(e){
      e.preventDefault();      
      $('.shopping-cart').toggle();
      $('body').toggleClass('shopping-cart-active');
    });

    // $(document).on('click', 'body', function(e){
    //   if($('body').hasClass('shopping-cart-active')){
    //     $('.shopping-cart').toggle();
    //   }
    // });

    /* Show languages list */
    $(document).on('click', '.langmenu a', function(e){
      e.preventDefault();      
      $('.lang-list').toggle();
    });

    /* Change active language */
    $(document).on('click', '.lang-list a', function(e){
      e.preventDefault();
      e.stopPropagation();

      newContent = $(this).html();      
      oldContent = $('.langmenu > a').html();            
      $(this).parents('li').remove();
      $('.langmenu > a').html(newContent);
      $('.lang-list').append('<li><a href="#">'+oldContent+'</a></li>')

    });
    
    /* Initialize slick slider for options itmes. Fired on tablet and mobile devices */
    $('.options .row').slick({
      centerMode: true,  
      centerPadding: '0px',
      arrows: false,
      slidesToShow: 3,
      responsive: [           
        {
          breakpoint: 800,
          settings: {              
            autoplay: true,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 565,          
          centerMode: true,
          centerPadding: '10px',          
          settings: {     
            autoplay: true,      
            slidesToShow: 1
          }
        }        
      ]
    });     

    /* Show contact in header. Depend from current time */
    (function(){
      let current_time = new Date().getHours();
      // current_time = 10;
      if (current_time >= 9 && current_time <= 18 ){
        let el = document.getElementsByClassName('show-phone');                
        if (el[0].classList.contains('hide')) {
          el[0].classList.remove('hide');
        }
      } else {
        let el = document.getElementsByClassName('show-mail');              
        if (el[0].classList.contains('hide')) {
          el[0].classList.remove('hide');
        }
      }            
    })();
});



