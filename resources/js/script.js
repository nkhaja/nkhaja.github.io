$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    
    /* Scroll on buttons */
    /*$('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });*/
    
    /*$('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });*/
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });

    $('.js--scroll-projects').click(function () {
       $('html, body').animate({scrollTop: $('.js--projects').offset().top}, 1000); 
    });
    
    $('.js--scroll-contact').click(function () {
       $('html, body').animate({scrollTop: $('.js--contact').offset().top}, 1000); 
    });
    
    $('.js--scroll-about').click(function () {
       $('html, body').animate({scrollTop: $('.js--about').offset().top}, 1000); 
    });
    
    
    
    
    
    
    
    
    /* Navigation scroll */

    /*$(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    }); */
    
    
    /* show text on hover */
    
  $('.hover1').mouseover(function() {
        $('.text1').css("visibility","visible");
    });

    $('.hover1').mouseout(function() {
        $('.text1').css("visibility","hidden");
}); 
    
  $('.hover2').mouseover(function() {
        $('.text2').css("visibility","visible");
    });

    $('.hover2').mouseout(function() {
        $('.text2').css("visibility","hidden");
}); 

  $('.hover3').mouseover(function() {
        $('.text3').css("visibility","visible");
    });

    $('.hover3').mouseout(function() {
        $('.text3').css("visibility","hidden");
}); 

  $('.hover4').mouseover(function() {
        $('.text4').css("visibility","visible");
    });

    $('.hover4').mouseout(function() {
        $('.text4').css("visibility","hidden");
}); 

  $('.hover5').mouseover(function() {
        $('.text5').css("visibility","visible");
    });

    $('.hover5').mouseout(function() {
        $('.text5').css("visibility","hidden");
}); 

  
$('.hover6').mouseover(function() {
        $('.text6').css("visibility","visible");
    });

    $('.hover6').mouseout(function() {
        $('.text6').css("visibility","hidden");
}); 

  $('.hover7').mouseover(function() {
        $('.text7').css("visibility","visible");
    });

    $('.hover7').mouseout(function() {
        $('.text7').css("visibility","hidden");
}); 

  $('.hover8').mouseover(function() {
        $('.text8').css("visibility","visible");
    });

    $('.hover8').mouseout(function() {
        $('.text8').css("visibility","hidden");
}); 
    
    
    /* Animations on scroll */
/*    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    }); */
    
    
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });
});