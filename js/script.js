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

    

    
    // inputbox.val("off");
    // console.log(inputbox.val());


    open_lan_curr_tooltip();
    open_and_close_navbar_md();

})