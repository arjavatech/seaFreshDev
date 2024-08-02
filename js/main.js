(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow');
            } else {
                $('.fixed-top').removeClass('shadow');
            }
        } else {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow').css('top', -5);
            } else {
                $('.fixed-top').removeClass('shadow').css('top', 0);
            }
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });


    // vegetable carousel
    $(".fish-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });



    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });

})(jQuery);

// Read more function

function updateCardHeights() {
    let maxHeight = 0;
    $('.fish-item').each(function () {
        let thisHeight = $(this).height();
        if (thisHeight > maxHeight) {
            maxHeight = thisHeight;
        }
    });
    $('.fish-item').height(maxHeight);
}

updateCardHeights(); // Ensure all cards have the same initial height

$('.read-more').click(function () {
    let moreText = $(this).siblings('.more-content').html();
    let moreTitle = $(this).siblings('.readmore-heading').text();
    $('.render-readmore').html(moreText);
    $('.fish-title').html(moreTitle);

});

$('#contact-link').click(function () {
    var element = document.getElementById("navbarCollapse");
    element.classList.remove("show");
})
$('body').on('click', function (e) {
    var element = document.getElementById("navbarCollapse");
    element.classList.remove("show");
})


$("#signupButton").on("click", function (e) {
    e.preventDefault(); // Prevent the default form submission
    signupFunction();
});

function signupFunction() {
    let user_fname = document.getElementById('user_fname').value;
    let user_lname = document.getElementById('user_lname').value;
    let user_phone = document.getElementById('user_phone').value;
    let email_id = document.getElementById('email_id').value;
    let password = document.getElementById('password').value;

    if (user_fname != '' && user_lname != '' && user_phone != '' && email_id != '' && password != '') {
        // spanMsgDiv.style.display = "none";
        // spanMsg.style.display = "none";
        const form = document.getElementById("signup");
        const formData = new FormData(form);
        const password = formData.get("password");

        // Hash the password
        const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
        console.log(hashedPassword);

        // Replace the original password with the hashed password in the form data
        formData.set("password", hashedPassword);
        const obj = Object.fromEntries(formData);
        console.log(obj)
        // $.ajax({
        //     url: "https://jvirbzj4p1.execute-api.us-west-2.amazonaws.com/goddard_test/sign_up/add",
        //     type: "POST",
        //     contentType: "application/json",
        //     data: JSON.stringify(obj),
        //     success: function (response) {
        //         if(response.message == "Successfully signed up"){
        //             $(".success-msg").show();
        //             setTimeout(function(){ 
        //                 $(".success-msg").hide(); 
        //                 window.location.href = "login.html";
        //             }, 3000);
        //         }else{
        //             $(".error-msg").show();
        //             setTimeout(function(){ 
        //                 $(".error-msg").hide(); 
        //             }, 3000);
        //         }

        //     },
        //     error: function (xhr, status, error) {
        //         $(".error-msg").show();
        //         setTimeout(function(){ 
        //             $(".error-msg").hide(); 
        //         }, 3000);
        //     }
        // });
    } else {
        $(".error-msg-empty").show();
        setTimeout(function () {
            $(".error-msg-empty").hide();
        }, 3000);
    }
}

$("#signinButton").on("click", function (e) {
    e.preventDefault(); // Prevent the default form submission
    signinFunction();
});

function signinFunction() {
    let email_id = document.getElementById('email_id').value;
    let password = document.getElementById('password').value;

    if (email_id != '' && password != '') {
        // spanMsgDiv.style.display = "none";
        // spanMsg.style.display = "none";
        const form = document.getElementById("signin");
        const formData = new FormData(form);
        const password = formData.get("password");

        // Hash the password
        const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
        console.log(hashedPassword);

        // Replace the original password with the hashed password in the form data
        formData.set("password", hashedPassword);
        const obj = Object.fromEntries(formData);
        console.log(obj)
    } else {
        $(".error-msg-empty").show();
        setTimeout(function () {
            $(".error-msg-empty").hide();
        }, 3000);
    }
}



