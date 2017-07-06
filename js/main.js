$(document).ready(function() {
	$(".sub-a").click(function() {
    $(".submenu").slideUp("fast") /*За счет этой строчки кода, предыдущее меню закрывается при клике на другое меню */
		$(this).find("~ .submenu").stop().slideToggle("fast");
	});
  $(".sub-a2").click(function() {
    $(".submenu").slideUp("fast") /*За счет этой строчки кода, предыдущее меню закрывается при клике на другое меню */
    $(this).find("~ .submenu").stop().slideToggle("fast");
  });
  $('#hamburger').click(function () {
    $('#saydbar').toggleClass('visible');
});
  document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });
  $(document).click( function(event){
      if( $(event.target).closest(".sub-a,.sub-a2").length ) /*За счет этого куска кода cкрыть элемент при клике за его пределами*/
        return;
      $(".submenu").fadeOut("slow");
      event.stopPropagation();
    });
});


  // if( $(event.target).closest(".submenu").length ) 
  // return;
  // jQuery(".submenu").fadeOut("slow");
  // event.stopPropagation();

  // $('.sub-a').on('click', function(e) {
  //   e.preventDefault();
  //   $this = $(this);
  //   $('.sub-a').closest('li').removeClass('active');
  //   $this.closest('li').addClass('active');
  // })


// $(".nav li").click(function () {
//  $(this).children("ul").stop().delay(200).animate({height: "toggle", opacity: "toggle"}, 200);
// }); /*тоже работает но все равно выполняет одно действие не закрывает предыдущии меню*/

// ---------------------------------------------------------------


// $(function() {
//     $('#toggle-link').click(function(event) {
//         $('#message').toggle();
//     });
//     $(document).click(function (event) {
//         if ($(event.target).closest('#message').length == 0 && $(event.target).attr('id') != 'toggle-link') {
//             $('#message').hide();
//         }
//     });
// });




// голос против
// accept
  

// $(document).ready(function() {
//   $(".sub-a").click(function() {
//     $(".submenu").slideUp("slow")
//     $(this).find("~ .submenu").stop().slideToggle("slow");
//   });
// })

// $(document).ready(function () {
 
//     function hideallDropdowns() {
//         $(".dropped .sub-a").hide();
//         $(".dropped").removeClass('dropped');
//         $(".dropped .sub-a .~ .submenu").unbind("click");
//     }
 
//     function showDropdown(el) {
//         var el_li = $(el).parent().addClass('dropped');
//         el_li
//             .find('~ .submenu')
//             .click(function () {
//                 hideallDropdowns();
//             })
//             .html($(el).html());
 
//         el_li.find('.sub-a').show();
//     }
 
//     $("nav__item").click(function(){
//         showDropdown(this);
//     });
 
//     $(document).mouseup(function () {
//         hideallDropdowns();
//     });
// });










// $(document).ready(function() {
//   $(".nav__item").dropdown();
//   $(".sub-a").click(function() {
//     $("~ .submenu").dropdown('toggle');
//     return false;
//   });				
//   $(".sub-a").click(function(){
//       $("~ .submenu").dropdown('hide');
//   });
// });







  // Dropdown.prototype.toggle = function (e) {
  //   var $this = $(this)

  //   if ($this.is('.disabled, :disabled')) return

  //   var $parent  = getParent($this)
  //   var isActive = $parent.hasClass('open')

  //   clearMenus()

  //   if (!isActive) {
  //     if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
  //       // if mobile we use a backdrop because click events don't delegate
  //       $(document.createElement('div'))
  //         .addClass('dropdown-backdrop')
  //         .insertAfter($(this))
  //         .on('click', clearMenus)
  //     }

  //     var relatedTarget = { relatedTarget: this }
  //     $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

  //     if (e.isDefaultPrevented()) return

  //     $this
  //       .trigger('focus')
  //       .attr('aria-expanded', 'true')

  //     $parent
  //       .toggleClass('open')
  //       .trigger($.Event('shown.bs.dropdown', relatedTarget))
  //   }

  //   return false
  // }

  // Dropdown.prototype.keydown = function (e) {
  //   if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

  //   var $this = $(this)

  //   e.preventDefault()
  //   e.stopPropagation()

  //   if ($this.is('.disabled, :disabled')) return

  //   var $parent  = getParent($this)
  //   var isActive = $parent.hasClass('open')

  //   if (!isActive && e.which != 27 || isActive && e.which == 27) {
  //     if (e.which == 27) $parent.find(toggle).trigger('focus')
  //     return $this.trigger('click')
  //   }

  //   var desc = ' li:not(.disabled):visible a'
  //   var $items = $parent.find('.dropdown-menu' + desc)

  //   if (!$items.length) return

  //   var index = $items.index(e.target)

  //   if (e.which == 38 && index > 0)                 index--         // up
  //   if (e.which == 40 && index < $items.length - 1) index++         // down
  //   if (!~index)                                    index = 0

  //   $items.eq(index).trigger('focus')
  // }










