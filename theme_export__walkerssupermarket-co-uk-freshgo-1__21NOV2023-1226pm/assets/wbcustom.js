$(document).ready(function() {

    // Tab Append
    $('.appendtabfea').appendTo('#tab-fea-0');
    $('.appendtablatest').appendTo('#tab-latest-0');
    $('.appendtabbest').appendTo('#tab-best-0');
  
 

    // Product Category 1
    $(".ptabbr1").show();
    $('.ptabbr1 a.nav-link').click(function () {
        $('.ptabbr1 a.nav-link').addClass('active');
        $('.ptabbr1 a.nav-link').removeClass('active');
    });


    // Countdown Timer
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        Date.prototype.yyyymmdd = function() {
            var yyyy = this.getFullYear().toString();
            var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
            var dd  = this.getDate().toString();
            return yyyy + "/" + (mm[1]?mm:"0"+mm[0]) + "/" + (dd[1]?dd:"0"+dd[0]); // padding
        };
        var date = new Date();
        if (finalDate > date.yyyymmdd()){
            $(this).parents('.timer_outer').css('display','block');
        }else{
            $(this).parents('.timer_outer').css('display','none');  
        }
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<div><span>%D</span></div><div><span>%H</span></div><div><span>%M</span></div><div><span>%S</span></div>'));
        });
    });


    // Scroll To top
    $("#scroll").addClass("scrollhide");
        $(window).scroll(function () {
        if ($(this).scrollTop() === 0) {
            $("#scroll").addClass("scrollhide")
        } else {
            $("#scroll").removeClass("scrollhide")
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
  
  	//Menu Overlay
    if ($(window).width() >= 992) {
        $('#megamenu li.wbmenul_1.wbmenusub').hover(function() {
            $('#MainContent').addClass('menuoverlay');
            
        }, function() {
            $('#MainContent').removeClass('menuoverlay');
            
        });
    };


    // Mobile Menu Toggle
    if ($(window).width() <= 991) {
        $('.wbmegamainhd').on('click', function() {
            var targetMenu = '#' + $(this).data('submenu');
            $(targetMenu).slideToggle(300);
            $(this).toggleClass('active');
            return false;
        });
        $('.hwcur localization-form').appendTo('.customer_account ul');
        $('.snavb').prependTo('.headlogo');
    };


    // Collection Grid/List View
    $(document).on('click', '.wblistgridbtn', function(e) {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).hasClass('listv')) {
            $('#product-grid').addClass('product-list').removeClass('product-grid');
        } else if ($(this).hasClass('gridv')) {
            $('#product-grid').addClass('product-grid').removeClass('product-list');
        }
    });


    // Popup Product
    $('.wbpopup-popducts .popinner').hide();
    var i = 0;
    setIntervalFun();
    var totalTimer = parseInt(3000) + parseInt(2000);
    setInterval( setIntervalFun, totalTimer);
    function setIntervalFun()
    {
        $('.wbpopup-popducts .popinner').eq(i).fadeIn(400);
        setTimeout(function(){
            $('.wbpopup-popducts .popinner').eq(i).fadeOut(400);
            i++;
            if ($('.wbpopup-popducts .popinner').length <= i) {
                i = 0;
            }
        },parseInt(7000));
    }
    $(document).on('click', '.wbclosepopup', function(){
        $('.wbpopup-popducts').fadeOut(400).remove();
    });


    // Box Layout
    $(".wbboxdemo").click(function(){
        $(".wbboxlt").attr("id","wbboxlayout");
    });
    $(".wbwidedemo").click(function(){
        $(".wbboxlt").removeAttr("id");
    }); 
    // Color Customizer
    $("body").on("click", ".wbinnerclr a", function(e){
    e.preventDefault();
    $('.wbinnerclr').find(".active").removeClass("active");
    $(this).parent().addClass("active");
    $('[wbcolorname=""]').remove();
    if(!$(this).hasClass($('html').attr(''))) $("body").append('<link rel="stylesheet" type="text/css" wbcolorname href="' + $(this).attr('href') + '">');
    });
    // Rtl Mode
    $("body").on("click", ".wbrtlmode a", function(e){ 
    e.preventDefault();
    $('.wbrtlmode').find(".active").removeClass("active");
    $(this).parent().addClass("active");
    $('[wbrtl=""]').remove();
    if(!$(this).hasClass($('html').attr(''))) $("body").append('<link rel="stylesheet" type="text/css" wbrtl href="' + $(this).attr('href') + '">');
    });
    // Color Open/Close 
    $('.wbopen-closeclr').click(function() {
        if ($(this).hasClass('wbclrdisable')) {
            $(this).removeClass('wbclrdisable');
            $(this).addClass('wbclrenable');
            $('.wbcolor_box').animate({right: '30px'}, 450);
            $('.wbcolor_box').css({'box-shadow': '0 10px 35px 10px rgba(0,0,0,.06)', 'background': '#fff', 'border-radius': '4px 0 4px 4px'});
            $('.wbcolor_option,.wbcolor_title').animate({'opacity': '1'}, 450);
        } else {
            $(this).removeClass('wbclrenable');
            $(this).addClass('wbclrdisable');
            $('.wbcolor_box').animate({right: '-250px'}, 450);
            $('.wbcolor_box').css({'box-shadow': 'none', 'background': 'transparent'});
            $('.wbcolor_option,.wbcolor_title').animate({'opacity': '0'}, 450);
        }
    });


}); // Document Ready Div End


$(window).on('load',function(){
    $(".s-panel .loader").removeClass("wrloader");
});

// Menu For Mobile
function w3_open() {
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("megamenu").className = "active";
    $('body').addClass("wbbodyscroll");
}
function w3_close() {
    document.getElementById("myOverlay").style.display = "none";
    document.getElementById("megamenu").className = "";
    $('body').removeClass("wbbodyscroll");
}

