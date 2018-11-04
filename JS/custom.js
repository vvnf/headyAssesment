window.onscroll = function() { scrollFunction() };

var header = document.getElementById("header");
var below_banner = document.getElementById('bedroom');
//var banner_height = below_banner.offsetTop;
//var arrow = document.getElementsByClassName("up_arrow");
function scrollFunction() {
    // if (window.pageYOffset >= 128) {
    //   header.classList.add("sticky");
    // } else {
    //   header.classList.remove("sticky");
    // }
    // if (window.pageYOffset >= (banner_height - 100)) {
    //   arrow[0].style.display = "unset";
    // }
    //  else {
    //   arrow[0].style.display = "none";
    // }
}

// Smooth Scroll on menu click 
$(document).ready(function() {
    $('#fixedMenu ul li a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        if ($target.offset().top != null) {
            $('html, body').animate({
                'scrollTop': $target.offset().top - 150
            }, 1000, 'swing');
        }
    });

    // $('.up_arrow a[href^="#"]').on('click', function (e) {
    //   e.preventDefault();
    //   var target = this.hash;
    //   var $target = $(target);

    //   $('html, body').animate({
    //     'scrollTop': $target.offset().top
    //   }, 1000, 'swing');
    // });
    localStorage.clickcount = 0;
    $('.contentCart .contentCounter .displayCounter').text(localStorage.clickcount);
    $('.contentCart .contentCounter button.plus').on('click',function () {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
      $('.contentCounter .displayCounter').text(localStorage.clickcount);
    });
    
    
      $('.contentCart .contentCounter button.minus').on('click',function () {
        if(localStorage.clickcount > 0){
          localStorage.clickcount = Number(localStorage.clickcount)-1;
          $('.contentCart .contentCounter .displayCounter').text(localStorage.clickcount);
          }

    });
    

});
//END

// To make the class active on scroll
var sections = {},
    _height = $(window).height(),
    i = 0;

$('section').each(function() {
    sections[this.id] = $(this).offset().top;
});
$(document).scroll(function() {
    var pos = $(document).scrollTop() - ($(window).height() / 4);

    for (var i in sections) {

        if (sections[i] > pos && sections[i] < pos + _height) {
            // console.log('pos:'+pos);
            // console.log('section:'+sections[i]);
            // console.log('height:'+_height);
            $('#fixedMenu ul li a').parent().removeClass('active');
            $('#fixedMenu a[href$="#' + i + '"]').parent().addClass('active');
        }
    }
});
//END


// $(document).ready(function(){
//       var i,j;
// var length = 3;
// // var row_length = 3;
// for (i = 0; i < length; i++) {
//   document.getElementById('inner_gallery').innerHTML += '<div class = "row"></div>';
//     for(j = 0; j < length ; j++){
//       document.getElementById("inner_gallery").getElementsByClassName("row")[i].innerHTML += '<div class = "col-sm-4"><a class = "gal-link" href = "images/portfolio/image'+i+j+'"><img src = "images/portfolio/image'+i+j+'"/><div class="middle"><i class="fa fa-search" aria-hidden="true"></i></div></a></div>';
//     }
// }
// });