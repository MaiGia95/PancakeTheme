$(function(){

  time = setInterval(function(){
    var i = ($('.carousel--button ul li.active').index()+1);
    $('.carousel--button ul li').removeClass('active');
    if (i == $('.carousel--button ul li').length) { i = 0 ;}
    $(`.carousel--button ul li:nth-child(${i+1})`).addClass('active');

    var after = $('.show').next();
    if(after.length==0)
    {

      $('.show').addClass('move-left').one('webkitAnimationEnd', function(event) {
      $(this).removeClass('move-left');
      $(this).removeClass('show');
      });

      $('.carousel--slide--oneslide:first-child').addClass('move-from-right').one('webkitAnimationEnd', function(event) {
      $(this).removeClass('move-from-right');
      $(this).addClass('show');
      });
    }
    else
    {
      $('.show').addClass('move-left').one('webkitAnimationEnd', function(event) {
      $(this).removeClass('move-left');
      $(this).removeClass('show');
      });

      after.addClass('move-from-right').one('webkitAnimationEnd', function(event) {
        $(this).removeClass('move-from-right');
        $(this).addClass('show');
      });
    }

  },3000)



  //slide
  $('.carousel--button--next' ).click(function(event) {

    var i = ($('.carousel--button ul li.active').index()+1);
    $('.carousel--button ul li').removeClass('active');
    if (i == $('.carousel--button ul li').length) { i = 0 ;}
    $(`.carousel--button ul li:nth-child(${i+1})`).addClass('active');

    var after = $('.show').next();
    if(after.length==0)
    {

      $('.show').addClass('move-left').one('webkitAnimationEnd', function(event) {
      $(this).removeClass('move-left');
      $(this).removeClass('show');
      });

      $('.carousel--slide--oneslide:first-child').addClass('move-from-right').one('webkitAnimationEnd', function(event) {
      $(this).removeClass('move-from-right');
      $(this).addClass('show');
      });
    }
    else
    {
      $('.show').addClass('move-left').one('webkitAnimationEnd', function(event) {
      $(this).removeClass('move-left');
      $(this).removeClass('show');
      });

      after.addClass('move-from-right').one('webkitAnimationEnd', function(event) {
        $(this).removeClass('move-from-right');
        $(this).addClass('show');
      });
    }

  });


    $('.carousel--button--pre' ).click(function(event) {

      var i = ($('.carousel--button ul li.active').index()+1);
      $('.carousel--button ul li').removeClass('active');
      if (i == 1) { i = $('.carousel--button ul li').length+1 ; }
      $(`.carousel--button ul li:nth-child(${i-1})`).addClass('active');

      var before = $('.show').prev();
      if(before.length==1)

      {

        $('.show').addClass('move-right').one('webkitAnimationEnd', function(event) {
        $(this).removeClass('move-right');
        $(this).removeClass('show');
        });

        before.addClass('move-from-left').one('webkitAnimationEnd', function(event) {
        $(this).removeClass('move-from-left');
        $(this).addClass('show');
        });

      }
      else
      {
        $('.show').addClass('move-right').one('webkitAnimationEnd', function(event) {
        $(this).removeClass('move-right');
        $(this).removeClass('show');
        });

        $('.carousel--slide--oneslide:last-child').addClass('move-from-left').one('webkitAnimationEnd', function(event) {
        $(this).removeClass('move-from-left');
        $(this).addClass('show');
        });
      }

    });
// change slide dots button
    $('.carousel--button ul li').click(function(event) {
      $('.carousel--button ul li').removeClass('active');
      $(this).addClass('active');
      var i = ($(this).index()+1);

      $('.show').addClass('move-right').one('webkitAnimationEnd', function(event) {
      $(this).removeClass('move-right');
      $(this).removeClass('show');
      });

      $(`.carousel--slide--oneslide:nth-child(${i})`).addClass('move-from-left').one('webkitAnimationEnd', function(event) {
      $(this).removeClass('move-from-left');
      $(this).addClass('show');
      });

    });
//end slide



// owl carousel on index page
$(function(){
  var owl = $('.portfolio-list');
    owl.owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        responsiveClass:true,
        navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        nav:false,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:4,
                    nav:true,
                }
            }
    });

});
// owl carousel of bestseller-list on index page
$(function(){
  var owl1 = $('.bestseller-list');
    owl1.owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        responsiveClass:true,
        navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        nav:false,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:4,
                    nav:true,
                }
            }
    });

});
// owl carousel logo
$(function(){
  var owl2 = $('.logo-list');
    owl2.owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        responsiveClass:true,
        nav:false,
            responsive:{
                0:{
                    items:2,
                },
                600:{
                    items:3,
                },
                700:{
                    items:5,
                },
                1000:{
                    items:5,
                }
            }
    });

});

// owl carousel product-image on product-detail page


// coupon click on cart page
$('.cart .coupon-form--button').click(function(event) {
    $(this).hide();
    $('.cart .coupon-form--input').addClass('show')
    return false;
});

$('.cart .coupon-form--input i').click(function(event) {
    $('.cart .coupon-form--input').removeClass('show')
    $('.cart .coupon-form--button').show();
});

// tabs-button click on product-detail page

$('.tabs-button li').click(function(event) {
  /* Act on the event */
  $('.tabs-button li').removeClass('active')
  $(this).addClass('active')
  return false;
});

let tabList = $('.tabs-button li')

if (tabList.length > 0) {
  for (let i = 1; i <= tabList.length; i++) {
   tabList[i-1].addEventListener("click", function() {
      $(`.content`).removeClass('active')
      $(`.content:nth-child(${i})`).addClass('active')
    })
  }
}
$('.summary-ratting--reviews a').click(function(event) {
  $('.tabs-button li').removeClass('active')
  $('.tabs-button li:nth-child(3)').addClass('active')
  $(`.content`).removeClass('active')
  $('.content:nth-child(3)').addClass('active')
  $('html,body').stop().animate({scrollTop: $('.tabs-button').position().top },600)



  });
// background tabs Additional-Information on product-detail page
$('.tabs-additional-information tr:nth-child(2n+2)').css('background-color', '#F1F1F1');

// minus plus quantity on product-detail page
$('.add').click(function () {
    $(this).prev().val(+$(this).prev().val() + 1);
    return false;
});
$('.sub').click(function () {
    if ($(this).next().val() > 1) {
      $(this).next().val(+$(this).next().val() - 1);
    }
    return false;
});

// carousel img on product-detail page

 $('.img-big a:first-child').addClass('active');
  var imgList= $('.img-small a').length;
  for(let i=1; i<=imgList; i++)
  {

    $(`.img-small a:nth-child(${i})`).click(function(event) {
      $(`.img-big a`).removeClass('active')
      $(`.img-big a:nth-child(${i})`).addClass('active')
       return false;
      });
  }


















});