// $(document).ready(function() {
//  $('.sub-a').click(function () {
//   $(' this > .submenu').toggle('visible');
//  });
// });





// $(document).ready(function() {
//  $('.sub-a').click(function () {
//   $('.submenu').toggle('visible');
//  });
// });




// $(document).ready(function() {

// $(function() {
//   nav();
// })




// function nav() {
//   $('.sub-a').on('click', function(e) {
//     e.preventDefault();
//     $this = $(this);
//     $('.sub-a').closest('li').removeClass('active');
//     $this.closest('li').addClass('active');
//   })
// }

// })




// $(document).ready(function(){
// 	$('.sub-a').click(function () {
//     $('.submenu').addClass('visible');
// });

// $('.sub-a').click(function () {
//     $('.submenu').removeClass('visible');
// });

// });



// $(function() {
//     $('#toggle-link').click(function(event) {
//         $('#message').toggle();
//     });
//     $(document).click(function (event) {
//         if ($(event.target).closest('#message').length == 0 && $(event.target).attr('id') != 'toggle-link') {
//             $('#message').hide();
//         }
//     });
// });







// $(document).ready(function() {
// $(function() {
//     $('.sub-a2').click(function(event) {
//         $('~ .submenu').toggle();
//     });
//     $(document).click(function (event) {
//         if ($(event.target).closest('~ .submenu').length == 0 && $(event.target).attr('id') != '.sub-a2') {
//             $('~ .submenu').hide();
//         }
//     });
// });
// });





// $(document).ready(function() {
// $('.sub-a2').click(function(e) {
//     var $message = $('~ .submenu');
 
//     if ($message.css('display') != 'block') {
//         $message.show();
 
//         var firstClick = true;
//         $(document).bind('click.myEvent', function(e) {
//             if (!firstClick && $(e.target).closest('#message').length == 0) {
//                 $message.hide();
//                 $(document).unbind('click.myEvent');
//             }
//             firstClick = false;
//         });
//     }
 
//     e.preventDefault();
// });

// });






// $('.sub-a2').on('show', function(event, dropdownData) {
//     console.log(dropdownData);
// }).on('hide', function(event, dropdownData) {
//     console.log(dropdownData);
// });



// $(document).ready(function(){
// 	$.easing.def = "easeInOutQuad";
// 	$('.sub-a').click(function(e){
// 		var dropDown = $(this).parent().next();
// 		$('~ .submenu').not(dropDown).slideUp('slow');
// 		dropDown.slideToggle('slow');
// 		e.preventDefault();
// 	})	
// });


 // $(document).ready(function(){

 //    $(".sub-a").click(function () {
 //      $(this).slideUp();
 //    });
 //    $(".sub-a").hover(function () {
 //      $(this).addClass("hilite");
 //    }, function () {
 //      $(this).removeClass("hilite");
 //    });

 //  });




// clickMenu = function(menu) {
// 	var getEls = document.getElementById(menu).getElementsByTagName("LI");
// 	var getAgn = getEls;

// 	for (var i=0; i<getEls.length; i++) {
// 			getEls[i].onclick=function() {
// 				for (var x=0; x<getAgn.length; x++) {
// 				getAgn[x].className=getAgn[x].className.replace("unclick", "");
// 				getAgn[x].className=getAgn[x].className.replace("click", "unclick");
// 				}
// 			if ((this.className.indexOf('unclick'))!=-1) {
// 				this.className=this.className.replace("unclick", "");;
// 				}
// 				else {
// 				this.className+=" click";
// 				}
// 			}
// 		}
// 	}






// $(function(){
//     $('.sub-a').on('click', function(){
//         $('.submenu').slideToggle();
//     })
// });




// $(document).ready(function() { 
//       $(".bg-nav > .nav > .nav__item > a").toggle(function() { 
//         $(".submenu").slideUp();
//         return false;
//       },  
//       function() { 
//         $(".submenu").slideDown()(); 
//         return false; 
//       }); 
//     });




// $('.bg-nav > .nav > .nav__item > a').click(function(e) {
//     var $message = $('.submenu');
 
//     if ($message.css('display') != 'block') {
//         $message.show();
 
//         var firstClick = true;
//         $(document).bind('click.myEvent', function(e) {
//             if (!firstClick && $(e.target).closest('.submenu').length == 0) {
//                 $message.hide();
//                 $(document).unbind('click.myEvent');
//             }
//             firstClick = false;
//         });
//     }
 
//     e.preventDefault();
// });




// $(function(){
//  /* выбор города */
//  $('.delivery_list').click(function(){
//  $(".cities_list").slideToggle('fast');
//  });
//  $('ul.cities_list li').click(function(){
//  var tx = $(this).html();
//  var tv = $(this).attr('alt');
//  $(".cities_list").slideUp('fast');
//  $(".delivery_list span").html(tx);
//  $(".delivery_text").html(tv);
//  });
//  })