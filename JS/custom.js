window.onscroll = function() { scrollFunction() };

var fixedMenuMob = document.getElementById("fixedMenuMob");
function scrollFunction() {
    if (window.pageYOffset >= 80 && $(window).width() < 768) {
      fixedMenuMob.classList.add("sticky");
    } else {
      fixedMenuMob.classList.remove("sticky");
    }
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

    $('#fixedMenuMob ul li a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        if ($target.offset().top != null) {
            $('html, body').animate({
                'scrollTop': $target.offset().top - 50
            }, 1000, 'swing');
        }
    });

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

            $('#fixedMenuMob ul li a').parent().removeClass('active');
            $('#fixedMenuMob a[href$="#' + i + '"]').parent().addClass('active');
        }
    }
});
//END

//Related Products Slider
$(document).ready(function(){
    //var productID = $('#relatedProducts .eachProduct');
    // var products;
    function getProdData(callback){
        $.ajax({
        method: 'GET',
        url: 'JS/data.json'
        })
        .done(function(response) {
            callback(response);
        })
        .fail(function() {
          //showNotif("Network error, Please try again","error");
          console.log('in Network error');
        });
    }

    getProdData(function(response) {
        var productData = response;
        
        for(i=0;i<response.length;i++){
            let x = '<div class ="eachProduct">';
            x+= '<img src = '+productData[i].img_src+' alt = "products"/>';
            x+= '<div class = "productName">'+productData[i].heading+'</div>';
            x+= '<div class = "productprize">';
            x+= '<span class = "oldPrice strikeThru">'+productData[i].Oldprice+'</span> <span class = "newPrice">'+productData[i].newprice+'</span>';
            x+= '</div>';
            x+= '</div>';
            $('#relatedProducts').append(x);
        }
        $('#relatedProducts').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    });
  
});