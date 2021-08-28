$(function() {


    /* function to open language and currency tool tip */
    function open_lan_curr_tooltip() {
        const open_button = $(".nav-item__country-icon");
        const overlay = $("#language-and-currency__overlay");


        // using Jquery
        let open_sign = $("#language-and-currency__tooltip-opener");

        //using js dom 

        const open_sign2 = document.querySelector("#language-and-currency__tooltip-opener");

        open_button.click(function() {
            overlay.toggleClass("appear");
            
        });

        overlay.click(function() {
            console.log("ok");
            overlay.removeClass("appear");
            open_sign.prop("checked", false);
            // Sử dụng dom thì
            // open_sign2.checked = false
            
        })
    }

    function open_and_close_navbar_md() {
        let open_btn = $(".navbar-toggle__btn");

        let close_btn = $(".close-menu-toggle ");

        let over_lay = $(".navbar__menu-overlay");

        let navbar_menu = $(".navbar__menu-toggle--md");


        open_btn.click(function() {
            navbar_menu.css(
                "transform","translateX(0)"
            );

            over_lay.css(
                "display","block"
            );
        });


        // For close
        close_btn.click(function() {
            navbar_menu.css(
                "transform","translateX(-100%)"
            );

            over_lay.css(
                "display", "none"
            );
        });

        over_lay.click(function() {
            navbar_menu.css(
                "transform","translateX(-100%)"
            );

            over_lay.css(
                "display", "none"
            );
        })


    }

    
    /*            JUMBOTRON SLIDE          */

    function Jumbotron_slide_show() {
        let auto_slideIndex = -1;
        chose_jumbotron_slides();
        auto_jumbotron_slides();

        function auto_jumbotron_slides() {
        
            const slides = $(".jumbotron__slide");
            const dots = $(".dots");
            
            const dots_arr = Array.prototype.slice.call(dots);
    
            // we make slide auto by slideIndex run infitive
            // from 0 - slides.length again and again
            if(auto_slideIndex >= slides.length - 1 ) {
                auto_slideIndex = -1;
            }
    
            slides.removeClass("slide--active");
            dots.removeClass("dots--active");
            auto_slideIndex ++;
    
    
            $(slides[auto_slideIndex]).addClass("slide--active");
            $(dots[auto_slideIndex]).addClass("dots--active");
            setTimeout(auto_jumbotron_slides, 4000);
        }



        function chose_jumbotron_slides() {

            const slides = $(".jumbotron__slide");
            const dots = $(".dots");
            
            const dots_arr = Array.prototype.slice.call(dots);
            
    
    
            // Add avtive when click dot
            dots.click(function() {
                 //index of chosen slide = index of chosen dots
                var currentSlideIndex = dots_arr.indexOf(this);
    
    
                dots.removeClass("dots--active");
                slides.removeClass("slide--active");
    
                
                $(slides[currentSlideIndex]).addClass("slide--active");
                $(this).addClass("dots--active");
            
            })
        }
    }

      

    










    
    
    




    open_lan_curr_tooltip();
    open_and_close_navbar_md();

    // chose_jumbotron_slides();
    // auto_jumbotron_slides();
    Jumbotron_slide_show();

})